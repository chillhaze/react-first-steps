import PropTypes from 'prop-types';

function Section({ title, children }) {
  return (
    <section>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
}

Section.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

export default Section;
