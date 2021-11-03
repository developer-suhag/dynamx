import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import HappyClient from "../HappyClient/HappyClient";
import ServiceSection from "../ServiceSection/ServiceSection";

const Home = () => {
  return (
    <Box>
      {/* service section  */}
      <ServiceSection></ServiceSection>
      {/* happy client  */}
      <HappyClient></HappyClient>
    </Box>
  );
};

export default Home;
