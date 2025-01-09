import PropTypes from 'prop-types';
import './Input.css';

const Input = ({
  type = 'text',
  placeholder = '',
  value,
  onChange,
  className = '',
  style = {},
  name,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`custom-input ${className}`}
      style={style}
      name={name}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string, // Type of input, defaults to 'text'
  placeholder: PropTypes.string, // Placeholder text
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // String or number
  onChange: PropTypes.func.isRequired, // Required change handler
  className: PropTypes.string, // Additional CSS classes
  style: PropTypes.object, // Inline styles object
  name: PropTypes.string, // Input field name
};

Input.defaultProps = {
  type: 'text',
  placeholder: '',
  className: '',
  style: {},
};

export default Input;
