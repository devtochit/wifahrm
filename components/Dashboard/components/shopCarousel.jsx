import React, { useEffect, useState } from "react";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function ShopCarousel() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading) return <Skeleton className="h-24 md:h-64" />;
  return (
    <div className="">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        swipeable={true}
        transitionTime={500}
        interval={4000}
        className="rounded-2xl overflow-hidden shop shadow-lg"
      >
        <div className="relative">
          <Image
            className=" bg-white h-24 object-cover md:h-64 w-full pointer-events-none"
            loading="lazy"
            src="https://i.ibb.co/mGyjGfy/chuttersnap-z-QWu-Vl-P-b-NI-unsplash.jpg"
            alt=""
            width={700}
            height={300}

          />
        </div>
        <div>
          <Image
            className=" bg-white h-24 object-cover md:h-64 w-full"
            loading="lazy"
            src="https://i.ibb.co/YcBTgZN/jonathan-niederhoffer-K0-XJWUN1-Fz-A-unsplash.jpg"
            alt=""
            width={700}
            height={300}

          />
        </div>
        <div>
          <Image
            className=" bg-white h-24 object-cover md:h-64 w-full"
            loading="lazy"
            src="https://i.ibb.co/zGFWmjp/james-yarema-P2-X7-NDx-GP0-unsplash-1.jpg"
            alt=""
            width={700}
            height={300}
          />
        </div>
      </Carousel>
    </div>
  );
}

export default ShopCarousel;
