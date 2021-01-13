import react, { useState } from 'react';

const CatandDog = () => {

    const [imageSrc, imageSrcUpdate] = useState('/assets/img/cat.png');

    const imageOver = () => {
        imageSrcUpdate('/assets/img/dog.png');
    }
    const imageOut = () => {
        imageSrcUpdate('assets/img/cat.png');
    }

    return (
        <div>Cat and Dog 
            <img
                scr={ imageSrc }
                onMouseOver={ imageOver }
                onMouseOut={ imageOut }
            />
        </div>    
    )
}

export default CatandDog;