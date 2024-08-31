import style from "./style.module.scss";
import { Link } from "react-router-dom";

export const FooterList = ({data}) => {
    return (
        <div className={style.footer_row_links}>
            {data.map(i => (
                <div key={i.id} className={style.footer_row_links_item}>
                    <h3>{i.title}</h3>
                    <Link>{i.text1}</Link>
                    <Link>{i.text2}</Link>
                    {i.text3 && <Link>{i.text3}</Link>}
                    {i.text4 && <Link>{i.text4}</Link>}
                </div>
            ))}
        </div>
    )
}