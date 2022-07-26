import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-opacity-overlay',
  templateUrl: './opacity-overlay.component.html',
  styleUrls: ['./opacity-overlay.component.css']
})
export class OpacityOverlayComponent implements OnInit {

  @Output() closeForm = new  EventEmitter<boolean>;
  
  constructor() { }

  ngOnInit(): void {
  }

  closeFormWindow() {
    this.closeForm.emit(false);
  }

}
