import React, { useState, useEffect, Children } from "react";
import PropTypes from 'prop-types';

import { XIcon, ExclamationIcon } from "@heroicons/react/outline";

Card.propTypes = {
  variant: PropTypes.string,
  size: PropTypes.string
}

Card.defaultProps = {
  variant: '',
  size: 'md'
};

function Card(props) {

  let _variant = props.variant;

  let _size = props.size;

  let _default = 'bg-white border-gray-200 text-black dark:bg-black dark:text-white'
  let _primary = 'bg-blue-600 border-blue-600 text-white'
  let _secondary = 'bg-gray-600 border-gray-600 text-white'
  let _success = 'bg-green-600 border-green-600 text-white'
  let _warning = 'bg-yellow-600 border-yellow-600 text-white'
  let _danger = 'bg-red-600 border-red-600 text-white'
  let _info = 'bg-purple-600 border-purple-600 text-white'

  const _arrayChildren = Children.toArray(props.children);

  const [cardClass, setCardClass] = useState();

  const setup = () => {
    
    let variant

    switch(_variant) {
      case 'primary':
        variant = _primary
        break
      case 'secondary':
        variant = _secondary
        break
      case 'success':
        variant = _success
        break
      case 'warning':
        variant = _warning
        break
      case 'danger':
        variant = _danger
        break
      case 'info':
        variant = _info
        break
      default:
        variant = _default
        break
    }

    let size
    
    switch(_size) {
      case 'xxs':
        size = "p-0"
        break
      case 'xs':
        size = "px-2 py-1"
        break
      case 'sm':
        size = "px-3 py-2"
        break
      case 'md':
        size = "px-4 py-3"
        break
      case 'lg':
        size = "px-4 py-3"
        break
      case 'xl':
        size = "px-4 py-3"
        break
      case 'xxl':
        size = "px-5 py-4"
        break
      default:
        size = "px-4 py-3"
        break
    }
   
    setCardClass(variant + " " + size)

  }

  useEffect(() => {
    setup()
  });

  return (
    <div className={cardClass + " border rounded-lg border-1 overflow-hidden"}>
      {Children.map(_arrayChildren, (child, index) => {
        return (
          <>
            {child}
          </>
        )
      })}
    </div>
  );
};

export default Card;