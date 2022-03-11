import { UserService } from 'src/app/shared/user.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styles: []
})
export class RegistrationComponent implements OnInit {

  constructor(private toastr: ToastrService, private service: UserService, private router: Router) { }

  ngOnInit() {

  }
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    PostalCode: new FormControl('', [Validators.required, Validators.minLength(7)])
  });

  get f() {
    return this.form.controls;
  }

  submit() {

    console.log(this.form.value.email, this.form.value.name, this.form.value.PostalCode)
    this.service.register(this.form.value.email, this.form.value.name, this.form.value.PostalCode).subscribe(
      (res: any) => {

        if (res.succeeded) {

          this.form.reset();
          this.toastr.success('New user created!', 'Registration successful.');
          setTimeout(() => { this.router.navigate(['/login']); }, 5000);

        } 
        else
         {
          res.errors.forEach((element: { code: any; description: string | undefined; }) => 
          {
            switch (element.code) {
              case 'DuplicateUserName':
                this.toastr.error('Username is already taken', 'Registration failed.');
                break;

              default:
                this.toastr.error(element.description, 'Registration failed.');
                break;
            }
          });

          //setTimeout(function(){ location.reload(); }, 5000);
          // setTimeout(() =>{this.router.navigate(['/login']);}, 5000);
          //this.router.navigate(['/login']);
        }
      }

    );

  }

}
