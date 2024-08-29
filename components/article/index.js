import style from './styles.module.scss';
import arrow from "../../assets/header_icons/arrow-right.svg";
import channel from "../../assets/header_icons/channel.png";


const TradingText = () => {
    return (
        <section>
          <div className={`${style.trading} container-spacing`}>
            <div className={style.trading_texture}>
                <div className={style.trading_texture_text}>
                    <span>The Right Place For Your Online Trading Needs With <b>BiTrade</b></span>
                    <p>
                        Experience the piannacle of convivence with our user - 
                        friendly interface gain access to a vast array of over 100 
                        global trading assets
                    </p>
                </div>
                <div className={style.trading_texture_button}>
                    <button>Get Started</button>
                    <img src={arrow} alt="arrow"></img>
                </div>
            
            </div>
            <div className={style.channel}>
                <img src={channel} alt="channel" />
            </div>
        </div>
       
    </section>	
    )
}

export default TradingText;