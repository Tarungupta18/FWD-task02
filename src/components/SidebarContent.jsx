import FrameComponent from "./FrameComponent";
import PropTypes from "prop-types";
import styles from "./SidebarContent.module.css";

const SidebarContent = ({ className = "" }) => {
  return (
    <div className={[styles.sidebarContent, className].join(" ")}>
      <div className={styles.menuItems}>
        <div className={styles.goBackButton}>
          <img
            className={styles.arrowIcon}
            loading="lazy"
            alt=""
            src="/arrow.svg"
          />
          <div className={styles.goBackLabel}>
            <b className={styles.goBack}>Go Back</b>
          </div>
        </div>
        <img
          className={styles.menuItemsChild}
          loading="lazy"
          alt=""
          src="/rectangle-222.svg"
        />
      </div>
      <div className={styles.menuOptions}>
        <div className={styles.menuList}>
          <b className={styles.agencyProfile}>Agency Profile</b>
          <b className={styles.myProfile}>My Profile</b>
          <b className={styles.addBrs}>Add BRs</b>
          <div className={styles.menuItemLabels}>
            <b className={styles.payments}>Payments</b>
            <div className={styles.iconListWrapper}>
              <img className={styles.iconList} alt="" src="/icon-list.svg" />
            </div>
          </div>
          <b className={styles.authorisedSignatory}>Authorised Signatory</b>
          <b className={styles.security}>Security</b>
          <div className={styles.menuItemLabels1}>
            <b className={styles.general}>General</b>
            <div className={styles.vectorWrapper}>
              <img className={styles.vectorIcon} alt="" src="/icon-list.svg" />
            </div>
          </div>
        </div>
        <div className={styles.profileDetails}>
          <form className={styles.profileForm}>
            <div className={styles.profileFormChild} />
            <div className={styles.uploadButtonWrapper}>
              <div className={styles.uploadButton}>
                <img
                  className={styles.uploadIcon}
                  loading="lazy"
                  alt=""
                  src="/ellipse-95@2x.png"
                />
                <div className={styles.upload}>Upload</div>
              </div>
            </div>
            <div className={styles.personalInfo}>
              <div className={styles.frameParent}>
                <FrameComponent name1="Name" jasonDoePlaceholder="Jason Doe" />
                <FrameComponent
                  name1="Title"
                  jasonDoePlaceholder="qrclient"
                  propMinWidth="370px"
                  propFlex="1"
                  propAlignSelf="unset"
                />
              </div>
              <FrameComponent
                name1="Email Address"
                jasonDoePlaceholder="jasonqrclient@pqrclient.com"
                propMinWidth="unset"
                propFlex="unset"
                propAlignSelf="stretch"
              />
              <div className={styles.aboutMeParent}>
                <div className={styles.aboutMe}>About Me</div>
                <div className={styles.rectangleParent}>
                  <div className={styles.frameChild} />
                  <div
                    className={styles.loremIpsumDolor}
                  >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}</div>
                </div>
              </div>
              <div className={styles.frameGroup}>
                <FrameComponent
                  name1="Total Experience"
                  jasonDoePlaceholder="10 mos"
                  propMinWidth="375px"
                  propFlex="1"
                  propAlignSelf="unset"
                />
                <FrameComponent
                  name1="Phone Number"
                  jasonDoePlaceholder="1234567890"
                  propMinWidth="370px"
                  propFlex="1"
                  propAlignSelf="unset"
                />
              </div>
            </div>
            <div className={styles.saveButton}>
              <button className={styles.rectangleGroup}>
                <div className={styles.frameItem} />
                <div className={styles.save}>Save</div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

SidebarContent.propTypes = {
  className: PropTypes.string,
};

export default SidebarContent;
