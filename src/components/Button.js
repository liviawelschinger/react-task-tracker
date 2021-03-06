import PropTypes from 'prop-types'


const Button = ({backgroundColor, text, onClick}) => {
  return (<button onClick={onClick} style={{backgroundColor}}className='btn'>{text}</button>
  )
}

Button.defaultProps = {
  color: 'steelblue'
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.string
}

export default Button
