import React, { useState, useRef, useEffect } from "react";
import { X, ChevronUp } from "lucide-react";
import { useEditor } from "../../context/EditorContext";

const LOGIN_TIME = new Date().toDateString();
const WELCOME_MESSAGE = [
  `Last login: ${LOGIN_TIME} on ttys000`,
  "dhruvjain@Dhruvs-MacBook-Pro portfolio % npm start",
  "",
  "> dhruv-jain-ai-ml@1.0.0 start",
  "> vite",
  "",
  "  VITE v6.4.1  ready in 560 ms",
  "",
  "  ➜  Local:   http://localhost:3000/",
  "  ➜  Network: http://192.168.1.5:3000/",
  "",
  "ready - started server on 0.0.0.0:3000, url: http://localhost:3000",
  "",
];

export const Terminal: React.FC = () => {
  const { terminalVisible, toggleTerminal, terminalHeight } = useEditor();
  const [history, setHistory] = useState<string[]>(WELCOME_MESSAGE);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalVisible && bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [history, terminalVisible]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    let response: string[] = [];
    const prompt = "dhruvjain@Dhruvs-MacBook-Pro portfolio %";

    switch (trimmed) {
      case "help":
        response = [
          "Available commands:",
          "  help     - Show this help message",
          "  whoami   - Display current user",
          "  ls       - List project files",
          "  predict  - AI hiring likelihood prediction",
          "  classify - Run Galaxy Classifier demo",
          "  commit   - Test devTinder connection logic",
          "  clear    - Clear terminal history",
        ];
        break;
      case "whoami":
        response = ["dhruvjain - Aspiring AI Full Stack Engineer"];
        break;
      case "predict":
        response = [
          "Running hiring_likelihood_model.predict(Dhruv_Jain)...",
          "Analyzing MTech AI research at NMIMS...",
          "Processing React & Node.js feature set...",
          "---------------------------------------",
          "Result: 99.9% Match Found! 🚀",
          "Recommendation: Schedule an interview immediately.",
        ];
        break;
      case "classify":
        response = [
          "Initializing EfficientNet CNN architecture...",
          "Analyzing Galaxy10 DECaLS dataset imagery...",
          "Processing morphological features...",
          "Prediction: Spiral Galaxy (Class 4) 🌌",
          "Confidence Score: 98.4%",
        ];
        break;
      case "commit":
        response = [
          "git commit -m 'Checking for coding partners'",
          "Analyzing devTinder swipe interaction...",
          "Status: Interaction matches.push(developer)",
          "Result: Connection established! 💖",
        ];
        break;
      case "ls":
        response = [
          "src  public  node_modules  package.json  README.md  train_model.py",
        ];
        break;
      case "pwd":
        response = ["/Users/dhruvjain/Documents/portfolio"];
        break;
      case "clear":
        setHistory([]);
        return;
      case "":
        break;
      default:
        response = [`zsh: command not found: ${trimmed}`];
    }

    setHistory((prev) => [...prev, `${prompt} ${cmd}`, ...response]);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(input);
      setInput("");
    }
  };

  if (!terminalVisible) return null;

  return (
    <div
      className="border-t border-vscode-activity bg-vscode-panel flex flex-col shrink-0"
      style={{ height: terminalHeight }}
    >
      <div className="flex items-center justify-between px-4 py-2 bg-vscode-sidebar text-xs uppercase tracking-wide border-b border-vscode-activity select-none">
        <div className="flex space-x-6">
          <span className="cursor-pointer border-b border-vscode-text text-vscode-text pb-1">
            Terminal
          </span>
          <span className="cursor-pointer text-gray-500 hover:text-vscode-text transition-colors">
            Output
          </span>
          <span className="cursor-pointer text-gray-500 hover:text-vscode-text transition-colors">
            Debug Console
          </span>
          <span className="cursor-pointer text-gray-500 hover:text-vscode-text transition-colors">
            Problems
          </span>
        </div>
        <div className="flex items-center space-x-2 text-vscode-text">
          <ChevronUp
            size={14}
            className="cursor-pointer hover:bg-vscode-activity rounded"
          />
          <X
            size={14}
            className="cursor-pointer hover:bg-vscode-activity rounded"
            onClick={toggleTerminal}
          />
        </div>
      </div>
      <div className="flex-1 p-2 font-mono text-sm overflow-y-auto overflow-x-hidden bg-vscode-bg text-vscode-text">
        {history.map((line, i) => (
          <div key={i} className="whitespace-pre-wrap leading-tight font-mono">
            {line}
          </div>
        ))}
        <div className="flex items-center">
          <span className="mr-2 font-bold text-vscode-accent ">
            dhruvjain@Dhruvs-MacBook-Pro portfolio %
          </span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            className="bg-transparent outline-none flex-1 text-vscode-text font-mono"
            autoFocus
            spellCheck={false}
          />
        </div>
        <div ref={bottomRef} />
      </div>
    </div>
  );
};
