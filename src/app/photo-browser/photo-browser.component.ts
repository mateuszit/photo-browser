import {Component, OnInit} from "@angular/core";
import {PhotoBrowserService} from "./photo-browser.service";
import {Photo} from "./photo";
import {Observable} from "rxjs";
import {toArray} from "rxjs/operators/toArray";
import {map} from "rxjs/operators/map";
import {filter} from "rxjs/operators/filter";
import {mergeMap} from "rxjs/operators/mergeMap";

@Component({
  selector: 'app-photo-browser',
  templateUrl: './photo-browser.html',
  styleUrls: ['./photo-browser.scss']
})
export class PhotoBrowserComponent implements OnInit {

  photos: Photo[] = [];
  total = 0;

  limit = 5;
  page = 0;

  searchQuery: string;

  loaded = false;
  error = false;

  get totalPages(): number {
    return Math.ceil(this.total / this.limit)
  }

  constructor(private photoBrowserService: PhotoBrowserService) {
  }

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
    this.loaded = true;
  }

  private onError(error) {
    console.error(error);
    this.loaded = true;
    this.error = true;
  }

  private getPhotoStream(): Observable<Photo[]> {
    return Observable.from(this.photos)
      .pipe(
        filter(photo => this.filter(photo)),
        toArray(),
        mergeMap(photos => {
          this.total = photos.length;
          return Observable.range(this.page * this.limit, this.limit)
            .pipe(
              map(index => photos[index]),
              toArray()
            )
        })
      )
  }

  filter(photo: Photo) {
    if(!this.searchQuery) {
      return true;
    }

    return photo.title.toLowerCase().indexOf(this.searchQuery.toLowerCase()) > -1;
  }

  next() {
    if (this.page === this.totalPages -1) {
      return;
    }

    this.page += 1;
  }

  prev() {
    if (this.page === 0) {
      return;
    }
    this.page -= 1;
  }
}
