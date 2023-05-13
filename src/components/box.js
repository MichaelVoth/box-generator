import React from 'react';

const Box = (props) => {
    const boxes = props.boxes; // This is the array of box objects passed down from App.js 

    return (
        <div>
            {boxes.map((box, index) => (
                <div key={index} style={{backgroundColor: box.color, width: `${box.size}px`, height: `${box.size}px`, display: "inline-block", margin: "10px"}}></div>
                
            )
            )
            }
            {console.log("Boxes: ", boxes)}
        </div>
    )
}
export default Box;