import { Component, OnInit, Input } from '@angular/core';
import { DeviceService } from '../services/device.service';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss'],
})
export class DeviceComponent implements OnInit {

  @Input() deviceName: string;
  @Input() deviceStatus: string;
  @Input() index: number;
  @Input() id: number;

  constructor(private deviceService: DeviceService) { }

  ngOnInit() {
  }

  getStatus() {
    return this.deviceStatus;
  }

  getColor() {
    if (this.deviceStatus === 'on') {
      return 'green';
    } else {
      return 'red';
    }
  }

  onSwitch() {
    console.log(this.index); // DEBUG
    if (this.deviceStatus === 'on') {
      this.deviceService.switchOffOne(this.index);
    } else if (this.deviceStatus === 'off') {
      this.deviceService.switchOnOne(this.index);
    }
  }

}
