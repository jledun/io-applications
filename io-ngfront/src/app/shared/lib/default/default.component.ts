import { Component, OnInit } from '@angular/core';
import { IoRunTimeDatasService } from '../io-run-time-datas.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    IoRunTimeDatasService.setDataLoading(false);
  }

}
