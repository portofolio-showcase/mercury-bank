import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-demo-settings-form',
  templateUrl: './demo-settings-form.component.html',
  styleUrls: ['./demo-settings-form.component.css']
})
export class DemoSettingsFormComponent implements OnInit {

  @Output() closeForm = new  EventEmitter<boolean>;

  constructor() { }

  ngOnInit(): void {
  }

  closeFormWindow() {
    this.closeForm.emit(false);
  }

}
