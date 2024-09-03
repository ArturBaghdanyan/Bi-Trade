import FeatureSection from "./feature-section/featureSection";
import ChooseSection from "./choose-section/chooseSection";
import BiTradeBonuses from "./biTrade-bonuses/index";
import BiTradeSection from "./bi-trade-section/index";
import MarketSection from "./market-section/index";
import HomeFreeAcc from "./FAQ-section/script";
import NewsLetter from "./news-letter/index";


const MainContainer = () => {

	return (
		<main>
			<FeatureSection />
			<ChooseSection />
			<BiTradeBonuses />
			<BiTradeSection />
			<MarketSection />
			<HomeFreeAcc />
			<NewsLetter />
		</main>
	)
}
export default MainContainer;