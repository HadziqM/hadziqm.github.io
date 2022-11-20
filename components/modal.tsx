import { motion } from "framer-motion";
import Backdrop from "./backdrop";

interface Props {
  text: boolean;
  handleClose: React.MouseEventHandler<HTMLDivElement | HTMLButtonElement>;
}

export default function Modal({ handleClose, text }: Props) {
  const dropIn = {
    hiden: { y: "-100vh", opacity: 0 },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.2,
        damping: 25,
        type: "spring",
        stiffness: 500,
      },
    },
    exit: { y: "100vh", opacity: 0 },
  };
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation}
        className="w-[clamp(40%,400px,90%)] h-[200px] m-auto p-8 rounded-md flex flex-col items-center z-50 bg-gray-800"
        variants={dropIn}
        initial="hiden"
        exit="exit"
        animate="visible"
      >
        <h1 className="mb-auto text-2xl font-mono text-gray-300">
          {text ? "Congrats You win" : "Sorry You lose"}
        </h1>
        <button
          onClick={handleClose}
          className="px-2 py-[0.1rem] rounded-full bg-red-700 hover:bg-red-600 my-1 text-white"
        >
          Close
        </button>
      </motion.div>
    </Backdrop>
  );
}
