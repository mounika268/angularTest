import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-refactor',
  templateUrl: './refactor.component.html',
  styleUrls: ['./refactor.component.css']
})
export class RefactorComponent implements OnInit {
  type: number;
  machineName: string;
  name: string;
  description: string;
  color: string;
  trimColor: string;
  constructor(private route: ActivatedRoute) {
    console.log();
    
    this.route
      .data
      .subscribe(v => {
        this.type = v['type'];
    this.machineName = v['machineName'];
      });
  }
  ngOnInit() {
    let baseColor = "white";
    let hasMaxSpeed = true;
    // if (!this.machineName) {

      switch (this.type) {
        case 0:
          this.name = "bulldozer";
          this.color = "red";
          baseColor = "red";
          break;
        case 1:
          this.name = "crane";
          hasMaxSpeed = true;
          this.color = "blue";
          baseColor = "blue";
          this.trimColor = this.isDark(baseColor) ? "black" : "white";
          break;
        case 2:
          this.name = "tractor";
          hasMaxSpeed = true;
          this.color = "green";
          baseColor = "green";
          this.trimColor = this.isDark(baseColor) ? "gold" : "";
          break;
        case 3:
          this.name = "truck";
          hasMaxSpeed = false;
          this.color = "yellow";
          baseColor = "yellow";
          this.trimColor = this.isDark(baseColor) ? "silver" : "";
          break;
        case 4:
          this.name = "car";
          hasMaxSpeed = false;
          this.color = "brown";
          baseColor = "brown";
          break;
        default:
          this.name = "car";
          this.color = "white";
          baseColor = "white";
          this.trimColor = "";
          break;
      }
      this.description = this.color + " " + this.name + "[" + this.getMaxSpeed(this.type, hasMaxSpeed) + "].";
    // }

    setTimeout(() => {
      console.log(this.name, this.description, this.color, this.trimColor);

    })
  }
  isDark(color: string) {
    if (
      color == "red" ||
      color == "green" ||
      color == "black" ||
      color == "crimson"
    )
      return true;
    else if (
      color == "yellow" ||
      color == "white" ||
      color == "beige" ||
      color == "babyblue"
    )
      return false;

  }

  getMaxSpeed(machineType: any, noMax = false) {
    let absoluteMax = 70;
    let max = 70;
    switch (machineType) {
      case 0:
        max = noMax == true ? 80 : 70;
        break;
      case 1:
        max = noMax == true ? 80 : 70;
        break;
      case 2:
        max = noMax == true ? 90 : 60;
        break;
      case 4:
        max = noMax == true ? 90 : 70;
        break;
      default:
        max = 70;
        break;
    }
    return max;
  }
}