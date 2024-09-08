import TradingText from "../article/index";
import Header from "../header/index";
import MainContainer from "../main/index";
import Footer from "../footer";
const Home = () => {
	
	return (
	<>
		<div className="columns">
			<Header isHomePage={true} />
			<TradingText />
		</div>	
		<MainContainer />
		<Footer />
	</>
	)
}
export default Home;