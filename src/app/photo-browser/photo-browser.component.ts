import {Component, OnInit} from "@angular/core";
import {PhotoBrowserService} from "./photo-browser.service";
import {Photo} from "./photo";
import {Observable} from "rxjs";
import {map} from "rxjs/operators/map";
import {toArray} from "rxjs/operators/toArray";
@Component({
  selector: 'app-photo-browser',
  templateUrl: './photo-browser.html'
})
export class PhotoBrowserComponent implements OnInit {

  photos: Photo[] = [];
  total = 0;

  limit = 10;

  photoStream: Observable<any>; //todo

  constructor(private photoBrowserService: PhotoBrowserService) {}

  ngOnInit(): void {
    this.getPhotos();
  }

  private getPhotos() {
    this.photoBrowserService.getPhotos()
      .subscribe(
        (response) => this.onLoad(response),
        (error) => this.onError(error),
      )
  }

  private onLoad(response: Photo[]) {
    this.photos = response;
    this.total = response.length;

    this.photoStream = this.getPhotoStream();
  }

  private getPhotoStream() {

    console.log(this.photos[9]);
    return Observable.range(0, this.limit)
      .pipe(
        map(index => this.photos[index]),
        toArray()
      )
  }

  private onError(error) {
    console.error(error);

  }

}
