import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { blog } from './blog';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent {

  constructor(private route: ActivatedRoute, private router :Router) { }
  ngOnInit(): void {
    var gtav = new blog("gtav", "a game where you can do anything", "a game that takes place in a city where you can do anything", new Date(), '../../../assets/gtav.jpg');
  }

  create(): void {
    this.router.navigate(['create'], { relativeTo: this.route });
  }

}
