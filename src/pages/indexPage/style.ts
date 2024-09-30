import styled from "styled-components";
import pageBg from "../../assets/pageBg.png";

export const LayoutStyle = styled.div`
  margin: 0 auto;
  display: inline-block;
  width: 1920px; //设计稿的宽度
  height: 1080px; //设计稿的高度
  transform-origin: 0 0;
  position: absolute;
  left: 50%;
  top: 50%;
`;

export const IndexPageStyle = styled.div`
  width: 1920px;
  height: 1080px;
  overflow: hidden;
  position: relative;
  padding: 10px 0 0 0;
  background: url(${pageBg}) center center no-repeat;
  background-size: cover;
`;

export const IndexPageContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
`;
