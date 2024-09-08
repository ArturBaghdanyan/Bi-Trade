import computer from "../../../assets/computer.png";
import benefit from "../../../assets/section/benefit.svg";
import exchange from "../../../assets/section/exchange.svg";
import style from "./styles.module.scss";

const FeatureSection = () => {

	return (
		<div 
		 style={{ backgroundColor: "#011610FF" }} 
		 className="container-spacing"
		>
			<div className={style.feature}>
				<img src={computer} alt="computer" />

				<div className={style.feature_texture}>
					<h3>Start learning on the demo version to avoid putting yourself at risk</h3>
					<div className={style.feature_columns}>
						<div className={style.feature_columns_row}>
							<div>
								<img src={benefit} alt="benefit" />
							</div>
							<div className={style.feature_columns_row_item}>
								<span>Start trading without risk</span>
								<p>
									Get $10,000 in virtual dollars on a demo account 
									and start practicing right of losing real money. 
									Perfect for beginners and those who want to hone their skills
								</p>
							</div>
						</div>
						<div className={style.feature_columns_row}>
							<div>
								<img src={exchange} alt="benefit" />
							</div>
							<div className={style.feature_columns_row_item}>
								<span>Explore All Platform Features</span>
								<p>
									Use the demo version to familiarize yourself with all the 
									features and tools of our trading platform.
								</p>
							</div>
						</div>
						<div className={style.feature_columns_button}>
							<button>Try Demo</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default FeatureSection;