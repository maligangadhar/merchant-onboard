import { Component, OnInit } from '@angular/core';
import { MerchantService } from '../../../apis/merchant.service';
@Component({
  selector: 'app-application-detail',
  templateUrl: './application-detail.component.html',
  styleUrls: ['./application-detail.component.scss']
})
export class ApplicationDetailComponent implements OnInit {

  constructor(private merchantService: MerchantService) { }
  ngOnInit() {}
}
