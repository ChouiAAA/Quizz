import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {

@Input() numberOfQuestion: number = 0
@Input() numberOfAskedQuestion: number = 0
@Input() numberOfTrueAnswer: number = 0

}
