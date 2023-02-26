import { Children } from "react";
import PropTypes from 'prop-types';
import Button from './Button';

ButtonGroup.propTypes = {
  rounded: PropTypes.bool,
  size: PropTypes.string,
  variant: PropTypes.string, 
}

ButtonGroup.defaultProps = {
  rounded: false,
  size: 'md',
  variant: 'secondary', 
};

export default function ButtonGroup({ 
  children, 
  variant, 
  size, 
  rounded 
}) {

  let first = ((rounded ? 'rounded-l-full' : '') + ' rounded-r-none mr-0')
  let middle = 'rounded-r-none rounded-l-none mr-0 ml-0'
  let last = ((rounded ? 'rounded-r-full' : '') + ' rounded-l-none ml-0')
  const arrayChildren = Children.toArray(children);

  return (
    <div role="group" aria-label='' className="flex-1">  
      {Children.map(arrayChildren, (child, index) => {
        return (   
          <Button
            key={index}
            variant={variant}
            size={size}
            icon={child.props.icon}
            iconSize={child.props.iconSize}
            disabled={child.props.disabled}
            secondaryIcon={child.props.secondaryIcon}
            suffixClasses={ index === 0 ? first : index === (arrayChildren.length - 1) ? last : middle }
            text={child.props.text}
            active={child.props.active}
            onClick={child.props.onClick}
          >
            {child.props.children}
          </Button>
        )
      })}
    </div>
  );
};