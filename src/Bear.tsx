import create from "zustand";
import shallow from "zustand/shallow";
import { pick } from "./utils";

interface StateType {
  count: number;
  age: number;
  add: () => void;
}

const useStore = create<StateType>((set) => ({
  count: 0,
  age: 11,
  add() {
    set((pre) => {
      return { count: pre.count + 1 };
    });
  },
}));

const Bear = () => {
  const { add, age } = useStore(
    (state) => pick(state, ["add", "age"])
    // shallow
  );
  console.log(123);

  //   const count = useStore((state) => state.count);
  //   const add = useStore((state) => state.add);
  return (
    <>
      <div>{age}</div>
      <button onClick={add}>add</button>
    </>
  );
};
export default Bear;
