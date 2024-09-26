const express = require("express");
const app = express();
app.listen(7777);

const userRouter = require("./routes/users"); //모듈 소환
const channelRouter = require("./routes/channels");
app.use("/", userRouter); //모듈 사용
app.use("/channels", channelRouter);
