import {Routes, RouterModule} from "@angular/router";
import {PhotoBrowserComponent} from "./photo-browser/photo-browser.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  { path: '',   redirectTo: '/photo-browser', pathMatch: 'full' },
  {
    path: 'photo-browser',
    component: PhotoBrowserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
