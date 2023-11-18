import Inputs from "./components/Inputs";
import ChatMessages from "./components/ChatMessages";
import "./App.css";

function App() {
  async function sendQuery(systemMessage, userPrompt) {
    setTimeout(() => {alert("sendQuery", systemMessage, userPrompt)}, 500);
  }

  return (
    <>
      <Background />
      <main className="main-container">
        <section className="phone">
          <div className="screen">
            <header className="phoneHeader">
              <div className="less-than">&lt;</div>
              <div className="avatar">
                <img
                  src="https://source.unsplash.com/random/50x50?AI"
                  alt="Avatar"
                />
              </div>
              <div>
                <h2 className="name">AI Chat Completion</h2>
                <h3 className="status">Chat GPT 3.5</h3>
              </div>
              <div className="three-dots">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
              </div>
            </header>
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
    return <div className="bg-shapes">
      <div className="bg-shape-violet"></div>
      <div className="bg-shape-grey"></div>
    </div>;
  }
}

export default App;
function Paragraph() {
  return (
    <section className="paragraph">
      <h1>Simple booking</h1>
      <p>
        Stay in touch with our dog walkers through the chat interface. This
        makes it easy to discuss arrangements and make bookings. Once the walk
        has been completed you can rate your walker and book again all through
        the chat.
      </p>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="attribution">
        Coded by
        <a href="https://github.com/Rami24t" target="_blank" rel="noreferrer">
          Rami Al-Saadi
        </a>
        .
      </div>
    </footer>
  );
}
