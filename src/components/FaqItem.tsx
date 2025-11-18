import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import type { QuestionAnswer } from "../types";

export const FaqItem: React.FC<{ item: QuestionAnswer }> = ({ item }) => {
  const [show, setShow] = useState(false);

  // prefer HTML if available, else fallback to markdown/text
  const content = item.answerHtml ?? item.answer ?? "";

  return (
    <div className="faq-item border-b border-gray-700 py-2">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setShow(!show)}
      >
        <span className="text-sm text-gray-200">
          • {item.question}
        </span>
        <button className="text-xs text-blue-400">
          {show ? "Hide Answer ▲" : "Show Answer ▼"}
        </button>
      </div>

      {show && (
        <div className="mt-2 text-gray-300 text-sm leading-relaxed">
          {/* If HTML present, render via ReactMarkdown + rehypeRaw */}
          {item.answerHtml ? (
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>
              {item.answerHtml}
            </ReactMarkdown>
          ) : (
            <ReactMarkdown>{item.answer ?? ""}</ReactMarkdown>
          )}
        </div>
      )}
    </div>
  );
};
