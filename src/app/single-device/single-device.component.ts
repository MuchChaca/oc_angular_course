import { DeviceService } from './../services/device.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-device',
  templateUrl: './single-device.component.html',
  styleUrls: ['./single-device.component.scss']
})
export class SingleDeviceComponent implements OnInit {

  name = 'Device';
  status = 'Status';

  constructor(private deviceService: DeviceService,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.name = this.deviceService.getDeviceById(+id).name;
    this.status = this.deviceService.getDeviceById(+id).status;
  }

}
