import PropTypes from 'prop-types'
import LoadingIcon from './LoadingIcon'

Button.propTypes = {
  active: PropTypes.bool,
  block: PropTypes.bool,
  disabled: PropTypes.bool,
  icon: PropTypes.object,
  iconSize: PropTypes.string,
  justify: PropTypes.string,
  loading: PropTypes.bool,
  rounded: PropTypes.bool,
  onClick: PropTypes.func,
  size: PropTypes.string,
  suffixClasses: PropTypes.string,
  secondaryIcon: PropTypes.object,
  text: PropTypes.string,
  variant: PropTypes.string, 
}

Button.defaultProps = {
  active: false,
  block: false,
  disabled: false,
  icon: null,
  iconSize: 'md',
  justify: 'center',
  loading: false,
  rounded: false,
  onClick: null,
  size: 'md',
  suffixClasses: '',
  secondaryIcon: null,
  text: '',
  variant: 'secondary', 
}

function Button({
  active, 
  block, 
  disabled, 
  icon, 
  iconSize, 
  justify, 
  loading,
  rounded,
  onClick,
  size,
  suffixClasses,
  secondaryIcon,
  text,
  variant,
  children
}) {
  
  const className = {
    button: {
      base: "inline-flex relative align-middle items-center font-medium content-center leading-4 disabled:opacity-40 disabled:cursor-not-allowed text-center shadow-sm transform active:scale-95",
      focus: "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
      transition: "transition duration-300 ease-in-out",
      variant: {
        primary: active || loading ? "border-blue-800 bg-blue-800 shadow-inner text-white border" : "border-blue-600 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white border",
        secondary: active || loading ? "border-gray-800 bg-gray-800 shadow-inner text-white border" : "border-gray-600 bg-gray-600 hover:bg-gray-700 active:bg-gray-80 text-white border",
        success: active || loading ? "border-green-800 bg-green-800 shadow-inner text-white border" : "border-green-600 bg-green-600 hover:bg-green-700 active:bg-green-800 text-white border",
        warning: active || loading ? "border-yellow-800 bg-yellow-800 shadow-inner text-white border" : "border-yellow-600 bg-yellow-600 hover:bg-yellow-700 active:bg-yellow-800 text-white border",
        danger: active || loading ? "border-red-800 bg-red-800 shadow-inner text-white border" : "border-red-600 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white border",
        info: active || loading ? "border-purple-800 bg-purple-800 shadow-inner text-white border" : "border-purple-600 bg-purple-600 hover:bg-purple-700 active:bg-purple-800 text-white border",
        light: active || loading ? "border-gray-300 bg-gray-300 shadow-inner text-black shadow-none border" : "border-white bg-white hover:bg-gray-200 active:bg-gray-300 text-black shadow-none border",
        dark: active || loading ? "border-black bg-black shadow-inner text-white" : "border-gray-900 bg-gray-900 hover:bg-gray-700 active:bg-black text-white border",
        link: active || loading ? "border-gray-300 bg-gray-300 shadow-inner border" : "border-white bg-transparent hover:bg-gray-200 hover:text-blue-700 active:bg-gray-300" + " text-blue-600 shadow-none border",
        outline_primary: active || loading ? "border-blue-800 bg-blue-100 shadow-inner text-blue-700 border" : "bg-white border-blue-600 hover:bg-blue-50 hover:border-blue-700 hover:text-blue-800 active:bg-blue-100 text-blue-700 border",
        outline_secondary: active || loading ? "border-gray-800 bg-gray-100 shadow-inner text-gray-700 border" : "bg-white border-gray-600 hover:bg-gray-50 hover:border-gray-700 hover:text-gray-800 active:bg-gray-100 text-gray-700 border",
        outline_success: active || loading ? "border-green-800 bg-green-100 shadow-inner text-green-700 border" : "bg-white border-green-600 hover:bg-green-50 hover:border-green-700 hover:text-green-800 active:bg-green-100 text-green-700 border",
        outline_warning: active || loading ? "border-yellow-800 bg-yellow-100 shadow-inner text-yellow-700 border" : "bg-white border-yellow-600 hover:bg-yellow-50 hover:border-yellow-700 hover:text-yellow-800 active:bg-yellow-100 text-yellow-700 border",
        outline_danger: active || loading ? "border-red-800 bg-red-100 shadow-inner text-red-700 border" : "bg-white border-red-600 hover:bg-red-50 hover:border-red-700 hover:text-red-800 active:bg-red-100 text-red-700 border",
        outline_info: active || loading ? "border-purple-800 bg-purple-100 shadow-inner text-purple-700 border" : "bg-white border-purple-600 hover:bg-purple-100 hover:border-purple-700 hover:text-purple-800 active:bg-purple-200 text-purple-700 border",
        outline_light: active || loading ? "border-gray-500 bg-gray-100 shadow-inner text-gray-700 border" : "bg-white hover:text-gray-800 hover:bg-gray-50 border-gray-300 hover:border-gray-400 active:bg-gray-100 text-gray-700 border",
        outline_dark: active || loading ? "border-gray-500 bg-gray-100 shadow-inner text-gray-700 border" : "bg-white hover:text-gray-800 border-gray-900 hover:bg-gray-50 hover:border-gray-700 active:bg-gray-100 text-gray-700 border",
        outline_link: active || loading ? "border-gray-500 bg-gray-100 shadow-inner text-blue-600 border" : "bg-white hover:text-gray-800 hover:bg-gray-50 border-gray-300 hover:border-gray-400 hover:text-blue-700 active:bg-gray-100 text-blue-600 border",
      },
      size: {
        xs: ((text ? "px-3" : "w-8") + " h-7 text-xs"),
        sm: ((text ? "px-3" : "w-9") + " h-9 text-sm"),
        md: ((text ? "px-4" : "w-10") + " h-10 text-md"),
        lg: ((text ? "px-5" : "w-12") + " h-12 text-lg"),
        xl: ((text ? "px-6" : "w-16") + " h-16 text-xl")
      },
      block: block ? "w-full" : "",
      justify: {
        center: "justify-center",
        start: "justify-start",
        end: "justify-end"
      },
      rounded: rounded ? "rounded-full": "rounded",
    },
    icon: {
      xs: " w-3.5 h-3.5",
      sm: " w-4 h-4",
      md: " w-5 h-5",
      lg: " w-6 h-6",
      xl: " w-7 h-7",
    },
    secondaryIcon: {
      xs: " w-3.5 h-3.5",
      sm: " w-4 h-4",
      md: " w-5 h-5",
      lg: " w-6 h-6",
      xl: " w-7 h-7",
    },
  },
  loadingText = () => {
    return (
      <>
        <LoadingIcon />
        Loading...
      </>
    )
  }

  return (
    <button 
      onClick={onClick} 
      className={`
        ${className.button.base}
        ${className.button.rounded}
        ${className.button.variant[variant]}
        ${className.button.block}
        ${className.button.justify[justify]}
        ${className.button.size[size]}
        ${suffixClasses}
      `} 
      disabled={disabled}
    >
      {children}
      {icon ? <span className={(text ? "mr-1 " : "") + className.icon[iconSize] + " first:inline-block"} aria-hidden="true">{loading ? '' : icon}</span> : null}
      {loading ? loadingText() : text} 
      {secondaryIcon ? <span className={(text ? "ml-1 " : "") + className.secondaryIcon[iconSize] + " inline-block"} aria-hidden="true">{secondaryIcon}</span> : null}
    </button>
  )
}

export default Button;