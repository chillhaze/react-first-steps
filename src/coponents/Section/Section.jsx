import PropTypes from 'prop-types';
import css from './Section.module.css';
function Section({ title, children }) {
  return (
    <section className={css.Section}>
      {title && <h2 className={css.title}>{title}</h2>}
      {children}
    </section>
  );
}

Section.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

export default Section;
