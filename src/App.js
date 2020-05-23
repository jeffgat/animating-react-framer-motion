import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardGrid, Container, Header } from "./Elements";
import "./App.css";
import Menu from "./Menu";
import Modal from "./Modal";
import Nav from "./Nav";
import Accordion from "./Accordion";
import blue from "./blue.png";
import purp from "./purp.png";
import black from "./black.png";
import green from "./green.png";

function App() {
  const [value, setValue] = useState(0);
  const [isToggle, setToggle] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
    >
      <Header>
        <Menu onClick={() => setIsNavOpen(true)} />
        <Nav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
        <h1>Header</h1>
      </Header>
      <Container>
        <button onClick={() => setToggle((prevValue) => !prevValue)}>
          Toggle
        </button>
        <input
          type="range"
          min="-100"
          max="100"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <CardGrid>
          <Modal isToggle={isToggle} setToggle={setToggle}>
            <Card style={{ background: "var(--purp)" }}>
              <h3>Some card</h3>
              <img src={purp} alt="" />
            </Card>
          </Modal>

          <Accordion />

          <Card style={{ background: "var(--purp)" }}>
            <h3>Some card</h3>
            <img src={purp} alt="" />
          </Card>
          <Card style={{ background: "var(--blue)" }}>
            <h3>Some card</h3>
            <img src={blue} alt="" />
          </Card>
          <Card style={{ background: "var(--black)" }}>
            <h3>Some card</h3>
            <img src={black} alt="" />
          </Card>
          <Card style={{ background: "var(--green)" }}>
            <h3>Some card</h3>
            <img src={green} alt="" />
          </Card>
        </CardGrid>
      </Container>
    </motion.div>
  );
}

export default App;
