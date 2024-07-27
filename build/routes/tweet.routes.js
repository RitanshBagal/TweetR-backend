"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tweet_controller_1 = require("../controllers/tweet.controller");
const tweetRouter = (0, express_1.Router)();
// Define route paths
tweetRouter.get("/:tweetId", tweet_controller_1.getTweetController);
// tweetRouter.post("/", getAllTweetsController);
tweetRouter.post("/", tweet_controller_1.createTweetController);
tweetRouter.delete("/:tweetId", tweet_controller_1.deleteTweetController);
tweetRouter.put("/", tweet_controller_1.UpdateTweetController);
exports.default = tweetRouter;
