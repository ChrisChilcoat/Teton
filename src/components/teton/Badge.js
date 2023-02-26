import React, { useState, useEffect, Children } from 'react'
import PropTypes from 'prop-types';

Badge.propTypes = {
  rounded: PropTypes.bool,
  size: PropTypes.string,
  suffixClasses: PropTypes.string,
  variant: PropTypes.string, 
}

Badge.defaultProps = {
  rounded: false,
  size: 'inherit',
  suffixClasses: '',
  variant: 'secondary', 
};

export default function Badge({ 
  children, 
  size, 
  variant, 
  rounded, 
  suffixClasses 
}) {
  const className = {
    badge: {
      base: "inline-flex items-center font-medium",
      variant: {
        primary: "bg-blue-100 text-blue-800",
        secondary: "bg-gray-200 text-gray-800",
        success: "bg-green-100 text-green-800",
        warning: "bg-yellow-100 text-yellow-800",
        danger: "bg-red-100 text-red-800",
        info: "bg-purple-100 text-purple-800",
        light: "bg-gray-100 text-gray-800",
        dark: "bg-gray-800 text-gray-100"
      },
      size: {
        inherit: 'px-2.5 py-0.5',
        xs: "text-xs px-2.5 py-0.5",
        sm: "text-sm px-2.5 py-0.5",
        md: "text-base px-2.5 py-0.5",
        lg: "text-lg px-2.5 py-0.5",
        xl: "text-xl px-3 py-1",
        xxl: "text-2xl px-3.5 py-1.5"
      },
      rounded: rounded ? "rounded-full": "rounded"
    }
  }

  return (
    <span className={`
      ${className.badge.base}
      ${className.badge.variant[variant]}
      ${className.badge.size[size]}
      ${className.badge.rounded}
      ${suffixClasses}
    `}>
      {children}
    </span>
  )
}