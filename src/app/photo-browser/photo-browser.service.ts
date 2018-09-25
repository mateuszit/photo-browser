import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
@Injectable()
export class PhotoBrowserService {

  constructor(private http: HttpClient) {

  }

  getPhotos() {

    this.http.get(`${environment.apiUrl}/photos`)
      .subscribe((result) => console.log(result));


  }

}
