import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {LandingComponent} from "./ofd/landing/landing.component";

@NgModule({
  imports: [RouterModule.forRoot([
    {path: '', redirectTo: 'landing', pathMatch: "full"},
    {path: 'landing', component: LandingComponent}
  ])],
  exports: [RouterModule]
})

export class AppRoutingModule {}
