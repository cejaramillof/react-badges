import React from 'react';

// Presentational component
const HelloWorld = () => {
    const Hello = 'Hello World';
    const isTrue = true;
    return (
        <div className="">
            <h1>{Hello}</h1>
            <h2>Curso Esencial de React</h2>
            { isTrue ? <h4>is true</h4> : <h5>is false</h5>}
            { isTrue && <h4>is true xd</h4>}
        </div>
    )
}
export default HelloWorld;