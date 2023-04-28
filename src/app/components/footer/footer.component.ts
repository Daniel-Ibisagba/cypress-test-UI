import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  social:any=[
    {name:'facebook', img:'assets/icon/facebook.svg'},
    {name:'instagram', img:'assets/icon/instagram.svg'},
    {name:'tiktok', img:'assets/icon/tiktok.svg'},
    {name:'youtube', img:'assets/icon/youtube.svg'},

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
