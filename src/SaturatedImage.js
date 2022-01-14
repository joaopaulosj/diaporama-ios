import React from 'react';



const SaturatedImage = ({ src, saturation, tint, transitionPeriodSeconds }) => {
  return (
    <div style={{backgroundColor: tint, transition: `all ${transitionPeriodSeconds}s linear`}}>
      <img 
        src={src} 
        style={{width: "100%", height: '100%', opacity: 0.8, filter: `saturate(${saturation}%)`, transition: `filter ${transitionPeriodSeconds}s linear`}}
        
        />
    </div>
  );
};

export default SaturatedImage;