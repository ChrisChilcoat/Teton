import PropTypes from 'prop-types';

Container.propTypes = {
  suffixClasses: PropTypes.string,
  max: PropTypes.string
}
Container.defaultProps = {
  suffixClasses: '',
  max: ''
}

function Container({ 
  children, 
  max, 
  suffixClasses 
}) { 

  const className = {
    container: {
      base: 'm-auto px-4',
      max: {
        sm: 'max-w-screen-sm', // max-width: 640px;
        md: 'max-w-screen-md', // max-width: 768px;
        lg: 'max-w-screen-lg', //	max-width: 1024px;
        xl: 'max-w-screen-xl', //	max-width: 1280px;
        xxl: 'max-w-screen-2xl' // max-width: 1536px;
      }
    }
  }

  return (
    <div className={`
      ${className.container.base}
      ${className.container.max[max]}
      ${suffixClasses}
    `}>
      {children}
    </div>
  )
}

export default Container