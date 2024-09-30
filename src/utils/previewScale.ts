/*
 * 当屏幕宽高比 < 设计稿宽高比，我们需要缩放的比例是屏幕宽度 / 设计稿宽度
 * 当屏幕宽高比 > 设计稿宽高比，我们需要缩放的比例是屏幕高度 / 设计稿高度
 * */
import { throttle } from "lodash";

export const previewFitScale = (
  width: number,
  height: number,
  scaleDom: HTMLElement | null,
  // callback?: (scale: { width: number; height: number }) => void,
  callback?: (scale: number) => void,
) => {
  // * 画布尺寸（px）
  const baseWidth = width;
  const baseHeight = height;

  /*  // * 默认缩放值
  const scale = {
    width: 1,
    height: 1,
  };*/

  // * 需保持的比例
  const baseProportion = parseFloat((baseWidth / baseHeight).toFixed(5));

  const calcRate = () => {
    // 当前屏幕宽高比
    const currentRate = parseFloat(
      (window.innerWidth / window.innerHeight).toFixed(5),
    );
    if (scaleDom) {
      let scale: number = 1;
      if (currentRate < baseProportion) {
        scale = parseFloat((window.innerWidth / baseWidth).toFixed(5));
      } else {
        scale = parseFloat((window.innerHeight / baseHeight).toFixed(5));
      }
      scaleDom.style.transform = `scale(${scale}) translate(-50%, -50%)`;
      if (callback) callback(scale);
    }
  };

  const resize = throttle(() => {
    calcRate();
  }, 200);

  // * 改变窗口大小重新绘制
  const windowResize = () => {
    window.addEventListener("resize", resize);
  };

  // * 卸载监听
  const unWindowResize = () => {
    window.removeEventListener("resize", resize);
  };

  return{
    resize,
    windowResize,
    unWindowResize,
    calcRate
  }
};
