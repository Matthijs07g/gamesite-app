import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { blog } from '../blog';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  id: string |null = '';
  name: string | undefined;
  desc: string | undefined;
  img: string | undefined;
  date: Date | undefined;

  constructor(private blogService: BlogService, private route: ActivatedRoute, private router :Router){ }

  ngOnInit(): void{
    console.log('detail component')
    this.id = this.route.snapshot.paramMap.get('id');
    let blog = this.blogService.getBlogById(this.id);
    this.name = blog.name;
    this.desc = blog.desc;
    this.img = blog.img;
    this.date= blog.createDate;
    
  }
  edit(): void {
    //this.router.navigate(['edit'], { relativeTo: this.route });
  }

}
