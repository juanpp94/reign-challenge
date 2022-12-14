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
import { NumberedPaginationComponent } from './components/numbered-pagination/numbered-pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    HomeComponent,
    NewComponent,
    FavesComponent,
    FavNewComponent,
    NumberedPaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
