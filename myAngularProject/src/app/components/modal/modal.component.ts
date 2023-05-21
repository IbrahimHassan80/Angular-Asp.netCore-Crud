import { Component} from '@angular/core';
import { ViewEncapsulation, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
//import { ModalService} from 'src/app/services/modal.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
    constructor() {}
  
    ngOnInit() {}
    
    displayStyle = "none";
    
    openPopup() {
      this.displayStyle = "block";
    }
    closePopup() {
      this.displayStyle = "none";
    }
}