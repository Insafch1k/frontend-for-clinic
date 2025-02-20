import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    const credentials = {
      login: this.loginForm.value.login,
      password: this.loginForm.value.password
    };
  
    console.log('Отправка данных:', credentials); // Логируем, что уходит
  
    this.authService.login(credentials)
      .subscribe({
        next: (response) => {
          console.log('Успешный вход:', response);
          localStorage.setItem('token', response.token);
          this.router.navigate(['/admin']);
        },
        error: (error) => {
          console.error('Ошибка входа:', error);
        }
      });
  }
  
}
