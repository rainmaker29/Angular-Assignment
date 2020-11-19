import { Input, Component, OnInit, SimpleChanges } from "@angular/core";

@Component({
  selector: "app-computation",
  templateUrl: "./computation.component.html",
  styleUrls: ["./computation.component.css"]
})
export class ComputationComponent implements OnInit {
  @Input() num: number;
  result: number;
  constructor() {}

  ngOnInit() {
    
  }

  ngOnChanges(changes: SimpleChanges){

    this.result = this.factorial(this.num);

  }

  factorial(n) {
    if (n == 0 || n == 1) {
      return 1;
    } else {
      return n * this.factorial(n - 1);
    }
  }
}
