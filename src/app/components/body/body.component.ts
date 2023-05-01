import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  imgLib:any=[
    'assets/img/header-img.svg',
    'assets/img/img-1.svg',
    'assets/img/img-2.svg',
    'assets/img/img-3.svg',
    'assets/img/img-4.svg',
    'assets/img/img-5.svg',

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
