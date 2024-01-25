import React from "react";
import { ProChat } from "@ant-design/pro-chat";
import { OpenAIStream, StreamingTextResponse } from "ai";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

const Debug: React.FunctionComponent = () => {
  return (
    <div className="flex justify-center items-center h-[calc(100%-1em)] w-full">
      <ProChat
        helloMessage="Olá, envie uma mensagem para começar."
        request={async (messages) => {
          const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: messages.map((m) => ({ role: m.role, content: m.content })) as never,
            stream: true,
          });

          const stream = OpenAIStream(response);
          return new StreamingTextResponse(stream);
        }}
      />
    </div>
  );
};

export { Debug };
