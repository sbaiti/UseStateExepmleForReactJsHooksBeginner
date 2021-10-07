import { FC, useState } from "react"
import styled from "styled-components"

const enum OperationEnum {
  add = "ADD",
  sub = "SUB"
}

const ComponentWithUseEffect: FC = () => {

  const [count, setCount] = useState<number>(0);
  const [message, setMessage] = useState<string>("You're not even close !");

  const changeCount = (operation: string): void => {
    if (operation === OperationEnum.add) {
      if (count < 10) setCount((lastCount: number) => lastCount + 1)
      if (count > 4 && count < 10) setMessage("You're getting closer !")
    }
    else {
      if (count > 0) setCount(count - 1)
      if (count > 0 && count < 5) setMessage("You're not even close !")
    }
  }

  const renderBar = (): JSX.Element[] => {

    const bars: JSX.Element[] = []

    for (let i = 0; i < count; i++) {
      bars.push(<div style={{
        backgroundColor: "rgba(212,133,211,0.3)",
        height: "100%",
        width: "10%"
      }}
      ></div>)
    }
    return bars
  }

  return (
    <ComponentWithUseStateStyled>
      <h1>useState Exemple</h1>
      <h2>{message}</h2>
      <div className="progress__bar">
        {renderBar()}
      </div>
      <button onClick={() => changeCount("SUB")}>Substruct Bar</button>
      <button onClick={() => changeCount("ADD")}>Add Bar</button>
    </ComponentWithUseStateStyled>
  );
}

export default ComponentWithUseEffect;

const ComponentWithUseStateStyled = styled.div`
text-align : center;
.progress__bar{
  border : 0.1em solid rgba(0,0,0,0.3);
  height : 100px;
  width : 80%;
  margin : 2rem auto;
  display : flex;
}
`


