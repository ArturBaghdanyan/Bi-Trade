import style from "./style.module.scss";
import vector from "../../assets/trade-bonuses_icons/vector.svg";

const BiTradeBonuses = () => {
	return (
		<section>
			<div className={style.trade_bonuses}>
				<h2><b>BiTrade</b> Bonuses</h2>

				<div>
					<span>Leave your email and be the first to know about our bonuses</span>
					<img src={vector} alt="email" />
				</div>
			</div>
		</section>
	)
}
export default BiTradeBonuses;  