import { debounce } from "lodash";
import { useCallback, useEffect, useRef } from "react";
import * as echarts from "echarts";
import { EChartsType } from "echarts";
import { RendererType } from "echarts/types/src/util/types.js";
import china from "@/assets/map/china.json";
import { GeoJSONCompressed } from "echarts/types/src/coord/geo/geoTypes.js";

type OptionType = {
  [T: string]: unknown;
};

const state = {
  width: "100%",
  height: "100%",
};

echarts.registerMap("china", china as unknown as GeoJSONCompressed);

export const EChartsCommon = (props: {
  renderer?: RendererType;
  notMerge?: boolean;
  lazyUpdate?: boolean;
  option: OptionType;
  instanceHandle?: (instance: EChartsType) => void;
}) => {
  const drawDomRef = useRef<HTMLDivElement | null>(null);
  const chartRef = useRef<EChartsType | null>(null);

  // 初始化组件
  const initChart = () => {
    if (chartRef.current) return;
    if (!drawDomRef.current) return;
    // renderer 用于配置渲染方式 可以是 svg 或者 canvas
    chartRef.current = echarts.init(drawDomRef.current, null, {
      width: "auto",
      height: "auto",
      renderer: props.renderer || "canvas",
    });
    // 执行初始化的任务，例如注册地图
    if (props.instanceHandle) {
      props.instanceHandle(chartRef.current as EChartsType);
    }
    setOption(props.option);
    // 监听屏幕缩放，重新绘制 echart 图表
    window.addEventListener("resize", resize);
  };

  // 配置
  const setOption = useCallback(
    (option: OptionType) => {
      if (!chartRef.current) {
        return;
      }
      const notMerge = props.notMerge ?? false;
      const lazyUpdate = props.lazyUpdate ?? false;
      chartRef.current!.setOption(option, notMerge, lazyUpdate);
    },
    [props.notMerge, props.lazyUpdate],
  );
  const initHandle = () => {
    // 还没实例走初始化
    if (!chartRef.current) {
      initChart();
    } else {
      setOption(props.option);
    }
  };

  // 销毁
  const dispose = () => {
    if (!chartRef.current) {
      return;
    }
    chartRef.current?.dispose();
    chartRef.current = null;
  };
  const resize = debounce(() => {
    chartRef.current?.resize();
  }, 100);

  useEffect(() => {
    // 组件卸载
    return () => {
      window.removeEventListener("resize", resize);
      dispose();
    };
  }, []);
  // 每次更新组件都重置
  useEffect(() => {
    initHandle();
  }, [props.option]);

  return (
    <div
      className="default-chart"
      ref={drawDomRef}
      style={{ width: state.width, height: state.height }}
    />
  );
};
