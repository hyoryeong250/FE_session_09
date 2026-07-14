import { Button } from "./Button";

function ButtonPractice() {
  // TODO 1. 첫 번째 버튼 클릭 시 실행할 함수를 만들어주세요.
  // 콘솔에 "리액트 어렵죠..? ㅠㅠ"가 출력되어야 합니다.

  // TODO 2. 두 번째 버튼 클릭 시 실행할 함수를 만들어주세요.
  // 콘솔에 "과제 끝내기!"가 출력되어야 합니다.

  const firstButtonHandler = () => {
    console.log("리액트 어렵죠..? ㅠㅠ");
  };

  const secondButtonHandler = () => {
    console.log("과제 끝내기!");
  };



  return (
    <div>
    {<Button
  label="1번 버튼"
  bgColor="#5e3afd"
  buttonHandler={firstButtonHandler}
/>}

      {<Button
  label="2번 버튼"
  bgColor="#2c9c4e"
  buttonHandler={secondButtonHandler}
/>}

    </div>
  );
}

export default ButtonPractice;
