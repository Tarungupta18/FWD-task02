import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({
  className = "",
  name1,
  jasonDoePlaceholder,
  propMinWidth,
  propFlex,
  propAlignSelf,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
      flex: propFlex,
      alignSelf: propAlignSelf,
    };
  }, [propMinWidth, propFlex, propAlignSelf]);

  return (
    <div
      className={[styles.nameParent, className].join(" ")}
      style={frameDivStyle}
    >
      <div className={styles.name}>{name1}</div>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <input
          className={styles.jasonDoe}
          placeholder={jasonDoePlaceholder}
          type="text"
        />
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  name1: PropTypes.string,
  jasonDoePlaceholder: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
  propFlex: PropTypes.any,
  propAlignSelf: PropTypes.any,
};

export default FrameComponent;
