import PropTypes from "prop-types";
import styles from "./Navigation1.module.css";

const Navigation1 = ({ className = "" }) => {
  return (
    <header className={[styles.navigation, className].join(" ")}>
      <div className={styles.logoParent}>
        <img className={styles.logoIcon} alt="" src="/logo-1@2x.png" />
        <div className={styles.workfallTitle}>
          <a className={styles.workfall}>Workfall</a>
        </div>
      </div>
      <div className={styles.tabs}>
        <div className={styles.dashboard}>Dashboard</div>
      </div>
      <div className={styles.tabs1}>
        <div className={styles.associates}>Associates</div>
      </div>
      <div className={styles.tabs2}>
        <div className={styles.workOffers}>Work offers</div>
      </div>
      <div className={styles.tabs3}>
        <div className={styles.workstreams}>WORKSTREAMS</div>
      </div>
      <div className={styles.tabs4}>
        <div className={styles.earnings}>Earnings</div>
      </div>
      <div className={styles.tabs5}>
        <div className={styles.reviews}>REVIEWS</div>
      </div>
      <div className={styles.tabs6}>
        <div className={styles.clients}>Clients</div>
      </div>
      <div className={styles.tabs7}>
        <div className={styles.calls}>CALLS</div>
      </div>
      <div className={styles.tabs8}>
        <div className={styles.chats}>chats</div>
      </div>
      <div className={styles.content}>
        <div className={styles.userInfoParent}>
          <div className={styles.userInfo}>
            <div className={styles.bellBackgroundParent}>
              <div className={styles.bellBackground} />
              <img
                className={styles.bellIcon}
                loading="lazy"
                alt=""
                src="/bell.svg"
              />
            </div>
          </div>
          <div className={styles.userProfile}>
            <img
              className={styles.userProfileChild}
              loading="lazy"
              alt=""
              src="/group-25514.svg"
            />
          </div>
          <div className={styles.welcomeMessage}>
            <div className={styles.welcomeBack}>Welcome back,</div>
            <div className={styles.userName}>
              <div className={styles.john}>John</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

Navigation1.propTypes = {
  className: PropTypes.string,
};

export default Navigation1;
