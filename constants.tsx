import React from "react";
import { FileNode, FileType } from "./types";
import { HomeTab } from "./components/Tabs/HomeTab";
import { AboutTab } from "./components/Tabs/AboutTab";
import { ProjectsTab } from "./components/Tabs/ProjectsTab";
import { ContactTab } from "./components/Tabs/ContactTab";
import { SkillsTab } from "./components/Tabs/SkillsTab";

export const FILE_SYSTEM: FileNode[] = [
  {
    id: "root",
    name: "Dhruv_portfolio",
    type: FileType.FOLDER,
    children: [
      {
        id: "src",
        name: "src",
        type: FileType.FOLDER,
        children: [
          {
            id: "components",
            name: "components",
            type: FileType.FOLDER,
            children: [
              {
                id: "home",
                name: "Home.tsx",
                type: FileType.FILE,
                language: "typescript",
                content: <HomeTab />,
              },
              {
                id: "skills",
                name: "Skills.tsx",
                type: FileType.FILE,
                language: "typescript",
                content: <SkillsTab />,
              },
            ],
          },
          {
            id: "pages",
            name: "pages",
            type: FileType.FOLDER,
            children: [
              {
                id: "about",
                name: "About.md",
                type: FileType.FILE,
                language: "markdown",
                content: <AboutTab />,
              },
            ],
          },
        ],
      },
      {
        id: "data",
        name: "data",
        type: FileType.FOLDER,
        children: [
          {
            id: "projects",
            name: "projects.json",
            type: FileType.FILE,
            language: "json",
            content: <ProjectsTab />,
          },
        ],
      },
      {
        id: "styles",
        name: "styles",
        type: FileType.FOLDER,
        children: [
          {
            id: "contact",
            name: "contact.css",
            type: FileType.FILE,
            language: "css",
            content: <ContactTab />,
          },
        ],
      },
      {
        id: "readme",
        name: "README.md",
        type: FileType.FILE,
        language: "markdown",
        content: <AboutTab />,
      },
      {
        id: "package",
        name: "package.json",
        type: FileType.FILE,
        language: "json",
        content: (
          <div className="p-6 font-mono text-sm">
            <span className="text-vscode-text">{`{`}</span>
            <div className="pl-4">
              <span className="text-vscode-string">"name"</span>:{" "}
              <span className="text-vscode-string">
                "dhruv-jain-ai-portfolio"
              </span>
              ,
              <br />
              <span className="text-vscode-string">"version"</span>:{" "}
              <span className="text-vscode-string">"2026.1.0"</span>,<br />
              <span className="text-vscode-string">"description"</span>:{" "}
              <span className="text-vscode-string">
                "AI Full Stack Engineer | M.Tech AI @ NMIMS Mumbai"
              </span>
              ,<br />
              <span className="text-vscode-string">"scripts"</span>: {`{`}
              <br />
              <div className="pl-4">
                <span className="text-vscode-string">"train"</span>:{" "}
                <span className="text-vscode-string">
                  "python train_model.py"
                </span>
                ,<br />
                <span className="text-vscode-string">"deploy"</span>:{" "}
                <span className="text-vscode-string">"gh-pages -d dist"</span>,
                <br />
                <span className="text-vscode-string">"vibe"</span>:{" "}
                <span className="text-vscode-string">
                  "npm run learn-continuously"
                </span>
              </div>
              {`}`},<br />
              <span className="text-vscode-string">"dependencies"</span>: {`{`}
              <br />
              <div className="pl-4">
                <span className="text-vscode-string">"react"</span>:{" "}
                <span className="text-vscode-string">"^19.0.0"</span>,<br />
                <span className="text-vscode-string">"llama-3.3"</span>:{" "}
                <span className="text-vscode-string">"latest"</span>,<br />
                <span className="text-vscode-string">"tensorflow"</span>:{" "}
                <span className="text-vscode-string">"active"</span>,<br />
                <span className="text-vscode-string">"curiosity"</span>:{" "}
                <span className="text-vscode-string">"unlimited"</span>
              </div>
              {`}`}
            </div>
            <span className="text-vscode-text">{`}`}</span>
          </div>
        ),
      },
    ],
  },
];

export const INITIAL_OPEN_FILES = ["home"];
