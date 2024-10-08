import style from "./style.module.scss";
import { tradeData } from "../../../data/biTrade-data";

const BiTradeSection = () => {

	// The list is dynamically generated from tradeData, and item 4's text is split into multiple lines.
	return (
	<section style={{backgroundColor: "#182B27FF"}}>
			<div className={`${style.trade} container-spacing`}>
					<h2>Why <b>Bi Trade</b></h2>
					<div className={style.trade_list}>
						{tradeData.map(item => (
							<div key={item.id} className={style.trade_list_item}>
								<img src={item.icon} alt="icon" />
								<div className={style.trade_list_item_text}>
									<span>{item.title}</span>
									{item.id === 4 ? (
										<p>
											{/* If the item's ID is 4, split the text into multiple lines */}
											{item.text.map((line, index) => (
												<span key={index}>{line}<br/></span>
											))}
										</p>
									) : (
										<p>{item.text}</p>
									)}
								</div>
							</div>
						))}     
					</div>
			</div>
</section>
	)
}
export default BiTradeSection;