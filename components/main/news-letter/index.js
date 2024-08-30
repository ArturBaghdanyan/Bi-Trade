import newsIcon from "../../../assets/section/news-icon.svg";
import style from "./style.module.scss";

const NewsLetter = () => {
	return (
	<section className={style.newsSection}>
		<div className={`${style.news}`}>
			<div className={style.news_icon}>
				<img src={newsIcon} alt="vector" />
			</div>
			<div className={style.news_column}>
				<div className={style.news_text}>
					<h2><b>Subscribe</b> our news</h2>
					<p>Hey! Are you tired of missing out on our updates? Subscribe to our news now and stay in the loop!</p>
				</div>
				<div className={style.form}>
					<input type="email" name="email" placeholder="Email Address" />
					<button>Submit</button>
				</div>
			</div>
		</div>
	</section>
	)
}
export default NewsLetter;  