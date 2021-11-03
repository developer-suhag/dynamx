import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const HappyClient = () => {
  return (
    <Container
      sx={{ bgcolor: "#121c2c", py: 6, borderRadius: 4, boxShadow: 2 }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={3}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 4,
              p: 1,
            }}
          >
            <Box>
              <Typography
                sx={{ fontWeight: 700 }}
                color="info.main"
                variant="h2"
              >
                12K
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ fontSize: 26 }} color="secondary" variant="h5">
                Happy Customer
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={6} lg={3}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 4,
              p: 1,
            }}
          >
            <Box>
              <Typography
                sx={{ fontWeight: 700 }}
                color="info.main"
                variant="h2"
              >
                12K
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ fontSize: 26 }} color="secondary" variant="h5">
                Business Plan
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 4,
              p: 1,
            }}
          >
            <Box>
              <Typography
                sx={{ fontWeight: 700 }}
                color="info.main"
                variant="h2"
              >
                12K
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ fontSize: 26 }} color="secondary" variant="h5">
                Complete Project
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 4,
              p: 1,
            }}
          >
            <Box>
              <Typography
                sx={{ fontWeight: 700 }}
                color="info.main"
                variant="h2"
              >
                12K
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ fontSize: 26 }} color="secondary" variant="h5">
                Years Experience
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HappyClient;
