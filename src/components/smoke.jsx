import React from 'react';
import Languages from "@/assets/Applogo/languages.png"
const SmokeComponent = ({ children }) => {


  return (
<div className="relative flex justify-center items-center">
  <img className="absolute animate-spin [animation-duration:25s]" src={Languages} />
  <div>
    {children}
  </div>
</div>


  );
};

export default SmokeComponent;
