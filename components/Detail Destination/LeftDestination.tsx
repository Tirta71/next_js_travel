/* eslint-disable @next/next/no-img-element */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface PackagePhoto {
  id: number;
  photo: string;
}

interface LeftDestinationProps {
  name: string;
  about: string;
  package_photos: PackagePhoto[];
}

const LeftDestination: React.FC<LeftDestinationProps> = ({
  name,
  about,
  package_photos,
}) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="col-md-8">
      <div className="grid-item">
        <h3 className="big-heading text-4xl font-bold mb-6 text-gray-900">
          {name}
        </h3>
        <p className="content text-4lg text-gray-700 mb-8">{about}</p>
        <Slider {...settings} className="w-full">
          {package_photos.map((photo) => (
            <div
              key={photo.id}
              className="relative overflow-hidden rounded-lg shadow-lg group"
            >
              <img
                src={`${baseUrl}/storage/${photo.photo}`}
                alt={`Photo ${photo.id}`}
                className=" object-cover transition-transform duration-300 group-hover:scale-105 cursor-grab"
                style={{ width: "100%", height: "600px", objectFit: "cover" }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default LeftDestination;
