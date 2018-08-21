import { Injectable } from '@angular/core';
import { Chat } from '@app/shared/ui/chat/chat.model';

@Injectable()
export class ChatService {
  constructor() {}

  public chat1: Chat[] = [
    new Chat(
      'right',
      'chat',
      'assets/img/portrait/small/avatar-s-1.png',
      '',
      ['How can we help? We are here for you!'],
      'text'
    ),
    new Chat(
      'left',
      'chat chat-left',
      'assets/img/portrait/small/avatar-s-3.png',
      '1 hour ago',
      [
        'Hey John, I am looking for the best admin template.',
        'Could you please help me to find it out?',
        'It should be angular 5 bootstrap compatible.'
      ],
      'text'
    ),
    new Chat(
      'right',
      'chat',
      'assets/img/portrait/small/avatar-s-1.png',
      '30 minutes ago',
      [
        'Absolutely!',
        'Apex admin is the responsive angular 5 bootstrap admin template.'
      ],
      'text'
    ),
    new Chat(
      'left',
      'chat chat-left',
      'assets/img/portrait/small/avatar-s-3.png',
      '20 minutes ago',
      ['Can you provide me audio link?'],
      'text'
    ),
    new Chat(
      'right',
      'chat',
      'assets/img/portrait/small/avatar-s-1.png',
      '',
      ['http://static.videogular.com/assets/audios/videogular.mp3'],
      'audio'
    ),
    new Chat(
      'left',
      'chat chat-left',
      'assets/img/portrait/small/avatar-s-3.png',
      '10 minutes ago',
      ['Can you provide me video link?'],
      'text'
    ),
    new Chat(
      'right',
      'chat',
      'assets/img/portrait/small/avatar-s-1.png',
      '',
      ['http://static.videogular.com/assets/videos/videogular.mp4'],
      'video'
    ),
    new Chat(
      'left',
      'chat chat-left',
      'assets/img/portrait/small/avatar-s-3.png',
      'just now',
      [
        'Looks clean and fresh UI.',
        'It is perfect for my next project.',
        'How can I purchase it?'
      ],
      'text'
    ),
    new Chat(
      'right',
      'chat',
      'assets/img/portrait/small/avatar-s-1.png',
      '',
      ['Thanks, from ThemeForest.'],
      'text'
    ),
    new Chat(
      'left',
      'chat chat-left',
      'assets/img/portrait/small/avatar-s-3.png',
      '',
      ['I will purchase it for sure.', 'Thanks.'],
      'text'
    )
  ];
  public chat2: Chat[] = [
    new Chat(
      'right',
      'chat',
      'assets/img/portrait/small/avatar-s-1.png',
      '',
      ['How can we help'],
      'text'
    ),
    new Chat(
      'left',
      'chat chat-left',
      'assets/img/portrait/small/avatar-s-7.png',
      '1 hours ago',
      [
        'Hi, I spoke with a representative yesterday.',
        'he gave me some steps to fix my problem',
        'but they didn’t help.'
      ],
      'text'
    ),
    new Chat(
      'right',
      'chat',
      'assets/img/portrait/small/avatar-s-1.png',
      '20 minutes ago',
      ['Can you provide me audio link of your conversation?'],
      'text'
    ),
    new Chat(
      'left',
      'chat chat-left',
      'assets/img/portrait/small/avatar-s-7.png',
      '',
      ['http://static.videogular.com/assets/audios/videogular.mp3'],
      'audio'
    ),
    new Chat(
      'right',
      'chat',
      'assets/img/portrait/small/avatar-s-1.png',
      '10 minutes ago',
      ['Can you provide me video link of your issue?'],
      'text'
    ),
    new Chat(
      'left',
      'chat chat-left',
      'assets/img/portrait/small/avatar-s-7.png',
      '',
      ['http://static.videogular.com/assets/videos/videogular.mp4'],
      'video'
    ),
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
      ],
      'text'
    ),
    new Chat(
      'left',
      'chat chat-left',
      'assets/img/portrait/small/avatar-s-7.png',
      '',
      ['An issue with the power.'],
      'text'
    ),
    new Chat(
      'right',
      'chat',
      'assets/img/portrait/small/avatar-s-1.png',
      '',
      ['Did you make sure the outlet you plugged it into was functional.'],
      'text'
    ),
    new Chat(
      'left',
      'chat chat-left',
      'assets/img/portrait/small/avatar-s-7.png',
      '',
      ['Yes'],
      'text'
    )
  ];
  public chat3: Chat[] = [
    new Chat(
      'right',
      'chat',
      'assets/img/portrait/small/avatar-s-1.png',
      '',
      ['How can we help'],
      'text'
    ),
    new Chat(
      'left',
      'chat chat-left',
      'assets/img/portrait/small/avatar-s-8.png',
      '1 hours ago',
      [
        'Hey John, I am looking for the best admin template.',
        'Could you please help me to find it out?',
        'It should be angular 5 bootstrap compatible.'
      ],
      'text'
    ),
    new Chat(
      'right',
      'chat',
      'assets/img/portrait/small/avatar-s-1.png',
      '',
      [
        'Absolutely!',
        'Apex admin is the responsive angular 5 bootstrap admin template.'
      ],
      'text'
    ),
    new Chat(
      'left',
      'chat chat-left',
      'assets/img/portrait/small/avatar-s-8.png',
      '20 minutes ago',
      ['Can you provide me audio link?'],
      'text'
    ),
    new Chat(
      'right',
      'chat',
      'assets/img/portrait/small/avatar-s-1.png',
      '',
      ['http://static.videogular.com/assets/audios/videogular.mp3'],
      'audio'
    ),
    new Chat(
      'left',
      'chat chat-left',
      'assets/img/portrait/small/avatar-s-8.png',
      '10 minutes ago',
      ['Can you provide me video link?'],
      'text'
    ),
    new Chat(
      'right',
      'chat',
      'assets/img/portrait/small/avatar-s-1.png',
      '',
      ['http://static.videogular.com/assets/videos/videogular.mp4'],
      'video'
    ),
    new Chat(
      'left',
      'chat chat-left',
      'assets/img/portrait/small/avatar-s-8.png',
      '',
      [
        'Looks clean and fresh UI.',
        'It is perfect for my next project.',
        'How can I purchase it?'
      ],
      'text'
    ),
    new Chat(
      'right',
      'chat',
      'assets/img/portrait/small/avatar-s-1.png',
      '',
      ['Thanks, from ThemeForest.'],
      'text'
    ),
    new Chat(
      'left',
      'chat chat-left',
      'assets/img/portrait/small/avatar-s-8.png',
      '',
      ['I will purchase it for sure.', 'Thanks.'],
      'text'
    )
  ];
  public chat4: Chat[] = [
    new Chat(
      'right',
      'chat',
      'assets/img/portrait/small/avatar-s-1.png',
      '',
      ['How can we help'],
      'text'
    ),
    new Chat(
      'left',
      'chat chat-left',
      'assets/img/portrait/small/avatar-s-5.png',
      '1 hours ago',
      [
        'Hi, I spoke with a representative yesterday.',
        'he gave me some steps to fix my problem',
        'but they didn’t help.'
      ],
      'text'
    ),
    new Chat(
      'right',
      'chat',
      'assets/img/portrait/small/avatar-s-1.png',
      '20 minutes ago',
      ['Can you provide me audio link of your conversation?'],
      'text'
    ),
    new Chat(
      'left',
      'chat chat-left',
      'assets/img/portrait/small/avatar-s-5.png',
      '',
      ['http://static.videogular.com/assets/audios/videogular.mp3'],
      'audio'
    ),
    new Chat(
      'right',
      'chat',
      'assets/img/portrait/small/avatar-s-1.png',
      '10 minutes ago',
      ['Can you provide me video link of your issue?'],
      'text'
    ),
    new Chat(
      'left',
      'chat chat-left',
      'assets/img/portrait/small/avatar-s-5.png',
      '',
      ['http://static.videogular.com/assets/videos/videogular.mp4'],
      'video'
    ),
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
      ],
      'text'
    ),
    new Chat(
      'left',
      'chat chat-left',
      'assets/img/portrait/small/avatar-s-5.png',
      '',
      ['An issue with the power.'],
      'text'
    ),
    new Chat(
      'right',
      'chat',
      'assets/img/portrait/small/avatar-s-1.png',
      '',
      ['Did you make sure the outlet you plugged it into was functional.'],
      'text'
    ),
    new Chat(
      'left',
      'chat chat-left',
      'assets/img/portrait/small/avatar-s-5.png',
      '',
      ['Yes'],
      'text'
    )
  ];
  public chat5: Chat[] = [
    new Chat(
      'right',
      'chat',
      'assets/img/portrait/small/avatar-s-1.png',
      '',
      ['How can we help'],
      'text'
    ),
    new Chat(
      'left',
      'chat chat-left',
      'assets/img/portrait/small/avatar-s-9.png',
      '1 hours ago',
      [
        'Hey John, I am looking for the best admin template.',
        'Could you please help me to find it out?',
        'It should be angular 5 bootstrap compatible.'
      ],
      'text'
    ),
    new Chat(
      'right',
      'chat',
      'assets/img/portrait/small/avatar-s-1.png',
      '',
      [
        'Absolutely!',
        'Apex admin is the responsive angular 5 bootstrap admin template.'
      ],
      'text'
    ),
    new Chat(
      'left',
      'chat chat-left',
      'assets/img/portrait/small/avatar-s-9.png',
      '20 minutes ago',
      ['Can you provide me audio link?'],
      'text'
    ),
    new Chat(
      'right',
      'chat',
      'assets/img/portrait/small/avatar-s-1.png',
      '',
      ['http://static.videogular.com/assets/audios/videogular.mp3'],
      'audio'
    ),
    new Chat(
      'left',
      'chat chat-left',
      'assets/img/portrait/small/avatar-s-9.png',
      '10 minutes ago',
      ['Can you provide me video link?'],
      'text'
    ),
    new Chat(
      'right',
      'chat',
      'assets/img/portrait/small/avatar-s-1.png',
      '',
      ['http://static.videogular.com/assets/videos/videogular.mp4'],
      'video'
    ),
    new Chat(
      'left',
      'chat chat-left',
      'assets/img/portrait/small/avatar-s-9.png',
      '',
      [
        'Looks clean and fresh UI.',
        'It is perfect for my next project.',
        'How can I purchase it?'
      ],
      'text'
    ),
    new Chat(
      'right',
      'chat',
      'assets/img/portrait/small/avatar-s-1.png',
      '',
      ['Thanks, from ThemeForest.'],
      'text'
    ),
    new Chat(
      'left',
      'chat chat-left',
      'assets/img/portrait/small/avatar-s-9.png',
      '',
      ['I will purchase it for sure.', 'Thanks.'],
      'text'
    )
  ];
  public chat6: Chat[] = [
    new Chat(
      'right',
      'chat',
      'assets/img/portrait/small/avatar-s-1.png',
      '',
      ['How can we help'],
      'text'
    ),
    new Chat(
      'left',
      'chat chat-left',
      'assets/img/portrait/small/avatar-s-4.png',
      '1 hours ago',
      [
        'Hi, I spoke with a representative yesterday.',
        'he gave me some steps to fix my problem',
        'but they didn’t help.'
      ],
      'text'
    ),
    new Chat(
      'right',
      'chat',
      'assets/img/portrait/small/avatar-s-1.png',
      '20 minutes ago',
      ['Can you provide me audio link of your conversation?'],
      'text'
    ),
    new Chat(
      'left',
      'chat chat-left',
      'assets/img/portrait/small/avatar-s-4.png',
      '',
      ['http://static.videogular.com/assets/audios/videogular.mp3'],
      'audio'
    ),
    new Chat(
      'right',
      'chat',
      'assets/img/portrait/small/avatar-s-1.png',
      '10 minutes ago',
      ['Can you provide me video link of your issue?'],
      'text'
    ),
    new Chat(
      'left',
      'chat chat-left',
      'assets/img/portrait/small/avatar-s-4.png',
      '',
      ['http://static.videogular.com/assets/videos/videogular.mp4'],
      'video'
    ),
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
      ],
      'text'
    ),
    new Chat(
      'left',
      'chat chat-left',
      'assets/img/portrait/small/avatar-s-4.png',
      '',
      ['An issue with the power.'],
      'text'
    ),
    new Chat(
      'right',
      'chat',
      'assets/img/portrait/small/avatar-s-1.png',
      '',
      ['Did you make sure the outlet you plugged it into was functional.'],
      'text'
    ),
    new Chat(
      'left',
      'chat chat-left',
      'assets/img/portrait/small/avatar-s-4.png',
      '',
      ['Yes'],
      'text'
    )
  ];
  public chat7: Chat[] = [
    new Chat(
      'right',
      'chat',
      'assets/img/portrait/small/avatar-s-1.png',
      '',
      ['How can we help'],
      'text'
    ),
    new Chat(
      'left',
      'chat chat-left',
      'assets/img/portrait/small/avatar-s-14.png',
      '1 hours ago',
      [
        'Hey John, I am looking for the best admin template.',
        'Could you please help me to find it out?',
        'It should be angular 4 bootstrap compatible.'
      ],
      'text'
    ),
    new Chat(
      'right',
      'chat',
      'assets/img/portrait/small/avatar-s-1.png',
      '',
      [
        'Absolutely!',
        'Apex admin is the responsive angular 4 bootstrap admin template.'
      ],
      'text'
    ),
    new Chat(
      'left',
      'chat chat-left',
      'assets/img/portrait/small/avatar-s-14.png',
      '20 minutes ago',
      ['Can you provide me audio link?'],
      'text'
    ),
    new Chat(
      'right',
      'chat',
      'assets/img/portrait/small/avatar-s-1.png',
      '',
      ['http://static.videogular.com/assets/audios/videogular.mp3'],
      'audio'
    ),
    new Chat(
      'left',
      'chat chat-left',
      'assets/img/portrait/small/avatar-s-14.png',
      '10 minutes ago',
      ['Can you provide me video link?'],
      'text'
    ),
    new Chat(
      'right',
      'chat',
      'assets/img/portrait/small/avatar-s-1.png',
      '',
      ['http://static.videogular.com/assets/videos/videogular.mp4'],
      'video'
    ),
    new Chat(
      'left',
      'chat chat-left',
      'assets/img/portrait/small/avatar-s-14.png',
      '',
      [
        'Looks clean and fresh UI.',
        'It is perfect for my next project.',
        'How can I purchase it?'
      ],
      'text'
    ),
    new Chat(
      'right',
      'chat',
      'assets/img/portrait/small/avatar-s-1.png',
      '',
      ['Thanks, from ThemeForest.'],
      'text'
    ),
    new Chat(
      'left',
      'chat chat-left',
      'assets/img/portrait/small/avatar-s-14.png',
      '',
      ['I will purchase it for sure.', 'Thanks.'],
      'text'
    )
  ];
}
