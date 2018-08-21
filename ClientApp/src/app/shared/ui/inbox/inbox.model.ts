export class Mail {
  public mailId: number;
  public mailFrom: string;
  public subject: string;
  public body: string;
  public time: string;
  public isRead: boolean;
  public isImportant: boolean;
  public hasAttachment: boolean;
  public hasImage: boolean;
  public imagePath: string;
  public imageText: string;
  public imageClass: string;
  public mailType: string;
  public hasLabel: boolean;
  public labelType: string;
  public labelClass: string;
  public isDefault: boolean;

  constructor(
    mailId: number,
    mailFrom: string,
    subject: string,
    body: string,
    time: string,
    isRead: boolean,
    isImportant: boolean,
    hasAttachment: boolean,
    hasImage: boolean,
    imagePath: string,
    imageText: string,
    imageClass: string,
    mailType: string,
    hasLabel: boolean,
    labelType: string,
    labelClass: string,
    isDefault: boolean
  ) {
    this.mailId = mailId;
    this.mailFrom = mailFrom;
    this.subject = subject;
    this.body = body;
    this.time = time;
    this.isRead = isRead;
    this.isImportant = isImportant;
    this.hasAttachment = hasAttachment;
    this.hasImage = hasImage;
    this.imagePath = imagePath;
    this.imageText = imageText;
    this.imageClass = imageClass;
    this.mailType = mailType;
    this.hasLabel = hasLabel;
    this.labelType = labelType;
    this.labelClass = labelClass;
    this.isDefault = isDefault;
  }
}

export class Message {
  public mailId: number;
  public subject: string;
  public messagesCount: number;
  public messages: MessageDetail[];

  constructor(
    mailId: number,
    subject: string,
    messagesCount: number,
    messages: MessageDetail[]
  ) {
    this.mailId = mailId;
    this.subject = subject;
    this.messagesCount = messagesCount;
    this.messages = messages;
  }
}

export class MessageDetail {
  public messageId: string;
  public mailFrom: string;
  public mailTo: string;
  public body: string;
  public time: string;
  public collapsed: boolean;
  public hasAvatar: boolean;
  public avatarPath: string;
  public avatarText: string;
  public avatarClass: string;
  public hasAttachment: boolean;
  public attachments: Attachments[];

  constructor(
    messageId: string,
    mailFrom: string,
    mailTo: string,
    body: string,
    time: string,
    collapsed: boolean,
    hasAttachment: boolean,
    hasAvatar: boolean,
    avatarPath: string,
    avatarText: string,
    avatarClass: string,
    attachments: Attachments[]
  ) {
    this.messageId = messageId;
    this.mailFrom = mailFrom;
    this.mailTo = mailTo;
    this.body = body;
    this.time = time;
    this.collapsed = collapsed;
    this.hasAttachment = hasAttachment;
    this.hasAvatar = hasAvatar;
    this.avatarPath = avatarPath;
    this.avatarText = avatarText;
    this.avatarClass = avatarClass;
    this.attachments = attachments;
  }
}

export class Attachments {
  public attachmentId: number;
  public url: string;

  constructor(attachmentId: number, url: string) {
    this.attachmentId = attachmentId;
    this.url = url;
  }
}
