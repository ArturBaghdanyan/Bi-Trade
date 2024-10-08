import style from "./style.module.scss";
import Header from "../header";
import NewsLetter from "../main/news-letter/index";
import Footer from "../footer/index";
import { useEffect } from "react";

const AboutPage = () => {
	useEffect(() => {
		// Set the class to change the opacity on mount
		document.body.classList.add('aboutPage');
		return () => {
		  // Remove the class on unmount
		  document.body.classList.remove('aboutPage');
		};
	  }, []);

  return (
    <div className={style.about}>
      <Header />
      <div className={`${style.about_container}`}>
        <div className="pages_title">
          <p>About Us</p>
        </div>
        <div className={style.about_container_column}>
			<div className={style.about_container_list}>
			<h3>
				<span>Bitrade</span>  A Client-oriented company, creating new possibilities 
				in the market of leading trading technologies.
	</h3>
	<div className={style.about_container_list_row}>
	<div className={style.about_container_list_row_piece}>
		<p>
		At BItrade, we've thought of everything down to the smallest detail. On 
						the road to creating a world-class trading platform, we feel that it is
						our priority to offer the highest quality services and support,
						including professional level tutorials, analytical services, and client 
						support.
		</p>
					<p>
						We know how important the quality of the trading platform is to a trader's 
						success. That's precisely why BItrade places such emphasis on a high level 
						of service and a wide spectrum of intellectual offers. In addition, the 
						broker dedicates a huge amount of attention to the professional preparation 
						of beginner traders, while at the same time providing for the highest level 
						needs of the most sophisticated traders in the market.
					</p>
	</div>
				<div className={style.about_container_list_row_piece}>
					<p>
						BItrade works with clients all over the world, guaranteeing the most 
						advantageous terms and providing high quality access to the world's 
						financial markets. We build our collaboration with our clients in the 
						form of a conversation: we want to find out your needs and comments, 
						and what you would like to get from working with BItrade, and we want 
						to hear it directly from you.
					</p>
		<p>
						Our collaboration with our clients is completely transparent, while 
						our high-tech service allows traders to see the actual picture of the 
						world's financial markets, and to evaluate your risk objectively. 
						BItrade is certified by the IFC and all of the risks of our clients are 
						insured in accordance with the current laws, which makes us one of the 
						safest trading platforms in the world. All of this gives us and our 
						clients the highest level of mutual trust and makes for a pleasant 
						investing climate at BI trade.
		</p>
	</div>
			</div>
			</div>
			<div className={style.about_container_list}>
				<h3>Our <span>Advantage</span></h3>
				<div className={style.about_container_list_row_piece}>
					<span>High-end trading platform with a wide range of financial assets.</span> 
					<span>Some of the most advantageous trading terms and investment opportunities on the market.</span> 
					<span>Analytical trading services.</span>
					<span>Convenient for both experienced and novice traders.</span> 
					<span>Helpful high quality tutorials.</span>
					<span>Efficient and highly professional client support staff.</span>
					<span>Quotes from leading world news agencies.</span>
				</div>
			</div>
		</div>
      </div>
	  <div style={{background: "#00150FFF", marginTop: "100px"}}>
			<NewsLetter />
			<Footer />
		</div>
    </div>
  )
}
export default AboutPage;