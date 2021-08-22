import './category.styles.scss';
import {categoryItems} from '../../data';

const Category = () => (

    <div className="check">
        {categoryItems.map(item => (
            <div className="category-items">
            <div className="background-image" 
            id={item.id} 
            style={{backgroundImage: `url(${item.img})`}}>
            
            
            
            </div>
            <div className="content">
                <p >{item.title}</p>
            </div>
            </div>
        ))}
    </div>

);
   
    


export default Category;