'use client';

import React from 'react';
import { Highlight as PrismHighlight, Language } from 'prism-react-renderer';

export interface CodeSnippetProps {
  code: string;
  language: Language;
}

type HighlightRenderProps = {
  className: string;
  style: React.CSSProperties;
  tokens: any[];
  getLineProps: (props: any) => any;
  getTokenProps: (props: any) => any;
};

const CodeSnippet: React.FC<CodeSnippetProps> = ({ code, language }) => {
  return (
    <PrismHighlight code={code} language={language}>
      {({
        className,
        style,
        tokens,
        getLineProps,
        getTokenProps,
      }: HighlightRenderProps) => (
        <pre
          className={className}
          style={{ ...style, padding: '1em', overflowX: 'auto' }}
        >
          {tokens.map((line: any, i: number) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token: any, key: number) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </PrismHighlight>
  );
};

export default CodeSnippet;
