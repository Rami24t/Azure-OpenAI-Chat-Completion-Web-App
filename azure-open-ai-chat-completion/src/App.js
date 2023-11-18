import Inputs from "./components/Inputs";
import ChatMessages from "./components/ChatMessages";
import "./App.css";
import { PhoneHeader } from "./components/PhoneHeader";
import { Paragraph } from "./components/Paragraph";
import { Footer } from "./components/Footer";

function App() {
  
  async function sendQuery(systemMessage, userPrompt) {
    setTimeout(() => {
      alert(`sendQuery \n${systemMessage} \n${userPrompt}`);
    }, 500);
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
