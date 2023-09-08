"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// @desc    A get request
// @route   GET /api?slack_name=name&track=track
// @access  Everyone
app.get("/api", (req, res) => {
    const { slack_name, track } = req.query;
    const weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    const now = new Date();
    const current_day = weekday[now.getDay()];
    const utc_time = new Date(now.getTime() - now.getTimezoneOffset() * 60000)
        .toISOString()
        .replace(/.\d+Z$/g, "Z");
    res.status(200).json({
        slack_name,
        current_day,
        utc_time,
        track,
        github_file_url: "https://github.com/darmesah/HNG-Stage-One-Project/blob/main/src/app.ts",
        github_repo_url: "https://github.com/darmesah/HNG-Stage-One-Project.git",
        status_code: 200,
    });
});
app.listen(3001, () => {
    console.log("App started at port " + 3001);
});
