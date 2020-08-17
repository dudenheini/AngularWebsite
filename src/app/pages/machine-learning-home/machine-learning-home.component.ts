import { Component, OnInit } from '@angular/core';
import { LinkManager } from 'src/app/shared/services/linkManager.service';

@Component({
  selector: 'app-machine-learning-home',
  templateUrl: './machine-learning-home.component.html',
  styleUrls: ['./machine-learning-home.component.css']
})
export class MachineLearningHomeComponent implements OnInit {

  constructor(public links : LinkManager) { }

  Components = [
    {
      name:"MNIST Handwriting Detection",
      subDesc:"Comparing a Convolutional and a Deep Neural Network",
      imagePath:"https://archive.uslu.tech/pictures/ML/mnist.PNG",
      link:this.links.MlNavArr[0].route,
      description :
      `A CNN and DNN Model i've trained to detect handwritten numbers.<br>
      The submitted data is being sent to the Backend and gets evaluated there.<br>
      Still a bit wonky on Mobile, because you have to place each pixel individually.`,
    },
    {
      name:"MNIST Number Generator",
      subDesc:"Deep Convolutional Generative Adversarial Networks in Action",
      imagePath:"https://archive.uslu.tech/pictures/ML/mnistGAN.PNG",
      link:this.links.MlNavArr[1].route,
      description :
      `A DCGAN and a GAN model that i've written to generate lifelike handwritten Numbers<br> by learing the characteristics of the MNIST dataset.<br>
      The DCGAN is outperforming the GAN by reducing noise and sharening the image.<br>
      I added sliders to be able to manipulate the Latent Space Vector which is being fed.<br>
      With this you can genererate your own numbers!`,
    },
  ]

  ngOnInit(): void {
  }

}
