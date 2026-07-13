import Counter from "./components/Counter";
import UseStatePrac from "./components/UseStatePrac";
import UseEffectCounter from "./components/UseEffectCounter";
import Timer from "./components/Timer";
import ButtonPractice from "./components/ButtonPractice";

function App() {
  return (
    <div>
      <h1>React Hooks Practice</h1>

      <section>
        <Counter />
      </section>

      <hr />

      <section>
        <UseStatePrac />
      </section>

      <hr />

      <section>
        <UseEffectCounter />
      </section>

      <hr />

      <section>
        <h1>과제 1</h1>
        <Timer />
      </section>

      <hr />

      <section>
        <h1>과제 2</h1>
        <ButtonPractice />
      </section>
    </div>
  );
}

export default App;
