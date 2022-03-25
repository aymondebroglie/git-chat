import {Component, Input, OnInit} from '@angular/core';
import {GitService} from "../git-service.service";

@Component({
  selector: 'app-channel-selector',
  templateUrl: './channel-selector.component.html',
  styleUrls: ['./channel-selector.component.css']
})
export class ChannelSelectorComponent implements OnInit {

  @Input() repoUrl : string =  ''

  constructor( private git  : GitService ) { }

  ngOnInit(): void {
    this.git.cloneRepo(this.repoUrl).then(console.log);
  }

}
