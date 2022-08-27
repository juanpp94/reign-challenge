import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import { NewsService } from './services/news.service';
import { NewComponent } from './components/new/new.component';
import { FavesComponent } from './components/faves/faves.component';
import { RouterModule } from '@angular/router';
import { FavNewComponent } from './components/fav-new/fav-new.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PaginationPipe } from './pipes/pagination.pipe';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    HomeComponent,
    NewComponent,
    FavesComponent,
    FavNewComponent,
    PaginationPipe,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    NoopAnimationsModule
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
