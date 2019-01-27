import React from 'react';
import propTypes from 'prop-types';

const App = () => {
    const profiles = [
        {name: 'Taro', age: 10},
        {name: 'Hanako', age: 5},
        {name: 'NoName', age: 3}
    ]
    return (
        <div>
            {
                profiles.map((profiles, index) => {
                    return <User name={profiles.name} age={profiles.age} key={index} />
                })
            }
        </div>
    )
}

const User = (props) => {
    return <div>Hi!, I am {props.name}, and {props.age} years old</div>
}

User.propTypes = {
    name: propTypes.string,
    age: propTypes.number.isRequired
}

export default App;
