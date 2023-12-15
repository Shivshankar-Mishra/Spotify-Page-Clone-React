import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
import Messagebox from "./components/Messagebox";
import Heroscreen from "./ui-components/Heroscreen";
import Whylist from "./ui-components/Whylist";
import Questions from "./ui-components/Questions";

function App() {
  const [time] = useState(() => {
    return new Date().getFullYear();
  });
  const [show, setShow] = useState(true);
  const [isContentVisible, setIsContentVisible] = useState(false);

  const toggleContent = () => {
    setIsContentVisible(!isContentVisible);
  };
  return (
    <div className="App">
      {show && <Messagebox show={show} setShow={setShow} />}
      <Header></Header>
      <Heroscreen></Heroscreen>
      <Whylist />
      <Questions isContentVisible={isContentVisible} toggleContent={toggleContent} />
      <Footer year={time}></Footer>
    </div>
  );
}

export default App;
