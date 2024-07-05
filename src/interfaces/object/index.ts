import { IResponse } from "../shared";

export interface IObjectFile {
    id: number | string,
    file: File,
    status: "INQUEUE" | "INPROGRESS" | "COMPLETED" | "FAILDED"
}

export interface IObject {
    _id: string,
    originalName: string;
    originalType: string;
    thumbnailPath: string;
    sizeInByte: number;
    type: string;
    extension: string;
    isFolder: boolean;
    parentId?: string;
    isDeleted?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface IObjectState {
    data: IObject[]
    selected: Array<string | number>
    shiftPressing: boolean
    pagination: {
        totalPages: number
        page: number,
        totalRecords: number
    }
}

export interface IObjectsResponse extends IResponse {
    data: IObject[];
    meta: {
        page: number;
        limit: number;
        totalPages: number;
        totalRecords: number;
    }
}

export interface IObjectResponse extends IResponse {
    data: IObject;
}
export interface IUploadResponse extends IResponse {
    data: {
        fieldname: string;
        originalname: string;
        encoding: string;
        mimetype: string;
        destination: string;
        filename: string;
        originalPath: string;
        thumbnailPath: string;
        size: number;
    };
}
