import { useEffect, useRef } from "react";
import { IndexPageContent, IndexPageStyle, LayoutStyle } from "./style.ts";
import { TopPage } from "../TopPage/TopPage.tsx";
import { previewFitScale } from "../../utils/previewScale.ts";
import {LeftContent} from "../LeftPage";

export const LayoutPage = () => {
  const scaleDom = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const { calcRate, windowResize, unWindowResize } = previewFitScale(
      1920,
      1080,
      scaleDom.current,
    );
    calcRate();
    windowResize();
    return () => {
      unWindowResize();
    };
  }, []);

  return (
    <LayoutStyle ref={scaleDom}>
      <IndexPageStyle>
        <TopPage />
        <IndexPageContent>
          <LeftContent/>
          {/*<CenterPageIndex />*/}
          {/*<RightPageIndex />*/}
        </IndexPageContent>
      </IndexPageStyle>
    </LayoutStyle>
  );
};
