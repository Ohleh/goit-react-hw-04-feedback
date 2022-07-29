// import React from 'react';
import propTypes from 'prop-types';

const Section = ({ title, children }) => (
  <section>
    <h2>{title}</h2>
    {children}
  </section>
);

Section.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.node,
};

export default Section;
