import React, { useState } from 'react';
import styled from 'styled-components';

const CatAndDog = () => {

    const [imageSrc, imageSrcUpdate] = useState('assets/img/cat.png');

const imageOver = () => {
    imageSrcUpdate('assets/img/cat.png');
}
const imageOut = () => {
    imageSrcUpdate('assets/img/dog.png');
}

    return (
        <CatAndDogStyled className='CatAndDog'>
            <h2>Cat And Dog</h2> 
            <img 
                src={ imageSrc } 
                alt='Cat And Dog'
                onMouseOver={ imageOver }
                onMouseOut={ imageOut }
            /> 
        </CatAndDogStyled>
    );
}

export default CatAndDog;

const CatAndDogStyled = styled.div`

`;