import { motion } from 'framer-motion';

const TextAnimation = ({ text }) => {
  return (
    <>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, x: 30 }}  // 初始状态：透明度为 0，稍微偏右
          animate={{ opacity: 1, x: 0 }}   // 动画结束状态：透明度为 1，回到原位置
          transition={{
            delay: index * 0.1,  // 每个字母的延迟时间（0.1秒递增）
            type: 'spring',  // 使用 spring 动画
            stiffness: 100,  // 弹性动画的刚度
            damping: 25,     // 阻尼
          }}

          style={{display: 'inline-block'}}
        >
          {char}
        </motion.span>
      ))}
    </>
  );
};

export default TextAnimation;
