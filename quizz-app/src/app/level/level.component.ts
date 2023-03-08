import { Component, EventEmitter, Output, } from '@angular/core';
import { quiz } from "../../assets/data/quiz"

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.scss']
})



export class LevelComponent {

  beginner: boolean = false
  confirmed: boolean = false
  expert: boolean = false
  started:boolean = false
  questionList: any[] = []
  @Output() selectedAnswerEmiter = new EventEmitter<any[]>

  constructor () {}

  getStarted(){

    if(this.beginner){
      this.questionList.push(...quiz.beginner)
    }

    if(this.confirmed){
      this.questionList.push(...quiz.confirmed)
    }

    if(this.expert){
      this.questionList.push(...quiz.expert)
    }

    this.addToQuestionList(this.questionList)
    this.started = true



  }

  addToQuestionList(list: any){
    this.selectedAnswerEmiter.emit(list)
  }





}
