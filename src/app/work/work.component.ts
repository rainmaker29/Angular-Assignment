import { Component, OnInit, Input, } from "@angular/core";
import { EventEmitter, Output, } from "@angular/core";

@Component({
  selector: "app-work",
  templateUrl: "./work.component.html",
  styleUrls: ["./work.component.css"]
})
export class WorkComponent implements OnInit {
  @Input() passed_from_parent: boolean;
  @Output() falsebool = new EventEmitter();
  recieved_from_parent: boolean;
  constructor() {}

  ngOnInit() {
    this.recieved_from_parent = this.passed_from_parent;
  }

  sendParent(){
    this.falsebool.emit(false);
  }


}
