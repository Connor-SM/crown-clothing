import styled, { css } from 'styled-components';

const buttonStyles = css`
    background-color: black;
    color: white;

    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
`;

const invertedButtonStyles = css`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
        background-color: black;
        color: white;
        border: none;
    }
`;

const googleSignInStyles = css`
    background-color: #4285f4;
    color: white;

    &:hover {
        background-color: #357ae8;
        border: none;
    }
`;

const modalButtonStyles = css`
    display: inline-block;
    margin: 10px;
    justify-content: space-between;
    width: 40%;
    min-width: 50px;
`;

const getButtonStyles = props => {
    let styles = [];
    if (props.isGoogleSignIn) {
        return googleSignInStyles;
    } else if (props.modalButton) {
        styles.push(modalButtonStyles);
    }

    styles.push(props.inverted ? invertedButtonStyles : buttonStyles);

    return styles;
}

export const CustomButtonContainer = styled.button`
    width: auto;
    min-width: 165px;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    cursor: pointer;
    display: flex;
    justify-content: center;
    overflow: hidden;
    border: none;

    ${getButtonStyles}
`;