import React, { useState } from "react";

const Inputs = ({sendQuery}) => {
  const [systemMessage, setSystemMessage] = useState(
    "You are a helpful assistant."
  );
  const [userPrompt, setUserPrompt] = useState(
    "Does Azure OpenAI support customer managed keys?"
  );

  return (
    <>
      <div className="input">
        <textarea
          type="text"
          name="system-message"
          placeholder="System message…"
          value={systemMessage}
          onChange={(e) => setSystemMessage(e.target.value)}
        />
      </div>
      <div className="input">
        <textarea
          type="text"
          name="prompt"
          placeholder="User prompt… "
          value={userPrompt}
          onChange={(e) => setUserPrompt(e.target.value)}
        />
        <button
        onClick={()=>sendQuery(systemMessage, userPrompt)}
        >
          <div className="greater-symbol">&#62;</div>
        </button>
      </div>
    </>
  );
};

export default Inputs;
