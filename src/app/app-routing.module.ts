import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PreciosComponent } from './components/precios/precios.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';


const routes: Routes = [
{path:'home', component:HomeComponent},
{path:'precios', component:PreciosComponent},
{path:'protegida', component:ProtegidaComponent},
{
  path: 'home',
  component: HomeComponent,
  ...canActivate(() => redirectUnauthorizedTo(['/register']))
}, 
{path:'register', component:RegisterComponent},
{path:'login', component:LoginComponent},
{path:'**', pathMatch:'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
