import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import { Videos } from "./";
import { fetchFromAPI } from "../../utils/fetchFromAPI";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
            className='react-player'
            url={`https://www.youtube.com/watch?v=${id}`} 
            controls 
            />
          <Typography>
            {videoDetail.snippet.title}
          </Typography>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
