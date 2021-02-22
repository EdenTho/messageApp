import { Component, OnInit } from '@angular/core';
import { MessageFetcherService } from '../message-fetcher.service';
import { IMessage } from '../message';

@Component({
  selector: 'app-message-board',
  templateUrl: './message-board.component.html',
  styleUrls: ['./message-board.component.scss']
})
export class MessageBoardComponent implements OnInit {

  public messages : IMessage[] = [];

  constructor(private _messageFetcher: MessageFetcherService) { }

  ngOnInit() {
    this._messageFetcher.getMessages()
    .subscribe(data => this.messages = data);
  }

  stringifyResponse(response: object){
    console.dir(response);
    return JSON.stringify(response);
  }

}
