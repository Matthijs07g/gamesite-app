import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { blog } from '../blog';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  constructor(private blogService: BlogService, private route: ActivatedRoute, private router :Router){ }

  ngOnInit(): void{
    console.log('create component')

  }
  onClickSubmit(result: any): void {
    console.log(result.name)
    console.log(result.desc)
    let num = this.blogService.getBlogs().length;
    let newblog = new blog(num, result.name, result.sdesc, result.desc, new Date(), result.img)
    this.blogService.addBlog(newblog);
        
  }
  
}
