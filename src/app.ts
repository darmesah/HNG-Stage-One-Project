import express, { Request, Response } from "express";
import moment from "moment";

const app = express();

// @desc    A get request
// @route   GET /api?slack_name=name&track=track
// @access  Everyone
app.get("/api", (req: Request, res: Response) => {
  const { slack_name, track } = req.query;

  const weekday: string[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const now = new Date();
  const currrent_day = weekday[now.getDay()];

  const utc_time = new Date(now.getTime() - now.getTimezoneOffset() * 60000)
    .toISOString()
    .replace(/.\d+Z$/g, "Z");

  const utc_time2 = moment().format();
  const utc_time3 = moment.parseZone(moment()).utc(true).format();

  res.status(200).json({
    slack_name,
    currrent_day,
    utc_time,
    utc_time2,
    utc_time3,
    track,
    github_file_url:
      "https://github.com/darmesah/HNG-Stage-One-Project/blob/main/src/app.ts",
    github_repo_url: "https://github.com/darmesah/HNG-Stage-One-Project.git",
    status_code: 200,
  });
});

app.listen(3001, () => {
  console.log("App started at port " + 3001);
});
