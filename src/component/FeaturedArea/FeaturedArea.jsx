import './FeaturedArea.styles.scss';
import capsules from '../../assets/leftFloat.webp';
import map from '../../assets/rightFloat.webp';


const FeaturedArea = () => (
    <div class="wrap">
    <div class="floatleft">
        <div>
        <img className="float-end capsule-edit" src={capsules} alt="capsules"/>
        </div>
        
        <div className="second-part-text">
        <h2>You deserve traceability</h2><br />
       <p>We share our sources, studies, and suppliers — daily
       <br /> essentials backed by the first visible supply chain of its kind.</p> 

        <p className="link-effect">Meet Our Ingredients</p>
        
        <p className="link-effect">Our Clinical Study</p>
        </div>
        
    </div>
    <div class="floatright">
    <div className="content-wrapper">
    <h2>
    We're not about pseudoscience and half-truths
        </h2>
        <p>
        From Omega-3 DHA from microalgae to regeneratively-farmed pea protein, our scientists studied diets and genetics to make daily essentials based on what we need.
        </p>
        <p className="link-effect"> Who We Are</p>
    </div>

    <div className="second-part-image">
        <img src = {map} alt="map" />
    </div>
        
       
    </div>
    <div style={{clear: 'both'}}></div>
</div>);


export default FeaturedArea;

