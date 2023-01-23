import { Stack } from "@mui/material";

import { VideoBox } from ".";

const Videos = ({ videos, direction }) => (
  <Stack
    direction={direction || `row`}
    flexWrap="wrap"
    justifyContent="start"
    gap={2}
  >
    <VideoBox videos={videos} />
  </Stack>
);

export default Videos;
