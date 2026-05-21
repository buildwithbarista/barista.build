"use client";

import { useState } from "react";

export function InstallBox({ command }: { command: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="install">
      <span className="install-prompt">$</span>
      <span className="install-cmd">{command}</span>
      <button
        className="install-copy"
        type="button"
        aria-label="Copy command"
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(command);
            setCopied(true);
            setTimeout(() => setCopied(false), 1400);
          } catch {
            /* clipboard unavailable */
          }
        }}
      >
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}
