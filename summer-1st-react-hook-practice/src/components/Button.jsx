import styled from "styled-components";

const BoxWrapper = styled.div`
  background-color: ${(props) => props.color};
  width: 200px;
  height: 200px;
  text-align: center;
  line-height: 200px;
  cursor: pointer;
`;

export function Button({ label, bgColor, buttonHandler }) {
  // TODO. BoxWrapper에 배경색, 클릭 이벤트, label을 연결해주세요.
  // 힌트:
  // - 배경색은 color props로 전달합니다.
  // - 클릭 이벤트는 onClick으로 연결합니다.
  // - 화면에는 label 값을 보여줍니다.

  return <BoxWrapper>버튼</BoxWrapper>;
}
