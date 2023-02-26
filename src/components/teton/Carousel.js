import { useState, useEffect, createContext, useContext } from 'react'
import PropTypes from 'prop-types'
import Button from '../teton/Button'
import Badge from '../teton/Badge'
import {ChevronLeftIcon, ChevronRightIcon} from '@heroicons/react/solid'

Carousel.propTypes = {
  slides: PropTypes.array.isRequired,
  aspectRatio: PropTypes.oneOf(['none', 'oneByOne', 'fiveByFour', 'fourByThree', 'threeByTwo', 'fiveByThree', 'sixteenByNine', 'threeByOne']),
  btnSize: PropTypes.string,
  position: PropTypes.number,
  transition: PropTypes.oneOf(['slide', 'fade']),
  indicatorVariant: PropTypes.oneOf(['dots', 'pill']),
  indicatorPosition: PropTypes.oneOf(['top_left', 'top_center', 'top_right', 'bottom_left', 'bottom_center', 'bottom_right']),
  callback: PropTypes.func
}

Carousel.defaultProps = {
  slides: [],
  aspectRatio: 'fiveByFour',
  btnSize: 'md',
  position: 0,
  transition: 'slide',
  indicatorVariant: 'dots',
  indicatorPosition: 'bottom_center',
  callback: () => {}
}

export default function Carousel({ 
  slides, 
  aspectRatio, 
  btnSize, 
  position,
  transition,
  indicatorVariant,
  indicatorPosition,
  callback
}, props) {
  let length = slides.length
  const [pos, setPos] = useState(position),
        [min, setMin] = useState(0),
        [max, setMax] = useState(pos + 2);

  useEffect(() => {
    if (position) {
      setPos(position)
      setMax(position + 2)
      callback(position);
    } else {
      setPos(0)
      callback(position);
    }
  }, [position]);

  const className = {
    carousel: {
      base: 'overflow-hidden relative',
      aspectRatio: {
        none: '',
        oneByOne: "aspect-[1/1]",
        fiveByFour: "aspect-[5/4]",
        fourByThree: "aspect-[4/3]",
        threeByTwo: "aspect-[3/2]",
        fiveByThree: "aspect-[5/3]",
        sixteenByNine: "aspect-[16/9]",
        threeByOne: "aspect-[3/1]"  
      }
    }
  },
  handleSlideRight = () => { 
    if (pos < (length - 1)) {
      callback(pos + 1)
      setPos(pos + 1)
      setMax(max + 1)
    } else {
      callback(0)
      setPos(0)
      setMin(0)
      setMax(pos + 2)
    }
  },
  handleSlideLeft = () => {  
    if (pos !== 0) {
      callback(Number.parseInt(pos - 1))
      setPos(Number.parseInt(pos - 1))
      setMax(max - 1)
    } else {
      callback(Number.parseInt(length - 1))
      setPos(Number.parseInt(length - 1))
      setMax(pos + 2)
    }
  },
  RenderIndicators = ( ) => {  
    return (
      <span>
        <div class={(btnSize === 'xs' ? 'space-x-2' : 'space-x-3') + ' absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2'}>
          {/*
          {slides.slice(0, 10).map((item, index) => (
            <button 
              key={index}
              onClick={() => setPos(index)} 
              type="button" 
              className={(index === pos ? '' : 'opacity-50 ') + (btnSize === 'xs' ? 'w-2 h-2' : 'w-3 h-3') + ' bg-white rounded-full shadow'} 
              aria-current={index === pos ? 'true' : 'false'}
              aria-label={'Slide ' + (index + 1)} 
            >
            </button> 
          ))}
          */}
          <Badge variant="secondary" rounded size="xs">{pos + 1} of {length}</Badge>
        </div>
      </span>
    )
  },
  RenderSlides = ( ) => { 
    return slides.slice(min, max).map((item, index) => (
      <div class={        
        (pos > index ? 'opacity-0 z-10 transition-all' : '') + // Left
        (pos === index ? 'opacity-100 z-20 transition-all' : '') + // Active
        (pos < index ? 'opacity-0 z-10 transition-all' : '') + // Right
        ' duration-700 ease-in-out absolute inset-0 transform'
      }>
        <img 
          src={item.url} 
          alt={item.imageDesc} 
          class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        />
        <span className="sr-only">{item.imageDesc}</span>
      </div>
    ))
  },
  RenderButtons = () => {
    return (
      <>
        <div class={(pos === 0 ? 'hidden' : 'absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4')}>
          <Button onClick={() => handleSlideLeft()} icon={<ChevronLeftIcon/>} iconSize="xl" variant="outline_light" size={btnSize} rounded> 
            <span class="sr-only">Previous</span> 
          </Button>      
        </div>
        <div class={(pos === length - 1 ? 'hidden' : 'absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4')}>
          <Button onClick={() => handleSlideRight()} icon={<ChevronRightIcon/>} iconSize="xl" variant="outline_light" size={btnSize} rounded> 
            <span class="sr-only">Next</span> 
          </Button> 
        </div> 
      </>
    )
  };
  
  return (
    <div class="w-full m-auto relative">
      <div class={`
        ${className.carousel.base}
        ${className.carousel.aspectRatio[aspectRatio]}
      `}>
        {RenderSlides()}
      </div>
      {RenderIndicators()}
      {RenderButtons()}
    </div>
  )
}