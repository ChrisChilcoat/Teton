import { Children } from "react"
import PropTypes from 'prop-types'

Card.propTypes = {
  variant: PropTypes.string,
  aspectRatio: PropTypes.oneOf(['none', 'oneByOne', 'fiveByFour', 'fourByThree', 'threeByTwo', 'fiveByThree', 'sixteenByNine', 'threeByOne']),
  size: PropTypes.string,
  backgroundImg: PropTypes.object
}

Card.defaultProps = {
  variant: 'default',
  aspectRatio: 'none',
  size: 'md',
  backgroundImg: null
};

export default function Card({
  variant,
  aspectRatio,
  size,
  children,
  backgroundImg
}) {

  const className = {
    card: {
      base: 'border isolate relative rounded-lg border-1 overflow-hidden',
      variant: {
        default: 'bg-white border-gray-200 text-black dark:bg-black dark:text-white',
        primary: 'bg-blue-600 border-blue-600 text-white',
        secondary: 'bg-gray-600 border-gray-600 text-white',
        success: 'bg-green-600 border-green-600 text-white',
        warning: 'bg-yellow-600 border-yellow-600 text-white',
        danger: 'bg-red-600 border-red-600 text-white',
        info: 'bg-purple-600 border-purple-600 text-white'
      },
      aspectRatio: {
        none: "",
        oneByOne: "aspect-[1/1] relative",
        fiveByFour: "aspect-[5/4] relative",
        fourByThree: "aspect-[4/3] relative",
        threeByFour: "aspect-[3/4] relative",
        threeByTwo: "aspect-[3/2] relative",
        fiveByThree: "aspect-[5/3] relative",
        sixteenByNine: "aspect-[16/9] relative",
        threeByOne: "aspect-[3/1] relative"  
      },
      size: {
        xxs: 'px-0 py-0',
        xs: 'px-2 py-1',
        sm: 'px-3 py-2',
        md: 'px-4 py-3',
        lg: 'px-5 py-4',
        xl: 'px-6 py-5',
        xxl: 'px-7 py-6'
      }
    }
  }

  return (
    <div className={`
      ${className.card.base}
      ${className.card.variant[variant]}
      ${className.card.size[size]}
    `}>
      <div className={`${className.card.aspectRatio[aspectRatio]}`}>
        {Children.map(children, (child, index) => {
          return (
            <>
              {child}
            </>
          )
        })}
        {backgroundImg &&
          <div className="absolute -inset-8 -z-10" aria-hidden="true">
            <img
              className="object-cover w-full h-full"
              src={backgroundImg}
              alt=""
            />
          </div>
        }
      </div>
    </div>
  )
}