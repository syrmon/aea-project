import Footer from "../../components/footer/Footer";
import NavbarChooser from "../../components/navbar-chooser/NavbarChooser";
import styles from "./about.module.css";

const About = () => {
  return (
    <div>
      <NavbarChooser />
      <div className={`${styles.container}`}>Über uns</div>
      <Footer />
    </div>
  );
};

export default About;
