import React, { useEffect, useState } from "react";
import { Seo } from "../SEO/Seo";

/**
 * SPRINKLE: TrainingGraph Component
 * Visualizes model performance metrics for Deep Learning projects.
 */
const TrainingGraph: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="my-4 ml-4 p-4 bg-vscode-sidebar border border-vscode-activity rounded-md font-mono text-[10px] max-w-md">
      <div className="flex justify-between mb-2 text-vscode-text opacity-70">
        <span>Training Efficiency (EfficientNet-B0)</span>
        <span className="text-vscode-accent">
          Accuracy: {(85 + progress * 0.13).toFixed(2)}%
        </span>
      </div>

      {/* Simulated Loss Bars */}
      <div className="h-16 flex items-end gap-1 px-1">
        {[...Array(20)].map((_, i) => {
          const height = Math.max(10, 80 - i * 4 - Math.random() * 5);
          const opacity = i / 20 < progress / 100 ? 1 : 0.2;
          return (
            <div
              key={i}
              className="flex-1 bg-vscode-accent rounded-t-sm transition-all duration-500"
              style={{ height: `${height}%`, opacity }}
            />
          );
        })}
      </div>

      <div className="mt-2 h-1 bg-black/20 rounded-full overflow-hidden">
        <div
          className="h-full bg-vscode-accent transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="mt-1 text-[9px] text-vscode-comment italic">
        // Analyzing Galaxy10 DECaLS dataset morphological features...
      </div>
    </div>
  );
};

const projects = [
  {
    id: 0,
    name: "AI Voice Chatbot",
    description:
      "A high-performance assistant featuring sub-second latency via the Groq LPU. Implemented persistent memory using SQLite to retain context across sessions.",
    link: "https://my-bot-one-azure.vercel.app/",
    tags: ["Llama 3.3", "Groq API", "React", "Flask", "Docker", "SQLite"],
  },
  {
    id: 1,
    name: "devTinder | Commit to Connections",
    description:
      "A MERN-stack social platform for developers where matches are made via 'git commit' and rejected via 'git revert'. Styled with a GitHub Dark Mode aesthetic.",
    link: "https://devtinder.net.in/",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "MERN Stack"],
  },
  {
    id: 2,
    name: "Galaxy Morphology Classifier",
    description:
      "Deep Learning solution utilizing the EfficientNet CNN architecture to classify galaxies into 10 morphological categories based on astronomical data.",
    link: "https://lordtesla-galaxy-classifier.hf.space/",
    tags: [
      "Python",
      "TensorFlow",
      "Computer Vision",
      "Deep Learning",
      "EfficientNet",
    ],
  },
];

export const ProjectsTab: React.FC = () => {
  return (
    <div className="p-4 h-full overflow-y-auto font-mono text-sm leading-6">
      <Seo
        title="Projects - Dhruv Jain"
        description="Portfolio of AI, Machine Learning, and Full-Stack projects by Dhruv Jain."
        keywords={[
          "Dhruv Jain",
          "AI Voice Chatbot",
          "devTinder",
          "Galaxy Classifier",
          "MERN Stack",
          "Deep Learning",
        ]}
      />

      {/* Array Header */}
      <div className="font-mono text-sm overflow-x-auto whitespace-pre-wrap">
        <span className="text-vscode-keyword">const</span>{" "}
        <span className="text-vscode-function">projects</span>
        <span className="text-vscode-text"> =</span>{" "}
        <span className="text-vscode-text">[</span>
      </div>

      {projects.map((project, index) => (
        <div key={project.id} className="mb-4">
          <div className="pl-4 hover:bg-vscode-lineHighlight rounded group transition-colors py-1">
            <div className="flex items-center space-x-3">
              <span className="text-vscode-bracket">{`{`}</span>

              {/* AI CHATBOT SPRINKLE: Latency Marker */}
              {project.name.includes("Voice") && (
                <span className="text-[10px] text-green-500 font-bold animate-pulse">
                  ● Inference: 142ms (Groq LPU™)
                </span>
              )}
            </div>

            <div className="pl-4">
              <div>
                <span className="text-vscode-variable">"id"</span>:{" "}
                <span className="text-vscode-number">{project.id}</span>,
              </div>
              <div>
                <span className="text-vscode-variable font-bold">"name"</span>:{" "}
                <span className="text-vscode-string">"{project.name}"</span>,
              </div>
              <div>
                <span className="text-vscode-variable">"description"</span>:{" "}
                <span className="text-vscode-string">
                  "{project.description}"
                </span>
                ,
              </div>
              <div>
                <span className="text-vscode-variable">"link"</span>:{" "}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-vscode-string underline decoration-vscode-string cursor-pointer"
                >
                  "{project.link}"
                </a>
                ,
              </div>
              <div>
                <span className="text-vscode-variable">"tags"</span>:{" "}
                <span className="text-vscode-bracket">[</span>
                {project.tags.map((tag, i) => (
                  <span key={tag}>
                    <span className="text-vscode-string">"{tag}"</span>
                    {i < project.tags.length - 1 && ","}
                  </span>
                ))}
                <span className="text-vscode-bracket">]</span>
              </div>
            </div>

            {/* GALAXY CLASSIFIER SPRINKLE: Training Graph */}
            {project.name.includes("Galaxy") && <TrainingGraph />}

            {/* DEVTINDER SPRINKLE: Logic Comment */}
            {project.name.includes("devTinder") && (
              <div className="pl-4 mt-2 text-vscode-comment italic text-[11px]">
                // git commit -m "Matched with a Full Stack Developer"
              </div>
            )}

            <span className="text-vscode-bracket">
              {`}`}
              {index < projects.length - 1 && ","}
            </span>
          </div>
        </div>
      ))}

      {/* Array Footer */}
      <div>
        <span className="text-vscode-text">];</span>
      </div>

      <div className="mt-8 text-vscode-comment border-t border-vscode-activity pt-4">
        {`// TODO: Developing next-gen AI applications at NMIMS...`}
      </div>
    </div>
  );
};
