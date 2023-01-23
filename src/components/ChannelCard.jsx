import { Link } from "react-router-dom";
import { CheckCircle } from "@mui/icons-material";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";

import { demoProfilePicture } from "../utils/constants";

const ChannelCard = ({ channelDetail, marginTop }) => {
  const channelInfo = channelDetail?.snippet;
  const subscriberTotal = channelDetail?.statistics?.subscriberCount;

  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "356px", md: "320px" },
        height: "326px",
        margin: "auto",
        marginTop
      }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <CardMedia
            sx={{
              borderRadius: "50%",
              width: "180px",
              height: "180px",
              mb: 2,
              border: "1px solid #e3e3e3",
            }}
            image={channelInfo?.thumbnails?.high.url || demoProfilePicture}
            alt={channelInfo?.title}
          />
          <Typography variant="h6">
            {channelInfo?.title}
            <CheckCircle sx={{ fontSize: 14, color: "gray", ml: "5px" }} />
          </Typography>
          {subscriberTotal && (
            <Typography>
              {parseInt(subscriberTotal).toLocaleString()} Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
