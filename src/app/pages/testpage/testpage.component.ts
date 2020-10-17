import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';

import * as p5 from 'p5';
import { WindowSizeManager } from 'src/app/shared/services/windowSizeManager.service';

@Component({
  selector: 'app-testpage',
  templateUrl: './testpage.component.html',
  styleUrls: ['./testpage.component.css'],
})
export class TestpageComponent implements AfterViewInit, OnDestroy {
  @ViewChild('CanvasRef2') NoiseRef: ElementRef;

  canvas: any;
  geneticSketch: any;

  mutationRate = 0.01;
  lifespan = 200;
  maxForce = 1;
  popsize = 100;
  dt = 1
  limitVel = 5


  constructor(public WSM : WindowSizeManager) {}

  ngAfterViewInit() {
    this.geneticSketch = (s) => {
      let divWidth;
      let divHeight;

      var mouseDown = false;

      var cnt = 0;
      var epoch = 0;

      var popsize = 100;
      var lifespan = 200;
      var mutationRate = 0.01;
      var maxForce = 1;

      var maxfitGlobal = 0;
      var fastestTime;
      var fastestRocketIndex = 0;
      var limitVel;

      var rx = 100;
      var ry = 200;
      var rw = 200;
      var rh = 10;

      var target;

      var population;
      var dt = 1;

      s.setup = () => {
        divWidth = this.NoiseRef.nativeElement.offsetWidth;
        divHeight = this.NoiseRef.nativeElement.offsetHeight;
        let canvas2 = s.createCanvas(divWidth, divHeight);
        canvas2.parent('geneticCanvas');
        target = s.createVector(s.width / 2, 50);

        cnt = 0
        epoch = 0
        maxfitGlobal = 0
        fastestTime = lifespan;

        popsize = this.popsize;
        lifespan = this.lifespan;
        mutationRate = this.mutationRate;
        maxForce = this.maxForce;
        dt = this.dt
        limitVel = this.limitVel

        population = new s.Population();
        rx = 100;
        rw = s.width - 200;

      };

      s.mousePressed = () => {
        mouseDown = true;
      };
      s.mouseReleased = () => {
        mouseDown = false;
      };

      s.draw = () => {
        s.background(51);
        s.ellipse(target.x, target.y, 16);
        s.fill("black")
        s.ellipse(target.x, target.y, 8);
        s.fill('white');
        s.text("Time: " + cnt, 20, 20);
        s.text("Epoch: " + epoch, 20, 30);
        s.text("Best Fitness: " + maxfitGlobal, 20, 40);
        s.text("Fastest Time: " + fastestTime, 20, 50);
        s.text("Framerate: " + s.floor(s.frameRate()), s.width - 100, 20);

        //Obstacle
        s.rect(rx, ry, rw, rh);

        cnt++;

        if (cnt >= lifespan) {
          //fastestTime = 999
          population.evaluate();
          population.selection();
          cnt = 0;
          epoch++;
        }
        population.run(true);
      };

      s.Population = function () {
        this.rockets = [];
        this.matingPool = [];
        this.popsize = popsize;

        for (let i = 0; i < this.popsize; i++) {
          this.rockets.push(new s.Rocket());
        }

        this.evaluate = () => {
          this.matingPool = [];

          //calc fitness
          var maxfit = 0;
          fastestTime = lifespan;
          for (let i = 0; i < this.popsize; i++) {
            this.rockets[i].calcFitness();
            if (this.rockets[i].fitness > maxfit) {
              maxfit = this.rockets[i].fitness;
              fastestRocketIndex = i;
            }
          }
          maxfitGlobal = maxfit;

          //Normalizing fitness
          for (let i = 0; i < this.popsize; i++) {
            this.rockets[i].fitness /= maxfit;

            if (this.rockets[i].timeToCompletion < fastestTime) {
              fastestTime = this.rockets[i].timeToCompletion;
              lifespan = s.min(fastestTime + 3, lifespan);
            }
          }
          //this.rockets[fastestRocketIndex].fitness += 0.3;

          for (let i = 0; i < this.popsize; i++) {
            //rockets with high fitness are more often in the mating pool!
            var n = this.rockets[i].fitness * 100;
            for (let j = 0; j < n; j++) {
              this.matingPool.push(this.rockets[i]);
            }
          }
        };

        this.selection = () => {
          //keep the best rocket from before
          var newRockets = [new s.Rocket(this.rockets[fastestRocketIndex].dna)];
          for (let i = 0; i < this.rockets.length-1; i++) {
            var parentADNA = s.random(this.matingPool).dna;
            var parentBDNA = s.random(this.matingPool).dna;
            var childDNA = parentADNA.crossover(parentBDNA);
            childDNA.mutation();
            newRockets.push(new s.Rocket(childDNA));
          }
          this.rockets = newRockets;
        };

        this.run = (showRockets) => {
          for (let i = 0; i < this.popsize; i++) {
            this.rockets[i].update();
            if (showRockets) {
              this.rockets[i].show();
            }
          }
        };
      };

      s.DNA = function (genes) {
        if (genes) {
          this.genes = genes;
        } else {
          this.genes = [];
          for (let i = 0; i < lifespan; i++) {
            this.genes[i] = p5.Vector.random2D();
            this.genes[i].setMag(maxForce);
          }
        }

        this.crossover = function (partner) {
          var newGenes = [];
          var mid = s.floor(s.random(this.genes.length));
          for (let i = 0; i < this.genes.length; i++) {
            if (i > mid) {
              newGenes[i] = this.genes[i];
            } else {
              newGenes[i] = partner.genes[i];
            }
          }
          return new s.DNA(newGenes);
        };

        this.mutation = () => {
          for (let i = 0; i < this.genes.length; i++) {
            if (s.random(1) < mutationRate) {
              this.genes[i] = p5.Vector.random2D();
              this.genes[i].setMag(maxForce);
            }
          }
        };
      };

      s.Rocket = function (dna) {
        this.pos = s.createVector(s.width / 2, s.height - 20);
        this.vel = s.createVector();
        this.acc = s.createVector();
        if (dna) {
          this.dna = dna;
        } else {
          this.dna = new s.DNA();
        }
        this.fitness = 0;
        this.completed = false;
        this.timeToCompletion = lifespan;
        this.crashed = false;

        this.applyForce = (force) => {
          this.acc.add(force);
        };

        this.calcFitness = () => {
          var d = s.dist(this.pos.x, this.pos.y, target.x, target.y);

          //TODO Change Fitness function

          //this.fitness = map(d,0,width,width,0)
          //this.fitness /= this.timeToCompletion

          d = s.max(d, 10);
          this.fitness = 1 / (d * this.timeToCompletion);

          if (this.crashed) {
            this.fitness /= 10;
          }

          if (this.completed) {
            this.fitness *= 10;
          }
        };

        this.update = () => {
          var d = s.dist(this.pos.x, this.pos.y, target.x, target.y);
          if (d < 10 && !this.completed) {
            this.completed = true;
            this.pos = target.copy();
            this.timeToCompletion = cnt;
          }

          if (
            this.pos.x > rx &&
            this.pos.x < rx + rw &&
            this.pos.y > ry &&
            this.pos.y < ry + rh
          ) {
            this.crashed = true;
          }
          //wall check
          if (
            this.pos.x > s.width ||
            this.pos.x < 0 ||
            this.pos.y > s.height ||
            this.pos.y < 0
          ) {
            this.crashed = true;
          }

          if (!this.completed && !this.crashed) {
            this.applyForce(this.dna.genes[cnt]);

            this.vel.add(this.acc.copy().mult(dt));
            this.pos.add(this.vel.copy().mult(dt));
            this.acc.mult(0);
            this.vel.limit(limitVel);
          }
        };

        this.show = () => {
          s.push();
          s.translate(this.pos.x, this.pos.y);
          s.rotate(this.vel.heading());
          s.fill(255, 150);
          s.ellipse(0, 0, 4);
          s.triangle(5, 0, -5, -5, -5, 5);
          s.pop();
        };
      };

      // s.windowResized = () => {
      //   divWidth = this.NoiseRef.nativeElement.offsetWidth;
      //   divHeight = this.NoiseRef.nativeElement.offsetHeight;
      //   s.resizeCanvas(divWidth, divHeight);
      // };
    };
    this.canvas = new p5(this.geneticSketch);
  }

  restartAlgo(){
    this.canvas.remove();
    this.canvas = new p5(this.geneticSketch);
  }

  ngOnDestroy() {
    this.canvas.remove();
  }
}
