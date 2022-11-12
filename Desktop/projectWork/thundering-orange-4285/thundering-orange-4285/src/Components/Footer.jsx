import styles from "./Navbar.module.css";
export const Footer = ()=>{
    return (
        <>
        <div className={styles.container}>
             <div>
                <h3>Cronometer</h3>
                <p>For Individuals</p>
                <p>For Professionals</p>
                <p>Privacy</p>
                <p>Terms</p>
             </div>
             <div>
                <h3>The Company</h3>
                <p>About Us</p>
                <p>Crono Blog</p>
                <p>Crono Forums</p>
                <p>
Jobs</p>
                <p>Support</p>                
             </div>
             <div>
                <h3>Partners & Affiliates</h3>
                <p>Affilate Program</p>
                <p>Media Kit</p>
             </div>
             
        </div>
        <div className={styles.color}>
            <div className={styles.end}>
                <img src="https://images.ctfassets.net/lh3zuq09vnm2/2xYBSWqzEcgQBCSZvzi2Ba/4900f94996692c866f7bc6e8d270156d/Facebook.svg" alt="" />
                <img src="https://images.ctfassets.net/lh3zuq09vnm2/2gmz7xiNP3FbVtmkrX0yOk/22c37a7312bb87516b445506a15bd4ab/Twitter.svg" alt="" />
                <img src="https://images.ctfassets.net/lh3zuq09vnm2/1aJwui56wNjZwTTH9ZTGkk/4a8f3d1a644fb2614a86fce9582e8e09/LinkedIn.svg" alt="" />
                <img src="https://images.ctfassets.net/lh3zuq09vnm2/2nncGYpZv80x0X0bG857Cz/8d256f52107275c5437b8b826345fc9c/Youtube.svg" alt="" />
            </div> 
            <div className={styles.last}>
                <div>
                <img className={styles.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu6DetWHvYRt6ns0UtVPG95Y3KjELTnmNmdxAFaBvszyiYaZ7PfuMMU9JeqtMP6D1LpQI&usqp=CAU" alt="" />
                <p>Copyright © 2011-2022
All rights reserved.</p>
                
                </div>
            </div>
        </div>
        </>
    )
}