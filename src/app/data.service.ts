import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get("http://hn.algolia.com/api/v1/search?tags=front_page");
  }
}
