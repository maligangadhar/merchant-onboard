import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BroadcastService } from '../../../apis/broadcast.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(private router: Router, private broadcast: BroadcastService) { }

  ngOnInit() {
  }
  navToMerchant = () => {
    this.router.navigate(['applicationView']);
    this.broadcast.broadcast('onboarding', 'applicationView' );
  }
}
