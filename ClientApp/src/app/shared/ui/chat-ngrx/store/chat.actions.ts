import { Action } from '@ngrx/store';

import { Chat } from '@app/shared/ui/chat-ngrx/chat-ngrx.model';

export const ADD_CHAT1 = 'ADD_CHAT1';
export const ADD_CHAT2 = 'ADD_CHAT2';
export const ADD_CHAT3 = 'ADD_CHAT3';
export const ADD_CHAT4 = 'ADD_CHAT4';
export const ADD_CHAT5 = 'ADD_CHAT5';
export const ADD_CHAT6 = 'ADD_CHAT6';
export const ADD_CHAT7 = 'ADD_CHAT7';

export class AddChat1 implements Action {
    readonly type = ADD_CHAT1;

    constructor(public payload: Chat) { }
}
export class AddChat2 implements Action {
    readonly type = ADD_CHAT2;

    constructor(public payload: Chat) { }
}
export class AddChat3 implements Action {
    readonly type = ADD_CHAT3;

    constructor(public payload: Chat) { }
}
export class AddChat4 implements Action {
    readonly type = ADD_CHAT4;

    constructor(public payload: Chat) { }
}
export class AddChat5 implements Action {
    readonly type = ADD_CHAT5;

    constructor(public payload: Chat) { }
}
export class AddChat6 implements Action {
    readonly type = ADD_CHAT6;

    constructor(public payload: Chat) { }
}
export class AddChat7 implements Action {
    readonly type = ADD_CHAT7;

    constructor(public payload: Chat) { }
}


export type ChatActions = AddChat1 | AddChat2 | AddChat3 | AddChat4 | AddChat5 | AddChat6 | AddChat7  ;
