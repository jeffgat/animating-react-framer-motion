import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
  open: { opacity: 1, height: 'auto' },
  closed: { opacity: 0, height: 0 }
}

const Accordion = () => {
  const [ isToggled, setIsToggled ] = useState(false)
  return (
    <article>
      <h2 role="button" onClick={() => setIsToggled(prevState => !prevState)}>The Heading</h2>
      <AnimatePresence>
        {isToggled && (
          <>
            <motion.div
              variants={variants}
              initial="closed"
              animate="open"
              exit="closed"
              style={{ overflow: 'hidden' }}
            >
              <p>Commodo esse esse exercitation laborum amet adipisicing aute esse nulla qui in minim. Officia ea non consequat pariatur non. Lorem laborum fugiat adipisicing ullamco.</p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </article>
  );
};

export default Accordion;
