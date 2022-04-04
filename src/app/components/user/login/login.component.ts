import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/shared/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: UserService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  //defining the form validators
   form = new FormGroup
   ({
    UserName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    PostalCode: new FormControl('', [Validators.required, Validators.maxLength(7)])
  });

  get f() {
    return this.form.controls;
  }

  submit()
  {
    this.service.login(this.form.value).subscribe(
      (res: any) => 
      {
        console.log(res)
        this.form.reset();
        //Displays the success popup msg
          this.toastr.success('Welcome to NOTL', 'Login successful.');
          setTimeout
          (
            () => 
              { 
                //navigates to the home page after 2 miliseconds.
                this.router.navigate(['/home']); 
              }, 
          200);
      },
      err => 
      {
        //if there is an error of incorrect username or postal code it displays the below msg
        if (err.status == 400)
          this.toastr.error('Incorrect Username or Postal Code.', 'Authentication failed.');
        //else it will display the error message in the console
        else
        {
          console.log(err);
          console.log(this.form.value)
        }
      }
    );
  }
}