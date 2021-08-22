import './homepage.styles.scss';
import Topbar from '../../component/topbar/topbar.component';
import HomeBanner from '../../component/homeBanner/homeBanner.component';
import Category from '../../component/category/category.component';
import Introduction from '../../component/Introduction/introduction.component';
import FeaturedArea from '../../component/FeaturedArea/FeaturedArea';
import FeaturedProducts from '../../component/FeaturedProducts/featuredproducts.component';
import LastSection from '../../component/LastSection/lastSection.components';

const Homepage = () => (
  <>
  <Topbar />
  <HomeBanner />
  <Category />
  <Introduction />
  <FeaturedArea />
  <FeaturedProducts />
  <LastSection />
  </>
  );


export default Homepage;