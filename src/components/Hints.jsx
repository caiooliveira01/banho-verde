import { slides } from "../../public/slides/slides";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Hints() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
  };

  return (
    <div className="shadow-sm px-6 py-16 text-center space-y-6">
      <h1 className="text-2xl font-medium text-night">Faça a diferença</h1>
      <Slider {...settings}>
        {slides.map(slide => (
          <div key={slide.id} className="text-center space-y-8 text-night text-lg font-medium">
            <img src={slide.image} alt={slide.desc} className="h-72 w-full" />
            <p>{slide.desc}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}
