import {Component, OnInit} from "@angular/core";
import {PhotoBrowserService} from "./photo-browser.service";
import {Photo} from "./photo";
import {Observable} from "rxjs";
import {toArray} from "rxjs/operators/toArray";
import {map} from "rxjs/operators/map";
import {filter} from "rxjs/operators/filter";

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

  private getPhotoStream() {
    return Observable.range(this.page * this.limit, this.limit)
      .pipe(
        map(index => this.photos[index]),
        filter(photo => this.filter(photo)),
        toArray()
      )
  }

  filter(photo: Photo) {
    if(!this.searchQuery) {
      return true;
    }

    return photo.title.indexOf(this.searchQuery) > -1;
  }

  onPaginationChanged(event) {
    console.log(event);
  }

  next() {
    if (this.page === this.totalPages) {
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
