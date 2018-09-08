import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HomePageComponent, LoginComponent } from './components'
import { Routes, RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'

const routes: Routes = [{ path: 'home', component: HomePageComponent }]

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
  declarations: [HomePageComponent, LoginComponent]
})
export class HomeModule {}
