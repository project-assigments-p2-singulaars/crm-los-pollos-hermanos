import { Component, Input, OnInit, Output, inject } from '@angular/core';
import { FormBuilder,FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { User } from '../shared/interfaces/user';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {
/* 
@Input() registerForm!: FormGroup;
@Output() 
  //private loginService = inject(AuthService);
  private formBuilder = inject(FormBuilder);
  loginForm!: FormGroup;
  
  private userService = inject(UserService)

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });

  submit() {
    const user: User = {
      email: this.loginForm.controls['email'].value,
      password: this.loginForm.controls['password'].value,
    };
    if (this.loginForm.valid) {
      console.log('form is valid');
      //this.loginService.login(user);
      console.log('the user is ', user);
    }
  }
  this.registerForm = this.formBuilder.group({
    email: ['', Validators.pattern(/\S+@\S+\.\S+/)],
    password: ['', Validators.required],
    userName: ['',Validators.minLength(5), Validators.maxLength(100), ]
  
    };
    // falta ngvoid
  register() {
const newUser: User = {
  userName: this.registerForm.controls["userName"].value,
      email: this.registerForm.controls["email"].value,
      password: this.registerForm.controls["password"].value,
};
this.userService.addUser(newUser)
 this.registeredForm.emit(newUser);
 */
}
