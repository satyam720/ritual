import './homebanner.styles.scss';
import bannerImg from '../../assets/bannerImg.jpg';
import Button from '@material-ui/core/Button';


const HomeBanner = () => (
  <div className="banner-wrapper">

  <img  src={bannerImg} alt="" />
  <div className="banner-content">
      <div className="text1">The future</div> 
     <div className="text2">of health</div>
      <em className="text3"> — is clear</em><br/>
      <Button className="btn-edit"> Shop All</Button>
  </div>
  
  </div>
  
  )

export default  HomeBanner;