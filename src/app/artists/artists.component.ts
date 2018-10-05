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
    this.getArtists();
    this.getGenres();
  }
  

  getArtists()
  {
    this.originalArtists = this.artistsService.getArtists();
    this.originalArtists = this.originalArtists.concat(this.originalArtists);
    this.originalArtists = this.originalArtists.concat(this.originalArtists);

    this.filteredArtists = this.originalArtists;
  }

  getGenres()
  {
    this.genres = this.artistsService.getGenres();
  }

  onChange(genreId : number) :void
  {
    this.selectedGenreId = genreId;
    this.filteredArtists = this.originalArtists.filter(a=>a.genres.some(g=>g.id == genreId))
  }

  onScrollDown() {
    this.originalArtists = this.originalArtists.concat(this.originalArtists);
    if(this.selectedGenreId != null)
      this.filteredArtists = this.originalArtists.filter(a=>a.genres.some(g=>g.id == this.selectedGenreId))
    else
      this.filteredArtists = this.originalArtists;

  }

  onUp() {
    console.log('scrolled Upp!!');
  }
  

}
