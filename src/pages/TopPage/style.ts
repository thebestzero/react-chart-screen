import styled from "styled-components";
import { TitleColor } from "@/style/color";

export const TopBox = styled.div`
  .top_box {
    display: flex;
    justify-content: center;

    .top_decoration10 {
      position: relative;
      width: 33.3%;
      height: 5px;
    }

    .top_decoration10_reverse {
      transform: rotateY(180deg);
    }

    .title_box {
        flex: 1;
        display: flex;
        justify-content: center;
      .top_decoration8 {
        width: 200px;
        height: 50px;
      }
      .title {
        position: relative;
        width: 500px;
        text-align: center;
        background-size: cover;
        background-repeat: no-repeat;

        .title-text {
          font-size: 24px;
          position: absolute;
          bottom: 0;
          left: 50%;
          color: #fff;
          transform: translate(-50%);
        }

        .top_decoration6 {
          width: 250px;
          height: 8px;
        }

        .title-bototm {
          position: absolute;
          bottom: -30px;
          left: 50%;
          transform: translate(-50%);
        }  
    }
  }
`;
