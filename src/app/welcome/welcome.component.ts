import { Component, OnDestroy, OnInit } from "@angular/core";
import { interval, Observable, PartialObserver, Subject, Subscription } from "rxjs";

import { takeUntil } from "rxjs/operators";

@Component({
  selector: "app-welcome",
  template: `<button (click)="pauseClick()" *ngIf="isRunning">Pause</button>
  <button (click)="restartClick()" *ngIf="!isRunning && !isComplete">Return</button>
  <button  (click)="stopClick()" *ngIf="!isComplete">Stop</button>
  <button  (click)="restartClick()" *ngIf="isComplete">Restart</button>`,
  styleUrls: ["./welcome.component.css"]
})
export class WelcomeComponent implements OnInit, OnDestroy {
  isRunning: boolean = true;
  i = 0;
  consoleArray = [
    "A",
    "BB",
    "10",
    "CCC",
    "DDDD",
    "20",
    "EEEEE",
    "FFFFFF",
    "30"
  ];
  timer$: Observable<number>;
  timerObserver: PartialObserver<number>;

  stopClick$ = new Subject();
  pauseClick$ = new Subject();
  isComplete: boolean = false;
  constructor() { }
  ngOnDestroy() {
    this.stopClick$.next();
  }

  ngOnInit() {
    this.timer$ = interval(1000).pipe(
      takeUntil(this.pauseClick$),
      takeUntil(this.stopClick$)
    );

    this.timerObserver = {
      next: (time: number) => {
        time = time > 0 ? time : 0;
        const Secounds: number = Math.floor(time / 60);
        const minutes: number = Math.floor(Secounds / 60);
        //let minutestext=minutes>0? (minutes+'').length==1? '0'+minutes : minutes+'' :'00';

        if (this.i < this.consoleArray.length) {
          // this.i++;
          let timer = ('00' + Math.floor(Secounds - minutes * 60)).slice(-2) + ':' + ('00' + Math.floor(time - Secounds * 60)).slice(-2);
          if (this.i < this.consoleArray.length) {
            console.log(timer + '==>' + this.consoleArray[this.i]);
            this.i++;
          }
        } else {
          console.log('---');
          this.stopClick$.next();
          this.isRunning = false;
          this.isComplete = true;
        }
      }
    };

    this.timer$.subscribe(this.timerObserver);
  }

  pauseClick() {
    this.pauseClick$.next();
    this.isRunning = false;
  }

  restartClick() {
    this.isRunning = true;
    if (this.isComplete) {
      this.isComplete = false;
      this.i = 0;
      // this.getProgress();
    }
    this.timer$.subscribe(this.timerObserver);
  }

  stopClick() {
    this.i = 0;
    console.log('---');
    this.stopClick$.next();
    this.isRunning = false;
  }

}
