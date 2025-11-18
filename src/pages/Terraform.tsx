import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Code, ChevronDown, Bookmark } from "lucide-react";
import { terraformSections } from "@/data/terraformData";
import { useState } from "react";
import { useQuestionProgress } from "@/hooks/useQuestionProgress";
import { ProgressTracker } from "@/components/ProgressTracker";
import { Button } from "@/components/ui/button";

export default function Terraform() {
  const [visibleAnswers, setVisibleAnswers] = useState<Set<string>>(new Set());
  const {
    viewedCount,
    bookmarkedCount,
    markAsViewed,
    toggleBookmark,
    isBookmarked
  } = useQuestionProgress("terraform");

  const totalQuestions = terraformSections.reduce(
    (acc, section) => acc + section.questions.length,
    0
  );

  const toggleAnswer = (id: string) => {
    setVisibleAnswers(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
        markAsViewed(id);
      }
      return newSet;
    });
  };

  return (
    <div className="container max-w-4xl px-4 py-12">
      {/* Header */}
      <div className="mb-12 flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-glow">
          <Code className="h-8 w-8 text-white" />
        </div>
        <div>
          <h1 className="text-4xl font-bold">Terraform</h1>
          <p className="text-lg text-muted-foreground">
            Infrastructure as Code Interview Questions
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <ProgressTracker
          totalQuestions={totalQuestions}
          viewedCount={viewedCount}
          bookmarkedCount={bookmarkedCount}
        />

        <p className="text-lg mb-8">
          Master Terraform with this comprehensive collection of interview
          questions covering basics, state management, modules, workflows, and
          advanced concepts.
        </p>

        <Accordion type="multiple" className="space-y-4">
          {terraformSections.map((section, index) => (
            <AccordionItem
              key={index}
              value={`section-${index}`}
              className="border rounded-lg px-6 shadow-card hover-lift"
            >
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                {section.title}
              </AccordionTrigger>

              <AccordionContent>
                <div className="space-y-4 mt-4">
                  {section.questions.map((item, qIndex) => {
                    const answerId = `${index}-${qIndex}`;
                    const isVisible = visibleAnswers.has(answerId);

                    // Extract question and answer types
                    const questionText =
                      typeof item === "string"
                        ? item
                        : (item as any)?.question || "";

                    const hasPlainAnswer =
                      typeof item === "object" &&
                      item &&
                      "answer" in item &&
                      !!(item as any).answer;

                    const hasHtmlAnswer =
                      typeof item === "object" &&
                      item &&
                      "answerHtml" in item &&
                      !!(item as any).answerHtml;

                    const answerText = hasPlainAnswer ? (item as any).answer : null;
                    const hasAnyAnswer = hasPlainAnswer || hasHtmlAnswer;

                    return (
                      <div
                        key={qIndex}
                        className="border-l-2 border-primary/30 pl-4 py-2"
                      >
                        <div className="flex items-start gap-3">
                          <span className="text-primary font-bold mt-1">•</span>

                          <div className="flex-1">
                            {/* Question Row */}
                            <div className="flex items-start justify-between gap-2 mb-2">
                              <p className="text-foreground font-medium flex-1">
                                {questionText}
                              </p>

                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 shrink-0"
                                onClick={() => toggleBookmark(answerId)}
                              >
                                <Bookmark
                                  className={`h-4 w-4 ${
                                    isBookmarked(answerId)
                                      ? "fill-secondary text-secondary"
                                      : ""
                                  }`}
                                />
                              </Button>
                            </div>

                            {/* Answer Section */}
                            {hasAnyAnswer && (
                              <>
                                <button
                                  onClick={() => toggleAnswer(answerId)}
                                  className="text-sm text-primary hover:text-primary/80 font-medium flex items-center gap-1 mb-2 transition-smooth"
                                >
                                  {isVisible ? "Hide" : "Show"} Answer
                                  <ChevronDown
                                    className={`h-4 w-4 transition-transform ${
                                      isVisible ? "rotate-180" : ""
                                    }`}
                                  />
                                </button>

                                {isVisible && (
                                  <div className="mt-2 p-4 bg-muted/50 rounded-lg border border-border animate-fade-in">
                                    {hasHtmlAnswer ? (
                                      <div
                                        className="text-sm text-muted-foreground leading-relaxed"
                                        dangerouslySetInnerHTML={{
                                          __html: (item as any).answerHtml
                                        }}
                                      />
                                    ) : (
                                      <p className="text-sm text-muted-foreground leading-relaxed">
                                        {answerText}
                                      </p>
                                    )}
                                  </div>
                                )}
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
