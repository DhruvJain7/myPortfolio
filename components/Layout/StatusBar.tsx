import React from "react";
import {
  GitBranch,
  Radio,
  Check,
  Bell,
  ChevronUp,
  ChevronDown,
  BrainCircuit,
  Cpu,
} from "lucide-react";
import { useEditor } from "../../context/EditorContext";

export const StatusBar: React.FC = () => {
  const { toggleTerminal, terminalVisible } = useEditor();

  return (
    <div className="h-7 bg-vscode-statusBar text-white flex items-center justify-between px-2 text-[11px] select-none shrink-0 z-50 border-t border-black/20 shadow-[0_-1px_2px_rgba(0,0,0,0.1)] font-sans">
      <div className="flex items-center space-x-1 h-full">
        {/* Source Control */}
        <div className="flex items-center space-x-1 hover:bg-white/10 px-2 h-full cursor-pointer transition-colors">
          <GitBranch size={12} />
          <span>main*</span>
        </div>

        {/* AI Insight: Active Model */}
        <div className="flex items-center space-x-1.5 hover:bg-white/10 px-2 h-full cursor-pointer transition-colors border-l border-white/10">
          <BrainCircuit
            size={12}
            className="text-vscode-accent animate-pulse"
          />
          <span className="font-medium">AI Engine: Llama-3.3-70b</span>
        </div>

        {/* AI Insight: Hardware/Inference Info */}
        <div className="hidden md:flex items-center space-x-1.5 hover:bg-white/10 px-2 h-full cursor-pointer transition-colors border-l border-white/10">
          <Cpu size={12} className="text-vscode-accent opacity-80" />
          <span>Groq LPU™ Active</span>
        </div>

        {/* Standard Errors */}
        <div className="flex items-center space-x-1 hover:bg-white/10 px-2 h-full cursor-pointer transition-colors border-l border-white/10">
          <Radio size={12} />
          <span>0 Errors</span>
        </div>
      </div>

      <div className="flex items-center space-x-0 h-full">
        {/* Terminal Toggle */}
        <div
          onClick={toggleTerminal}
          className={`flex items-center space-x-1 hover:bg-white/10 px-3 h-full cursor-pointer transition-colors ${terminalVisible ? "bg-white/20" : ""} border-l border-white/10`}
        >
          {terminalVisible ? (
            <ChevronDown size={12} />
          ) : (
            <ChevronUp size={12} />
          )}
          <span className="font-bold uppercase text-[10px]">Terminal</span>
        </div>

        {/* Right Section: Formatting & Environment */}
        <div className="hidden sm:flex items-center h-full">
          <div className="flex items-center px-3 h-full hover:bg-white/10 cursor-pointer border-l border-white/10">
            <span>UTF-8</span>
          </div>
          <div className="flex items-center px-3 h-full hover:bg-white/10 cursor-pointer border-l border-white/10">
            <span>TypeScript React</span>
          </div>
          <div className="flex items-center space-x-1 px-3 h-full hover:bg-white/10 cursor-pointer border-l border-white/10">
            <Check size={12} />
            <span>Prettier</span>
          </div>
          <div className="flex items-center px-3 h-full hover:bg-white/10 cursor-pointer border-l border-white/10">
            <Bell size={12} />
          </div>
        </div>
      </div>
    </div>
  );
};
