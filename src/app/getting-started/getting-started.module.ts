import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstallationComponent } from './installation/installation.component';
import { GettingStartedComponent } from './getting-started/getting-started.component';

@NgModule({
  declarations: [InstallationComponent, GettingStartedComponent],
  imports: [
    CommonModule
  ]
})
export class GettingStartedModule { }
