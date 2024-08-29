import styles from "./styles.module.scss";
import biTrade from "../../assets/header_icons/bi-trade.svg";

const Header = () => {

	return (    
		<header>
			<div className={styles.header}>

			<div className={styles.header_logo}>
				<img src={biTrade} alt="bi-trade"/>
			</div>
			<div className={styles.header_nav}>
				<nav>
					<a href="#">FREE DEMO</a>
					<a href="#">About us</a>
					<a href="#">Contact</a>
					<select>
						<option>
							Language
						</option>
						<option>english</option>
					</select>
					<a href="#">Registration</a>
				</nav>
				<div className={styles.header_button}>
					<button>Join Now</button>
				</div>
			</div>
			
			</div>
		
		</header>	
	)
}
export default Header;