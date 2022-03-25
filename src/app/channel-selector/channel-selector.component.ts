import { Component, OnInit } from '@angular/core';
import {GitService} from "../git-service.service";

@Component({
  selector: 'app-channel-selector',
  templateUrl: './channel-selector.component.html',
  styleUrls: ['./channel-selector.component.css']
})
export class ChannelSelectorComponent implements OnInit {

  constructor( private git  : GitService ) { }

  ngOnInit(): void {
    this.git.cloneRepo();
  }

}
