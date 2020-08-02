import { Component, OnInit, OnDestroy } from '@angular/core';
import { LinkManager } from 'src/app/shared/services/linkManager.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit , OnDestroy{
  constructor(private links : LinkManager) { }

  ngOnInit(): void {
    this.links.onHomepage=true;
  }

  ngOnDestroy(){
    this.links.onHomepage=false;
  }

}
