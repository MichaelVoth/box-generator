import React, { useState } from 'react';

const BoxMaker = (props) => {
    const [color, setColor] = useState("");
    const [size, setSize] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addBox({ color, size }); // This is the function passed down from App.js

        setColor(""); // Reset the form
        setSize(0);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="color">Color: </label>
                <input type="text" name="color" onChange={(e) => setColor(e.target.value)} value={color} />
            </div>
            <div>
                <label htmlFor="size">Size: </label>
                <input type="number" name="size" onChange={(e) => setSize(e.target.value)} value={size} />
            </div>
            <input type="submit" value="Add" />
        </form>
    )
}
export default BoxMaker; 
