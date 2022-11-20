import { motion, TargetAndTransition, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

interface Props {
  children: React.ReactNode;
  animate: string;
  animation?: TargetAndTransition;
  getVisibility?: () => boolean;
}

export default function Box({
  children,
  animate,
  getVisibility,
  animation,
}: Props) {
  const control = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) control.start("visible");
    getVisibility && getVisibility();
  }, [control, inView]);
  const boxVariant = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
      x: 0,
    },
    right: { opacity: 0, scale: 0, x: 400 },
    left: { opacity: 0, scale: 0, x: -400 },
    init: { opacity: 0, scale: 0 },
  };
  return (
    <section className="flex justify-center items-center w-screen py-20 z-50">
      <motion.div
        ref={ref}
        className="flex justify-center items-center "
        animate={control}
        initial={animate}
        variants={boxVariant}
      >
        {children}
      </motion.div>
    </section>
  );
}
