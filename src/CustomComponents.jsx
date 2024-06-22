import React from 'react';
// .jsx extension will give suggestion in vs code
const person = {
    name: 'Max',
    skills: "HTML, CSS, JS"
}
function CustomComponents(props) {
    return (
        <div>
            {/* using javascript variable in jsx */}
            <h1> Hello {person.name}</h1>
            {/* for css style double curly braces */}
            <img src= {props.img} style={{width: 200, height: 200}} alt="" />
        </div>
    );
}

export default CustomComponents;