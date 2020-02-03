import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ( { children, inverted, isGoogleSignIn, modalButton, ...otherProps }) => (
    <button 
        className={`
        ${inverted ? 'inverted' : ''} 
        ${modalButton ? 'modal-button' : ''}
        ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
        {...otherProps}
    >
        {children}
    </button>
);

export default CustomButton;