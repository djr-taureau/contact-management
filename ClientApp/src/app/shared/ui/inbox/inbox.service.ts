import { Injectable } from '@angular/core';
import {
  Mail,
  Message,
  MessageDetail,
  Attachments
} from '@app/shared/ui/inbox/inbox.model';

@Injectable()
export class InboxService {
  constructor() {}

  public inbox: Mail[] = [
    new Mail(
      1,
      'Tonny Deep',
      'PixInvent, I found you...',
      'I would be good.',
      '4:14 AM',
      false,
      false,
      false,
      false,
      '',
      'T',
      'bg-info',
      'Inbox',
      true,
      'Family',
      'badge badge-danger mr-1',
      false
    ),
    new Mail(
      2,
      'Louis Welch',
      'Thanks, Let us do it.',
      'Can we connect today...',
      '2:15 AM',
      false,
      false,
      true,
      false,
      '',
      'L',
      'bg-danger',
      'Inbox',
      false,
      '',
      '',
      false
    ),
    new Mail(
      3,
      'Envato Market',
      'You have new comment...',
      'Hi Pixinvent...',
      '11:18 PM',
      false,
      false,
      false,
      false,
      '',
      'E',
      'bg-warning',
      'Inbox',
      true,
      'Work',
      'badge badge-warning mr-1',
      false
    ),
    new Mail(
      4,
      'Wayne Burton',
      'Project ABC Status...',
      'Andy, Let us...',
      'Today',
      true,
      true,
      false,
      true,
      'assets/img/portrait/small/avatar-s-7.png',
      '',
      '',
      'Inbox',
      true,
      'Private',
      'badge badge-success mr-1',
      true
    ),
    new Mail(
      5,
      'Sarah Montgomery',
      'Your New UI.',
      'Everything looks good.',
      'Yesterday',
      true,
      true,
      false,
      true,
      'assets/img/portrait/small/avatar-s-5.png',
      '',
      '',
      'Inbox',
      true,
      'Friends',
      'badge badge-primary mr-1',
      false
    ),
    new Mail(
      6,
      'Heather Howell',
      'Thanks, Let us do it.',
      'Can we connect today...',
      '15 July',
      true,
      false,
      true,
      false,
      '',
      'H',
      'bg-success',
      'Inbox',
      false,
      '',
      '',
      false
    ),
    new Mail(
      7,
      'Kelly Reyes',
      'I paid it, Thanks.',
      'Check once...',
      '12 July',
      false,
      false,
      true,
      true,
      'assets/img/portrait/small/avatar-s-8.png',
      '',
      '',
      'Inbox',
      true,
      'Work',
      'badge badge-warning mr-1',
      false
    ),
    new Mail(
      8,
      'Vincent Nelson',
      'Where are you John?',
      'Party tonight ?',
      '11 July',
      true,
      false,
      false,
      false,
      '',
      'V',
      'bg-warning',
      'Sent',
      true,
      'Friends',
      'badge badge-primary mr-1',
      false
    ),
    new Mail(
      9,
      'Elizabeth Elliott',
      'Okay, I will call you.',
      'Here they are.',
      '8 July',
      true,
      false,
      false,
      false,
      '',
      'E',
      'bg-info',
      'Sent',
      false,
      '',
      '',
      false
    ),
    new Mail(
      10,
      'Sarah Montgomery',
      'Your New UI.',
      'Everything looks good.',
      'Yesterday',
      true,
      true,
      true,
      true,
      'assets/img/portrait/small/avatar-s-6.png',
      '',
      '',
      'Sent',
      true,
      'Work',
      'badge badge-warning mr-1',
      false
    ),
    new Mail(
      11,
      'Heather Howell',
      'Thanks, Let us do it.',
      'Can we connect today...',
      '15 July',
      true,
      true,
      false,
      false,
      '',
      'H',
      'bg-success',
      'Sent',
      true,
      'Private',
      'badge badge-success mr-1',
      false
    ),
    new Mail(
      12,
      'Kelly Reyes',
      'I paid it, Thanks.',
      'Check once...',
      '12 July',
      false,
      false,
      true,
      true,
      'assets/img/portrait/small/avatar-s-8.png',
      '',
      '',
      'Trash',
      true,
      'Work',
      'badge badge-warning mr-1',
      false
    ),
    new Mail(
      13,
      'Vincent Nelson',
      'Where are you John?',
      'Party tonight ?',
      '11 July',
      true,
      false,
      false,
      false,
      '',
      'V',
      'bg-warning',
      'Trash',
      true,
      'Friends',
      'badge badge-primary mr-1',
      false
    ),
    new Mail(
      14,
      'Elizabeth Elliott',
      'Okay, I will call you.',
      'Here they are.',
      '8 July',
      true,
      false,
      false,
      false,
      '',
      'E',
      'bg-info',
      'Trash',
      false,
      '',
      '',
      false
    )
  ];

  public message: Message[] = [
    new Message(1, 'PixInvent, I found you...', 2, [
      new MessageDetail(
        '1',
        'John Doe',
        'Tonny Deep',
        `<p>Hi Tonny,</p>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam urna quam, rhoncus vitae lacinia vitae, gravida eleifend urna. Sed mattis posuere urna, iaculis ornare mi ultrices rhoncus. Phasellus elementum suscipit ante eu consectetur</p>
                     <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris enim nisi, bibendum at tincidunt vel, aliquam a mi. Vivamus non interdum nisi, at bibendum arcu. Integer sagittis, erat in imperdiet aliquam, erat sem mollis enim, nec tincidunt lectus sapien a diam. Pellentesque pulvinar sit amet nunc ac mattis</p>
                     <p>Ut sagittis dictum metus, dapibus faucibus risus facilisis sed. Vivamus scelerisque arcu vel dolor aliquet, vitae molestie risus dignissim. Donec id odio interdum, ornare nisl ac, mattis sem. Curabitur id magna nunc</p>
                     <p>Regards,<br/>John</p>`,
        '12 July',
        true,
        false,
        true,
        'assets/img/portrait/small/avatar-s-1.png',
        '',
        '',
        []
      ),
      new MessageDetail(
        '2',
        'Tonny Deep',
        'me',
        `<p>Hi John,</p>
                     <p>Ut varius purus ut mi consectetur, sed hendrerit nisi facilisis. Sed vitae neque vitae urna mattis condimentum. Suspendisse eu blandit enim, sed semper quam. Vivamus sed convallis ex</p>
                     <p>Curabitur a euismod dui. Vivamus ut luctus nisl. In tincidunt tellus vel lobortis hendrerit. Quisque odio tortor, accumsan vel hendrerit in, volutpat nec mi. Nulla imperdiet, nunc quis dictum dignissim, dolor ligula ultrices diam, non tristique magna ipsum ac metus</p>
                     <p>Suspendisse vitae pharetra eros. Proin eu elit et diam ultricies efficitur.</p>
                     <p>Cheers~</p>`,
        'Today',
        false,
        false,
        false,
        '',
        'T',
        'bg-info',
        []
      )
    ]),
    new Message(2, 'Thanks, Let us do it.', 2, [
      new MessageDetail(
        '1',
        'John Doe',
        'Louis Welch',
        `<p>Hi Louis,</p>
                    <p>Ut varius purus ut mi consectetur, sed hendrerit nisi facilisis. Sed vitae neque vitae urna mattis condimentum. Suspendisse eu blandit enim, sed semper quam. Vivamus sed convallis ex</p>
                    <p>Curabitur a euismod dui. Vivamus ut luctus nisl. In tincidunt tellus vel lobortis hendrerit. Quisque odio tortor, accumsan vel hendrerit in, volutpat nec mi. Nulla imperdiet, nunc quis dictum dignissim, dolor ligula ultrices diam, non tristique magna ipsum ac metus</p>
                    <p>Suspendisse vitae pharetra eros. Proin eu elit et diam ultricies efficitur.</p>
                    <p>Regards,<br/>John</p>`,
        '15 April',
        true,
        false,
        true,
        'assets/img/portrait/small/avatar-s-1.png',
        '',
        '',
        []
      ),
      new MessageDetail(
        '2',
        'Louis Welch',
        'me',
        `<p>Hi John,</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam urna quam, rhoncus vitae lacinia vitae, gravida eleifend urna. Sed mattis posuere urna, iaculis ornare mi ultrices rhoncus. Phasellus elementum suscipit ante eu consectetur</p>
                    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris enim nisi, bibendum at tincidunt vel, aliquam a mi. Vivamus non interdum nisi, at bibendum arcu. Integer sagittis, erat in imperdiet aliquam, erat sem mollis enim, nec tincidunt lectus sapien a diam. Pellentesque pulvinar sit amet nunc ac mattis</p>
                    <p>Ut sagittis dictum metus, dapibus faucibus risus facilisis sed. Vivamus scelerisque arcu vel dolor aliquet, vitae molestie risus dignissim. Donec id odio interdum, ornare nisl ac, mattis sem. Curabitur id magna nunc</p>
                    <p>Cheers~</p>`,
        '2:15 AM',
        false,
        true,
        false,
        '',
        'L',
        'bg-danger',
        [
          new Attachments(1, 'assets/img/gallery/1.jpg'),
          new Attachments(2, 'assets/img/gallery/3.jpg'),
          new Attachments(3, 'assets/img/gallery/21.jpg')
        ]
      )
    ]),
    new Message(3, 'You have a new comment...', 1, [
      new MessageDetail(
        '1',
        'Envato Market',
        'me',
        `<p>Hi John,</p>
                     <p>Ut varius purus ut mi consectetur, sed hendrerit nisi facilisis. Sed vitae neque vitae urna mattis condimentum. Suspendisse eu blandit enim, sed semper quam. Vivamus sed convallis ex</p>
                     <p>Curabitur a euismod dui. Vivamus ut luctus nisl. In tincidunt tellus vel lobortis hendrerit. Quisque odio tortor, accumsan vel hendrerit in, volutpat nec mi. Nulla imperdiet, nunc quis dictum dignissim, dolor ligula ultrices diam, non tristique magna ipsum ac metus</p>
                     <p>Suspendisse vitae pharetra eros. Proin eu elit et diam ultricies efficitur.</p>
                     <p>Cheers~</p>`,
        '11:18 PM',
        false,
        false,
        false,
        '',
        'E',
        'bg-warning',
        []
      )
    ]),
    new Message(4, 'Project ABC Status Report', 2, [
      new MessageDetail(
        '1',
        'John Doe',
        'Wayne Burton',
        `<p>Hi Wayne,</p>
                    <p>Ut varius purus ut mi consectetur, sed hendrerit nisi facilisis. Sed vitae neque vitae urna mattis condimentum. Suspendisse eu blandit enim, sed semper quam. Vivamus sed convallis ex</p>
                    <p>Curabitur a euismod dui. Vivamus ut luctus nisl. In tincidunt tellus vel lobortis hendrerit. Quisque odio tortor, accumsan vel hendrerit in, volutpat nec mi. Nulla imperdiet, nunc quis dictum dignissim, dolor ligula ultrices diam, non tristique magna ipsum ac metus</p>
                    <p>Suspendisse vitae pharetra eros. Proin eu elit et diam ultricies efficitur.</p>
                    <p>Regards,<br/>John</p>`,
        '12 July',
        true,
        false,
        true,
        'assets/img/portrait/small/avatar-s-1.png',
        '',
        '',
        []
      ),
      new MessageDetail(
        '2',
        'Wayne Burton',
        'me',
        `<p>Hi John,</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam urna quam, rhoncus vitae lacinia vitae, gravida eleifend urna. Sed mattis posuere urna, iaculis ornare mi ultrices rhoncus. Phasellus elementum suscipit ante eu consectetur</p>
                    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris enim nisi, bibendum at tincidunt vel, aliquam a mi. Vivamus non interdum nisi, at bibendum arcu. Integer sagittis, erat in imperdiet aliquam, erat sem mollis enim, nec tincidunt lectus sapien a diam. Pellentesque pulvinar sit amet nunc ac mattis</p>
                    <p>Ut sagittis dictum metus, dapibus faucibus risus facilisis sed. Vivamus scelerisque arcu vel dolor aliquet, vitae molestie risus dignissim. Donec id odio interdum, ornare nisl ac, mattis sem. Curabitur id magna nunc</p>
                    <p>Cheers~</p>`,
        'Today',
        false,
        false,
        true,
        'assets/img/portrait/small/avatar-s-7.png',
        '',
        '',
        []
      )
    ]),
    new Message(5, 'Your New UI', 2, [
      new MessageDetail(
        '1',
        'John Doe',
        'Sarah Montgomery',
        `<p>Hi Sarah,</p>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam urna quam, rhoncus vitae lacinia vitae, gravida eleifend urna. Sed mattis posuere urna, iaculis ornare mi ultrices rhoncus. Phasellus elementum suscipit ante eu consectetur</p>
                     <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris enim nisi, bibendum at tincidunt vel, aliquam a mi. Vivamus non interdum nisi, at bibendum arcu. Integer sagittis, erat in imperdiet aliquam, erat sem mollis enim, nec tincidunt lectus sapien a diam. Pellentesque pulvinar sit amet nunc ac mattis</p>
                     <p>Ut sagittis dictum metus, dapibus faucibus risus facilisis sed. Vivamus scelerisque arcu vel dolor aliquet, vitae molestie risus dignissim. Donec id odio interdum, ornare nisl ac, mattis sem. Curabitur id magna nunc</p>
                     <p>Regards,<br/>John</p>`,
        '12 July',
        true,
        false,
        true,
        'assets/img/portrait/small/avatar-s-1.png',
        '',
        '',
        []
      ),
      new MessageDetail(
        '2',
        'Sarah Montgomery',
        'me',
        `<p>Hi John,</p>
                     <p>Ut varius purus ut mi consectetur, sed hendrerit nisi facilisis. Sed vitae neque vitae urna mattis condimentum. Suspendisse eu blandit enim, sed semper quam. Vivamus sed convallis ex</p>
                     <p>Curabitur a euismod dui. Vivamus ut luctus nisl. In tincidunt tellus vel lobortis hendrerit. Quisque odio tortor, accumsan vel hendrerit in, volutpat nec mi. Nulla imperdiet, nunc quis dictum dignissim, dolor ligula ultrices diam, non tristique magna ipsum ac metus</p>
                     <p>Suspendisse vitae pharetra eros. Proin eu elit et diam ultricies efficitur.</p>
                     <p>Cheers~</p>`,
        'Yesterday',
        false,
        false,
        true,
        'assets/img/portrait/small/avatar-s-5.png',
        '',
        '',
        []
      )
    ]),
    new Message(6, 'Thanks, Let us do it.', 2, [
      new MessageDetail(
        '1',
        'John Doe',
        'Heather Howell',
        `<p>Hi Heather,</p>
                    <p>Ut varius purus ut mi consectetur, sed hendrerit nisi facilisis. Sed vitae neque vitae urna mattis condimentum. Suspendisse eu blandit enim, sed semper quam. Vivamus sed convallis ex</p>
                    <p>Curabitur a euismod dui. Vivamus ut luctus nisl. In tincidunt tellus vel lobortis hendrerit. Quisque odio tortor, accumsan vel hendrerit in, volutpat nec mi. Nulla imperdiet, nunc quis dictum dignissim, dolor ligula ultrices diam, non tristique magna ipsum ac metus</p>
                    <p>Suspendisse vitae pharetra eros. Proin eu elit et diam ultricies efficitur.</p>
                    <p>Regards,<br/>John</p>`,
        '13 May',
        true,
        false,
        true,
        'assets/img/portrait/small/avatar-s-1.png',
        '',
        '',
        []
      ),
      new MessageDetail(
        '2',
        'Heather Howell',
        'me',
        `<p>Hi John,</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam urna quam, rhoncus vitae lacinia vitae, gravida eleifend urna. Sed mattis posuere urna, iaculis ornare mi ultrices rhoncus. Phasellus elementum suscipit ante eu consectetur</p>
                    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris enim nisi, bibendum at tincidunt vel, aliquam a mi. Vivamus non interdum nisi, at bibendum arcu. Integer sagittis, erat in imperdiet aliquam, erat sem mollis enim, nec tincidunt lectus sapien a diam. Pellentesque pulvinar sit amet nunc ac mattis</p>
                    <p>Ut sagittis dictum metus, dapibus faucibus risus facilisis sed. Vivamus scelerisque arcu vel dolor aliquet, vitae molestie risus dignissim. Donec id odio interdum, ornare nisl ac, mattis sem. Curabitur id magna nunc</p>
                    <p>Cheers~</p>`,
        '15 July',
        false,
        true,
        false,
        '',
        'H',
        'bg-success',
        [
          new Attachments(1, 'assets/img/gallery/16.jpg'),
          new Attachments(2, 'assets/img/gallery/17.jpg')
        ]
      )
    ]),
    new Message(7, 'I paid it, Thanks.', 1, [
      new MessageDetail(
        '1',
        'Kelly Reyes',
        'me',
        `<p>Hi John,</p>
                     <p>Ut varius purus ut mi consectetur, sed hendrerit nisi facilisis. Sed vitae neque vitae urna mattis condimentum. Suspendisse eu blandit enim, sed semper quam. Vivamus sed convallis ex</p>
                     <p>Curabitur a euismod dui. Vivamus ut luctus nisl. In tincidunt tellus vel lobortis hendrerit. Quisque odio tortor, accumsan vel hendrerit in, volutpat nec mi. Nulla imperdiet, nunc quis dictum dignissim, dolor ligula ultrices diam, non tristique magna ipsum ac metus</p>
                     <p>Suspendisse vitae pharetra eros. Proin eu elit et diam ultricies efficitur.</p>
                     <p>Cheers~</p>`,
        '12 July',
        false,
        false,
        true,
        'assets/img/portrait/small/avatar-s-8.png',
        '',
        '',
        []
      )
    ]),
    new Message(8, 'Where are you John?', 2, [
      new MessageDetail(
        '1',
        'John Doe',
        'Vincent Nelson',
        `<p>Hi Vincent,</p>
                    <p>Ut varius purus ut mi consectetur, sed hendrerit nisi facilisis. Sed vitae neque vitae urna mattis condimentum. Suspendisse eu blandit enim, sed semper quam. Vivamus sed convallis ex</p>
                    <p>Curabitur a euismod dui. Vivamus ut luctus nisl. In tincidunt tellus vel lobortis hendrerit. Quisque odio tortor, accumsan vel hendrerit in, volutpat nec mi. Nulla imperdiet, nunc quis dictum dignissim, dolor ligula ultrices diam, non tristique magna ipsum ac metus</p>
                    <p>Suspendisse vitae pharetra eros. Proin eu elit et diam ultricies efficitur.</p>
                    <p>Regards,<br/>John</p>`,
        '12 August',
        true,
        false,
        true,
        'assets/img/portrait/small/avatar-s-1.png',
        '',
        '',
        []
      ),
      new MessageDetail(
        '2',
        'Vincent Nelson',
        'me',
        `<p>Hi John,</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam urna quam, rhoncus vitae lacinia vitae, gravida eleifend urna. Sed mattis posuere urna, iaculis ornare mi ultrices rhoncus. Phasellus elementum suscipit ante eu consectetur</p>
                    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris enim nisi, bibendum at tincidunt vel, aliquam a mi. Vivamus non interdum nisi, at bibendum arcu. Integer sagittis, erat in imperdiet aliquam, erat sem mollis enim, nec tincidunt lectus sapien a diam. Pellentesque pulvinar sit amet nunc ac mattis</p>
                    <p>Ut sagittis dictum metus, dapibus faucibus risus facilisis sed. Vivamus scelerisque arcu vel dolor aliquet, vitae molestie risus dignissim. Donec id odio interdum, ornare nisl ac, mattis sem. Curabitur id magna nunc</p>
                    <p>Cheers~</p>`,
        '11 July',
        false,
        false,
        false,
        '',
        'V',
        'bg-warning',
        []
      )
    ]),
    new Message(9, 'Okay, I will call you.', 2, [
      new MessageDetail(
        '1',
        'John Doe',
        'Elizabeth Elliott',
        `<p>Hi Elizabeth,</p>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam urna quam, rhoncus vitae lacinia vitae, gravida eleifend urna. Sed mattis posuere urna, iaculis ornare mi ultrices rhoncus. Phasellus elementum suscipit ante eu consectetur</p>
                     <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris enim nisi, bibendum at tincidunt vel, aliquam a mi. Vivamus non interdum nisi, at bibendum arcu. Integer sagittis, erat in imperdiet aliquam, erat sem mollis enim, nec tincidunt lectus sapien a diam. Pellentesque pulvinar sit amet nunc ac mattis</p>
                     <p>Ut sagittis dictum metus, dapibus faucibus risus facilisis sed. Vivamus scelerisque arcu vel dolor aliquet, vitae molestie risus dignissim. Donec id odio interdum, ornare nisl ac, mattis sem. Curabitur id magna nunc</p>
                     <p>Regards,<br/>John</p>`,
        '31 May',
        true,
        false,
        true,
        'assets/img/portrait/small/avatar-s-1.png',
        '',
        '',
        []
      ),
      new MessageDetail(
        '2',
        'Elizabeth Elliott',
        'me',
        `<p>Hi John,</p>
                     <p>Ut varius purus ut mi consectetur, sed hendrerit nisi facilisis. Sed vitae neque vitae urna mattis condimentum. Suspendisse eu blandit enim, sed semper quam. Vivamus sed convallis ex</p>
                     <p>Curabitur a euismod dui. Vivamus ut luctus nisl. In tincidunt tellus vel lobortis hendrerit. Quisque odio tortor, accumsan vel hendrerit in, volutpat nec mi. Nulla imperdiet, nunc quis dictum dignissim, dolor ligula ultrices diam, non tristique magna ipsum ac metus</p>
                     <p>Suspendisse vitae pharetra eros. Proin eu elit et diam ultricies efficitur.</p>
                     <p>Cheers~</p>`,
        '8 July',
        false,
        false,
        false,
        '',
        'E',
        'bg-info',
        []
      )
    ]),
    new Message(10, 'Your New UI.', 2, [
      new MessageDetail(
        '1',
        'John Doe',
        'Sarah Montgomery',
        `<p>Hi Sarah,</p>
                    <p>Ut varius purus ut mi consectetur, sed hendrerit nisi facilisis. Sed vitae neque vitae urna mattis condimentum. Suspendisse eu blandit enim, sed semper quam. Vivamus sed convallis ex</p>
                    <p>Curabitur a euismod dui. Vivamus ut luctus nisl. In tincidunt tellus vel lobortis hendrerit. Quisque odio tortor, accumsan vel hendrerit in, volutpat nec mi. Nulla imperdiet, nunc quis dictum dignissim, dolor ligula ultrices diam, non tristique magna ipsum ac metus</p>
                    <p>Suspendisse vitae pharetra eros. Proin eu elit et diam ultricies efficitur.</p>
                    <p>Regards,<br/>John</p>`,
        '15 April',
        true,
        false,
        true,
        'assets/img/portrait/small/avatar-s-1.png',
        '',
        '',
        []
      ),
      new MessageDetail(
        '2',
        'Sarah Montgomery',
        'me',
        `<p>Hi John,</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam urna quam, rhoncus vitae lacinia vitae, gravida eleifend urna. Sed mattis posuere urna, iaculis ornare mi ultrices rhoncus. Phasellus elementum suscipit ante eu consectetur</p>
                    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris enim nisi, bibendum at tincidunt vel, aliquam a mi. Vivamus non interdum nisi, at bibendum arcu. Integer sagittis, erat in imperdiet aliquam, erat sem mollis enim, nec tincidunt lectus sapien a diam. Pellentesque pulvinar sit amet nunc ac mattis</p>
                    <p>Ut sagittis dictum metus, dapibus faucibus risus facilisis sed. Vivamus scelerisque arcu vel dolor aliquet, vitae molestie risus dignissim. Donec id odio interdum, ornare nisl ac, mattis sem. Curabitur id magna nunc</p>
                    <p>Cheers~</p>`,
        'Yesterday',
        false,
        true,
        true,
        'assets/img/portrait/small/avatar-s-6.png',
        '',
        '',
        [
          new Attachments(1, 'assets/img/gallery/1.jpg'),
          new Attachments(2, 'assets/img/gallery/3.jpg'),
          new Attachments(3, 'assets/img/gallery/21.jpg')
        ]
      )
    ]),
    new Message(11, 'Thanks, Let us do it.', 1, [
      new MessageDetail(
        '1',
        'Heather Howell',
        'me',
        `<p>Hi John,</p>
                     <p>Ut varius purus ut mi consectetur, sed hendrerit nisi facilisis. Sed vitae neque vitae urna mattis condimentum. Suspendisse eu blandit enim, sed semper quam. Vivamus sed convallis ex</p>
                     <p>Curabitur a euismod dui. Vivamus ut luctus nisl. In tincidunt tellus vel lobortis hendrerit. Quisque odio tortor, accumsan vel hendrerit in, volutpat nec mi. Nulla imperdiet, nunc quis dictum dignissim, dolor ligula ultrices diam, non tristique magna ipsum ac metus</p>
                     <p>Suspendisse vitae pharetra eros. Proin eu elit et diam ultricies efficitur.</p>
                     <p>Cheers~</p>`,
        '15 July',
        false,
        false,
        false,
        '',
        'H',
        'bg-success',
        []
      )
    ]),
    new Message(12, 'I paid it, Thanks.', 2, [
      new MessageDetail(
        '1',
        'John Doe',
        'Kelly Reyes',
        `<p>Hi Kelly,</p>
                    <p>Ut varius purus ut mi consectetur, sed hendrerit nisi facilisis. Sed vitae neque vitae urna mattis condimentum. Suspendisse eu blandit enim, sed semper quam. Vivamus sed convallis ex</p>
                    <p>Curabitur a euismod dui. Vivamus ut luctus nisl. In tincidunt tellus vel lobortis hendrerit. Quisque odio tortor, accumsan vel hendrerit in, volutpat nec mi. Nulla imperdiet, nunc quis dictum dignissim, dolor ligula ultrices diam, non tristique magna ipsum ac metus</p>
                    <p>Suspendisse vitae pharetra eros. Proin eu elit et diam ultricies efficitur.</p>
                    <p>Regards,<br/>John</p>`,
        '12 July',
        true,
        false,
        true,
        'assets/img/portrait/small/avatar-s-1.png',
        '',
        '',
        []
      ),
      new MessageDetail(
        '2',
        'Kelly Reyes',
        'me',
        `<p>Hi John,</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam urna quam, rhoncus vitae lacinia vitae, gravida eleifend urna. Sed mattis posuere urna, iaculis ornare mi ultrices rhoncus. Phasellus elementum suscipit ante eu consectetur</p>
                    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris enim nisi, bibendum at tincidunt vel, aliquam a mi. Vivamus non interdum nisi, at bibendum arcu. Integer sagittis, erat in imperdiet aliquam, erat sem mollis enim, nec tincidunt lectus sapien a diam. Pellentesque pulvinar sit amet nunc ac mattis</p>
                    <p>Ut sagittis dictum metus, dapibus faucibus risus facilisis sed. Vivamus scelerisque arcu vel dolor aliquet, vitae molestie risus dignissim. Donec id odio interdum, ornare nisl ac, mattis sem. Curabitur id magna nunc</p>
                    <p>Cheers~</p>`,
        'Today',
        false,
        false,
        true,
        'assets/img/portrait/small/avatar-s-8.png',
        '',
        '',
        []
      )
    ]),
    new Message(13, 'Where are you John?', 2, [
      new MessageDetail(
        '1',
        'John Doe',
        'Vincent Nelson',
        `<p>Hi Vincent,</p>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam urna quam, rhoncus vitae lacinia vitae, gravida eleifend urna. Sed mattis posuere urna, iaculis ornare mi ultrices rhoncus. Phasellus elementum suscipit ante eu consectetur</p>
                     <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris enim nisi, bibendum at tincidunt vel, aliquam a mi. Vivamus non interdum nisi, at bibendum arcu. Integer sagittis, erat in imperdiet aliquam, erat sem mollis enim, nec tincidunt lectus sapien a diam. Pellentesque pulvinar sit amet nunc ac mattis</p>
                     <p>Ut sagittis dictum metus, dapibus faucibus risus facilisis sed. Vivamus scelerisque arcu vel dolor aliquet, vitae molestie risus dignissim. Donec id odio interdum, ornare nisl ac, mattis sem. Curabitur id magna nunc</p>
                     <p>Regards,<br/>John</p>`,
        '21 July',
        true,
        false,
        true,
        'assets/img/portrait/small/avatar-s-1.png',
        '',
        '',
        []
      ),
      new MessageDetail(
        '2',
        'Vincent Nelson',
        'me',
        `<p>Hi John,</p>
                     <p>Ut varius purus ut mi consectetur, sed hendrerit nisi facilisis. Sed vitae neque vitae urna mattis condimentum. Suspendisse eu blandit enim, sed semper quam. Vivamus sed convallis ex</p>
                     <p>Curabitur a euismod dui. Vivamus ut luctus nisl. In tincidunt tellus vel lobortis hendrerit. Quisque odio tortor, accumsan vel hendrerit in, volutpat nec mi. Nulla imperdiet, nunc quis dictum dignissim, dolor ligula ultrices diam, non tristique magna ipsum ac metus</p>
                     <p>Suspendisse vitae pharetra eros. Proin eu elit et diam ultricies efficitur.</p>
                     <p>Cheers~</p>`,
        '11 July',
        false,
        false,
        false,
        '',
        'V',
        'bg-warning',
        []
      )
    ]),
    new Message(14, 'Okay, I will call you.', 2, [
      new MessageDetail(
        '1',
        'John Doe',
        'Elizabeth Elliott',
        `<p>Hi Elizabeth,</p>
                    <p>Ut varius purus ut mi consectetur, sed hendrerit nisi facilisis. Sed vitae neque vitae urna mattis condimentum. Suspendisse eu blandit enim, sed semper quam. Vivamus sed convallis ex</p>
                    <p>Curabitur a euismod dui. Vivamus ut luctus nisl. In tincidunt tellus vel lobortis hendrerit. Quisque odio tortor, accumsan vel hendrerit in, volutpat nec mi. Nulla imperdiet, nunc quis dictum dignissim, dolor ligula ultrices diam, non tristique magna ipsum ac metus</p>
                    <p>Suspendisse vitae pharetra eros. Proin eu elit et diam ultricies efficitur.</p>
                    <p>Regards,<br/>John</p>`,
        '15 April',
        true,
        false,
        true,
        'assets/img/portrait/small/avatar-s-1.png',
        '',
        '',
        []
      ),
      new MessageDetail(
        '2',
        'Elizabeth Elliott',
        'me',
        `<p>Hi John,</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam urna quam, rhoncus vitae lacinia vitae, gravida eleifend urna. Sed mattis posuere urna, iaculis ornare mi ultrices rhoncus. Phasellus elementum suscipit ante eu consectetur</p>
                    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris enim nisi, bibendum at tincidunt vel, aliquam a mi. Vivamus non interdum nisi, at bibendum arcu. Integer sagittis, erat in imperdiet aliquam, erat sem mollis enim, nec tincidunt lectus sapien a diam. Pellentesque pulvinar sit amet nunc ac mattis</p>
                    <p>Ut sagittis dictum metus, dapibus faucibus risus facilisis sed. Vivamus scelerisque arcu vel dolor aliquet, vitae molestie risus dignissim. Donec id odio interdum, ornare nisl ac, mattis sem. Curabitur id magna nunc</p>
                    <p>Cheers~</p>`,
        '8 July',
        false,
        true,
        false,
        '',
        'E',
        'bg-info',
        [
          new Attachments(1, 'assets/img/gallery/1.jpg'),
          new Attachments(2, 'assets/img/gallery/3.jpg'),
          new Attachments(3, 'assets/img/gallery/21.jpg')
        ]
      )
    ])
  ];
}
