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
exports.updateUserWithTweetIdRepo = exports.updateUserRepo = exports.createUserRepo = exports.deleteUserRepo = exports.getUserRepo = void 0;
const user_model_1 = __importDefault(require("../database/models/user.model"));
const getUserRepo = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_model_1.default.findOne({ uid: userId });
        return user;
    }
    catch (error) {
        console.log(error);
        return null;
    }
});
exports.getUserRepo = getUserRepo;
const deleteUserRepo = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleted = yield user_model_1.default.findOneAndDelete({ uid: userId });
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
exports.deleteUserRepo = deleteUserRepo;
const createUserRepo = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield user_model_1.default.create(user);
        return true;
    }
    catch (error) {
        console.log(error);
        return false;
    }
});
exports.createUserRepo = createUserRepo;
const updateUserRepo = (userId, updatedUser) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_model_1.default.findOneAndUpdate({ uid: userId }, updatedUser, { new: true });
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
exports.updateUserRepo = updateUserRepo;
const updateUserWithTweetIdRepo = (userId, tweetId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_model_1.default.findOneAndUpdate({ uid: userId }, { $push: { tweets: tweetId } });
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
exports.updateUserWithTweetIdRepo = updateUserWithTweetIdRepo;
