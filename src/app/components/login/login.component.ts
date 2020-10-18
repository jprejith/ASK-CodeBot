import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router
    ) { 
      
  }

  ngOnInit(): void {
  }

  showText(title:string) {
    if(title!="")
  {

    if(title == "admin" || title == "ADMIN" || title == "Admin"){
      //alert(title);
     this.router.navigateByUrl('/admin-landing');
    }else{
      if(title == "user" || title == "User" || title == "USER"){
        alert(title);
      }else{
        alert('Please enter a valid role!');
      }
    }
    
  }
  else
  {
    alert('Please enter a valid role!');
   
  }
  }

  

}
