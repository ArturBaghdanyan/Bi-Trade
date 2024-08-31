import logo from "../../assets/footer_icons/bi-trade.svg";
import arrowIcon from "../../assets/footer_icons/arrow.svg";
import { FooterList } from "./footerList";
import { footerList } from "../../data/footer-list";
import style from "./style.module.scss";

const Footer = () => {
	return (
		<footer>
			<div className={`${style.footer}`}>
					<div className={style.footer_content}>
						<div className={style.footer_content_text}>
							<span>Risk warning:</span>
							<p>
								Trading financial instruments, including binary options, 
								carries a high level of risk and may result in the loss of 
								all your investments. Never invest more than you can afford 
								to lose. It's important to fully understand the risks involved 
								before you start trading. We recommend consulting with a financial 
								advisor before making any investment decisions.
							</p>
						</div>
						<div className={style.footer_content_text}>
							<span>Disclaimer:</span>
							<p>
								We are not liable for any financial losses or damages resulting 
								from the use of information on this website or from trading on 
								our platform.
							</p>
						</div>
					</div>
					<div className={style.footer_row}>
						<div className={style.footer_row_column}>
							<div className={style.footer_logo}>
								<img src={logo} alt="logo" />
								<img src={arrowIcon} alt="arrow-icon" />
							</div>
							<div className={style.footer_row_column_text}>
								<p>
									Welcome to our trading site! We offer the best, most affordable 
									products and services around. Shop now and 
									start finding great deals!
								</p>
							</div>
						</div>
						<FooterList data={footerList} />
					</div>
			</div>
		</footer>
	)
}
export default Footer;