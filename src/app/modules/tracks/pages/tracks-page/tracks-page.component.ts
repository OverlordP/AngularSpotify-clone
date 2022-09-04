import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit {

  tracksTrending: Array<any> = [
    {
    name:"sipa",
    des:"sapo",
    }
  ]
  tracksRandom: Array<any> = [    {
    name:"sipa",
    des:"sapo",
    }]
  listObservers$: Array<any> = []

  constructor() { }

  ngOnInit(): void {
  }

}
