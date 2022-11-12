import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
const links = [
  
  {
    path: "/",
    title: <img className={styles.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu6DetWHvYRt6ns0UtVPG95Y3KjELTnmNmdxAFaBvszyiYaZ7PfuMMU9JeqtMP6D1LpQI&usqp=CAU" alt="square"/>
  },
  {
    path: "/",
    title: "Home"
  },
  {
    path: "/product",
    title: "Product"
  },
  {
    path: "/Support",
    title: "Support"
  },
  {
    path: "/Blocks",
    title: "Blog"
  },
  {
    path: "/Forums",
    title: "Forums"
  },
  {
    path: "/About",
    title: "About"
  },
  {
    path: "/sign",
    title: <button className={styles.Button}>Sign In</button>
  },
  {
    path: "/started",
    title: <button className={styles.button}>Get Started Free</button>
  }
];

function Navbar() {
  return (
    <>
    <div className={styles.navDiv}>
      {links.map((link) => (
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.active : styles.default
          }
          key={link.path}
          to={link.path}
        >
           {link.title}
          
        </NavLink>
      ))}
    </div>
    </>
  );
}
export default Navbar;
