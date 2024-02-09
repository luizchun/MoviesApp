import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiResult, MovieResult } from './interfaces';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = environment.apiKey;

@Injectable({
  providedIn: 'root'
})

export class MovieService {



  private http = inject(HttpClient);


  constructor() { }

  getTopRatedMovies(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(`${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`)
  }

  getMoviesDetaisl(id: string): Observable<MovieResult>{
    return this.http.get<MovieResult>(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
  }

  getMoviesSearch(query: string): Observable<ApiResult>{
    return this.http.get<ApiResult>(`${BASE_URL}/search/movie?query=${query}&api_key=${API_KEY}`);
  }

}
