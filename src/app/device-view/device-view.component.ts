import { Component, OnInit, OnDestroy } from '@angular/core';
import { DeviceService } from '../services/device.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-device-view',
  templateUrl: './device-view.component.html',
  styleUrls: ['./device-view.component.scss']
})
export class DeviceViewComponent implements OnInit, OnDestroy {

  isAuth = false;

  // deviceOne = 'Lundry Machine';
  // deviceTwo = 'Freezer';
  // deviceThree = 'Computer';

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

  devices: any[];
  deviceSubscription: Subscription;

  constructor(private deviceService: DeviceService) {
    setTimeout(
      () => {
        this.isAuth = !this.isAuth;
      }, 4000
    );
  }

  ngOnInit(): void {
    this.deviceSubscription = this.deviceService.deviceSubject.subscribe(
      (devices: any[]) => {
        this.devices = devices;
      }
    );
    this.deviceService.emitDeviceSubject();
  }

  onOn() {
    console.log('turn everything on');
    this.deviceService.switchOnAll();
  }

  onOff() {
    if (confirm('Are you sure to turn everything off ???')) {
      console.log('turn everything off');
      this.deviceService.switchOffAll();
    }
  }

  onSave() {
    this.deviceService.saveDevicesToServer();
  }

  onFetch() {
    this.deviceService.getDevicesFromServer();
  }

  ngOnDestroy(): void {
    this.deviceSubscription.unsubscribe();
  }

}
