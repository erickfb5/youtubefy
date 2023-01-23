import { Box } from "@mui/material";

import { VideoCard } from ".";
import ChannelCard from "../Channel/ChannelCard";

const VideoBox = ({ videos }) => {
  videos?.map((item, index) => (
    <Box key={index}>
      {item.id.videoId && <VideoCard video={item} />}
      {item.id.channelId && <ChannelCard channelDetail={item} />}
    </Box>
  ));
};
export default VideoBox;
