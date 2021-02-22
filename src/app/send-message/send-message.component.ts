import { Component, OnInit } from '@angular/core';
import { MessageFetcherService } from '../message-fetcher.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.scss']
})
export class SendMessageComponent implements OnInit {

  phoneNumber = new FormControl('');
  message = new FormControl('');

  constructor(private _messageFetcher: MessageFetcherService) { }

  ngOnInit() {
  }

  sendMessage(message: FormControl, phoneNumber: FormControl){
    return this._messageFetcher.sendMessage(message.value, phoneNumber.value);
    // console.log(phoneNumber.value, message.value);
  }

}
