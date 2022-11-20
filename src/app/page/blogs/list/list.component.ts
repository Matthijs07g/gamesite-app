import { Component, OnInit } from '@angular/core';
import { blog } from '../blog';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  blogs: blog[] =[]

  constructor(private blogService: BlogService){ }

  ngOnInit(): void {
      this.blogs = this.blogService.getBlogs();
  }
  delete(num : any): void{
    this.blogService.delete(num);
  }
}
