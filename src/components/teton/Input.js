import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';

Input.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string,
  invalid: PropTypes.bool,

  required: PropTypes.bool,
  readOnly: PropTypes.bool,
  ariaLabel: PropTypes.string,
  ariaDescribedby: PropTypes.string,
  disabled: PropTypes.bool,
}

Input.defaultProps = {
  placeholder: null,
  name: '',
  id: '',
  type: 'text',
  size: 'sm', /* [xs, sm, md, lg, xl] */
  invalid: false,
  required: false,
  readOnly: false,
  ariaLabel: null, /* A label that describes the input */
  ariaDescribedby: null, /* The id of the element that describes the input */
  disabled: false
};

function Input(props) {

  let _size

  let _base = "shadow-sm block w-full rounded-md";
  let _state = props.invalid ? 'border-red-600 text-red-600 bg-red-50 focus:ring-red-600 focus:border-red-600' : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
  let _suffixClasses = props.suffixClasses ? props.suffixClasses : ''
  let _disabled = props.disabled ? 'opacity-50' : null

  const [inputClasses, setInputClasses] = useState("hidden");

  const setup = () => {

    switch (props.size) {
      case 'xs':
        _size = "text-xs"
        break;
      case 'sm':
        _size = "text-sm"
        break;
      case 'md':
        _size = "text-md"
        break;
      case 'lg':
        _size = "text-lg"
        break;
      case 'xl':
        _size = "text-xl"
        break;
      default:
        break;
    }

    setInputClasses( _base + " " + _size + " " + _state + " " + _disabled + "" + _suffixClasses )

  }

  useEffect(() => {
    setup()
  });

  return (
    <>
      <input
        type={props.type}
        name={props.name} 
        id={props.id}
        className={inputClasses}
        placeholder={props.placeholder}
        disabled={props.disabled ? true : false}
        aria-required={props.required ? true : null}
      />
    </>
  )
}

export default Input;
  
/*
  <div className="flex flex-wrap w-full p-8 space-x-4">
    <FormControl id="email">
      <FormLabel>Email address</FormLabel>
      <Input placeholder="jon@gmail.com" />
      <FormHelperText>We'll never share your email.</FormHelperText>
    </FormControl>
  </div>
*/