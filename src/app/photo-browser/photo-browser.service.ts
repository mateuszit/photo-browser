import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Photo} from "./photo";
import {Observable} from "rxjs";
@Injectable()
export class PhotoBrowserService {

  constructor(private http: HttpClient) {

  }

  getPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${environment.apiUrl}/photos`);
  }

}
