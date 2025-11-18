import React from "react";
import { FaqItem } from "./FaqItem";   // Step 2 me bana tha
import type { QuestionAnswer } from "../types";

interface SectionProps {
  title: string;
  questions: (string | QuestionAnswer)[];
}

export const FaqSection: React.FC<{ section: SectionProps }> = ({ section }) => {
  return (
    <div className="faq-section mb-6 rounded-lg border border-gray-700">
      {/* Section Title (like '1. Azure DevOps Fundamentals') */}
      <h2 className="bg-gray-800 px-4 py-2 font-semibold text-gray-100">
        {section.title}
      </h2>

      {/* Section ke andar ke Questions */}
      <div className="p-4 space-y-2">
        {section.questions.map((q, i) =>
          typeof q === "string" ? (
            // agar sirf question string hai
            <div key={i} className="text-gray-300 text-sm">
              • {q}
            </div>
          ) : (
            // agar question ke sath answer hai (object form me)
            <FaqItem key={i} item={q} />
          )
        )}
      </div>
    </div>
  );
};
