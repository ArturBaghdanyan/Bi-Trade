import FeatureSection from "./feature-section/featureSection";
import ChooseSection from "./choose-section/chooseSection";
import BiTradeBonuses from "./biTrade-bonuses/index";
import BiTradeSection from "./bi-trade-section/index";
import MarketSection from "./market-section/index";
import AccordionComponent from "./FAQ-section";
// import NewsLetter from "./news-letter/index";


const MainContainer = () => {

	return (
		<main>
			<FeatureSection />
			<ChooseSection />
			<BiTradeBonuses />
			<BiTradeSection />
			<MarketSection />
			<AccordionComponent />
			{/* <NewsLetter /> */}
		</main>
	)
}
export default MainContainer;