import PropTypes from 'prop-types';

Row.propTypes = {
  suffixClasses: PropTypes.string,
  cols: PropTypes.number.isRequired
}
Row.defaultProps = {
  suffixClasses: '',
  cols: null
}

function Row({ 
  children, 
  cols, 
  suffixClasses 
}) { 
  const className = {
    row: {
      base: 'grid gap-4 pb-4',
      cols: {
        1: 'grid-cols-1',
        2: 'grid-cols-2',
        3: 'grid-cols-3',
        4: 'grid-cols-4',
        5: 'grid-cols-5',
        6: 'grid-cols-6',
        7: 'grid-cols-7',
        8: 'grid-cols-8',
        9: 'grid-cols-9',
        10: 'grid-cols-10',
        11: 'grid-cols-11',
        12: 'grid-cols-12'
      }
    }
  }

  return (
    <div className={`
      ${className.row.base}
      ${className.row.cols[cols]}
      ${suffixClasses}
    `}>
      {children}
    </div>
  )
}

export default Row