import React from 'react';

const Welcome = () => {
    return (
            <img 
                src="https://revengeofthefans.com/wp-content/uploads/2019/01/Breaking-Bad-RTF-e1548338096892.jpg"
                alt="welcome page"
                style={imgStyle}
            />
    );
};

export default Welcome;

const imgStyle = {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 100
}