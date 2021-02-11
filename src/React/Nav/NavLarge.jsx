import React from 'react';
import styled from 'styled-components';

import Nav from './Nav.jsx';

const NavLarge = () => {

    return (
        <NavLargeStyled className='NavLarge'>
            <Nav />
        </NavLargeStyled>
    );
}

export default NavLarge;

const NavLargeStyled = styled.div`

    display: flex;
    justify-content: center;
    background-color: #c1cbce;
    padding: 20px;

    .Nav {
        display: flex;
        width: 500px;
    }

    a {
        flex: 1;
        text-align: center;
        display: block;
        background:  #999999;
        color: white;
        text-decoration: none;

        border-radius: 5px;

        padding: 10px;
        margin: 0px 5px;

        &.active {
            background-color: #3f3f3f;
        }
        &:hover {
            background-color: #3f3f3f;
            color: white;
        }
    }
`;