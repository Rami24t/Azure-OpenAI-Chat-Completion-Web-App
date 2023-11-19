import { useContext } from "react";
import { Context } from "./components/Context";
import { PhoneHeader } from "./components/PhoneHeader";
import { Paragraph } from "./components/Paragraph";
import ChatMessages from "./components/ChatMessages";
import Inputs from "./components/Inputs";
import { Footer } from "./components/Footer";
import { RESPONSE_SIMULATION } from "./RESPONSE_SIMULATION";
import axios from "axios";
import "./App.css";

function App() {
  const { dispatch } = useContext(Context);

  /**
   * Sends a query to the server and receives a response.
   * @param {string} systemMessage - The system message to be included in the query.
   * @param {string} userPrompt - The user prompt to be included in the query.
   * @returns {Promise<void>} - A promise that resolves when the query is sent and the response is received.
   */
  async function sendQuery(systemMessage, userPrompt) {
    console.log(process.env.REACT_APP_DEPLOYMENT_NAME, process.env.REACT_APP_API_VERSION);
    if (!userPrompt || !systemMessage) return;
    console.log(`sendQuery \n${systemMessage} \n${userPrompt}`);
    try {
      dispatch({
        type: "SEND_MESSAGE_SUCCESS",
        payload: {
          text: userPrompt,
          type: "sent",
          date: new Date(),
        },
      });
      let response = {};
      if (
        process.env.REACT_APP_OPENAI_API_KEY &&
        process.env.REACT_APP_RESOURCE_NAME &&
        process.env.REACT_APP_DEPLOYMENT_NAME && 
        process.env.REACT_APP_API_VERSION
      ) {
        const url = `https://${
          process.env.REACT_APP_RESOURCE_NAME
        }.openai.azure.com/openai/deployments/${
          process.env.REACT_APP_DEPLOYMENT_NAME
        }/chat/completions?api-version=${
          process.env.REACT_APP_API_VERSION || "2023-05-15"
        }`;

        const headers = {
          "Content-Type": "application/json",
          "api-key": `${process.env.REACT_APP_OPENAI_API_KEY}`,
        };
        const data = {
          messages: [
            { role: "system", content: systemMessage },
            // {
            //   role: "user",
            //   content: "Does Azure OpenAI support customer managed keys?",
            // },
            // {
            //   role: "assistant",
            //   content: "Yes, customer managed keys are supported by Azure OpenAI.",
            // },
            {
              role: "user",
              content: userPrompt,
            },
          ],
        };
        response = await axios.post(url, data, { headers });
        console.log(response);
      } else
        response = await new Promise((resolve, reject) => {
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
      return response;
    } catch (error) {
      console.log(error);
      // dispatch({
      //   type: "SEND_MESSAGE_FAILURE",
      //   payload: {
      //     text: "Something went wrong. Please try again.",
      //     type: "sent",
      //     date: new Date(),
      //   },
      // });
    }
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
        <Paragraph
          title={"OpenAI Chat"}
          text={
            "OpenAI Chat Completion is a service that generates dynamic responses to user messages. It can be used to power chatbots, conversational agents, and dialogue systems."
          }
        />
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
