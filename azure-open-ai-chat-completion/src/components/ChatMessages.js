import React, { useContext } from "react";
import { Context } from "./Context";

const ChatMessages = () => {
  const { state } = useContext(Context);
  const { chatHistory } = state;

  return (
    <div className="chat-messages">
      {chatHistory.map((message, index) => {
        return (
          <p
            key={index}
            className={`${
              message.type === "sent" ? "white-chat sent" : "grey-chat received"
            }`}
          >
            {message.text}
          </p>
        );
      })}
      {/* <p className="grey-chat received">
        Yes, other Azure AI services also support customer managed keys. Azure
        AI services offer multiple options for customers to manage keys, such as
        using Azure Key Vault, customer-managed keys in Azure Key Vault or
        customer-managed keys through Azure Storage service. This helps
        customers ensure that their data is secure and access to their services
        is controlled.
      </p>
      <p className="white-chat sent">
        Does Azure OpenAI support customer managed keys?
      </p> */}
      {/* <div className="grey-chat">
        <p className="typing-dots">
          <div className="typing typing-1"></div>
          <div className="typing typing-2"></div>
          <div className="typing typing-3"></div>
        </p>
      </div> */}
      {/* <div className="grey-chat">
    <div className="typing-dots">
      <div className="typing typing-1"></div>
      <div className="typing typing-2"></div>
      <div className="typing typing-3"></div>
    </div>
  </div> */}
      {/* <p className="grey-chat received">
    That sounds great. I’d be happy with that.
  </p> */}
      {/* <div className="grey-chat">
    <div className="typing-dots">
      <div className="typing typing-1"></div>
      <div className="typing typing-2"></div>
      <div className="typing typing-3"></div>
    </div>
  </div> */}
      {/* <p className="grey-chat received">
    Could you send over some pictures of your dog, please?
  </p> */}
      {/* <div className="white-chat">
    <p>
      <p className="typing-dots">
        <div className="typing typing-1"></div>
        <div className="typing typing-2"></div>
        <div className="typing typing-3"></div>
      </p>
    </p>
  </div> */}
      {/* <div className="photos sent">
    <img src="https://source.unsplash.com/random/50x50?dog 1" alt="Dog 1" />
    <img src="https://source.unsplash.com/random/50x50?dog 2" alt="Dog 2" />
    <img src="https://source.unsplash.com/random/50x50?dog 3" alt="Dog 3" />
  </div> */}
      {/* <div className="white-chat">
    <p>
      <p className="typing-dots">
        <div className="typing typing-1"></div>
        <div className="typing typing-2"></div>
        <div className="typing typing-3"></div>
      </p>
    </p>
  </div> */}
      {/* <div className="white-chat">
    <p>
      <div className="typing-dots">
        <div className="typing typing-1"></div>
        <div className="typing typing-2"></div>
        <div className="typing typing-3"></div>
      </div>
    </p>
  </div> */}
      {/* <p className="white-chat sent">Can you make it?</p> */}
      {/* <label for="op30m" className="option received">
<input type="radio" name="option" id="op30m" />
<label for="op30m">30 minute walk </label>
<p>$29</p>
</label>
<label className="option received" for="op1h">
<input type="radio" name="option" id="op1h" />
<label for="op1h">1 hour walk </label>
<p>$49</p>
</label> */}
    </div>
  );
};

export default ChatMessages;
