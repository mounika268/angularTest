import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animationeffect',
  templateUrl: './animationeffect.component.html',
  styleUrls: ['./animationeffect.component.css']
})
export class AnimationeffectComponent implements OnInit {
  isFirst: boolean = true;
  constructor() { }

  ngOnInit() {
    document.getElementById("outer-circle").style.animation = "zoomin 5s forwards";
    setTimeout(() => {
      this.isFirst = false;
      document.getElementById("outer-circle").classList.add("active");
      document.getElementById("outer-circle").classList.remove("outer-circle");
      //style.animation = "spin 5s infinite";
      console.log(document.getElementById("outer-circle").style.animation);
    }, 4500);
    console.log(document.getElementById("outer-circle").style.animation);
  }
  gotoNext() {
    document.getElementById("outer-circle").style.animation = "zoomin 5s forwards";
    setTimeout(() => {
      this.isFirst = false;
      document.getElementById("outer-circle").classList.add("active");
      document.getElementById("outer-circle").classList.remove("outer-circle");
      //style.animation = "spin 5s infinite";
      console.log(document.getElementById("outer-circle").style.animation);
    }, 4500);
    console.log(document.getElementById("outer-circle").style.animation);

  }
}
