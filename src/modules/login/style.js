import styled from 'styled-components';
import logo from '../../assets/images/logo.png';
import background from '../../assets/images/background.jpg'

export const LoginForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100vh;
    width: 100%;

    @media (min-width: 480px) {
        width: 70%;
    }

    @media (min-width: 840px) {
        width: 50%;
    }

    @media (min-width: 1280px) {
        width: 40%;
    }
`;

export const LoginFormLogo = styled.div`
    font-size: 2rem;
    font-weight: 900;
`;

export const LoginHeroContainer = styled.div`
    display: none;
    height: 100vh;
    width: 30%;

    @media (min-width: 480px) {
        display: inherit;
    }

    @media (min-width: 840px) {
        width: 50%;
    }

    @media (min-width: 1280px) {
        width: 60%;
    }
`;

export const LoginHeroBackground = styled.div`
    background-image: linear-gradient(to right bottom, rgba(0, 0, 0, .16), rgba(0, 0, 0, .40)), url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    width: 100%;

`;
