import create from "zustand";

interface StateType {
  count: number;
  add: () => void;
}

const useStore = create<StateType>((set) => ({
  count: 0,
  add() {
    set((pre) => ({ count: pre.count + 1 }));
  },
}));

const Bear = () => {
  const count = useStore((state) => state.count);
  const add = useStore((state) => state.add);
  return (
    <>
      <div>{count}</div>
      <button onClick={add}>add</button>
    </>
  );
};
export default Bear;
