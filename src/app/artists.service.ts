import { Injectable } from '@angular/core';
import { Artist } from './artist';
import { Genre } from './genre';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, config, combineLatest } from 'rxjs';

export interface ResultSet {
  result: Artist[];
  next_offset: string;
}


@Injectable({
  providedIn: 'root'
})
export class ArtistsService {

  limit : number;
  nextOffset : number;
  hasNext : boolean;
  dataUrl : string;
  artists$ : Observable<Array<Artist>>;
  test$ : Observable<string>;
  

  constructor(private http: HttpClient) { 
    this.hasNext = true;
    this.limit = 20;
    this.dataUrl = "api/user/artists"

    this.artists$ = new  Observable<Array<Artist>>((observer)=>{
      const handlerNext = (e) => observer.next(e);
      const handlerComplete = () => observer.complete();
      this.getartist(handlerNext, handlerComplete, 0);
      return {unsubscribe() { }};
    });
  }

  getartist(next, complete, offset)
  {
    this.http.get<ResultSet>(this.dataUrl + "?offset=" + offset).subscribe((d : ResultSet)=>{
      next(d.result);
      if( d.next_offset != null)
        this.getartist(next, complete, d.next_offset);
      else
        complete();
    });
  }

}
