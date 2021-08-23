import './imageHandle.styles.scss'

const Image = ({FeaturedProductsList
                ,hoverImage,check,setCheck
                ,setHoverImage,HandleEnter,HandleLeave
                }) => {

  

    console.log(FeaturedProductsList.img1);
    console.log(hoverImage);
    return(
        <div 
        className='edit'>
        
        {hoverImage ? <div><img
        id={FeaturedProductsList.id}
        
        src={FeaturedProductsList.img2}
        alt={FeaturedProductsList.title}
      /></div> : (
            <div>  <img
        id={FeaturedProductsList.id}
        
        src={FeaturedProductsList.img1}
        alt={FeaturedProductsList.title}
      /></div>)}
        
       
      </div>)};


export default Image;