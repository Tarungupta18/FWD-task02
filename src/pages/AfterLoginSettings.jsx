import Navigation1 from "../components/Navigation1";
import SidebarContent from "../components/SidebarContent";
import Footer from "../components/Footer";
import styles from "./AfterLoginSettings.module.css";

const AfterLoginSettings = () => {
  return (
    <div className={styles.afterLoginSettings}>
      <main className={styles.frameParent}>
        <div className={styles.logoParent}>
          <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
          <div className={styles.workfallFindTheContainer}>
            <p className={styles.workfall}>Workfall</p>
            <p className={styles.findTheVery}>Find the very best</p>
          </div>
        </div>
        <div className={styles.icoutlineNavigateNext} />
        <Navigation1 />
        <section className={styles.sidebar}>
          <SidebarContent />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AfterLoginSettings;
