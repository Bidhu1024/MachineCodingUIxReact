import React, { useState } from "react";

const Star = ({ starCount = 5 }) => {
  const [value, setValue] = useState<number>(0);
  const [hoverValue,setHoverValue] = useState(0)
  console.log(hoverValue)
  return (
    <div className="container">
      {new Array(starCount).fill(0).map((data, index) => {
        return (
          <span 
          key={index}
          style={{cursor:"pointer"}}
          className={hoverValue === 0 && index < value || index < hoverValue ? "gold":""}
          onClick={() => setValue(index + 1)}
          onMouseEnter={()=>setHoverValue(index+1)}
          onMouseLeave={()=>setHoverValue(0)}
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
};

export default Star;
