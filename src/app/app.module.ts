import { AuthService } from './services/auth.service';
import { DeviceService } from './services/device.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MyFirstComponent } from './my-first/my-first.component';
import { DeviceComponent } from './device/device.component';
import { AuthComponent } from './auth/auth.component';
import { DeviceViewComponent } from './device-view/device-view.component';
import { SingleDeviceComponent } from './single-device/single-device.component';
import { FourOFourComponent } from './four-o-four/four-o-four.component';
import { AuthGuard } from './services/auth-gard.service';
import { EditDeviceComponent } from './edit-device/edit-device.component';
import { UserService } from './services/user.service';
import { UserListComponent } from './user-list/user-list.component';
import { NewUserComponent } from './new-user/new-user.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponent,
    DeviceComponent,
    AuthComponent,
    DeviceViewComponent,
    SingleDeviceComponent,
    FourOFourComponent,
    EditDeviceComponent,
    UserListComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    AuthGuard,
    AuthService,
    UserService,
    DeviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
