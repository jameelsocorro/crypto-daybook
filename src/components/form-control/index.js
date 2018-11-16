import React, { Component } from 'react'

class FormControl extends Component {
    render() {

        const {
            label,
            type,
            placeholder,
            className
        } = this.props;

        return (
            <div className={`form-control mb-16 ${className}`}>
                <label className="form-control__label" htmlFor={label}>{label}</label>
                <input type={type || 'text'} placeholder={placeholder} />
            </div>
        )
    }
}

export { FormControl };
