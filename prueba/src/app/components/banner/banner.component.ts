import { Component, OnInit } from '@angular/core';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  public play = faPlay;

  constructor() { }

  ngOnInit() {
  }

}
