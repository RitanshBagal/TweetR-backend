import { Router } from "express";

import userRouter from "./user.routes";
import tweetRouter from "./tweet.routes";
import helloRouter from "./hello.routes";
const router = Router()

router.use('/user', userRouter);
router.use('/tweet', tweetRouter);
router.use('/hello', helloRouter);

export default router;