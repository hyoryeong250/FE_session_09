import { useState, useEffect } from "react";

function Timer() {
  const [time, setTime] = useState(10);

  // TODO 1. 타이머가 실행 중인지 확인하는 상태를 만들어주세요.
  // 초기값은 false입니다.
  // const [isRunning, setIsRunning] = useState(?);
  const [isRunning, setIsRunning] = useState(false);

  // TODO 2. 시작 버튼을 눌렀을 때 실행될 함수를 만들어주세요.
  // 조건:
  // - 시간이 0이면 다시 10으로 초기화합니다.
  // - 타이머 실행 상태를 true로 바꿉니다.

  // TODO 3. useEffect를 사용해서 타이머 기능을 완성해주세요.
  // 조건:
  // - isRunning이 true일 때만 1초마다 time이 1씩 감소합니다.
  // - time이 0이 되면 타이머를 멈춥니다.
  // - setInterval을 사용했다면 cleanup 함수에서 clearInterval을 해주세요.

  return (
    <div>
      <h1>타이머</h1>
      <p>{time}</p>

      {/* TODO 4. 버튼에 startTimer 함수를 연결해주세요. */}
      <button>타이머 시작</button>
    </div>
  );
}

export default Timer;
