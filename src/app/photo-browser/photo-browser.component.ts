import {Component, OnInit} from "@angular/core";
import {PhotoBrowserService} from "./photo-browser.service";
@Component({
  selector: 'app-photo-browser',
  templateUrl: './photo-browser.html'
})
export class PhotoBrowserComponent implements OnInit {

  constructor(private photoBrowserService: PhotoBrowserService) {}

  ngOnInit(): void {

    this.photoBrowserService.getPhotos();

  }

}
