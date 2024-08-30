import styles from "./styles.module.scss";
import biTrade from "../../assets/header_icons/bi-trade.svg";
import { Link } from "react-router-dom";

const Header = () => {

	return (    
		<header>
			<div className={styles.header}>

			<div className={styles.header_logo}>
				<img src={biTrade} alt="bi-trade"/>
			</div>
			<div className={styles.header_nav}>
				<nav>
				{/* 
				Use <Link> instead of <a> to enable client-side navigation.
				This prevents full page reloads and provides a smoother user experience.
				*/}
					<Link to="/demo">FREE DEMO</Link>
					<Link to="/about">About us</Link>
					<Link to="/contact">Contact</Link>
					<select>
						<option>Language</option>
						<option>English</option>
						<option>Armenian</option>
						<option>Russian</option>
					</select>
					<Link to="/register">Registration</Link>
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