import React from 'react';
import slider1 from '../assets/slider1.jpg'
import slider2 from '../assets/slide2.jpg'
import slider3 from '../assets/slide3.jpg'
import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Features from '../Components/Features';
import g1 from '../assets/g1.jpg'
import g2 from '../assets/g2.webp'
import g3 from '../assets/g3.jpeg'
import g4 from '../assets/g4.jpg'
import g5 from '../assets/g5.jpg'
import g6 from '../assets/g6.jpg'
import { motion } from "framer-motion";




const Home = () => {

  const sliderEvents = [
    {
      id: 1,
      title: "Tree Plantation Program",
      desc: "Join our green mission to make the city cleaner and healthier. We plant trees to fight pollution and protect biodiversity. Let’s build a greener tomorrow together!",
      img: slider1
    },
    {
      id: 2,
      title: "Blood Donation Camp",
      desc: "Donate blood, save a life — your small act can bring hope. We organize safe and hygienic donation drives for hospitals. Be a hero, give the gift of life!",
      img: slider2
    },
    {
      id: 3,
      title: "Road Cleaning Drive",
      desc: "Together we clean our streets for a better environment. Join our volunteers to promote civic responsibility. Let’s make our city shine — one road at a time!",
       img: slider3
    }
  ];



  return (
    <div>

    <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        className="rounded-xl overflow-hidden"
      >
        {sliderEvents.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative  h-[400px] flex items-center justify-center text-center bg-cover  bg-center"
              style={{
                backgroundImage: `url(${slide.img})`,
              }}
            >
              {/*  overlay */}
              <div className="absolute inset-0 bg-black/60"></div>

              {/*  overlay */}
              <div className="relative z-10 text-white px-5">
                <h2 className="text-4xl font-bold mb-3">{slide.title}</h2>
                <p className="max-w-2xl mx-auto mb-5 text-gray-200">
                  {slide.desc}
                </p>
                <button className="bg-[#00d46f]  text-white font-semibold px-5 py-2 rounded-xl">
                 Click here for Details
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Features></Features>

      {/* //Gallery */}
     <motion.div
    className="rounded-xl shadow-lg"
  initial={{ opacity: 0, scale: 0.8 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6 }}
     
     >
       <div className='w-11/12 mx-auto'>
         <h1 className='font-bold text-3xl text-center my-8'>Our Event Gallery</h1>
         <div className='grid grid-cols-3  gap-4'>
<motion.img
  whileHover={{ scale: 1.08, rotate: 1 }}
  transition={{ type: "spring", stiffness: 200 }}
  className="h-[300px] w-full rounded-[10px] shadow-lg"
  src={g1}
  alt=""
/>
<motion.img
  whileHover={{ scale: 1.08, rotate: -1 }}
  transition={{ type: "spring", stiffness: 200 }}
  className="h-[300px] w-full rounded-[10px] shadow-lg"
  src={g2}
  alt=""
/>
<motion.img
  whileHover={{ scale: 1.08, rotate: 1 }}
  transition={{ type: "spring", stiffness: 200 }}
  className="h-[300px] w-full rounded-[10px] shadow-lg"
  src={g3}
  alt=""
/>
<motion.img
  whileHover={{ scale: 1.08, rotate: -1 }}
  transition={{ type: "spring", stiffness: 200 }}
  className="h-[300px] w-full rounded-[10px] shadow-lg"
  src={g4}
  alt=""
/>
<motion.img
  whileHover={{ scale: 1.08, rotate: 1 }}
  transition={{ type: "spring", stiffness: 200 }}
  className="h-[300px] w-full rounded-[10px] shadow-lg"
  src={g5}
  alt=""
/>
<motion.img
  whileHover={{ scale: 1.08, rotate: -1 }}
  transition={{ type: "spring", stiffness: 200 }}
  className="h-[300px] w-full rounded-[10px] shadow-lg"
  src={g6}
  alt=""
/>

         </div>
      </div>
     </motion.div>

    </div>
  );
};

export default Home;