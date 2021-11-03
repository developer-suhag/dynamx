import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CountUp from "react-countup";
import "./HappyClient.css";

const HappyClient = () => {
  return (
    <Container
      sx={{ bgcolor: "#121c2c", py: 6, borderRadius: 4, boxShadow: 2 }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={3}>
          <Box
            className="happy-client-box"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              p: 1,
            }}
          >
            <Box>
              <Typography
                sx={{ fontWeight: 700 }}
                color="info.main"
                variant="h2"
              >
                <CountUp suffix="K" duration={2} start={0} end={14} />
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ fontSize: 26 }} color="secondary" variant="h5">
                Happy <br /> Customer
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={6} lg={3}>
          <Box
            className="happy-client-box"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              p: 1,
            }}
          >
            <Box>
              <Typography
                sx={{ fontWeight: 700 }}
                color="info.main"
                variant="h2"
              >
                <CountUp prefix="+" duration={2} start={0} end={99} />
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ fontSize: 26 }} color="secondary" variant="h5">
                Business <br /> Plan
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Box
            className="happy-client-box"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              p: 1,
            }}
          >
            <Box>
              <Typography
                sx={{ fontWeight: 700 }}
                color="info.main"
                variant="h2"
              >
                <CountUp prefix="+" duration={2} start={0} end={350} />
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ fontSize: 26 }} color="secondary" variant="h5">
                Complete <br /> Project
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Box
            className="happy-client-box"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              p: 1,
            }}
          >
            <Box>
              <Typography
                sx={{ fontWeight: 700 }}
                color="info.main"
                variant="h2"
              >
                <CountUp prefix="+" duration={2} start={0} end={5} />
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ fontSize: 26 }} color="secondary" variant="h5">
                Years <br /> Experience
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HappyClient;
