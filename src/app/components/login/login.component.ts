import { NgClass } from '@angular/common'
import { Component, inject } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { Router } from '@angular/router'

@Component({
  imports: [FormsModule, NgClass],
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  private readonly router = inject(Router)

  public formData = {
    email: '',
    password: '',
  }

  public onLogin() {
    this.router.navigate(['/dashboard'])
  }
}
