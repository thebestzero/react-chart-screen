import { BorderBox12, BorderBox13 } from "@jiaminghi/data-view-react";
import { LeftPage, LeftBottomBox, LeftTopBox } from "./styled.ts";
import { ModuleTitle } from "@/style/globalStyledSet.ts";
import { useEffect, useState } from "react";
import { leftPageDataType } from "@/api/mock/leftPageData";
import { get } from "@/api/http";
import { ResultEnum } from "@/enums/httpEnum";
import { leftPageDataApi } from "@/api/mock";

export const LeftContent = () => {
  const [leftData, setLeftData] = useState<leftPageDataType | undefined>();

  const fetchData = async () => {
    const res = await get(leftPageDataApi);
    if (res.code === ResultEnum.SUCCESS) {
      setLeftData(res.data);
      console.log(res)
    }
  };

  useEffect(() => {
    fetchData();
    console.log(123)
  }, []);
  return leftData ? (
    <LeftPage>
      {/* 顶部图表 */}
      <LeftTopBox>
        <BorderBox12 className="left-top-borderBox12">
          <div className="left-top">
            <ModuleTitle>
              <i className="iconfont">&#xe78f;</i>
              <span>今日流量态势</span>
            </ModuleTitle>
            <div className="title-dis">
              <span>
                平均接纳次数(小时):
                <span className="title-dis-keyword">
                  {leftData.accessFrequency}次
                </span>
              </span>
              <span>
                流量峰值:
                <span className="title-dis-keyword">{leftData.peakFlow}M</span>
              </span>
            </div>
          </div>
        </BorderBox12>
      </LeftTopBox>

      {/* 底部图表 */}
      <LeftBottomBox>
        <BorderBox13 className="left-bottom-borderBox13">
          <div className="left-bottom">
            <ModuleTitle>
              <i className="iconfont">&#xe88e;</i>
              <span>用户数据状态</span>
            </ModuleTitle>
          </div>
        </BorderBox13>
      </LeftBottomBox>
    </LeftPage>
  ) : (
    <div>loading...</div>
  );
};
