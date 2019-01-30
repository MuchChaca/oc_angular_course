import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DeviceService {

  deviceSubject = new Subject<any[]>();

  private devices = [
    {
      id: 1,
      name: 'Lundry Machine',
      status: 'off',
    },
    {
      id: 2,
      name: 'Freezer',
      status: 'on',
    },
    {
      id: 3,
      name: 'Computer',
      status: 'off',
    },
  ];

  constructor(
    private httpClient: HttpClient
  ) {}

  emitDeviceSubject() {
    this.deviceSubject.next(this.devices.slice());
  }

  switchOnAll() {
    for (const device of this.devices) {
      device.status = 'on';
    }
  }

  switchOffAll() {
    for (const device of this.devices) {
      device.status = 'off';
    }
  }

  switchOnOne(i: number) {
    this.devices[i].status = 'on';
  }

  switchOffOne(i: number) {
    this.devices[i].status = 'off';
  }

  getDeviceById(id: number) {
    const device = this.devices.find(
      (s) => {
        return s.id === id;
      }
    );
    return device;
  }

  addDevice(name: string, status: string) {
    const deviceObject = {
      id: 0,
      name: '',
      status: '',
    };

    deviceObject.name = name;
    deviceObject.status = status;
    deviceObject.id = this.devices[this.devices.length - 1].id + 1;
    this.devices.push(deviceObject);
    this.emitDeviceSubject();
  }

  saveDevicesToServer() {
    this.httpClient
      .put('https://oc-ng-training.firebaseio.com/devices.json', this.devices)
      .subscribe(
        () => console.log('Save complete!'),
        (error) => console.log('Error: ' + error)
      );
  }

  getDevicesFromServer() {
    this.httpClient
      .get<any[]>('https://oc-ng-training.firebaseio.com/devices.json')
      .subscribe(
        (response) => {
          this.devices = response;
          this.emitDeviceSubject();
        },
        (error) => console.log('Error : ' + error)
      );
  }
}
