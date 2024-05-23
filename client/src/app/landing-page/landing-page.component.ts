import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import {FormBuilder,FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { User } from '../shared/interfaces/user';
import { AuthService } from '../core/auth.service';
import { Router } from '@angular/router';
import { LocalStorageService } from '../shared/local-storage.service';

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
register() {
throw new Error('Method not implemented.');
}
  private loginService = inject(AuthService);
  private formBuilder = inject(FormBuilder);
  private localStorageService = inject(LocalStorageService);// servicio que manejara el token
  private router =inject(Router) // para navegar entre rutas
  loginForm!: FormGroup;

  /* registerForm!: FormGroup;
  @Output() registeredForm = new EventEmitter<User>(); */

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  submit() {
    const user: User = {
      email: this.loginForm.controls['email'].value,
      password: this.loginForm.controls['password'].value,
    };

/*         if(this.loginForm.valid){
      this.loginService.login(user).subscribe(r=>{
       localStorage.setItem('token', r.accessToken)
       this.router.navigate(['/home'])}); */
    if (this.loginForm.valid) {
      console.log('form is valid');
  this.loginService.login(user).then(result=>{
        localStorage.setItem('token', result.accessToken)})
      // localStorage.setItem('token', result.accessToken)
    }; 
/*     this.registerForm = this.formBuilder.group({
      emailRegister: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
        ],
      ],
      passwordRegister: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(
            '^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$'
          ),
        ],
      ],
      userName: ['', Validators.minLength(5), Validators.maxLength(100)],
    }); */
  }
  };

/* 
submit() {
  const user: User = {
    email: this.loginForm.controls['email'].value,
    password: this.loginForm.controls['password'].value,
  };
  if (this.loginForm.valid) {
    console.log('form is valid');
    // this.loginService.login(user);
    console.log('the user is ', user);
  } */
/* }

register() {
  if (this.registerForm.valid) {
    const user: User = {
      userName: this.registerForm.controls['userName'].value,
      email: this.registerForm.controls['email'].value,
      password: this.registerForm.controls['password'].value,
    };
/*     this.userService.addUser(user); */
/*   }
} */

