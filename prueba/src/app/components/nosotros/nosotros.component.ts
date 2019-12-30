import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss']
})
export class NosotrosComponent implements OnInit {

  constructor(private servicio:ServiceService) { }
  img =[
    {
      img: '../../assets/img/img3.jpg'
    },
    {
      img: '../../assets/img/img2.jpg'
    },
    {
      img: '../../assets/img/img1.jpg'
    },
  ];

  img2 = [
    {
      img: '../../assets/img/foto1.PNG'
    },
    {
      img: 'https://www.analquim.com/wp-content/uploads/2017/12/fondo-blanco-300x169.jpg'
    },
    {
      img: '../../assets/img/foto2.PNG'
    },
  ];
  public play = faPlay;
  public nombre1;
  public nombre2;
  public nombre3;
  public cards;
  slides: any = [[]];
  chunk(arr: any, chunkSize:any) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }

  ngOnInit() {
    this.servicio.peticion().subscribe((data) => {
      this.cards = data;
      this.slides = this.chunk(this.cards, 3);
    });

  }

}
