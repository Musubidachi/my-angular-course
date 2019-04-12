import { Component, OnInit } from "@angular/core";
import { Album } from "../album.model";
import { AlbumService } from "../shared/album.service";


@Component({
  selector: "app-album-list",
  templateUrl: "./album-list.component.html",
  styleUrls: ["./album-list.component.css"]
})
export class AlbumListComponent implements OnInit {
  constructor(private albumService: AlbumService) {}
  albumsList: Album[];

  getAlbums() {
    this.albumService.getAlbums()
    .subscribe(
        albums => this.albumsList = albums,
        error => console.log("Error: ", error));
}

  ngOnInit(): void {
    this.getAlbums();
  }

  parentFunctionHandler(album) {
    alert(
      "Album " + album.album_name + " was sent from the album card component"
    );
  }
}
