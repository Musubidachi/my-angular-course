import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Album } from '../album.model';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.css']
})
export class AlbumCardComponent implements OnInit {

  @Input()
  albumData: Album;
  @Output()
  albumClicked: EventEmitter<Album> = new EventEmitter<Album>();
  constructor() { }

  ngOnInit() {
    if(this.albumData.on_sale){
      this.albumData.newPrice = this.albumData.price - (this.albumData.price * .1);
    }
  }

  showAlbum() {
    this.albumClicked.emit(this.albumData);
  }

}
