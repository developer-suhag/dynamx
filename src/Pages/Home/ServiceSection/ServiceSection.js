import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import SingleService from "../SingleService/SingleService";

const services = [
  {
    id: 1,
    serviceName: "Marketing",
    description:
      "We use strategic marketing tactics that have been proven to work.",
    img: "https://i.ibb.co/m08sS32/marketing.png",
  },
  {
    id: 2,
    serviceName: "Development",
    description: "Custom programming for most complex functions you can think.",
    img: "https://i.ibb.co/59qPrS8/web-development.png",
  },
  {
    id: 3,
    serviceName: "Web Design",
    description:
      "Powerful web design that will out-perform your strongest competitors.",
    img: "https://i.ibb.co/X7BdLyX/web-design.png",
  },
  {
    id: 4,
    serviceName: "SEO Optimization",
    description:
      "Optimizing our web designs to rank on the first page of google is our specialty.",
    img: "https://i.ibb.co/gM3nwrP/seo.png",
  },
  {
    id: 5,
    serviceName: "Ecommerce",
    description:
      "We build your online store using a flexible, modular platform that allows",
    img: "https://i.ibb.co/X7GMwSD/ecommerce.png",
  },
  {
    id: 6,
    serviceName: "Branding",
    description:
      "A solid brand strategy, logo and guidelines help you to get You",
    img: "https://i.ibb.co/PtLSB95/brand.png",
  },
];

const ServiceSection = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Typography sx={{ textAlign: "center" }} variant="h3" color="secondary">
        Our Services
      </Typography>
      <Grid sx={{ mt: 4 }} container spacing={3}>
        {services.map((service) => (
          <SingleService key={service.id} service={service}></SingleService>
        ))}
      </Grid>
    </Container>
  );
};

export default ServiceSection;
