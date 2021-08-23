import './topbar.styles.scss';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';

const Topbar = () => (
  <div className="topbar hover-underline-animation">
  
  <div className="menu "> <p>Menu</p> </div>
  <div className="logo"> <p>Ritual</p> </div>
  
   <div className="about"><p>Who We are</p></div>
   <span className="cart"><LocalMallOutlinedIcon /></span>
   
  
 </div>);


export default Topbar;