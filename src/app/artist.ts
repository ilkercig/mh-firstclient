import {Genre} from './genre';

export class Artist {
    id: number;
    name: string;
    genres : Genre[]
    pictureUrl : string;

    constructor(id: number, name: string, pictureUrl: string, genres : Genre[])
    {
        this.id = id;
        this.name = name;
        this.genres = genres;
        this.pictureUrl = pictureUrl;
    }
  }