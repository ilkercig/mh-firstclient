import { Injectable } from '@angular/core';
import { Artist } from './artist';
import { Genre } from './genre';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ArtistsService {

  limit : number;
  nextOffset : number;
  hasNext : boolean;
  dataUrl : string;

  constructor(private http: HttpClient) { 
    this.hasNext = true;
    this.limit = 20;
    this.dataUrl = "api/user/aritsts"
  }

  getArtists()
  {
  //   let initialArtistList : Artist[] = [new Artist(1, "Nunslaughter", [genreList[3]]),
  //   new Artist(2, "Iron Maiden", [genreList[0], genreList[7]]), new Artist(3, "Slayer", [genreList[6]]),
  //   new Artist(4, "King Diamond", [genreList[0]]),new Artist(5, "Razor", [genreList[5]]),
  //   new Artist(6, "Agatus", [genreList[0], genreList[2]]), new Artist(7, "Mgla", [genreList[2]]),
  //   new Artist(8, "Dead Congregation", [genreList[3]]), new Artist(9, "Visigoth", [genreList[4]]),
  //   new Artist(10, "Procession", [genreList[1]]),new Artist(11, "Entombed", [genreList[3]])
  // ];
  if (this.hasNext) {
    let x = this.http.get(this.dataUrl)
  }
  else
  {
    return null;
  }
    return null;

  }

  getGenres()
  {
    return genreList;
  }

  // getArtistFromServer()
  // {
  //   //use offset and limit to make http request
  //   this.nextOffset = 12;
  //   this.hasNext = true;
  // }

}

const genreList: Genre[] = [new Genre(0, "Heavy Metal"), new Genre(1, "Doom Metal"),
new Genre(2, "Black Metal"), new Genre(3, "Death Metal"), new Genre(4, "Power/Heavy Metal"), 
new Genre(5, "Speed/Thrash Metal"), new Genre(6, "Thrash Metal"), new Genre(7, "NWOBHM"), 
];
