import React from "react";
import { FaqSection } from "./FaqSection";
import { azureDevOpsSections } from "../data/azureDevOpsSections"; // <-- jaha tera data file hai uska exact path laga

export const FaqContainer: React.FC = () => {
  return (
    <div className="faq-container space-y-6 p-4">
      {azureDevOpsSections.map((section, index) => (
        <FaqSection key={index} section={section} />
      ))}
    </div>
  );
};
