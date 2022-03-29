import {Component, Input, OnInit} from '@angular/core';
import {ReadCommitResult} from "isomorphic-git";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent  {

  @Input()
  message!: ReadCommitResult;
  constructor() { }


}
