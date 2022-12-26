import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';

FormHelperText.propTypes = {
  id: PropTypes.string,
  variant: PropTypes.string,
  disabled: PropTypes.bool,
  invalid: PropTypes.bool,
  required: PropTypes.bool,
  readOnly: PropTypes.bool,
  ariaLabel: PropTypes.string,
  ariaDescribedby: PropTypes.string,
}

FormHelperText.defaultProps = {
  id: '', /* [xs, sm, md, lg, xl] */
  variant: 'outline', /* [outline, solid] */
  disabled: false,
  invalid: false,
  required: false,
  readOnly: false,
  ariaLabel: '', /* A label that describes the input */
  ariaDescribedby: '' /* The id of the element that describes the input */
};

export default function FormHelperText(props) {
    return (
      <p id="email-description" className="mt-2 text-sm text-gray-500">
        {props.children}
      </p>
    )
  }
  