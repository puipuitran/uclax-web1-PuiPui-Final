import React, { useState } from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { tabItems } from './tabbed_data.js';

/* Components ---------------------------*/
import TabbedNav from './TabbedNav.jsx';
import TabbedContent from './TabbedContent.jsx';

const Tabbed = () => {

    const [ chosenTab, chosenTabUpdates ] = useState(tabItems[1]);

    const changeTabs = () => {
        chosenTabUpdates(tabItems[2])
    }


    return (
        <TabbedStyled className='Tabbed'>
            <TabbedNav changeTabs={ changeTabs }/>
            <TabbedContent  chosenTab={ chosenTab } />
        </TabbedStyled>
    );
}

export default Tabbed;

const TabbedStyled = styled.div`

`;