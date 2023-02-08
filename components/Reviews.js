import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import React, { useState } from 'react'

const reviews = [
  {
    description: 'Kelley is amazing and my pups love her! Highly recommend her if you need someone to care for your pups ❤️🐶❤️',
    name: 'Samantha Anne',
    stars: '⭐⭐⭐⭐⭐',
  },
  {
    description: 'Kelley is awesome. We had her come while we were on vacation. My fur babies love her. She is trustworthy, she sent us very detailed updates at every visit. I would highly recommend her!',
    name: 'Cassie Parfitt',
    stars: '⭐⭐⭐⭐⭐',
  },
  {
    description: 'I totally recommend GetPet for your fur babies! We have used Kelley to watch my two doxies and she takes such good care of them. I get text messages with updates and is always so friendly and courteous! I\'ll continue to use her service in the future!',
    name: 'Patty Delgado Schnock',
    stars: '⭐⭐⭐⭐⭐',
  }
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const previous = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? reviews.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }
  const next = () => {
    const isLastSlide = currentIndex === reviews.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }
  return (
    <section
    className="
      h-screen overflow-hidden snap-start
      flex flex-col justify-evenly items-center"
    >
      <h1 className='font-heading text-2xl uppercase font-bold tracking-[0.3rem]'>
        Reviews
      </h1>
      <div
        className='
          flex flex-col gap-10
          px-10 relative group'
      >
        <div
          className='
            bg-gray-300/20 w-[20rem] h-[15rem] py-5 px-5 flex flex-col justify-between
            rounded-lg md:w-[40rem]'
        >
          <p className='my-auto'><q><i>{reviews[currentIndex].description}</i></q></p>
          <div className='flex justify-between'>
            <span>{reviews[currentIndex].name}</span>
            <span>{reviews[currentIndex].stars}</span>
          </div>
        </div>

        <div className='hidden group-hover:block absolute top-[50%] -translate-y-[50%] left-2 text-2xl p-1 cursor-pointer'
        >
          <ChevronLeft onClick={previous} />
        </div>
        <div className='hidden group-hover:block absolute top-[50%] -translate-y-[50%] right-2 text-2xl p-1 cursor-pointer'
        >
          <ChevronRight onClick={next}/>
        </div>
      </div>
      
    </section>
  )
}
