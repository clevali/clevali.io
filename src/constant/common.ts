// 统一的渲染动画效果
export const commonRenderMontion = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: {
    type: "spring",
    damping: 25,
    stiffness: 100,
    duration: 0.3,
  },
};
export const reverseRenderMontion = {
  initial: { opacity: 0, y: -30 },
  animate: { opacity: 1, y: 0 },
  transition: {
    type: "spring",
    damping: 25,
    stiffness: 100,
    duration: 0.3,
  },
};
