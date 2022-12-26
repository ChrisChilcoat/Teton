import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';

FormErrorMeassage.propTypes = {
  id: PropTypes.string,
  variant: PropTypes.string,
  disabled: PropTypes.bool,
  invalid: PropTypes.bool,
  required: PropTypes.bool,
  readOnly: PropTypes.bool,
  ariaLabel: PropTypes.string,
  ariaDescribedby: PropTypes.string,
}

FormErrorMeassage.defaultProps = {
  id: '', /* [xs, sm, md, lg, xl] */
  variant: 'outline', /* [outline, solid] */
  disabled: false,
  invalid: false,
  required: false,
  readOnly: false,
  ariaLabel: '', /* A label that describes the input */
  ariaDescribedby: '' /* The id of the element that describes the input */
};

export default function FormErrorMeassage(props) {
    return (
      <p className="mt-2 text-sm text-red-500">
        {props.children}
      </p>
    )
  }
  