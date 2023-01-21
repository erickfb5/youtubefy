import { CheckCircle } from "@mui/icons-material";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import {
  demoChannelTitle,
  demoChannelUrl,
  demoThumbnailUrl,
  demoVideoTitle,
  demoVideoUrl,
} from "../utils/constants";

// const VideoCard = ({ video }) => {
  const VideoCard = ({ video: { id: videoID }, snippet }, ) => {
  console.log("VC", videoID);
  console.log("snippet", snippet);
  return (
    <div>
      <Link></Link>
      VideoCard
      <Typography></Typography>
    </div>
  );
};

export default VideoCard;
