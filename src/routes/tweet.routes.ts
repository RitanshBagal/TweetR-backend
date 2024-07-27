import { Router } from "express";
import { getTweetController, createTweetController, deleteTweetController, UpdateTweetController } from "../controllers/tweet.controller";

const tweetRouter = Router();

// Define route paths

tweetRouter.get("/:tweetId", getTweetController);
// tweetRouter.post("/", getAllTweetsController);
tweetRouter.post("/", createTweetController);
tweetRouter.delete("/:tweetId", deleteTweetController);
tweetRouter.put("/", UpdateTweetController);  

export default tweetRouter;