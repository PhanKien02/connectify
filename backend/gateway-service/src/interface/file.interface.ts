import { IBaseModelMongo } from './base-model.interface';

export interface IFileDocument extends IBaseModelMongo {
  _id?: string;
  fileName: string;
  fileType: string;
  fileSize: number;
  fileUrl: string;
}
export interface IFileResponse {
  message: string;
  file: IFileDocument;
}
export interface IFileUploadResponse {
  message: string;
  file: IFileDocument;
  fileName: string;
  fileType: string;
  fileSize: number;
  fileUrl: string;
  fileCreatedAt: Date | string;
  fileUpdatedAt: Date | string;
  fileId: string;
  filePublicUrl: string;
  filePublicId: string;
}
