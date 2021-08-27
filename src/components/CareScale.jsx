import imgWater from '../assets/water.svg';
import imgSun from '../assets/sun.svg';

function CareScale ({scaleValue, careType}) {
  const range = [1, 2, 3];
  const scaleType = careType === 'light' ? 
  <img src={imgSun} alt="Soleil icone" />
  : <img src={imgWater} alt="Eau icone" />;

  return <div>
    {range.map(rangeElem => 
      scaleValue >= rangeElem ? 
        <span key={rangeElem.toString()}>{scaleType}</span> 
        : null
    )}
  </div>;
}

export default CareScale;
