import { useMemo, useState } from "react";

const UseMemoExample = () => {
  const [myNum, setMyNum] = useState(0);
  const [show, setShow] = useState(false);

  const getValue = () => {
    return setMyNum(myNum + 1);
  };

  const countNumber = (num) => {
    console.log("countNumber ~ num", num);
    for (let i = 0; i < 100000000; i++) {}
    return num;
  };

  const checkData = useMemo(() => {
    return countNumber(myNum);
  }, [myNum]);

  return (
    <>
      <div className="container">
        <div className="mt-5">
          <button className="btn btn-danger" onClick={getValue}>
            Counter
          </button>
          <p className="mt-4">
            My new number:{" "}
            <span className="fw-bold text-success">{checkData}</span>
          </p>
          <button className="btn btn-primary" onClick={() => setShow(!show)}>
            {show ? "You clicked me" : "Click me plz"}
          </button>
        </div>
      </div>
    </>
  );
};

export default UseMemoExample;
