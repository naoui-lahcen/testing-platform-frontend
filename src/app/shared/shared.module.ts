import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {FooterComponent} from './footer/footer.component';
import {NavbarComponent} from './navbar/navbar.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {ToggleFullscreenDirective} from './directives/toggle-fullscreen.directive';
import {SecondNavbarComponent} from './second-navbar/second-navbar.component';
import {SpinnerService} from './components/spinner/spinner.service';
import {PrintService} from './services/print.service';
import {DataService} from './services/data.service';
import {LoginComponent} from '../login/login.component';
import {SpinnerComponent} from './components/spinner/spinner.component';
import {TruncatePipe} from './pipes/truncate.pipe';
import {HighlightPipe} from './pipes/highlight.pipe';
import {SortPipe} from './pipes/sort.pipe';
import {BytesToSizePipe} from './pipes/bytes-to-size.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import {MomentModule} from 'ngx-moment';
import {ChartsModule} from 'ng2-charts';
import {ArchwizardModule} from 'angular-archwizard';
import {NgxToggleModule} from 'ngx-toggle';
import {FilterComponent} from './components/tables/filter/filter.component';
import {PaginationComponent} from './components/tables/pagination/pagination.component';
import {SearchComponent} from './components/tables/search/search.component';
import {AlertComponent} from './components/alert/alert.component';
import {AlertService} from './components/alert/alert.service';
import {ChecklistModule} from 'angular-checklist';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {
  AccordionModule,
  AlertModule,
  BsDatepickerModule,
  BsDropdownModule,
  ButtonsModule,
  CarouselModule,
  CollapseModule,
  ModalModule,
  PaginationModule,
  PopoverModule,
  SortableModule,
  TabsModule,
  TooltipModule
} from 'ngx-bootstrap';


@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    ToggleFullscreenDirective,
    SecondNavbarComponent,
    LoginComponent,
    SpinnerComponent,
    TruncatePipe,
    HighlightPipe,
    SortPipe,
    BytesToSizePipe,
    FilterComponent,
    PaginationComponent,
    SearchComponent,
    AlertComponent,
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot(),
    NgbModule.forRoot(),
    MomentModule,
    ChartsModule,
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    AlertModule.forRoot(),
    AccordionModule.forRoot(),
    CarouselModule.forRoot(),
    BsDropdownModule.forRoot(),
    PaginationModule.forRoot(),
    ButtonsModule.forRoot(),
    TabsModule.forRoot(),
    SortableModule.forRoot(),
    TooltipModule.forRoot(),
    PopoverModule.forRoot(),
    CollapseModule.forRoot(),
    ArchwizardModule,
    NgxToggleModule,
    ChecklistModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FooterComponent,
    TranslateModule,
    NgbModule,
    MomentModule,
    ChartsModule,
    BsDatepickerModule,
    NavbarComponent,
    SidebarComponent,
    ToggleFullscreenDirective,
    SecondNavbarComponent,
    LoginComponent,
    SpinnerComponent,
    TruncatePipe,
    HighlightPipe,
    SortPipe,
    BytesToSizePipe,
    ArchwizardModule,
    NgxToggleModule,
    FilterComponent,
    PaginationComponent,
    SearchComponent,
    AlertComponent,
    ChecklistModule,
    PaginationComponent
  ],
  providers: [
    SpinnerService,
    PrintService,
    DataService,
    AlertService
  ]
})
export class SharedModule {
}
