import { Component, OnInit } from '@angular/core';
import { Album } from './albums/album.model';
import data from 'src/app/music-info.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  angTitle = 'my-angular-course';
  albumsList: Album[] = [];
  titleCounter = 0;
  numbers: number[];
  ngOnInit(): void {
    // console.log(`data ${JSON.stringify(data)}`);
    data.forEach(element => {
      // console.log("data present " + JSON.stringify(element));
      const album: Album = element;
      this.albumsList.push(album);
      // console.log(`We added ${JSON.stringify(album)}`);
    });
    const interval = setInterval(() => {
      this.titleCounter++;
      this.albumsList[0].price += 10;
    }, 2000);
    this.numbers = [1, 2, 3];
    this.numbers.push(4);
    this.numbers = [...this.numbers];
    setTimeout(() => clearInterval(interval), 6000);


  }
}
