import {
  SiPython, SiDocker, SiJavascript, SiApacheairflow, SiMongodb,
  SiPytorch, SiTensorflow, SiSelenium, SiGithub,
  SiHuggingface, SiFastapi, SiLangchain, SiRedis, SiCplusplus, SiPostgresql, SiOpencv
} from "react-icons/si";
import { FaGitAlt, FaAws, FaLinkedinIn, FaKaggle, FaGoodreadsG } from "react-icons/fa";
import { AiFillGithub, AiFillEye } from "react-icons/ai";
import { BiGitRepoForked } from "react-icons/bi";
import { ImBook } from "react-icons/im";
import { Bot, CreditCard, LineChart, Terminal, Database, Cloud, Search, Shield, Map, Eye, FileText } from "lucide-react";

import aiMedha from "../assets/images/ai_medha_chatbot.png";
import socialRegistry from "../assets/images/unified_social_registry.png";
import propertyValuation from "../assets/images/property_valuation.png";
import trafficAnalysis from "../assets/images/traffic_analysis.png";
import docIntelligence from "../assets/images/document_intelligence.png";
import hairRecon from "../assets/images/hair_reconstruction.png";

export const homeConfig = {
  greeting: "Hello There! I'm Pulkit Verma",
  titles: [
    "An AI & ML Engineer",
  ],
  about: {
    start:
      "I am an Artificial Intelligence and Machine Learning Engineer with 4.5+ years of experience designing, developing, and deploying AI/ML, Generative AI, computer vision, and data-driven solutions for enterprise and government projects. I specialize in building RAG pipelines, LLM-based applications, and scalable AI systems.",
    exit: "I am proficient in Python, C++, and the modern AI ecosystem. My expertise spans across Large Language Models, Computer Vision, and Knowledge Graphs, with a strong focus on translating complex research into production-ready solutions that drive real-world impact.",
  },
  workTimeline: [
    {
      id: "work-1",
      title: "Consultant, AI-COE",
      company: "KPMG Advisory Services Pvt. Ltd.",
      description:
        "Designing and developing Generative AI solutions, RAG pipelines, and AI-driven platforms for Government of India projects including AI Medha Chatbot and Unified Social Registry.",
      date: "2025-present",
      icon: Bot,
      tags: [
        "generative-ai",
        "llm",
        "rag",
        "python",
        "fastapi",
        "langchain",
        "knowledge-graphs",
        "geospatial",
      ],
    },
    {
      id: "work-0",
      title: "Software Engineer, Computer Vision",
      company: "KritiKal Solutions Pvt. Ltd.",
      description:
        "Developed computer vision pipelines, YOLO-based traffic analysis, and intelligent document processing tools using OCR and LLMs.",
      date: "2022-2025",
      icon: Eye,
      tags: [
        "computer-vision",
        "yolo",
        "ocr",
        "python",
        "pytorch",
        "tensorflow",
        "opencv",
        "llamaindex",
      ],
    },
  ],
};

export const skillsConfig = {
  mainSkills: [
    { id: "skills-0", icon: SiPython, text: "Python" },
    { id: "skills-1", icon: SiFastapi, text: "FastAPI" },
    { id: "skills-2", icon: SiLangchain, text: "LangChain" },
    { id: "skills-4", icon: SiPytorch, text: "PyTorch" },
    { id: "skills-13", icon: SiDocker, text: "Docker" },
    { id: "skills-21", icon: SiCplusplus, text: "C++" },
  ],
  complementarySkills: [
    { id: "skills-5", icon: FaGitAlt, text: "Git" },
    { id: "skills-7", icon: SiTensorflow, text: "TensorFlow" },
    { id: "skills-10", icon: Terminal, text: "Bash" },
    { id: "skills-11", icon: SiMongodb, text: "MongoDB" },
    { id: "skills-22", icon: SiPostgresql, text: "PostgreSQL" },
    { id: "skills-23", icon: SiOpencv, text: "OpenCV" },
    { id: "skills-6", icon: SiHuggingface, text: "HuggingFace" },
    { id: "skills-18", icon: Cloud, text: "Azure" },
    { id: "skills-19", icon: FaAws, text: "AWS" },
    { id: "skills-16", icon: Database, text: "SQL" },
  ],
};

export const projectConfig = [
  {
    id: "project-medha",
    title: "AI Medha Chatbot",
    links: [],
    image: aiMedha,
    description: "Developed and deployed RAG pipelines using FAISS and ChromaDB for semantic search. Built an interactive chatbot using LLaMA 70B, improving accuracy by 30% and reducing latency by 20%.",
    target: "_blank",
  },
  {
    id: "project-social-registry",
    title: "Unified Social Registry",
    links: [],
    image: socialRegistry,
    description: "Designed a federated architecture for beneficiary data aggregation. Implemented AI-driven segmentation, knowledge graphs (Citizen 360), and fraud analytics workflows.",
    target: "_blank",
  },
  {
    id: "project-property-valuation",
    title: "AI-Based Property Valuation",
    links: [],
    image: propertyValuation,
    description: "Developed an AI-driven valuation engine using property transaction data and GIS location attributes. Trained XGBoost models for land and flat valuation with geospatial clustering.",
    target: "_blank",
  },
  {
    id: "project-traffic-analysis",
    title: "Traffic Analysis Pipeline",
    links: [],
    image: trafficAnalysis,
    description: "Benchmarked YOLO models for traffic analysis and developed a bird's-eye-view pipeline using multi-angle images and homography matrices.",
    target: "_blank",
  },
  {
    id: "project-doc-processing",
    title: "Intelligent Document Processing",
    links: [],
    image: docIntelligence,
    description: "Built document processing tools integrating OCR (OpenCV, NVIDIA) and LLM strategies for automated annotation and PDF-to-Markdown conversion.",
    target: "_blank",
  },
  {
    id: "project-3d-hair",
    title: "3D Hair Reconstruction",
    links: [],
    image: hairRecon,
    description: "Experimented with 3D hair reconstruction using depth maps and segmentation masks for AR/VR applications.",
    target: "_blank",
  },
];

export const footerConfig = {
  icons: [
    { id: "footer-0", url: "https://github.com/pulkitv52", icon: AiFillGithub },
    { id: "footer-1", url: "https://linkedin.com/in/pulkitverma52", icon: FaLinkedinIn },
  ],
};
