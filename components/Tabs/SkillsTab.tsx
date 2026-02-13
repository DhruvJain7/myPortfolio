import React from "react";
import { Seo } from "../SEO/Seo";
import { Code2, Cpu, Globe, Layers, Terminal, Zap } from "lucide-react"; // Assuming lucide-react is installed

interface Skill {
  name: string;
  icon: React.ReactNode;
}

interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const SkillsTab: React.FC = () => {
  const skillGroups: SkillCategory[] = [
    {
      category: "AI & Machine Learning",
      skills: [
        { name: "Large Language Models (LLM)", icon: <Zap size={16} /> },
        { name: "Machine Learning", icon: <Cpu size={16} /> },
        { name: "Python", icon: <Terminal size={16} /> },
      ],
    },
    {
      category: "Frontend Development",
      skills: [
        { name: "React.js", icon: <Layers size={16} /> },
        { name: "Redux", icon: <Zap size={16} /> },
        { name: "Tailwind CSS", icon: <Globe size={16} /> },
        { name: "JavaScript", icon: <Code2 size={16} /> },
      ],
    },
    {
      category: "Backend & Core",
      skills: [
        { name: "Node.js", icon: <Terminal size={16} /> },
        { name: "MongoDB", icon: <Code2 size={16} /> },
        { name: "Express.js", icon: <Zap size={16} /> },
      ],
    },
  ];

  return (
    <div className="p-6 h-full overflow-y-auto bg-vscode-bg font-sans">
      <Seo
        title="Skills - Dhruv Jain"
        description="Technical skills and expertise of Dhruv Jain, Aspiring AI Full Stack Engineer."
        keywords={["Skills", "React", "Node.js", "LLM", "AI", "Python"]}
      />

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-vscode-text mb-2">
          Technical Skills
        </h2>
        <p className="text-vscode-text opacity-60">
          My toolbox for building intelligent applications.
        </p>
      </div>

      <div className="space-y-8">
        {skillGroups.map((group, idx) => (
          <div key={idx}>
            <h3 className="text-sm uppercase tracking-widest text-vscode-keyword font-bold mb-4 flex items-center gap-2">
              <span className="h-px w-8 bg-vscode-keyword opacity-30"></span>
              {group.category}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {group.skills.map((skill, sIdx) => (
                <div
                  key={sIdx}
                  className="flex items-center gap-3 p-3 bg-vscode-sidebar border border-vscode-activity rounded-md hover:border-vscode-accent transition-colors group"
                >
                  <div className="text-vscode-accent group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </div>
                  <span className="text-vscode-text text-sm font-medium">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 p-4 border-t border-vscode-activity">
        <h3 className="text-vscode-text opacity-80 mb-2">
          Certifications & Expertise
        </h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-2 py-1 bg-vscode-lineHighlight text-vscode-text text-xs rounded border border-vscode-activity">
            Namaste React
          </span>
          <span className="px-2 py-1 bg-vscode-lineHighlight text-vscode-text text-xs rounded border border-vscode-activity">
            Namaste Node
          </span>
          <span className="px-2 py-1 bg-vscode-lineHighlight text-vscode-text text-xs rounded border border-vscode-activity">
            Meta Front-End Developer
          </span>
        </div>
      </div>
    </div>
  );
};
