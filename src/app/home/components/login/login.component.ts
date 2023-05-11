import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
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
