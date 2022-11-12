import styles from "../Components/Navbar.module.css";

import { useEffect } from 'react';
export const Home = ()=>{
    function useDocumentTitle() {
        useEffect(() => {
          document.title = "CRONOMETER";
        });
      }
      useDocumentTitle();
    
    return (
        <>
        <div className={styles.home}>
            
         
          <div className={styles.head9}>
                <div>
                    <div>
                      <img src="https://cdn1.cronometer.com/2021/landing/cronometer-hero-graphic.svg" alt="" />
                    </div>
                    <div>
                        <h1>Eat smarter,</h1>
                        <h1>Live better.</h1>
                        <p>Track your calories, exercise, biometrics</p>
                        <p>and health data.</p>
                       
                        <button>Sign Up For Free</button>
                    </div>
                </div>
            </div>
          <div className={styles.head4}>
            <div>
                <h2>As Seen On</h2>
            </div>
            <div className={styles.image}>
                <img src="https://cdn1.cronometer.com/2021/landing/media-mention-2.svg" alt="" />
                <img src="https://cdn1.cronometer.com/2021/landing/media-mention-1.svg" alt="" />
                <img src="https://cdn1.cronometer.com/2021/landing/media-mention-3.svg" alt="" />
                
            </div>
          
            <div className={styles.head5}>
               <h1>Available on Web, iOS and Android</h1>
               <p>Understand how users really experience your site.</p>
               
            </div>
           
            <div className={styles.head8}>
                <div>
                    <div>
                       
                        <p>I started Keto in July. MyFitnessPal seemed pretty cool. Spent hours setting it up and entering recipes only to discover the macros were not reliable due to all the contributions by the community. I was so frustrated. Then I found a review of several apps (on the Keto Mojo website) and discovered I wasn't the only one concerned about unreliability of the macros on both MFP and CarbManager (tried that too). Behold Cronometer! I love this app. It draws from nutrition databases with minimal community contributions so much, much more reliability. There are many more free features. The user interface is easy to navigate. I'm very happy with Cronometer.

iOS Review
September 23, 2019.</p>
                        <button>Learn More</button>
                    </div>
                    <div>
                        <img src="https://cdn1.cronometer.com/2021/landing/cronometer-staff-2-p-1600.jpeg" alt="" />
                   
                    </div>
                </div>
            </div>
            <div className={styles.head9}>
                <div>
                    <div>
                      <img src="https://media.redcircle.com/images/2020/7/26/16/0830167c-e8a9-4fd0-a207-953f6f881406_lwl418-cronometer.jpg" alt="" />
                    </div>
                    <div>
                  
                        <p>This app is my dream! I've been on the hunt for something that can track my daily nutritional needs and the majority of apps seem to think that only means macros. This tracks EVERYTHING! Getting my daily vitamins through food is so important to me and this has taken a HUGE load off of my plate. I bought gold within minutes. This is set up great, easy to use, links with my FitBit. I could go on and on.

Android Review
November 23, 2020.</p>
                        <button>Learn More</button>
                    </div>
                </div>
            </div>
           
            <div className={styles.head7}>
                <div>
                    <div>
                        <h2>CRONOMETER</h2>
                        <p>Check out our software designed for nutritionists, dietitians, research teams, schools, and hospitals.</p>
                        <div>

                            <button>Learn About Pro</button>
                        </div>
                       
                    </div>
                    <div>
                        <img src="https://play-lh.googleusercontent.com/pujIrzuZzXxqjBWNvIdi9I6iQzRKCqnRk7E8oh5_JbJgOZa8fCUYZuqUkH628BkuI3CU=w600-h300-pc0xffffff-pd" alt="" />
                    </div>
                </div>
            </div>
          </div>
        </div>
        </>
    )
}