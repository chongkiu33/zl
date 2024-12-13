import { motion } from 'framer-motion';

const SlideInFromBtn = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ y: '50px' ,opacity: 0 }}  // 初始位置在视口右侧
      whileInView={{ y: 0,opacity: 1 }}     // 进入视口时，元素滑到原位
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 25,
        delay: delay,  // 使用传递的 delay 参数
      }}
      viewport={{ once: true }}   // 进入视口后动画只播放一次
    >
      {children}
    </motion.div>
  );
};

export default SlideInFromBtn;
