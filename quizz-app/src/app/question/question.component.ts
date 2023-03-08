import { Component, Input, Output, EventEmitter } from '@angular/core';
import { quiz } from "../../assets/data/quiz"

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})


export class QuestionComponent {

   @Input() currentQuestion: any = null
   @Output() nextQuestionEmitter = new EventEmitter()
   @Output() isGoodAnswerEmitter = new EventEmitter<boolean>()

   selectedAnwser: string = ""

  constructor () {}




  getCorrection (peopleAnwser: string, goodAnwser: string) {

    if(this.selectedAnwser === "") {
      return ""
    }

    if (peopleAnwser === this.selectedAnwser) {
      if(peopleAnwser === goodAnwser){
      return "bg-success"
      } else {
        return "bg-danger"
      }
    }

    return ""

  }



  nextQuestion(goodAnwser: string) {
    this.isGoodAnswerEmitter.emit(this.selectedAnwser === goodAnwser)
    this.nextQuestionEmitter.emit()
    this.selectedAnwser = ""

  }
}
