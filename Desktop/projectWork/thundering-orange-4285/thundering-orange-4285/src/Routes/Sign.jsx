import styles from "../Components/Navbar.module.css";
import { Login } from './../Components/Login';
export const Sign = ()=>{
    return (
        <>
            <div className={styles.sign}>
                {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu6DetWHvYRt6ns0UtVPG95Y3KjELTnmNmdxAFaBvszyiYaZ7PfuMMU9JeqtMP6D1LpQI&usqp=CAU" alt="" /> */}
                <div>
                    <div className={styles.first1}>
                       <h1>Sign In</h1>
                       <div>
                        <p>Need a CRONOMETER account?</p>
                        <a href="sign.jsx">Sign In</a>
                       </div>
                       <div>
                           <img src="https://www.leutholdsalbertlea.com/wp-content/uploads/2019/08/Screen-Shot-2015-09-01-at-9.05.53-AM1.png" alt="" />
                           <button>Sign in with Google</button>
                       </div>
                       <div>
                           <img src="https://www.nidirect.gov.uk/sites/default/files/styles/nigov_full_620_x1/public/images/email_logo.jpg?itok=ifUhNgCT" alt="" />
                           <button>Sign in with E-mail</button>
                       </div>
                       <p>--------------OR,---------------</p>
                        {/* <p>Email address</p> 
                       <input type="text" name="" id="" placeholder="e.g:- raobaba@gmail.com" />
                       <p>Password</p>
                       <input type="text" name="" id="" placeholder="Enter Your Password" />  <br />
                       <a href="sign.jsx">reset password</a> <br />
                       <p> <input type="checkbox" /> keep in signed in </p>
                       <button>Sign</button>  */}
                      <div>
                       <Login />
                      </div>
                    </div>
                    <div className={styles.second1}>
                        <p>CRONOMETER</p>
                        <img src="https://article.innovadatabase.com/articleimgs/article_images/637533920736484522screenshot.jpg" alt="" />
                        <h3>Guides to learn more about Cronometer</h3>
                        <h4>Check out our guides to better understand user <br /> behavior, make the right changes, improve UX, and <br /> increase conversions on your website and product.</h4>
                        <button>Explore Guides</button> 
                    </div>
                </div>
            </div>
        </>
    )
}