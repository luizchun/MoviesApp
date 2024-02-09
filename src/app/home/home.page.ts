import { Component, inject } from '@angular/core';
import { IonHeader, IonThumbnail, IonText, IonToolbar, IonCol, IonRow, IonGrid, IonSearchbar, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCard, IonTitle, IonContent, InfiniteScrollCustomEvent, IonList, IonItem, IonAvatar, IonSkeletonText, IonAlert, IonLabel, IonBadge, IonInfiniteScroll, IonInfiniteScrollContent, IonInput, SearchbarInputEventDetail } from '@ionic/angular/standalone';
import { MovieService } from '../services/movie.service';
import { catchError, finalize } from 'rxjs';
import { MovieResult } from '../services/interfaces';
import { DatePipe, SlicePipe } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports:
    [
      IonHeader,
      IonToolbar,
      IonTitle,
      IonContent,
      IonList,
      IonItem,
      IonAvatar,
      IonSkeletonText,
      IonAlert,
      IonLabel,
      DatePipe,
      IonBadge,
      RouterModule,
      IonInfiniteScroll,
      IonInfiniteScrollContent,
      IonSearchbar,
      IonCard,
      IonCardHeader,
      IonCardContent,
      IonCardSubtitle,
      IonCardTitle,
      IonGrid,
      IonRow,
      IonCol,
      SlicePipe,
      IonThumbnail,
      IonText
    ],
})
export class HomePage {
  private movieService = inject(MovieService);
  private currentPage = 1;
  public error = null;
  public isLoading = true;
  public movies: MovieResult[] = [];
  public imageBaseUrl = 'https://image.tmdb.org/t/p';
  public dummy = new Array(20);

  constructor() {
    this.loadMovies();
  }

  loadMovies(event?: InfiniteScrollCustomEvent) {
    this.error = null;

    if (!event) {
      this.isLoading = true;
    }

    this.movieService.getTopRatedMovies(this.currentPage).pipe(
      finalize(() => {
        this.isLoading = false;
        if (event) {
          event.target.complete();
        }
      }),
      catchError((error: any) => {
        console.log(error);
        this.error = error.error.status_message;
        return [];
      })

    ).subscribe({
      next: (res) => {
        this.movies.push(...res.results);
        if (event) {
          event.target.disabled = res.total_pages === this.currentPage;
        }
      }
    })

  }

  loadMore(event: InfiniteScrollCustomEvent) {
    this.currentPage++;
    this.loadMovies(event);
  }

  handleInput(event: CustomEvent) {
    var inputValue = (<HTMLTextAreaElement>event.target).value;
    
    if (!event) {
      this.isLoading = true;
    }

    if (!inputValue) {
      this.loadSearchedMovies();
      return;
    }

    this.movieService.getMoviesSearch(inputValue).pipe(
      finalize(() => {
        this.isLoading = false;
      }),
      catchError((error: any) => {
        console.log(error);
        this.error = error.error.status_message;
        return [];
      })
    ).subscribe((res) => {
      this.movies = res.results;
    })

  }

  loadSearchedMovies() {
    this.currentPage = 1;
    this.movieService.getTopRatedMovies(this.currentPage).subscribe((response) => {
      this.movies = response.results;
    });
  }

}
