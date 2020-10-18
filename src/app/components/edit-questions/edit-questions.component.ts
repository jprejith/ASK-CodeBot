import { Question } from './../../model/question';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from './../../service/api.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";



@Component({
  selector: 'app-edit-questions',
  templateUrl: './edit-questions.component.html',
  styleUrls: ['./edit-questions.component.css']
})
export class EditQuestionsComponent implements OnInit {
  editForm: FormGroup;
  questionData: Question[];
  
 
  constructor(public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
 ) { }

  ngOnInit(): void {
    this.updateQuestion();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getQuestion(id);
    this.editForm = this.fb.group({
      question: ['', [Validators.required]],
      answer: ['', [Validators.required]]
    })
 
  }

  get myForm() {
    return this.editForm.controls;
  }

  getQuestion(id) {
    this.apiService.getQuestion(id).subscribe(data => {
      this.editForm.setValue({
        question: data['question'],
        answer: data['answer']
      });
    });
  }

  updateQuestion() {
    this.editForm = this.fb.group({
      question: ['', [Validators.required]],
      answer: ['', [Validators.required]]
    })
  }

  onSubmit() {
    
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.apiService.updateQuestion(id, this.editForm.value)
          .subscribe(res => {
            this.router.navigateByUrl('view-questions');
            console.log('Content updated successfully!')
          }, (error) => {
            console.log(error)
          })
      }
    }
  }

}
