import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [],
    standalone: true,
    imports: [FormsModule, NgClass]
})
export class LoginComponent {
  public formData = {
    email: '',
    password: ''
  }

  constructor(private router: Router) {}

  public onLogin(form: any) {
    this.router.navigate(['/dashboard'])
  }
}
