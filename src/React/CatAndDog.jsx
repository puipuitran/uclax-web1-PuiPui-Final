import React, { useState } from 'react';

const CatAndDog = () => {

const [imageSrc, imageSrcUpdate] = useState('assets/img/cat.png');

const imageOver = () => {
    imageSrcUpdate('assets/img/cat.png');
}
const imageOut = () => {
    imageSrcUpdate('assets/img/dog.png');
}

    return (
        <div>
            Cat And Dog
        <img 
            src={ imageSrc } 
            onMouseOver={ imageOver }
            onMouseOut={ imageOut }
            /> 
        </div>
    )
}

export default CatAndDog;