import { Router } from '@angular/router';
import { ApiService } from './../../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule  } from "@angular/forms";



@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.css']
})
export class AddQuestionsComponent implements OnInit {
  submitted = false;
  questionForm: FormGroup;
 
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
 ) { this.mainForm();
 }

 mainForm() {
  this.questionForm = this.fb.group({
    question: ['', [Validators.required]],
    answer: ['', [Validators.required]]
  })
}

get myForm(){
  return this.questionForm.controls;
}

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
    if (!this.questionForm.valid) {
      return false;
    } else {
      this.apiService.createQuestions(this.questionForm.value).subscribe(
        (res) => {
          console.log('Employee successfully created!')
          //this.ngZone.run(() => this.router.navigateByUrl('/employees-list'))
        }, (error) => {
          console.log(error);
        });
    }
  }



}
