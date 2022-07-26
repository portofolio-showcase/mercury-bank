import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-nav-bar', // formely app-home
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {







  constructor() { }

  ngOnInit(): void {
  }


  public showSettingsForm : boolean = false;
  showSettingsFormToggler() : boolean {
    this.showSettingsForm = !this.showSettingsForm;
    return this.showSettingsForm; 
  }

}
