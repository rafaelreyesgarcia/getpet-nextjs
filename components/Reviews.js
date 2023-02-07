import React from 'react'

const reviews = [
  {
    description: 'Kelly is amazing and my pups love her! Highly recommend her if you need someone to care for your pups ❤️🐶❤️',
    name: 'Samantha Anne',
    stars: '⭐⭐⭐⭐⭐',
  },
  {
    description: 'Kelly is awesome. We had her come while we were on vacation. My fur babies love her. She is trustworthy, she sent us very detailed updates at every visit. I would highly recommend her!',
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
          flex gap-10
      '>
        {reviews.map((review) => {
          return (
            <div>
              <p>{review.description}</p>
              <div>
                <span>{review.name}</span>
                <span>{review.stars}</span>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
