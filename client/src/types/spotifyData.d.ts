
declare interface AlbumData {
  artists: ArtistData[];
  album_type: string;
  href: string;
  id: string;
  name: string;
  images: { url: string; height: number; width: number }[];
  preview_url: string;
  uri: string;
  release_data: string;
  release_day_precision: string;
  popularity: number;
  external_urls: {
    spotify: string;
  }
}

declare interface SongData {
  artists: ArtistData[];
  album: AlbumData;
  href: string;
  id: string;
  name: string;
  preview_url: string;
  uri: string;
  popularity: number;
  external_urls: {
    spotify: string;
  }
}

declare interface ArtistData {
  genres: string[];
  images: { url: string; height: number; width: number }[];
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
  popularity: number;
  external_urls: {
    spotify: string;
  };
}

declare interface TopData {
  songs: SongData[] | null;
  artists: ArtistData[] | null;
}