import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent {

  constructor(private router: Router) { }

  public onLogin() {
    this.router.navigate(['/dashboard'])
  }
}
