import PropTypes from "prop-types";
import styles from "./Footer.module.css";

const Footer = ({ className = "" }) => {
  return (
    <footer className={[styles.footer, className].join(" ")}>
      <div className={styles.footerContent}>
        <div className={styles.logoParent}>
          <img className={styles.logoIcon} alt="" src="/logo-1@2x.png" />
          <div className={styles.footerTitle}>
            <h1 className={styles.workfall}>Workfall</h1>
          </div>
        </div>
        <div className={styles.linksContainerParent}>
          <div className={styles.linksContainer}>
            <h3 className={styles.quickLinks}>Quick Links</h3>
            <div className={styles.linkTypes}>
              <div className={styles.blogs}>Blogs</div>
              <div className={styles.stories}>Stories</div>
            </div>
          </div>
          <div className={styles.contactUsParent}>
            <h3 className={styles.contactUs}>Contact Us</h3>
            <div className={styles.contactInfo}>
              <div className={styles.contactIcons}>
                <img
                  className={styles.hugeIconcommunicationoutlin}
                  loading="lazy"
                  alt=""
                  src="/hugeiconcommunicationoutlinemail.svg"
                />
                <div className={styles.contactworkfallcom}>
                  contact@workfall.com
                </div>
              </div>
              <div className={styles.contactIcons1}>
                <img
                  className={styles.hugeIconcommunicationoutlin1}
                  loading="lazy"
                  alt=""
                  src="/hugeiconcommunicationoutlinecall.svg"
                />
                <div className={styles.div}>+1 650 900 2022</div>
              </div>
            </div>
          </div>
          <div className={styles.followUsOnParent}>
            <h3 className={styles.followUsOn}>Follow Us on:</h3>
            <div className={styles.socialPlatforms}>
              <img
                className={styles.facebookNegative}
                loading="lazy"
                alt=""
                src="/facebook--negative.svg"
              />
              <img
                className={styles.twitterNegative}
                loading="lazy"
                alt=""
                src="/twitter--negative.svg"
              />
              <img
                className={styles.instagramNegative}
                loading="lazy"
                alt=""
                src="/instagram--negative.svg"
              />
              <img
                className={styles.linkedinNegative}
                loading="lazy"
                alt=""
                src="/linkedin--negative.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerSeparatorParent}>
        <div className={styles.footerSeparator} />
        <div className={styles.legalInfo}>
          <div className={styles.policyLinks}>
            <a className={styles.privacyPolicy}>Privacy Policy</a>
            <div className={styles.cookiesPolicy}>Cookies Policy</div>
            <div className={styles.termsOfService}>Terms of Service</div>
          </div>
          <div className={styles.workfallInc}>© 2022 Workfall, Inc.</div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
