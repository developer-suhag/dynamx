import { Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { A11y, Controller, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
// import SliderItem from "./SliderItem/SliderItem";
// import SliderItem from "./SliderItem/SliderItem";
import SliderItem from "./SliderItem/SliderItem";

const portfolios = [
  {
    id: 1,
    category: "Web Design",
    serviceName: "Store Ui Kit",
    img: "https://i.ibb.co/fpGsYQ4/portfolio-1.jpg",
    description:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain,",
  },
  {
    id: 2,
    category: "App Design",
    serviceName: "App Ui Kit",
    img: "https://i.ibb.co/jRrRJ7M/portfolio-2.jpg",
    description:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain,",
  },
  {
    id: 3,
    category: "Web Design",
    serviceName: "Travel application",
    img: "https://i.ibb.co/HFWX42M/portfolio-3.jpg",
    description:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain,",
  },
  {
    id: 4,
    category: "App Design",
    serviceName: "Compare Price",
    img: "https://i.ibb.co/Xy902zW/portfolio-4.jpg",
    description:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain,",
  },
  {
    id: 5,
    category: "App Design",
    serviceName: "Food Delivery",
    img: "https://i.ibb.co/mcGmbt9/portfolio-5.jpg",
    description:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain,",
  },
];

const PortfolioSection = () => {
  const [controlledSwiper, setControlledSwiper] = useState(null);
  return (
    <Container sx={{ py: 6 }}>
      <Grid container spacing={2}>
        <Grid xs={12} md={3}>
          <Typography color="secondary" variant="subtitle1">
            Recent Work
          </Typography>
          <Typography color="primary" variant="h4">
            Our Projects
          </Typography>
        </Grid>
        <Grid xs={12} md={9}>
          <Swiper
            // modules={[Navigation, Pagination, Scrollbar, A11y]}
            modules={[Controller]}
            controller={{ control: controlledSwiper }}
            spaceBetween={50}
            slidesPerView={3}
            grabCursor={true}
            centeredSlides
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {portfolios.map((portfolio) => (
              <SwiperSlide key={portfolio.id}>
                <SliderItem portfolio={portfolio}></SliderItem>
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PortfolioSection;
