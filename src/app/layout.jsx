import PropTypes from 'prop-types';
import '../styles/main.css';

const RootLayout = ({ children }) => (
  <html lang="en">
    <head />
    <body>{children}</body>
  </html>
);

// TODO: set ptoper propType for children
RootLayout.propTypes = {
  children: PropTypes.any,
};

export default RootLayout;
