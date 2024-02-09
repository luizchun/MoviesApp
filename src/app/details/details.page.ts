import { Component, Input, OnInit, WritableSignal, inject, signal } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { MovieResult } from '../services/interfaces';
import { cashOutline, calendarOutline } from 'ionicons/icons'
import { addIcons } from 'ionicons'
import { IonHeader,IonText, IonCard, IonCardHeader, IonBackButton, IonButtons, IonButton, IonCardContent, IonCardSubtitle, IonCardTitle, IonIcon, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonAvatar, IonSkeletonText, IonAlert, IonLabel, IonBadge } from '@ionic/angular/standalone';
import { CurrencyPipe, DatePipe } from '@angular/common';


@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonIcon,
    IonText,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonButton,
    IonButtons,
    IonBackButton,
    IonItem,
    IonAlert,
    IonCard,
    IonCardHeader,
    IonLabel,
    CurrencyPipe,
    DatePipe,
    IonBadge,
  ]
})
export class DetailsPage implements OnInit {
  private movieService = inject(MovieService);
  public imageBaseUrl = 'https://image.tmdb.org/t/p';
  public movie: WritableSignal<MovieResult | null> = signal(null);

  @Input()
  set id(movieId: string) {
    this.movieService.getMoviesDetaisl(movieId).subscribe(movie => {
      console.log(movie);
      this.movie.set(movie);
    });
  }

  constructor() {
    addIcons({
      cashOutline, calendarOutline
    })
  }

  ngOnInit() {
  }

}
