import { Track } from "./track.model";

export interface Album {
  id: number;
  artist: string;
  album_name: string;
  genre: string;
  price: number;
  currency?: string;
  on_sale: boolean;
  year: number;
  release_date: string;
  recording_location?: string;
  duration: string;
  URL: string;
  tracks: Track[];
  newPrice?: number;
}
