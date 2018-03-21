import React from 'react' 


const Slide = ( props ) => {
const current = props.background[props.current]; 
console.log(current); 

  const styles = {
    imageBackground:{
      backgroundImage: `url(/images/${current}.jpg)`,
      backgroundSize: 'cover',
      backgroundPosition: `center`
    }
  }

  return <div className="slide" style={styles.imageBackground}></div>
}

export default Slide; 
