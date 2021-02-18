import React from 'react';
import styled from 'styled-components';

import { staffData } from './staffData.js'

import StaffMember from './StaffMember'

const Staff = () => {

    return (
        <StaffStyled className='Staff'>
            <h2>Staff</h2>

            <div className='members'>
            {
                staffData.map((member, idx) => {
                    return <StaffMember key={ idx } member={ member }/>
                })          
            }
           </div>

        </StaffStyled>
    );
}

export default Staff;

const StaffStyled = styled.div`
    background-color: #c1cbce;
    padding: 25px;
    margin: 25px 0px;

    .members {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        justify-content: flex-start;
        justify-content: flex-end;
        justify-content: space-between;

    }
`;