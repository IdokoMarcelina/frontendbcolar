import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ label, onClick, type = 'button', className = '', style = {} }) => {
  return (
    <button
      type={type}
      className={`custom-button ${className}`}
      style={style}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired, // Button label can be text or JSX
  onClick: PropTypes.func.isRequired, // `onClick` is required and should be a function
  type: PropTypes.oneOf(['button', 'submit', 'reset']), // Restrict to valid button types
  className: PropTypes.string, // Optional custom class name
  style: PropTypes.object, // Optional inline styles
};

Button.defaultProps = {
  type: 'button',
  className: '',
  style: {},
};

export default Button;
