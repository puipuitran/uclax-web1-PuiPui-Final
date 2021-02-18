import React from 'react';
import styled from 'styled-components';

import { mq } from '../../../../common/media_queries.js';

import Lightbox from '../../../Shared/Lightbox/Lightbox.jsx';

const StaffMember = ({member}) => {

    return (
        <StaffMemberStyled className='StaffMember'>
            <img src={ member.image } />
            <h3>{ member.name }</h3>

            <Lightbox />

        </StaffMemberStyled>
    );
}

export default StaffMember;

const StaffMemberStyled = styled.div`

    /* flex: 1; */
    width: 100px; margin: 10px;

    @media ${mq.tablet} {
        width: 150px; margin: 15px;
    }

    @media ${mq.desktop} {
        width: 200px; margin: 20px;
    }

    img {
        max-width: 100%;
        display: block;
    }

    h3 {
        margin: 0px;
        color: white;
        background-color:  #999999;
        font-size: 16px;
        padding: 5px;
    }
`;