import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppRoutingModule } from '../app-routing.module';
import { CustomFooterComponent } from './custom-footer/custom-footer.component';
import { CustomHeaderComponent } from './custom-header/custom-header.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    CustomHeaderComponent,
    CustomFooterComponent
  ],
  exports: [
    CustomHeaderComponent,
    CustomFooterComponent,
    MatSidenavModule
  ],
  imports : [
    AppRoutingModule,
    MatSidenavModule,
    NgbCollapseModule,
    FontAwesomeModule,
    CommonModule
  ]
})
export class ComponentsModule { }
