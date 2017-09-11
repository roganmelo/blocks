import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Form extends Component {
  constructor(props) {
    super();

    const { style, children, ...formProps } = props;

    if(style) {
      this.wrapperClassName = style.wrapperClassName;
      this.formClassName = style.formClassName;
      this.fieldsetClassName = style.fieldsetClassName;
    }
    
    this.children = children;
    this.formProps = formProps;
  }

  render() {
    return (
      <div className={this.formWrapperClassName}>
        <form
          noValidate={true}
          className={this.formClassName}
          {...this.formProps}
        >
          <fieldset className={this.fieldsetClassName}>
            {this.children}
          </fieldset>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  style: PropTypes.shape({
    wrapperClassName: PropTypes.string,
    formClassName: PropTypes.string,
    fieldsetClassName: PropTypes.string
  }),
  children: PropTypes.any.isRequired
};