import styles from "../Components/Navbar.module.css";
export const GetStarted = ()=>{
    return (
        <div>
            <div className={styles.sign}>
                {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu6DetWHvYRt6ns0UtVPG95Y3KjELTnmNmdxAFaBvszyiYaZ7PfuMMU9JeqtMP6D1LpQI&usqp=CAU" alt="" /> */}
                <div>
                    <div className={styles.first1}>
                       <h1>Create Your Cronometer Account.</h1>
                       <div>

                       </div>
                       <div>
                           <img src="https://www.leutholdsalbertlea.com/wp-content/uploads/2019/08/Screen-Shot-2015-09-01-at-9.05.53-AM1.png" alt="" />
                           <button>Sign in with Google</button>
                       </div>
                       <p>-------------------OR,----------------</p>
                       <div>
                           <img src="https://www.nidirect.gov.uk/sites/default/files/styles/nigov_full_620_x1/public/images/email_logo.jpg?itok=ifUhNgCT" alt="" />
                           <button>Sign Up With E-mail.</button>
                       </div>
                      
                    </div>
                    <div className={styles.second1}>
                        <p>CRONOMETER GUIDES</p>
                        <img src="https://media.redcircle.com/images/2020/7/26/16/0830167c-e8a9-4fd0-a207-953f6f881406_lwl418-cronometer.jpg" alt="" />
                        <h3>Power your diet with science.</h3>
                        <h4>Cronometer is the most accurate and comprehensive nutrition tracker on the market..</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}