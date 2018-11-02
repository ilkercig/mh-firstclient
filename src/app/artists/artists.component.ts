import { Component, OnInit } from '@angular/core';
import { ArtistsService } from '../artists.service';
import { Artist } from '../artist';
import { Genre } from '../genre';


@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {

  constructor(private artistsService : ArtistsService) { }
  throttle = 300;
  scrollDistance = 2;
  scrollUpDistance = 2;

  originalArtists : Artist[];
  filteredArtists : Artist[];
  selectedGenreId: number;
  genres : Genre[];

  ngOnInit() {
    this.genres = [];
    this.originalArtists = [];
    this.artistsService.artists$.subscribe(
      data=> {
      this.originalArtists = this.originalArtists.concat(data);
      data.forEach(element => this.addDistinct(this.genres, element.genres));

      if(this.selectedGenreId == null)
        this.filteredArtists = this.originalArtists
      else
        this.filteredArtists = this.originalArtists.filter(a=>a.genres.some(g=>g.id == this.selectedGenreId))
      },
      err => console.error('Observer got an error: ' + err),
      );
  }
  
  onChange(genreId : number) :void
  { 
    this.selectedGenreId = genreId;
    this.filteredArtists = this.originalArtists.filter(a=>a.genres.some(g=>g.id == genreId))
  }

  addDistinct(source: Genre[], items: Genre[])
  {
      items.forEach(i=>{
        if(!source.some(s=>s.id == i.id))
          source.push(i);
      });
  }
}
