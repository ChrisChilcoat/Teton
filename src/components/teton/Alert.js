import { XIcon, ExclamationIcon } from "@heroicons/react/outline";
import PropTypes from 'prop-types';

Alert.propTypes = {
  icon: PropTypes.object,
  variant: PropTypes.string, 
  dismissable: PropTypes.bool
}

Alert.defaultProps = {
  icon: <ExclamationIcon />,
  variant: 'primary', 
  dismissable: false
};

function Alert( props ) {
  
  const className = {
    alert: {
      base: 'flex items-center justify-center p-3 text-white',
      variant: {
        primary: 'bg-blue-600',
        secondary: 'bg-gray-600',
        success: 'bg-green-600',
        warning: 'bg-yellow-600',
        danger: 'bg-red-600',
        info: 'bg-purple-600'
      }
    }
  }
  return (
    <div className="flex m-1 mb-3 overflow-hidden bg-white rounded-sm shadow dark:bg-black" role="alert">
      <div className={`
          ${className.alert.base}
          ${className.alert.variant[props.variant]}
        `} 
        aria-hidden="true"
      >
        <div className="w-5 h-5">
          {props.icon}
        </div>
      </div>
      <div className="flex-grow p-3 text-left">
        {props.children}
      </div>
      {props.dismissable &&
        <div className="p-3">
          <button data-dismiss="alert" className="text-gray-500 hover:text-gray-800 dark:hover:text-gray-200">
            <span className="sr-only">Dismiss</span>
            <span aria-hidden="true">
              <XIcon className="w-5 h-5" />
            </span>
          </button>
        </div>
      }
    </div>
  );
};

export default Alert;