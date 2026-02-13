import React, { useState, useEffect } from "react";
import { Seo } from "../SEO/Seo";
import { Sparkles, ChevronDown, BookOpen } from "lucide-react";

const BIO_VARIANTS = {
  default: {
    label: "Professional README",
    text: "Hi, I'm Dhruv Jain. I am an Aspiring AI Full Stack Engineer and a dedicated lifelong learner based in Mumbai, Maharashtra, India. I have a strong foundation in frontend development and am currently pursuing a Master of Technology in Artificial Intelligence at NMIMS. I am passionate about building intelligent, user-friendly applications at the intersection of AI and full-stack development, treating every project as a lab experiment for my academic growth.",
  },
  technical: {
    label: "Academic & Technical",
    text: "MTech AI candidate specialized in MERN stack + Python/PyTorch. My learning journey involves mastering Large Language Model orchestration (Llama 3.3/Groq) and exploring the mathematical foundations of CNN architectures (EfficientNet). I am actively researching ways to optimize inference latency and implement persistent session memory in intelligent systems.",
  },
  casual: {
    label: "Growth Mindset / Casual",
    text: "Hey, I'm Dhruv! I'm in a permanent state of 'learning mode.' Whether I'm in a lecture at NMIMS or deep in a late-night debugging session, I’m driven by a massive curiosity for how things work. Right now, I'm obsessed with training models to understand the stars and making voice bots faster. If it’s new and it’s AI, I’m probably already trying to learn it.",
  },
};

type VariantKey = keyof typeof BIO_VARIANTS;

export const AboutTab: React.FC = () => {
  const [variant, setVariant] = useState<VariantKey>("default");
  const [displayText, setDisplayText] = useState(BIO_VARIANTS.default.text);
  const [isTyping, setIsTyping] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    if (variant === "default") {
      setDisplayText(BIO_VARIANTS.default.text);
      return;
    }

    setIsTyping(true);
    setDisplayText("");
    let i = 0;
    const fullText = BIO_VARIANTS[variant].text;

    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 8);

    return () => clearInterval(interval);
  }, [variant]);

  return (
    <div className="p-8 h-full overflow-y-auto font-sans max-w-4xl selection:bg-vscode-selection">
      <Seo
        title="About Me - Dhruv Jain"
        description="Dhruv Jain - Aspiring AI Full Stack Engineer based in Mumbai, India"
      />

      <div className="flex justify-between items-center mb-4 pb-2 border-b border-vscode-activity">
        <h1 className="text-3xl font-bold text-vscode-text">README.md</h1>

        {/* DROPDOWN & MAGIC BUTTON */}
        <div className="relative flex items-center gap-1">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex items-center gap-2 bg-vscode-sidebar text-vscode-text px-3 py-1.5 rounded-sm text-xs hover:bg-vscode-activity transition-all border border-vscode-activity"
          >
            Vibe: {BIO_VARIANTS[variant].label}
            <ChevronDown
              size={14}
              className={`${showDropdown ? "rotate-180" : ""} transition-transform`}
            />
          </button>

          {showDropdown && (
            <div className="absolute top-10 right-0 w-52 bg-vscode-sidebar border border-vscode-activity rounded shadow-2xl z-50 overflow-hidden">
              {(Object.keys(BIO_VARIANTS) as VariantKey[]).map((key) => (
                <div
                  key={key}
                  onClick={() => {
                    setVariant(key);
                    setShowDropdown(false);
                  }}
                  className="px-4 py-2.5 text-xs text-vscode-text hover:bg-vscode-accent hover:text-white cursor-pointer transition-colors border-b last:border-0 border-vscode-activity"
                >
                  {BIO_VARIANTS[key].label}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="space-y-6 text-vscode-text">
        <section>
          <h2 className="text-xl font-bold text-vscode-keyword mb-4 flex items-center gap-2">
            ## About Me
            {variant !== "default" && (
              <Sparkles
                size={16}
                className="text-vscode-accent animate-pulse"
              />
            )}
          </h2>
          <div
            className={`${variant !== "default" ? "bg-vscode-accent/5 border border-vscode-accent/20 rounded-md p-1" : ""}`}
          >
            <p className="leading-7 font-mono text-sm">
              {displayText}
              {isTyping && (
                <span className="inline-block w-2 h-4 bg-vscode-accent ml-1 animate-pulse" />
              )}
            </p>
          </div>
        </section>

        {/* RESTORED: "What I Do" Exactly as requested */}
        <section>
          <h2 className="text-xl font-bold text-vscode-keyword mb-2">
            ## What I Do
          </h2>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>
              🤖 Building intelligent applications with **React**, **Node.js**,
              and **Machine Learning**
            </li>
            <li>🏗️ Engineering secure and efficient data collection modules</li>
            <li>🎨 Developing and optimizing responsive web interfaces</li>
            <li>🧠 Exploring Large Language Models (LLM) </li>
            <li>🎓 Pursuing masters in Technology in AI .</li>
          </ul>
        </section>

        {/* RESTORED: "Tech Stack" Exactly as requested */}
        <section>
          <h2 className="text-xl font-bold text-vscode-keyword mb-2">
            ## Tech Stack
          </h2>
          <div className="font-mono text-sm bg-vscode-sidebar p-4 rounded-md border border-vscode-activity">
            <div>
              <span className="text-vscode-keyword">Frontend</span>: [React.js,
              Redux, Tailwind CSS, JavaScript, HTML5/CSS3]{" "}
            </div>
            <div>
              <span className="text-vscode-keyword">Backend/AI</span>: [Node.js,
              Python, Large Language Models (LLM)]{" "}
            </div>
            <div>
              <span className="text-vscode-keyword">Education</span>: [MTech AI,
              BTech Computer Engineering]{" "}
            </div>
          </div>
        </section>

        {/* RESTORED: "Certifications" Exactly as requested */}
        <section>
          <h2 className="text-xl font-bold text-vscode-keyword mb-2">
            ## Certifications
          </h2>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Namaste Node </li>
            <li>Namaste React</li>
            <li>Meta Front-End Developer</li>
          </ul>
        </section>

        {/* RESTORED: "Contact" Exactly as requested */}
        <section>
          <h2 className="text-xl font-bold text-vscode-keyword mb-2">
            ## Contact
          </h2>
          For professional inquiries, collaborations, or innovative projects,
          please reach out to me on:
          <br></br>
          📧{" "}
          <a
            href="mailto:djdhruvjain54@outlook.com"
            target="_blank"
            rel="noreferrer"
            className="text-vscode-accent font-bold hover:underline"
          >
            djdhruvjain54@outlook.com
          </a>{" "}
          <br></br>
          🔗{" "}
          <a
            href="https://www.linkedin.com/in/dhruv-jain-6331651bb"
            target="_blank"
            rel="noreferrer"
            className="text-vscode-accent font-bold hover:underline"
          >
            LinkedIn Profile
          </a>{" "}
        </section>
      </div>
    </div>
  );
};
