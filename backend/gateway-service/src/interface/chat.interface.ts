import { IBaseModelMongo } from './base-model.interface';
import { IFileDocument } from './file.interface';


export interface IMessageDocument extends IBaseModelMongo {
  _id?: string;
  message?: string;
  url?: string;
  file?: IFileDocument;
  senderUsername?: string;
  senderId?: string;
  receiverUsername?: string;
  receiverId?: string;
  isRead?: boolean;
  type: MessageType;
}

enum MessageType {

  TEXT = 'TEXT',
  IMAGE = 'IMAGE',
  VIDEO = 'VIDEO',
  FILE = 'FILE',
  AUDIO = 'AUDIO',
  LINK = 'LINK',
}
