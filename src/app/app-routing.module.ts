import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ClientsComponent } from './clients/clients.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PageNoteFoundComponent } from './page-note-found/page-note-found.component';
import { ServicesComponent } from './services/services.component';


const routes: Routes = [
  {
    path:'',component: HomeComponent
  },
  {
    path:'about',component: AboutComponent
  },
  {
    path:'services',component: ServicesComponent
  },
  {
    path:'clients',component: ClientsComponent
  },
  {
    path:'blogs',component: BlogsComponent
  },
  {
    path:'contact',component: ContactComponent
  },
  {
    path:'products',loadChildren:() => import('./products/products.module').then(m=>m.ProductsModule)
  },
  {
    path:'**',component: PageNoteFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
