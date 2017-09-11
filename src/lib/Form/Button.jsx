import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  constructor(props) {
    super();

    const { style, disabled, disableOnInvalid, children, ...buttonProps } = props;
    
    this.state = { disabled };

    if(style) {
      this.wrapperClassName = style.wrapperClassName;
      this.buttonClassName = style.buttonClassName;
    }

    this.disableOnInvalid = disableOnInvalid;
    this.children = children;
    this.buttonProps = buttonProps;
  }
  
  render() {
    return (
      <div className={this.wrapperClassName}>
        <button
          className={this.buttonClassName}
          type='button'
          disabled={this.disableOnInvalid && this.state.disabled}
          {...this.buttonProps}
        >
          {this.children}
        </button>
      </div>
    );
  }
}

Button.defaultProps = {
  disabled: true,
  disableOnInvalid: true
};

Button.propTypes = {
  style: PropTypes.shape({
    wrapperClassName: PropTypes.string,
    buttonClassName: PropTypes.string,
  }),
  disabled: PropTypes.bool,
  disableOnInvalid: PropTypes.bool,
  children: PropTypes.string.isRequired
};