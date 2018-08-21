import { Chat } from '@app/shared/ui/chat-ngrx/chat-ngrx.model';
import * as ChatActions from '@app/shared/ui/chat-ngrx/store/chat.actions';

export interface FeatureState {
    chat: State;
}

export interface State {
    chat1: Chat[];
    chat2: Chat[];
    chat3: Chat[];
    chat4: Chat[];
    chat5: Chat[];
    chat6: Chat[];
    chat7: Chat[];
}

const initialState: State = {
    chat1: [
        new Chat(
            'right',
            'chat',
            'assets/img/portrait/small/avatar-s-1.png',
            '',
            [
                'How can we help? We are here for you!'
            ],
            'text'),
        new Chat(
            'left',
            'chat chat-left',
            'assets/img/portrait/small/avatar-s-3.png',
            '1 hour ago',
            [
                'Hey John, I am looking for the best admin template.',
                'Could you please help me to find it out?',
                'It should be angular 5 bootstrap compatible.'
            ]
            , 'text'),
        new Chat(
            'right',
            'chat',
            'assets/img/portrait/small/avatar-s-1.png',
            '30 minutes ago',
            [
                'Absolutely!',
                'Apex admin is the responsive angular 5 bootstrap admin template.'
            ]
            , 'text'),
        new Chat(
            'left',
            'chat chat-left',
            'assets/img/portrait/small/avatar-s-3.png',
            '20 minutes ago',
            [
                'Can you provide me audio link?'
            ]
            , 'text'),
        new Chat(
            'right',
            'chat',
            'assets/img/portrait/small/avatar-s-1.png',
            '',
            [
                'http://static.videogular.com/assets/audios/videogular.mp3'
            ]
            , 'audio'),
        new Chat(
            'left',
            'chat chat-left',
            'assets/img/portrait/small/avatar-s-3.png',
            '10 minutes ago',
            [
                'Can you provide me video link?'
            ]
            , 'text'),
        new Chat(
            'right',
            'chat',
            'assets/img/portrait/small/avatar-s-1.png',
            '',
            [
                'http://static.videogular.com/assets/videos/videogular.mp4'
            ]
            , 'video'),
        new Chat(
            'left',
            'chat chat-left',
            'assets/img/portrait/small/avatar-s-3.png',
            'just now',
            [
                'Looks clean and fresh UI.',
                'It is perfect for my next project.',
                'How can I purchase it?'
            ]
            , 'text'),
        new Chat(
            'right',
            'chat',
            'assets/img/portrait/small/avatar-s-1.png',
            '',
            [
                'Thanks, from ThemeForest.'
            ]
            , 'text'),
        new Chat(
            'left',
            'chat chat-left',
            'assets/img/portrait/small/avatar-s-3.png',
            '',
            [
                'I will purchase it for sure.',
                'Thanks.'
            ]
            , 'text'),
    ],
    chat2: [
        new Chat(
            'right',
            'chat',
            'assets/img/portrait/small/avatar-s-1.png',
            '',
            [
                'How can we help'
            ]
            , 'text'),
        new Chat(
            'left',
            'chat chat-left',
            'assets/img/portrait/small/avatar-s-7.png',
            '1 hours ago',
            [
                'Hi, I spoke with a representative yesterday.',
                'he gave me some steps to fix my problem',
                'but they didn’t help.'
            ]
            , 'text'),
        new Chat(
            'right',
            'chat',
            'assets/img/portrait/small/avatar-s-1.png',
            '20 minutes ago',
            [
                'Can you provide me audio link of your conversation?'
            ]
            , 'text'),
        new Chat(
            'left',
            'chat chat-left',
            'assets/img/portrait/small/avatar-s-7.png',
            '',
            [
                'http://static.videogular.com/assets/audios/videogular.mp3'
            ]
            , 'audio'),
        new Chat(
            'right',
            'chat',
            'assets/img/portrait/small/avatar-s-1.png',
            '10 minutes ago',
            [
                'Can you provide me video link of your issue?'
            ]
            , 'text'),
        new Chat(
            'left',
            'chat chat-left',
            'assets/img/portrait/small/avatar-s-7.png',
            '',
            [
                'http://static.videogular.com/assets/videos/videogular.mp4'
            ]
            , 'video'),
        new Chat(
            'right',
            'chat',
            'assets/img/portrait/small/avatar-s-1.png',
            '',
            [
                'I’m sorry to hear that',
                'Can I ask which model of projector you own?',
                'What steps did he suggest you to take?',
                'What sort of issue are you having?'
            ]
            , 'text'),
        new Chat(
            'left',
            'chat chat-left',
            'assets/img/portrait/small/avatar-s-7.png',
            '',
            [
                'An issue with the power.'
            ]
            , 'text'),
        new Chat(
            'right',
            'chat',
            'assets/img/portrait/small/avatar-s-1.png',
            '',
            [
                'Did you make sure the outlet you plugged it into was functional.'
            ]
            , 'text'),
        new Chat(
            'left',
            'chat chat-left',
            'assets/img/portrait/small/avatar-s-7.png',
            '',
            [
                'Yes'
            ]
            , 'text'),
    ],
    chat3: [
        new Chat(
            'right',
            'chat',
            'assets/img/portrait/small/avatar-s-1.png',
            '',
            [
                'How can we help'
            ]
            , 'text'),
        new Chat(
            'left',
            'chat chat-left',
            'assets/img/portrait/small/avatar-s-8.png',
            '1 hours ago',
            [
                'Hey John, I am looking for the best admin template.',
                'Could you please help me to find it out?',
                'It should be angular 5 bootstrap compatible.'
            ]
            , 'text'),
        new Chat(
            'right',
            'chat',
            'assets/img/portrait/small/avatar-s-1.png',
            '',
            [
                'Absolutely!',
                'Apex admin is the responsive angular 5 bootstrap admin template.'
            ]
            , 'text'),
        new Chat(
            'left',
            'chat chat-left',
            'assets/img/portrait/small/avatar-s-8.png',
            '20 minutes ago',
            [
                'Can you provide me audio link?'
            ]
            , 'text'),
        new Chat(
            'right',
            'chat',
            'assets/img/portrait/small/avatar-s-1.png',
            '',
            [
                'http://static.videogular.com/assets/audios/videogular.mp3'
            ]
            , 'audio'),
        new Chat(
            'left',
            'chat chat-left',
            'assets/img/portrait/small/avatar-s-8.png',
            '10 minutes ago',
            [
                'Can you provide me video link?'
            ]
            , 'text'),
        new Chat(
            'right',
            'chat',
            'assets/img/portrait/small/avatar-s-1.png',
            '',
            [
                'http://static.videogular.com/assets/videos/videogular.mp4'
            ]
            , 'video'),
        new Chat(
            'left',
            'chat chat-left',
            'assets/img/portrait/small/avatar-s-8.png',
            '',
            [
                'Looks clean and fresh UI.',
                'It is perfect for my next project.',
                'How can I purchase it?'
            ]
            , 'text'),
        new Chat(
            'right',
            'chat',
            'assets/img/portrait/small/avatar-s-1.png',
            '',
            [
                'Thanks, from ThemeForest.'
            ]
            , 'text'),
        new Chat(
            'left',
            'chat chat-left',
            'assets/img/portrait/small/avatar-s-8.png',
            '',
            [
                'I will purchase it for sure.',
                'Thanks.'
            ]
            , 'text'),
    ],
    chat4: [
        new Chat(
            'right',
            'chat',
            'assets/img/portrait/small/avatar-s-1.png',
            '',
            [
                'How can we help'
            ]
            , 'text'),
        new Chat(
            'left',
            'chat chat-left',
            'assets/img/portrait/small/avatar-s-5.png',
            '1 hours ago',
            [
                'Hi, I spoke with a representative yesterday.',
                'he gave me some steps to fix my problem',
                'but they didn’t help.'
            ]
            , 'text'),
        new Chat(
            'right',
            'chat',
            'assets/img/portrait/small/avatar-s-1.png',
            '20 minutes ago',
            [
                'Can you provide me audio link of your conversation?'
            ]
            , 'text'),
        new Chat(
            'left',
            'chat chat-left',
            'assets/img/portrait/small/avatar-s-5.png',
            '',
            [
                'http://static.videogular.com/assets/audios/videogular.mp3'
            ]
            , 'audio'),
        new Chat(
            'right',
            'chat',
            'assets/img/portrait/small/avatar-s-1.png',
            '10 minutes ago',
            [
                'Can you provide me video link of your issue?'
            ]
            , 'text'),
        new Chat(
            'left',
            'chat chat-left',
            'assets/img/portrait/small/avatar-s-5.png',
            '',
            [
                'http://static.videogular.com/assets/videos/videogular.mp4'
            ]
            , 'video'),
        new Chat(
            'right',
            'chat',
            'assets/img/portrait/small/avatar-s-1.png',
            '',
            [
                'I’m sorry to hear that',
                'Can I ask which model of projector you own?',
                'What steps did he suggest you to take?',
                'What sort of issue are you having?'
            ]
            , 'text'),
        new Chat(
            'left',
            'chat chat-left',
            'assets/img/portrait/small/avatar-s-5.png',
            '',
            [
                'An issue with the power.'
            ]
            , 'text'),
        new Chat(
            'right',
            'chat',
            'assets/img/portrait/small/avatar-s-1.png',
            '',
            [
                'Did you make sure the outlet you plugged it into was functional.'
            ]
            , 'text'),
        new Chat(
            'left',
            'chat chat-left',
            'assets/img/portrait/small/avatar-s-5.png',
            '',
            [
                'Yes'
            ]
            , 'text'),
    ],
    chat5: [
        new Chat(
            'right',
            'chat',
            'assets/img/portrait/small/avatar-s-1.png',
            '',
            [
                'How can we help'
            ]
            , 'text'),
        new Chat(
            'left',
            'chat chat-left',
            'assets/img/portrait/small/avatar-s-9.png',
            '1 hours ago',
            [
                'Hey John, I am looking for the best admin template.',
                'Could you please help me to find it out?',
                'It should be angular 5 bootstrap compatible.'
            ]
            , 'text'),
        new Chat(
            'right',
            'chat',
            'assets/img/portrait/small/avatar-s-1.png',
            '',
            [
                'Absolutely!',
                'Apex admin is the responsive angular 5 bootstrap admin template.'
            ]
            , 'text'),
        new Chat(
            'left',
            'chat chat-left',
            'assets/img/portrait/small/avatar-s-9.png',
            '20 minutes ago',
            [
                'Can you provide me audio link?'
            ]
            , 'text'),
        new Chat(
            'right',
            'chat',
            'assets/img/portrait/small/avatar-s-1.png',
            '',
            [
                'http://static.videogular.com/assets/audios/videogular.mp3'
            ]
            , 'audio'),
        new Chat(
            'left',
            'chat chat-left',
            'assets/img/portrait/small/avatar-s-9.png',
            '10 minutes ago',
            [
                'Can you provide me video link?'
            ]
            , 'text'),
        new Chat(
            'right',
            'chat',
            'assets/img/portrait/small/avatar-s-1.png',
            '',
            [
                'http://static.videogular.com/assets/videos/videogular.mp4'
            ]
            , 'video'),
        new Chat(
            'left',
            'chat chat-left',
            'assets/img/portrait/small/avatar-s-9.png',
            '',
            [
                'Looks clean and fresh UI.',
                'It is perfect for my next project.',
                'How can I purchase it?'
            ]
            , 'text'),
        new Chat(
            'right',
            'chat',
            'assets/img/portrait/small/avatar-s-1.png',
            '',
            [
                'Thanks, from ThemeForest.'
            ]
            , 'text'),
        new Chat(
            'left',
            'chat chat-left',
            'assets/img/portrait/small/avatar-s-9.png',
            '',
            [
                'I will purchase it for sure.',
                'Thanks.'
            ]
            , 'text'),
    ],
    chat6: [
        new Chat(
            'right',
            'chat',
            'assets/img/portrait/small/avatar-s-1.png',
            '',
            [
                'How can we help'
            ]
            , 'text'),
        new Chat(
            'left',
            'chat chat-left',
            'assets/img/portrait/small/avatar-s-4.png',
            '1 hours ago',
            [
                'Hi, I spoke with a representative yesterday.',
                'he gave me some steps to fix my problem',
                'but they didn’t help.'
            ]
            , 'text'),
        new Chat(
            'right',
            'chat',
            'assets/img/portrait/small/avatar-s-1.png',
            '20 minutes ago',
            [
                'Can you provide me audio link of your conversation?'
            ]
            , 'text'),
        new Chat(
            'left',
            'chat chat-left',
            'assets/img/portrait/small/avatar-s-4.png',
            '',
            [
                'http://static.videogular.com/assets/audios/videogular.mp3'
            ]
            , 'audio'),
        new Chat(
            'right',
            'chat',
            'assets/img/portrait/small/avatar-s-1.png',
            '10 minutes ago',
            [
                'Can you provide me video link of your issue?'
            ]
            , 'text'),
        new Chat(
            'left',
            'chat chat-left',
            'assets/img/portrait/small/avatar-s-4.png',
            '',
            [
                'http://static.videogular.com/assets/videos/videogular.mp4'
            ]
            , 'video'),
        new Chat(
            'right',
            'chat',
            'assets/img/portrait/small/avatar-s-1.png',
            '',
            [
                'I’m sorry to hear that',
                'Can I ask which model of projector you own?',
                'What steps did he suggest you to take?',
                'What sort of issue are you having?'
            ]
            , 'text'),
        new Chat(
            'left',
            'chat chat-left',
            'assets/img/portrait/small/avatar-s-4.png',
            '',
            [
                'An issue with the power.'
            ]
            , 'text'),
        new Chat(
            'right',
            'chat',
            'assets/img/portrait/small/avatar-s-1.png',
            '',
            [
                'Did you make sure the outlet you plugged it into was functional.'
            ]
            , 'text'),
        new Chat(
            'left',
            'chat chat-left',
            'assets/img/portrait/small/avatar-s-4.png',
            '',
            [
                'Yes'
            ]
            , 'text'),
    ],
    chat7: [
        new Chat(
            'right',
            'chat',
            'assets/img/portrait/small/avatar-s-1.png',
            '',
            [
                'How can we help'
            ]
            , 'text'),
        new Chat(
            'left',
            'chat chat-left',
            'assets/img/portrait/small/avatar-s-14.png',
            '1 hours ago',
            [
                'Hey John, I am looking for the best admin template.',
                'Could you please help me to find it out?',
                'It should be angular 4 bootstrap compatible.'
            ]
            , 'text'),
        new Chat(
            'right',
            'chat',
            'assets/img/portrait/small/avatar-s-1.png',
            '',
            [
                'Absolutely!',
                'Apex admin is the responsive angular 4 bootstrap admin template.'
            ]
            , 'text'),
        new Chat(
            'left',
            'chat chat-left',
            'assets/img/portrait/small/avatar-s-14.png',
            '20 minutes ago',
            [
                'Can you provide me audio link?'
            ]
            , 'text'),
        new Chat(
            'right',
            'chat',
            'assets/img/portrait/small/avatar-s-1.png',
            '',
            [
                'http://static.videogular.com/assets/audios/videogular.mp3'
            ]
            , 'audio'),
        new Chat(
            'left',
            'chat chat-left',
            'assets/img/portrait/small/avatar-s-14.png',
            '10 minutes ago',
            [
                'Can you provide me video link?'
            ]
            , 'text'),
        new Chat(
            'right',
            'chat',
            'assets/img/portrait/small/avatar-s-1.png',
            '',
            [
                'http://static.videogular.com/assets/videos/videogular.mp4'
            ]
            , 'video'),
        new Chat(
            'left',
            'chat chat-left',
            'assets/img/portrait/small/avatar-s-14.png',
            '',
            [
                'Looks clean and fresh UI.',
                'It is perfect for my next project.',
                'How can I purchase it?'
            ]
            , 'text'),
        new Chat(
            'right',
            'chat',
            'assets/img/portrait/small/avatar-s-1.png',
            '',
            [
                'Thanks, from ThemeForest.'
            ]
            , 'text'),
        new Chat(
            'left',
            'chat chat-left',
            'assets/img/portrait/small/avatar-s-14.png',
            '',
            [
                'I will purchase it for sure.',
                'Thanks.'
            ]
            , 'text'),
    ]

};

export function chatReducer(state = initialState, action: ChatActions.ChatActions) {
    switch (action.type) {
        case (ChatActions.ADD_CHAT1):
            const chat1 = [...state.chat1];
            return {
                ...state,
                chat1: [...state.chat1, action.payload]
            };
        case (ChatActions.ADD_CHAT2):
            const chat2 = [...state.chat2];
            return {
                ...state,
                chat2: [...state.chat2, action.payload]
            };
        case (ChatActions.ADD_CHAT3):
            const chat3 = [...state.chat3];
            return {
                ...state,
                chat3: [...state.chat3, action.payload]
            };
        case (ChatActions.ADD_CHAT4):
            const chat4 = [...state.chat4];
            return {
                ...state,
                chat4: [...state.chat4, action.payload]
            };
        case (ChatActions.ADD_CHAT5):
            const chat5 = [...state.chat5];
            return {
                ...state,
                chat5: [...state.chat5, action.payload]
            };
        case (ChatActions.ADD_CHAT6):
            const chat6 = [...state.chat6];
            return {
                ...state,
                chat6: [...state.chat6, action.payload]
            };
        case (ChatActions.ADD_CHAT7):
            const chat7 = [...state.chat7];
            return {
                ...state,
                chat7: [...state.chat7, action.payload]
            };
        default:
            return state;
    }
}
