import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SDKBrowserModule } from './shared/sdk/index';

// Import the Animations module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatIconModule,
  MatMenuModule,
  MatProgressBarModule,
  MatSnackBarModule,
  MatToolbarModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';

// main application
import { AppComponent } from './app.component';

// routing module
import { AppRoutingModule } from './app-routing.module';

// app components and app modules
import { TopbarComponent } from './topbar/topbar.component';
import { BottombarComponent } from './bottombar/bottombar.component';

import { LibModule } from './shared/lib/lib.module';
import { SettingsModule } from './shared/settings/settings.module';
import { UserManagementModule } from './shared/user-management/user-management.module';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    BottombarComponent
  ],
  imports: [
    // angular
    FormsModule,
    BrowserModule,
    SDKBrowserModule.forRoot(),
    BrowserAnimationsModule,

    // Angular Material
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatMenuModule,
    MatProgressBarModule,
    MatToolbarModule,

    // Angular cdk
    ScrollDispatchModule,

    // Angular Flex Layout
    FlexLayoutModule,

    // local modules
    LibModule,
    SettingsModule,
    UserManagementModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
