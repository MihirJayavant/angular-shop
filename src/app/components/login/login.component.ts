import { NgClass } from '@angular/common'
import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { Router } from '@angular/router'

@Component({
  imports: [FormsModule, NgClass],
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  public formData = {
    email: '',
    password: '',
  }

  constructor(private readonly router: Router) {}

  public onLogin() {
    this.router.navigate(['/dashboard'])
  }
}
