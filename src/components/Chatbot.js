import React, { useEffect } from 'react';
import '../styles/components/Chatbot.css';

const Chatbot = () => {
  useEffect(() => {
    // Initialize Dialogflow chatbot
    const script = document.createElement('script');
    script.src = 'https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      <df-messenger
        intent="WELCOME"
        chat-title="My Portfolio Chatbot"
        agent-id="your-agent-id"
        language-code="en"
      ></df-messenger>
    </div>
  );
};

export default Chatbot;
