import { Document } from "mongoose";

export interface ITweetInterface{
    tweetId: string,
    content: string,
    createdAt: string,
    adminId: string
}