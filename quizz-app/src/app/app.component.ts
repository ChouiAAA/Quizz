import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'quizz-app';
  questionToDisplay: any[] = []
  questionsAsked: any[] = []
  trueAnswer: number = 0
  randomNumbers : number[] = []
  currentQuestion: any = null
  questionToAsk: any[] = []


  constructor() {

  }

  ngOnInit() {

  }

  setQuestionList(event: any[]) {
    this.questionToDisplay=event
    this.questionToAsk = [...event]
    this.pickAQuestion()
  }


  pickAQuestion(){

    console.log("pick question")
    if(this.questionsAsked.length !== this.questionToDisplay.length) {
      console.log('for real')
      const randomQuestion = this.getRandomNumber()
      this.currentQuestion = this.questionToDisplay[randomQuestion]
      this.questionsAsked.push(this.currentQuestion)
    } else {
      this.currentQuestion = undefined
    }
  }

  getRandomNumber() {
    let element
    do {
      element = Math.floor(Math.random() * (this.questionToDisplay.length))
    } while (this.randomNumbers.includes(element))

    this.randomNumbers.push(element)
    return element
  }

  addGoodAnswer(isTrue:boolean){
    if(isTrue) {
      this.trueAnswer++
    }
  }


}

