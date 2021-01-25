import React, { useState } from 'react';

const Login = () => {

const [imageSrc, imageSrcUpdate] = useState('assets/img/cat.png');

const imageOver = () => {
    imageSrcUpdate('assets/img/cat.png');
}
const imageOut = () => {
    imageSrcUpdate('assets/img/dog.png');
}

    return (
        <div><h1>Cat And Dog</h1>         
            <img 
                src={ imageSrc } 
                alt='Cat And Dog'
                onMouseOver={ imageOver }
                onMouseOut={ imageOut }
            /> 
        </div>
    )
}

export default Login;