import React, { useContext } from 'react';
import AuthContext from '../auth/authContext';

function About(props) {
    const text = useContext(AuthContext);
    return (
        <div>
            About {text}
        </div>
    );
}

export default About;