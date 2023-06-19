import React, {useState} from 'react';

const Color = () => {
  const [block1, setBlock1] = useState("red");
  const [block2, setBlock2] = useState("blue");
  const handleClick = () => {
    setBlock1(block2);
    setBlock2(block1);
  }
  return (
    <div>
      <div style={{ backgroundColor: block1}} className='Block1' onClick={handleClick}></div>
      <div style={{ backgroundColor: block2}} className='Block2' onClick={handleClick}></div>
    </div>
  );
};
export default Color;
