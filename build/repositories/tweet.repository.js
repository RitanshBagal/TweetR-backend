"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTweetRepo = exports.createTweetRepo = exports.deleteTweetRepo = exports.getTweetRepo = void 0;
const tweet_model_1 = __importDefault(require("../database/models/tweet.model"));
const getTweetRepo = (tweetId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tweet = yield tweet_model_1.default.findOne({ tweetId: tweetId });
        return tweet;
    }
    catch (error) {
        console.log(error);
        return null;
    }
});
exports.getTweetRepo = getTweetRepo;
// export const getAllTweetRepo = async ( tweetId: string): Promise<ITweetInterface | null> => {
//     try{
//         const tweet = await TweetModel.findOne({tweetId: tweetId});
//         return tweet;
//     }catch(error){
//         console.log(error);
//         return null;
//     }
// };
const deleteTweetRepo = (tweetId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleted = yield tweet_model_1.default.findOneAndDelete({ tweetId: tweetId });
        if (deleted) {
            return true;
        }
        else {
            return false;
        }
    }
    catch (error) {
        console.log(error);
        return false;
    }
});
exports.deleteTweetRepo = deleteTweetRepo;
const createTweetRepo = (tweet) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield tweet_model_1.default.create(tweet);
        return true;
    }
    catch (error) {
        console.log(error);
        return false;
    }
});
exports.createTweetRepo = createTweetRepo;
const updateTweetRepo = (tweetId, updatedTweet) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield tweet_model_1.default.findOneAndUpdate({ tweetId: tweetId }, updatedTweet, { new: true });
        if (result) {
            return true;
        }
        else {
            return false;
        }
    }
    catch (error) {
        console.log(error);
        return false;
    }
});
exports.updateTweetRepo = updateTweetRepo;
