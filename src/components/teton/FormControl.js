import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';

import Input from './Input';
import FormLabel from './FormLabel';

FormControl.propTypes = {
  size: PropTypes.string,
  variant: PropTypes.string,
  disabled: PropTypes.bool,
  invalid: PropTypes.bool,
  required: PropTypes.bool,
  readOnly: PropTypes.bool,
  ariaLabel: PropTypes.string,
  ariaDescribedby: PropTypes.string,
}

FormControl.defaultProps = {
  size: 'md', /* [xs, sm, md, lg, xl] */
  variant: 'outline', /* [outline, solid] */
  disabled: false,
  invalid: false,
  required: false,
  readOnly: false,
  ariaLabel: '', /* A label that describes the input */
  ariaDescribedby: '' /* The id of the element that describes the input */
};

export default function FormControl(props) {
    return (
        <div role="group" className="mt-1">
          {props.children}
        </div>
    )
  }
  