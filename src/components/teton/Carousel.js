import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'
import Button from '../teton/Button'
import {ChevronLeftIcon, ChevronRightIcon} from '@heroicons/react/solid'

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
        class={(index === position ? 'bg-white' : 'bg-white opacity-50') + ' w-3 h-3 rounded-full shadow'} 
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
        (position === index ? 'translate-x-0 z-20 transition-all' : '') +   //Active
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
        <div class={(position === 0 ? 'hidden' : 'absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4')}>
          <Button suffixClasses="-left-10" onClick={() => setPosition(BackPos)} icon={<ChevronLeftIcon/>} iconSize="xl" variant="outline-light" size="lg" rounded> 
            <span class="sr-only">Previous</span> 
          </Button>      
        </div>
        <div class={(position === length - 1 ? 'hidden' : 'absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4')}>
          <Button suffixClasses="-right-10" onClick={() => setPosition(NextPos)} icon={<ChevronRightIcon/>} iconSize="xl" variant="outline-light" size="lg" rounded> 
            <span class="sr-only">Next</span> 
          </Button> 
        </div> 
      </>
    )
  }

  return (
    <div>
      <div class="w-[400px] sm:w-[450px] md:w-[500px] lg:w-[600px] m-auto relative">
        <div class="h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px] overflow-hidden relative">
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