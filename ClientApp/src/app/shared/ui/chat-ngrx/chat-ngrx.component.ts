import { Component, ViewChild, ElementRef, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Chat } from '@app/shared/ui/chat-ngrx/chat-ngrx.model';

import { Store } from '@ngrx/store';
import { Observable ,  Subscription } from 'rxjs';

import * as ChatActions from '@app/shared/ui/chat-ngrx/store/chat.actions';
import * as fromChat from '@app/shared/ui/chat-ngrx/store/chat.reducers';

@Component({
  selector: 'app-ngrx-chat',
  templateUrl: './chat-ngrx.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./chat-ngrx.component.scss']
})
export class ChatComponent implements OnInit {

  chat: Chat[];
  activeChatUser: string;
  activeChatUserImg: string;
  currentChatId: string = 'chat1';
  subscription: Subscription;
  chatState: Observable<fromChat.State>;
  @ViewChild('messageInput') messageInputRef: ElementRef;

  messages = new Array();
  item: number = 0;
  constructor(private elRef: ElementRef,
    private store: Store<fromChat.FeatureState>) {
  }

  ngOnInit() {
    $.getScript('./assets/js/chat.js');
    this.chatState = this.store.select('chat');
    this.subscription = this.chatState.subscribe(
      data => {
        this.chat = data.chat1;
        this.activeChatUser = "Elizabeth Elliott";
        this.activeChatUserImg = "assets/img/portrait/small/avatar-s-3.png";
      }
    );
  }

  //send button function calls
  onAddMessage() {
    if (this.messageInputRef.nativeElement.value != "") {
      if (this.currentChatId === 'chat1') {
        this.store.dispatch(new ChatActions.AddChat1(new Chat(
          'right',
          'chat',
          'assets/img/portrait/small/avatar-s-1.png',
          '',
          [
            this.messageInputRef.nativeElement.value
          ],
          'text'), ));
      }
      else if (this.currentChatId === 'chat2') {
        this.store.dispatch(new ChatActions.AddChat2(new Chat(
          'right',
          'chat',
          'assets/img/portrait/small/avatar-s-1.png',
          '',
          [
            this.messageInputRef.nativeElement.value
          ],
          'text'), ));
      }
      else if (this.currentChatId === 'chat3') {
        this.store.dispatch(new ChatActions.AddChat3(new Chat(
          'right',
          'chat',
          'assets/img/portrait/small/avatar-s-1.png',
          '',
          [
            this.messageInputRef.nativeElement.value
          ],
          'text'), ));
      }
      else if (this.currentChatId === 'chat4') {
        this.store.dispatch(new ChatActions.AddChat4(new Chat(
          'right',
          'chat',
          'assets/img/portrait/small/avatar-s-1.png',
          '',
          [
            this.messageInputRef.nativeElement.value
          ],
          'text'), ));
      }
      else if (this.currentChatId === 'chat5') {
        this.store.dispatch(new ChatActions.AddChat5(new Chat(
          'right',
          'chat',
          'assets/img/portrait/small/avatar-s-1.png',
          '',
          [
            this.messageInputRef.nativeElement.value
          ],
          'text'), ));
      }
      else if (this.currentChatId === 'chat6') {
        this.store.dispatch(new ChatActions.AddChat6(new Chat(
          'right',
          'chat',
          'assets/img/portrait/small/avatar-s-1.png',
          '',
          [
            this.messageInputRef.nativeElement.value
          ],
          'text'), ));
      }
      else if (this.currentChatId === 'chat7') {
        this.store.dispatch(new ChatActions.AddChat7(new Chat(
          'right',
          'chat',
          'assets/img/portrait/small/avatar-s-1.png',
          '',
          [
            this.messageInputRef.nativeElement.value
          ],
          'text'), ));
      }

    }
    this.messageInputRef.nativeElement.value = "";
    this.messageInputRef.nativeElement.focus();
  }

  //chat user list click event function
  SetActive(event, chatId: string) {
    this.currentChatId = chatId;
    var hElement: HTMLElement = this.elRef.nativeElement;
    //now you can simply get your elements with their class name
    var allAnchors = hElement.getElementsByClassName('list-group-item');
    //do something with selected elements
    [].forEach.call(allAnchors, function (item: HTMLElement) {
      item.setAttribute('class', 'list-group-item no-border');
    });
    //set active class for selected item
    event.currentTarget.setAttribute('class', 'list-group-item bg-blue-grey bg-lighten-5 border-right-primary border-right-2');

    this.messages = [];

    if (chatId === 'chat1') {
      this.subscription = this.store.select('chat').subscribe(
        data => {
          this.chat = data.chat1;
          this.activeChatUser = "Elizabeth Elliott";
          this.activeChatUserImg = "assets/img/portrait/small/avatar-s-3.png";
        }
      );
    }
    else if (chatId === 'chat2') {
      this.subscription = this.store.select('chat').subscribe(
        data => {
          this.chat = data.chat2;
          this.activeChatUser = "Kristopher Candy";
          this.activeChatUserImg = "assets/img/portrait/small/avatar-s-7.png";
        }
      );
    }
    else if (chatId === 'chat3') {
      this.subscription = this.store.select('chat').subscribe(
        data => {
          this.chat = data.chat3;
          this.activeChatUser = "Sarah Woods";
          this.activeChatUserImg = "assets/img/portrait/small/avatar-s-8.png";
        }
      );
    }
    else if (chatId === 'chat4') {
      this.subscription = this.store.select('chat').subscribe(
        data => {
          this.chat = data.chat4;
          this.activeChatUser = "Bruce Reid";
          this.activeChatUserImg = "assets/img/portrait/small/avatar-s-5.png";
        }
      );
    }
    else if (chatId === 'chat5') {
      this.subscription = this.store.select('chat').subscribe(
        data => {
          this.chat = data.chat5;
          this.activeChatUser = "Heather Howell";
          this.activeChatUserImg = "assets/img/portrait/small/avatar-s-9.png";
        }
      );
    }
    else if (chatId === 'chat6') {
      this.subscription = this.store.select('chat').subscribe(
        data => {
          this.chat = data.chat6;
          this.activeChatUser = "Kelly Reyes";
          this.activeChatUserImg = "assets/img/portrait/small/avatar-s-4.png";
        }
      );
    }
    else if (chatId === 'chat7') {
      this.subscription = this.store.select('chat').subscribe(
        data => {
          this.chat = data.chat7;
          this.activeChatUser = "Vincent Nelson";
          this.activeChatUserImg = "assets/img/portrait/small/avatar-s-14.png";
        }
      );
    }

  }

}
