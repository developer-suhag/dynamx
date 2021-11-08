import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const SliderItem = ({ portfolio }) => {
  const { serviceName, img } = portfolio;
  return (
    <Box>
      <Box>
        <img style={{ width: "100%" }} src={img} alt="" />
      </Box>
      <Typography color="secondary">{serviceName}</Typography>
    </Box>
  );
};

export default SliderItem;
