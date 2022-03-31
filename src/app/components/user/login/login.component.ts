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
   form = new FormGroup({
    UserName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    PostalCode: new FormControl('', [Validators.required, Validators.maxLength(7)])
  });

  get f() {
    return this.form.controls;
  }
  submit(){
   // console.log(this.form.value)
    
    this.service.login(this.form.value).subscribe(
      (res: any) => {
        console.log(res)
        //this.router.navigateByUrl('/home');
        this.form.reset();
          this.toastr.success('New user created!', 'Login successful.');
          setTimeout(() => { this.router.navigate(['/home']); }, 2000);
      },
      err => {
        if (err.status == 400)
          this.toastr.error('Incorrect Username or Postal Code.', 'Authentication failed.');
        else{
          console.log(err);
          console.log(this.form.value)
        }
      }
    );
  }
}