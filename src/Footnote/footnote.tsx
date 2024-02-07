import React from "react";
import "./footnote.css";
import type { DocConfig } from "../../docgen/types";

/**
 * Creates an automatically numbered footnote. This will remove the footnote content from the document flow and place it at the bottom of the page.
 */
export const Footnote = ({
  children,
  ...props
}: {
  /**
   * The text to display in the footnote. This can be rich text.
   */
  children: React.ReactNode;
}) => {
  return (
    <span
      className="--docify-footnote text-left text-xs font-normal"
      {...props}
    >
      {children}
    </span>
  );
};

export const __docConfig: DocConfig = {
  icon: "info",
  components: {
    Footnote: {
      examples: {
        default: {
          template: <Footnote>Ceci est un exemple dynamique</Footnote>,
        },
        test: {
          template: (
            <Footnote>
              Ceci est un exemple d'une footnote qui est très longue et qui a du
              styling de configuré dessus.
            </Footnote>
          ),
        },
      },
    },
  },
};
