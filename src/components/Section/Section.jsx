import style from "./Section.module.css"
import PropTypes from "prop-types"; // ES6
export const Section = ({ title, children }) => {
  return (
    <section className={style.section}>
      <h1 className={style.title} >{title}</h1>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};