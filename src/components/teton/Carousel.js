import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types';

Carousel.propTypes = {
  slides: PropTypes.array
}

Carousel.defaultProps = {
  slides: []
}

function Carousel({ slides }) {
  const [position, setPosition] = useState(0)
  let length = slides.length

  const NextPos = () => { 
    if (position < length - 1) {
      return position + 1
    } else {
      return 0
    }
  }
  const BackPos = () => {  
    if (position === 0) {
      return length - 1
    } else {
      return position - 1
    }
  } 
  const RenderIndicators = ( ) => {    
    return slides.map((item, index) => (
      <button 
        key={index}
        onClick={() => setPosition(index)} 
        type="button" 
        class={(index === position ? 'bg-black' : 'bg-gray-500') + ' w-3 h-3 rounded-full shadow'} 
        aria-current={index === position ? 'true' : 'false'}
        aria-label={'Slide ' + (index + 1)} 
        data-carousel-slide-to={index}>
      </button>
    ))
  }
  const RenderSlides = ( ) => { 
    return slides.map((item, index) => (
      <div class={
        (position > index ? '-translate-x-full z-10 transition-all' : '') + //Left
        (position === index ? 'translate-x-0 z-20 transition-all' : '') + //Active
        (position < index ? 'translate-x-full z-10 transition-all' : '') +  //Right
        ' duration-700 ease-in-out absolute inset-0 transform'
      }>
        <img 
          src={item.imageUrl} 
          alt={item.imageDesc} 
          class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 -mt-1"
        />
        <span className="sr-only">{item.imageDesc}</span>
      </div>
    ))
  }
  const RenderButtons = () => {
    return (
      <>
        <button 
          onClick={() => setPosition(BackPos)} 
          type="button" 
          class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
          <span class="bg-white border -left-[20px] absolute shadow-lg inline-flex items-center justify-center w-10 h-10 rounded-full group-focus:ring-1 group-focus:ring-white group-focus:outline-none">
            <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            <span class="sr-only">Previous</span>
          </span>     
        </button>
        <button 
          onClick={() => setPosition(NextPos)} 
          type="button" 
          class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
            <span class="bg-white border -right-[20px] absolute shadow-lg inline-flex items-center justify-center w-10 h-10 rounded-full group-focus:ring-1 group-focus:ring-white group-focus:outline-none">
            <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            <span class="sr-only">Next</span>
          </span>
        </button>
      </>
    )
  }

  return (
    <div>
      <div class="w-[400px] sm:w-[450px] md:w-[500px] lg:w-[700px] m-auto relative ">
        <div class="h-[400px] sm:h-[450px] md:h-[500px] lg:h-[700px] relative overflow-hidden rounded-lg">
          {RenderSlides()}
        </div>
        <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
          {RenderIndicators()}
        </div>
        {RenderButtons()}
      </div>
    </div>
  )
}

export default Carousel;