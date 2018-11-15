import styled from 'styled-components';
import logo from '../../assets/images/logo.png';
import background from '../../assets/images/background.jpg'

export const LoginForm = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;

    @media (min-width: 480px) {
        width: 35%;
    }
`;

export const LoginFormLogo = styled.div`
    background-image: url(${logo});
    background-size: cover;
    height: 7rem;
    width: 5rem;
`;

export const LoginHeroContainer = styled.div`
    display: none;
    height: 100vh;
    width: 65%;

    @media (min-width: 480px) {
        display: inherit;
    }
`;

export const LoginHeroBackground = styled.div`
    background-image: linear-gradient(to right bottom, rgba(34, 230, 255, 0.72), rgba(0, 120, 136, 0.72)), url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    width: 100%;

`;
