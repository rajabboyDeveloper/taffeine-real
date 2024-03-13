import React, { useState, useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Slide.css";
import axios from "axios";
import OwlCard from "./owlcard/OwlCard";
function Slide() {
  const [slide, setslide] = useState([]);

  useEffect(() => {
    axios.get("https://admin.taffeine.com/api/home/banner").then((res) => {
      const data = res.data.data;
      setslide(data);
    });
  }, []);

  return (
    <div>
      <OwlCarousel className="owl-theme" loop nav items={1}>
        {slide.map((items, index) => {
          return (
            <OwlCard
              key={index}
              title={items.title}
              text={items.short_content}
              img={items.url}
              slug={items.slug}
            />
          );
        })}
      </OwlCarousel>
    </div>
  );
}

export default Slide;
