import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import { DataService } from "./data.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "hackernews";
  count = 0;
  user = "";
  newCount = 0;
  newData: any;

  constructor(private ser: DataService) {}
  add() {
    this.count += 1;
    console.log(this.count, "add");
    this.newCount = this.count;
    console.log(this.newCount, "newCount");
    localStorage.setItem("key", JSON.stringify(this.newCount));
    this.user = localStorage.getItem("key");
    console.log(this.user, "localstorage value");
  }
  ngOnInit() {
    this.ser.getData().subscribe(res => {
      console.log(res);
      this.newData = res;
    });
  }
  hide(id) {
    document.getElementById("data").remove();
  }
}
