import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: {
    opacity: 0,
    x: "-100%",
    transition: {
      delay: 0.2,
    },
  },
};

const listVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
    },
  },
  closed: { y: -20, opacity: 0 },
};

const links = ["one", "two", "three", "four"];

const Nav = ({ isNavOpen, setIsNavOpen }) => {
  return (
    <MenuNav
      variants={variants}
      initial="open"
      animate={isNavOpen ? "open" : "closed"}
      transition={{ damping: 10 }}
    >
      <button onClick={() => setIsNavOpen(false)}>Close</button>
      <ul>
        {links.map((link) => (
          <motion.li variants={listVariants} key={link}>
            <a href="/">{link}</a>
          </motion.li>
        ))}
      </ul>
    </MenuNav>
  );
};

const MenuNav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: var(--black);

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    padding: 10px;
    margin: 10px;
    a {
      color: white;
      text-decoration: none;
      font-size: 2rem;
      border-bottom: 2px transparent solid;
      transition: 0.3s ease border;
      &:hover {
        border-bottom: 2px var(--blue) solid;
      }
    }
  }
`;

export default Nav;
