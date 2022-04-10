import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { ContentListComponent } from './content-list/content-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [ 
{
  path: "",
  redirectTo: "/content",
  pathMatch: "full"
},{
  path: "content",
  component: ContentListComponent,
},
{
  path: "content/:id",
  component: ContentDetailComponent
},
{ 
  path: "**",
 component: PageNotFoundComponent
 }

];
@NgModule({
  declarations: [],

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
