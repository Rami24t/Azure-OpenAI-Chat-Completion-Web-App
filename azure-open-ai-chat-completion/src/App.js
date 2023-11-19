import { useContext } from "react";
import { Context } from "./components/Context";
import { PhoneHeader } from "./components/PhoneHeader";
import { Paragraph } from "./components/Paragraph";
import ChatMessages from "./components/ChatMessages";
import Inputs from "./components/Inputs";
import { Footer } from "./components/Footer";
import { RESPONSE_SIMULATION } from "./RESPONSE_SIMULATION";
import "./App.css";

function App() {
  const { dispatch } = useContext(Context);

  async function sendQuery(systemMessage, userPrompt) {
    if (!userPrompt) return;
    console.log(`sendQuery \n${systemMessage} \n${userPrompt}`);

    dispatch({
      type: "SEND_MESSAGE_SUCCESS",
      payload: {
        text: userPrompt,
        type: "sent",
        date: new Date(),
      },
    });
    const response = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(RESPONSE_SIMULATION);
      }, 700);
    });
    dispatch({
      type: "RECEIVE_MESSAGE_SUCCESS",
      payload: {
        text: response.choices[0].message.content,
        type: "received",
        date: new Date(response.created * 1000),
      },
    });
  }

  return (
    <>
      <Background />
      <main className="main-container">
        <section className="phone">
          <div className="screen">
            <PhoneHeader />
            <div className="screen-top"></div>
            <div className="chat">
              <ChatMessages />
              <hr />
              <Inputs sendQuery={sendQuery} />
            </div>
          </div>
        </section>
        <Paragraph />
      </main>
      <Footer />
    </>
  );

  function Background() {
    return (
      <div className="bg-shapes">
        <div className="bg-shape-violet"></div>
        <div className="bg-shape-grey"></div>
      </div>
    );
  }
}

export default App;
