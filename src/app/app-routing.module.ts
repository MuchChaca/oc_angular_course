import { NewUserComponent } from './new-user/new-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { EditDeviceComponent } from './edit-device/edit-device.component';
import { AuthGuard } from './services/auth-gard.service';
import { DeviceViewComponent } from './device-view/device-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { SingleDeviceComponent } from './single-device/single-device.component';
import { FourOFourComponent } from './four-o-four/four-o-four.component';

const routes: Routes = [
  { path: '', component: DeviceViewComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'not-found', component: FourOFourComponent },
  { path: 'devices', canActivate: [AuthGuard], component: DeviceViewComponent },
  { path: 'devices/edit', canActivate: [AuthGuard], component: EditDeviceComponent },
  { path: 'devices/:id', canActivate: [AuthGuard], component: SingleDeviceComponent },
  { path: 'users', component: UserListComponent },
  { path: 'new-user', component: NewUserComponent },
  { path: '**', redirectTo: 'not-found' }, // must be at the end -_-
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
