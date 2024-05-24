import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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
  private loginService = inject(AuthService);
  private formBuilder = inject(FormBuilder);
  private router = inject(Router) // para navegar entre rutas
  loginForm!: FormGroup;
  registerForm!: FormGroup;

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.registerForm = this.formBuilder.group({
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
          // Validators.pattern(
          //   '^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$'
          // ),
        ],
      ]
    })
  }
  submit() {
    const user: User = {
      email: this.loginForm.controls['email'].value,
      password: this.loginForm.controls['password'].value,
    };

    if (this.loginForm.valid) {
      console.log('form is valid');
      this.loginService.login(user).then(result => {
        localStorage.setItem('token', result.accessToken)
        this.router.navigate(['layout'])
      })
    };
  }

  register() {
    if (this.registerForm.valid) {
      const user: User = {
        email: this.registerForm.controls['emailRegister'].value,
        password: this.registerForm.controls['passwordRegister'].value,
      };
      this.loginService.register(user).then(result => {
        localStorage.setItem('token', result.accessToken)
        this.router.navigate(['layout'])
      });
    }
  }
};
