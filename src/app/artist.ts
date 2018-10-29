import {Genre} from './genre';

export class Artist {
    spotify_id: number;
    name: string;
    genres : Genre[]

    constructor(spotify_id: number, name: string, genres : Genre[])
    {
        this.spotify_id = spotify_id;
        this.name = name;
        this.genres = genres;
    }
  }