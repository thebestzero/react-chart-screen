import { TopBox } from "./style.ts";
import { Decoration10, Decoration8,Decoration6 } from "@jiaminghi/data-view-react";

export const TopPage = () => {
  return (
    <>
      <TopBox>
        <div className="top_box">
          <Decoration10 className="top_decoration10" />
          <div className="title_box">
            <Decoration8
              className="top_decoration8"
              color={["#568aea", "#000000"]}
            />
            <div className="title">
              <span className="title-text">大数据平台</span>
              <Decoration6
                className="title-bototm top_decoration6"
                reverse={true}
                color={["#50e3c2", "#67a1e5"]}
              />
            </div>
            <Decoration8
              className="top_decoration8"
              reverse={true}
              color={["#568aea", "#000000"]}
            />
          </div>
          <Decoration10 className="top_decoration10 top_decoration10_reverse" />
        </div>
      </TopBox>
    </>
  );
};
