import { useEffect, useState } from "react";

export const Timer = () => {
  const [initial, setInitial] = useState(0);
  const [final, setFinal] = useState(0);
  const [effect, setEffect] = useState(false);
  useEffect(() => {
    console.log("inside effect");
    if (effect) {
      const id = setInterval(() => {
        setInitial((e) => {
          console.log(e, final);
          if (Number(final) === e) {
            clearInterval(id);
            setEffect(!effect);
            return 0;
          }
          return Number(e) + 1;
        });
      }, 1000);

      return () => {
        clearInterval(id);
        console.log("Unmounting");
      };
    }
  }, [effect, final]);
  return (
    <div>
      <h1>Initial Time : {initial}</h1>
      <h1>Final Time : {final}</h1>
      <br />
      <label>Enter Inital Time : </label>
      <input type="number" onChange={(e) => setInitial(e.target.value)}></input>
      <br />
      <label>Enter Final Time : </label>
      <input type="number" onChange={(e) => setFinal(e.target.value)}></input>
      <br />
      <button onClick={() => setEffect(!effect)}>
        {effect ? "Pause Timer" : "Start Timer"}
      </button>
    </div>
  );
};
