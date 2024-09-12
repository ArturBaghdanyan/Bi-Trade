import Footer from "../footer"
import Header from "../header"
import illustration from "../../assets/illustration.svg";
import style from "./style.module.scss";

export const ErrorPage = () => {
	return (
		<div className={style.error}>
			<Header />
			<div className={style.error_title}>
				<p>404 Page</p>
			</div>
			<div className={style.error_container}>
				<div className={`${style.error_container_content} container-spacing`}>
					<div className={style.error_container_content_column}>
						<div className={style.error_container_content_column_img}>
							<img src={illustration} alt="illustration" />
						</div>
						<div className={style.error_container_content_column_text}>
							<div className={style.error_container_content_column_row}>
								<h3>ooops! page not found</h3>
								<p>
									Oops! It looks like you're lost. The page you were 
									looking for couldn't be found. Don't worry, it 
									happens to the best of us.
								</p>
							</div>
							<div className={style.error_container_content_column_row_button}>
								<button>Back to home</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<Footer />
		</div>
	)
}