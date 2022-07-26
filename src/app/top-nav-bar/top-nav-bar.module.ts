import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './child-components/home/home.component';
import { DemoSettingsFormComponent } from './child-components/demo-settings-form/demo-settings-form.component';
import { OpacityOverlayComponent } from './child-components/opacity-overalay/opacity-overaly.component';



@NgModule({
  declarations: [
    HomeComponent,
    DemoSettingsFormComponent,
    OpacityOverlayComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    HomeComponent
  ]
})
export class TopNavBarModule { }
