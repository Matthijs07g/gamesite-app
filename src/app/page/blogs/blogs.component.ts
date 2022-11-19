import { Component, OnInit } from '@angular/core';
import { Model } from './model';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent {

  constructor() { }
  ngOnInit(): void {
    var gtav = new Model("gtav", "a game where you can do anything", "a game that takes place in a city where you can do anything", new Date(), '../../../assets/gtav.jpg');
  }

}
