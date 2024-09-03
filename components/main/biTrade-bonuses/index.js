import style from "./style.module.scss";
import vector from "../../../assets/section/trade-bonuses_icons/vector.svg";
import { SwiperIcons } from "./swiper";
import inputIcon from "../../../assets/section/trade-bonuses_icons/input-icon.svg";

const BiTradeBonuses = () => {
	return (
	<section>
		<div className={`${style.trade_bonuses} container-spacing`}>
			<h2><b>BiTrade</b> Bonuses</h2>

			<div className={style.trade_bonuses_text}>
				<span>Leave your email and be the first to know about our bonuses</span>
				<img src={vector} alt="email" />
			</div>
			<div className={style.trade_bonuses_form}>
				<input type="email" />
				<button>
				<img src={inputIcon} alt="email" />

				</button>
			</div>
			<SwiperIcons />
		</div>
	</section>
	)
}
export default BiTradeBonuses;  