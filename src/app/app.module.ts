import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AboutComponent } from './page/about/about.component';
import { HomeComponent } from './page/home/home.component';
import { BlogsComponent } from './page/blogs/blogs.component';
import { ListComponent } from './page/blogs/list/list.component';
import { DetailComponent } from './page/blogs/detail/detail.component';
import { EditComponent } from './page/blogs/edit/edit.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CreateComponent } from './page/blogs/create/create.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    HomeComponent,
    BlogsComponent,
    ListComponent,
    DetailComponent,
    EditComponent,
    FooterComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
