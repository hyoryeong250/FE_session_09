import { useState } from "react";

function Counter() {
  // TODO 1. count 상태를 만들어주세요.
const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter Component</h1>

      {/* TODO 2. 아래 문장에서 count 값이 보이도록 수정해주세요. */}
      <p>클릭을 {count}번 했어요!</p>

      {/* TODO 3. 버튼을 클릭하면 count가 1 증가하도록 onClick을 추가해주세요. */}
      <button onClick={() => setCount(count + 1)}>증가 버튼!</button>
    </div>
  );
}

export default Counter;
