import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss']
})
export class NosotrosComponent implements OnInit {

  constructor(private servicio:ServiceService ) { }

  ngOnInit() {
    this.servicio.peticion().subscribe((data) => {
      console.log(data);
    });
  }

}
