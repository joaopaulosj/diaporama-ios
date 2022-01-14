import React from "react";
import ReactDOM from "react-dom";
import DeclarativeDiaporamaWrapper from "./DeclarativeDiaporamaWrapper";
import TextSlide from "./TextSlide";


function App() {
  const primaryColor = "#0205d5";
  const accentColor = "#EF4143";

  const dia = <DeclarativeDiaporamaWrapper
    primaryColor={primaryColor}
    accentColor={accentColor}
    imageDurationMs={1000}
    transitionDurationMs={1000}
    width={"100%"}
    height={"100%"}
    onClicked={() => { console.log('askdjasd') }}
  >

    <TextSlide
      backgroundColor="000"
      color="#FFF"
      font="serif"
      text={"START"}
    />

    <div></div>
    {/* If not a Text, it considers to be a video*/}


    <TextSlide
      backgroundColor="000"
      color="#FFF"
      font="serif"
      text={"END"}
    />
  </DeclarativeDiaporamaWrapper>

  return (
    <div className="App">
      {dia}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
