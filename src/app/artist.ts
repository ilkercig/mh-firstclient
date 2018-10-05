import {Genre} from './genre';

export class Artist {
    id: number;
    name: string;
    genres : Genre[]

    constructor(id: number, name: string, genres : Genre[])
    {
        this.id = id;
        this.name = name;
        this.genres = genres;

    }
  }