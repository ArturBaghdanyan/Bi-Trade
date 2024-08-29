import FeatureSection from "./feature-section/featureSection";
import ChooseSection from "./choose-section/chooseSection";
import BiTradeSection from "./bi-trade-section/index";

import MarketSection from "./market-section/index";

const MainContainer = () => {

	return (
		<main>
			<FeatureSection />
			<ChooseSection />
			<BiTradeSection />
			<MarketSection />
		</main>
	)
}
export default MainContainer;