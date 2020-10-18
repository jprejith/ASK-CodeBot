import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../service/api.service';


@Component({
  selector: 'app-view-questions',
  templateUrl: './view-questions.component.html',
  styleUrls: ['./view-questions.component.css']
})
export class ViewQuestionsComponent implements OnInit {
  Questions:any = [];


  constructor(private apiService: ApiService) {
    this.readQuestions();
 
   }

  ngOnInit(): void {
  }

  readQuestions(){
    this.apiService.getQstAns().subscribe((data) => {
      alert(data);
     this.Questions = data;
    })    
  }
  removeQuestion(question, index) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deleteQuestion(question._id).subscribe((data) => {
          this.Questions.splice(index, 1);
        }
      )    
    }
  }




}
