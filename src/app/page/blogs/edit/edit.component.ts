import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../blog.service';
import { DetailComponent } from '../detail/detail.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  blogForm = new FormGroup({
    //name: new FormControl(''),
    desc: new FormControl(''),
  });
  gamename: string | undefined;
  desc: string | undefined;
  id: string |null = '';


  constructor(private blogService: BlogService, private route: ActivatedRoute, private router :Router){ }

  ngOnInit(): void{
    console.log('edit component')
    this.id = this.route.snapshot.paramMap.get('id');
    let blog = this.blogService.getBlogById(this.id);
    this.gamename = blog.name;
    this.desc = blog.desc;
    console.log(this.gamename)

  }
  onClickSubmit(result: any): void {
    //console.log(result.name)
    this.router.navigate(['/blogs/'+this.id], {relativeTo: this.route})
        
  }
  
}
