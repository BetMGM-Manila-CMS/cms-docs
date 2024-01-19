import CopyButton from "@theme/CodeBlock/CopyButton";

import "./styles.css";

export const CopyIconButton = ({ text }) => {
  return (
    <div className="copy-icon-button flex items-center justify-center ">
      <div className="bg-slate-700 border-slate-800 p-5 flex items-center justify-center rounded-md">
        <CopyButton code={text} />
      </div>
    </div>
  );
};
