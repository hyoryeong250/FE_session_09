import { useState } from "react";

function UseStatePrac() {
  // TODO 1. likelion 상태를 만들어주세요.
const [likelion, setLikelion] = useState(true)

  return (
    <div>
      {/* TODO 2. 삼항 연산자를 이용해서 상태에 따라 다른 문구가 보이도록 해주세요.
          true일 때: "멋사 안녕", false일 때: "누구세요"
      */}
      {likelion ? <p>멋사 안녕</p> : <p>누구세요</p>}

      {/* TODO 3. 버튼을 클릭하면 likelion 상태가 반대로 바뀌도록 해주세요. */}
      <button onClick={() => setLikelion(!likelion)}>상태 변경</button>
    </div>
  );
}

export default UseStatePrac;
