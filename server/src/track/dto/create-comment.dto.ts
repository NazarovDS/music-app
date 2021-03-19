import {ObjectId} from "mongoose";

export class CreateCommentDto {
    readonly userName: string
    readonly text: string
    readonly track: ObjectId
}