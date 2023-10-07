import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p> GitHub Profile: <a href='https://github.com/AJBaliga28/'> </p>
      <p>Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
