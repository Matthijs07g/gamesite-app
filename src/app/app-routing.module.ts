import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './page/about/about.component';
import { BlogsComponent } from './page/blogs/blogs.component';
import { DetailComponent } from './page/blogs/detail/detail.component';
import { EditComponent } from './page/blogs/edit/edit.component';
import { HomeComponent } from './page/home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', pathMatch: 'full', component: HomeComponent},
  { path: 'about', pathMatch: 'full', component: AboutComponent },
  { path: 'blog', pathMatch: 'full', component: BlogsComponent},
  { path: 'blogs', component:BlogsComponent, children:[
    { path: ':id', pathMatch: 'full', component: DetailComponent},
    { path: ':id/edit', pathMatch: 'full', component: EditComponent}
  ],},
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
