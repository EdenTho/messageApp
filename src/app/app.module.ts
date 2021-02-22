import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { MessageFetcherService } from './message-fetcher.service';
import { SendMessageComponent } from './send-message/send-message.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageBoardComponent } from './message-board/message-board.component';
import { MessageBubbleComponent } from './message-bubble/message-bubble.component';

@NgModule({
  declarations: [
    AppComponent,
    SendMessageComponent,
    MessageBoardComponent,
    MessageBubbleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [MessageFetcherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
