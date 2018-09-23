import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { components, HomePageComponent } from './components'

const routes: Routes = [{ path: 'home', component: HomePageComponent }]

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
  declarations: [...components]
})
export class HomeModule {}
