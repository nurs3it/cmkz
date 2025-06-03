"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import Image from "next/image";

interface MarkdownProps {
  content: string;
}

const Markdown: React.FC<MarkdownProps> = ({ content }) => {
  return (
    <div className="prose">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeHighlight]}
        components={{
          p: ({ children }) => <p className="my-1">{children}</p>,
          h1: ({ children }) => (
            <h1 className="my-1 text-2xl font-bold">{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 className="my-1 text-xl font-bold">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="my-1 text-lg font-bold">{children}</h3>
          ),
          h4: ({ children }) => (
            <h4 className="my-1 text-base font-bold">{children}</h4>
          ),
          h5: ({ children }) => (
            <h5 className="my-1 text-sm font-bold">{children}</h5>
          ),
          h6: ({ children }) => (
            <h6 className="my-1 text-xs font-bold">{children}</h6>
          ),
          ul: ({ children }) => (
            <ul className="my-1 list-disc ml-2">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="my-1 list-decimal ml-2">{children}</ol>
          ),
          li: ({ children }) => <li className="my-1 ml-2">{children}</li>,
          a: ({ children, href }) => (
            <a href={href} className="my-1 text-primary">
              {children}
            </a>
          ),
          img: ({ src, alt }) => (
            <div className="relative w-full h-[300px] my-1">
              <Image
                src={typeof src === "string" ? src : ""}
                alt={alt || ""}
                fill
                className="object-contain"
              />
            </div>
          ),
          blockquote: ({ children }) => (
            <blockquote className="my-1">{children}</blockquote>
          ),
          hr: () => <hr className="my-1" />,
          table: ({ children }) => <table className="my-1">{children}</table>,
          tr: ({ children }) => <tr className="my-1">{children}</tr>,
          td: ({ children }) => <td className="my-1">{children}</td>,
          th: ({ children }) => (
            <th className="my-1 text-left text-sm font-normal">{children}</th>
          ),
          code: ({ children }) => <code className="my-1">{children}</code>,
          pre: ({ children }) => <pre className="my-1">{children}</pre>,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default Markdown;
