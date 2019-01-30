import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  seconds: number;
  counterSubscription: Subscription;

  ngOnInit(): void {
    // const counter = Observable.interval(1000); // OLD
    const counter = interval(1000);
    this.counterSubscription = counter.subscribe(
      (value) => {
        this.seconds = value;
      },
      (error) => {
        console.log('Uh oh , an error occured! : ' + error);
      },
      () => {
        console.log('Observable complete!');
      }
    );
  }

  ngOnDestroy(): void {
    this.counterSubscription.unsubscribe();
  }

}
