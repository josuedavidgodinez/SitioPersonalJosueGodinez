import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppRoutingModule } from '../app-routing.module';
import { CustomFooterComponent } from './custom-footer/custom-footer.component';
import { CustomHeaderComponent } from './custom-header/custom-header.component';
import { NgbCollapseModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { SocialmedialinksComponent } from './socialmedialinks/socialmedialinks.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    CustomHeaderComponent,
    CustomFooterComponent,
    SocialmedialinksComponent
  ],
  exports: [
    CustomHeaderComponent,
    CustomFooterComponent,
    MatSidenavModule,
    SocialmedialinksComponent
  ],
  imports : [
    AppRoutingModule,
    MatSidenavModule,
    NgbCollapseModule,
    FontAwesomeModule,
    CommonModule,
    MatButtonModule,
    NgbNavModule
  ]
})
export class ComponentsModule { }
