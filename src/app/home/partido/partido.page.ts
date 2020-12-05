import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Partido } from 'src/app/model/partido';

@Component({
  selector: 'app-partido',
  templateUrl: './partido.page.html',
  styleUrls: ['./partido.page.scss'],
})
export class PartidoPage implements OnInit {
  partido:Partido;
  constructor(private route:Router,private routeActive:ActivatedRoute) {
    this.routeActive.queryParamMap.subscribe(()=> {
      this.partido = this.route.getCurrentNavigation().extras.state.pasado;
      
    })
  }

  ngOnInit() {
  }
  
}
