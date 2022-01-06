import styled from 'styled-components';
import colors from '../../utils/colors';

export const Container = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background-color: ${colors.gray.white};
    box-shadow:0  0.5rem 1.5rem #00000010;
    alight-itens: conter;
    justify-content: space-between;
    display: flex;
    padding: 0.5rem 5%;

    `;

export const logo = styled.a`
    font-size: 2rem;
    color: ${colors.gray.black};
    font-weight: bold;
    flex-direction: row;
    display: flex;

    p{
        color: ${colors.primary.main}
    }
`;

export const Navbar = styled.div`
    diplay: flex;

    @media screen and (max-width: 768px) {
        display: none;

`;

export const Options = styled.a`
    font-size: 1rem;
    color: ${colors.gray.light01};
    transition: 0.3s all ease-in-out;
    cursor: pointer;

    &+a{
        margin-left: 1rem;
    }

    &:hover{
        color: ${colors.primary.main};
        border-bottom: 1 px solid ${colors.primary.main};
    }

`;