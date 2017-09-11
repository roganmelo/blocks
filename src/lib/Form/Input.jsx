import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
  constructor(props) {
    super();

    const { style, disabled, value, id, label, type, inputProps } = props;

    this.state = {
      disabled,
      value,
      errorMessage: ''
    };

    if(style) {
      this.wrapperClassName = style.wrapperClassName;
      this.labelClassName = style.labelClassName;
      this.inputClassName = style.inputClassName;
      this.errorClassName = style.errorClassName;
    }

    this.id = id;
    this.label = label;
    this.type = type;
    this.inputProps = inputProps;
  }

  render() {
    return (
      <div className={this.wrapperClassName}>
        <label
          htmlFor={this.id}
          className={this.labelClassName}
        >
          {this.label}
        </label>
        <input
          className={this.inputClassName}
          disabled={this.state.disabled}
          defaultValue={this.state.value}
          id={this.id}
          type={this.type}
          {...this.inputProps}
        />
        <span className={this.errorClassName}>{this.state.errorMessage}</span>
      </div>
    );
  }
}

Input.defaultProps = {
  disabled: false,
  value: '',
  type: 'text'
};

Input.propTypes = {
  style: PropTypes.shape({
    wrapperClassName: PropTypes.string,
    labelClassName: PropTypes.string,
    inputClassName: PropTypes.string,
    errorClassName: PropTypes.string
  }),
  disabled: PropTypes.bool,
  value: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.oneOf(['email', 'search', 'tel', 'text', 'url'])
};