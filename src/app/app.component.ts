import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  username = "username appears here";
  buttonvar: boolean = true;
  factinput: number;
  evennum: number=0;


  recieveChild(event: any){

    this.buttonvar = event.target;

  }

  getNum(event: any){
    this.factinput = event.target.value;
  }

  changeEven(){
    this.evennum +=2;
  }

}
