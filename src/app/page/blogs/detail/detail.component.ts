import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { blog } from '../blog';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  id: string | null = null;
  gameName: string | null = null;

  constructor(private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void{
    var game: blog[] = []
    game.push(new blog("Gta V", "a game where you can do anything", "a game that takes place in a city where you can do anything", new Date(), '../../../assets/gtav.jpg'));


    this.id = this.route.snapshot.paramMap.get('id');
    
  }

}
