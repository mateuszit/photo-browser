import {Component, Input} from "@angular/core";
import {Photo} from "../photo";
@Component({
  selector: 'app-photo',
  templateUrl: './photo.html'
})
export class PhotoComponent {

  @Input() photo: Photo;

}
