import { useLocation } from "react-router-dom";
import { AnimatedOutlet } from "./AnimatedOutlet";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../components/header/header";
import Pagination from "../components/Pagination";

import style from "../style/Root.module.css";

export default function Root() {
  const location = useLocation();

  return (
    <div className={style.Root}>
      <Header />
      <AnimatePresence>
        <motion.section
          style={{ overflow: "hidden" }}
          key={location.pathname}
          initial="collapsed"
          animate="open"
          exit="collapsed"
          variants={{
            open: { opacity: 1, height: "auto" },
            collapsed: { opacity: 0, height: 0 },
          }}
        >
          <AnimatedOutlet />
        </motion.section>
      </AnimatePresence>
      <Pagination amountOfPages={3} currentPage={0} />
    </div>
  );
}
