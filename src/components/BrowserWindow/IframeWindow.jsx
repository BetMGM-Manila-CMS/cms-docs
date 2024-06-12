import React from 'react';
import BrowserWindow from './index';

export default function IframeWindow({ url }) {
  return (
    React.createElement("div", { style: { padding: 10 } },
      React.createElement(BrowserWindow, {
        url: url,
        style: {
          minWidth: 'min(100%,45vw)',
          width: 800,
          maxWidth: '100%',
          overflow: 'hidden',
        },
        bodyStyle: { padding: 0 }
      },
        React.createElement("iframe", {
          src: url,
          title: url,
          style: { display: 'block', width: '100%', height: 300 }
        })
      )
    )
  );
}
