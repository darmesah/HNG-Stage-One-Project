import express, { Request, Response } from "express";

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

  const github_file_url = "";

  res.json({ slack_name, currrent_day, utc_time, track });
});

app.listen(3001, () => {
  console.log("App started at port " + 3001);
});
