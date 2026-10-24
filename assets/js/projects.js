"use strict";

/*
  FELIX PORTFOLIO — PROJECT CATALOGUE 
*/

const projects = [
    {
        id: "legal-chatbot",
        title: "Felix Legal Chatbot",
        category: "ai",
        categoryLabel: "AI / MACHINE LEARNING",
        featured: true,
        year: "2026",

        description:
            "A Nigerian legal research assistant designed to help users explore legal principles, analyse court judgments, review legal documents, and prepare structured legal drafts through a single workspace.",


        highlights: [
            "Nigerian legal research and case analysis",
            "Legal document upload and review",
            "Structured legal drafting assistance",
            "Markdown-formatted responses and readable output",
            "Interactive workspace with dedicated legal tools"
        ],

        technologies: [
            "Python",
            "Flask",
            "JavaScript",
            "HTML5",
            "CSS3",
            "Marked.js",
            "DOMPurify"
        ],

        image: "assets/images/felix_legal_chatbot.png",
        imageAlt: "Legal Chatbot application preview",

        demoUrl: "https://felixlawai.com/",
        repoUrl: "https://github.com/felixogunz/felix-legal-chatbot",

        status: "Live Demo",

        accent: "mint"
    },
    {
        id: "spamguard-ai",
        title: "Felix SpamGuard AI",
        category: "ai",
        categoryLabel: "AI / MACHINE LEARNING",
        featured: true,
        year: "2026",

        description:
            "An explainable spam classification application that uses natural language processing and machine learning to distinguish spam from legitimate messages.",

        highlights: [
            "TF-IDF text features",
            "Logistic Regression",
            "Prediction explanations"
        ],

        technologies: [
            "Python",
            "scikit-learn",
            "FastAPI",
            "JavaScript"
        ],

        image: "assets/images/felix_spamguard_ai.png",
        imageAlt: "SpamGuard AI application preview",

        demoUrl: "https://felix-spamguard-ai.onrender.com/",
        repoUrl: "https://github.com/felixogunz/felix_spamguard_ai",

        status: "Live Demo",

        accent: "mint"
    },

    {
        id: "estateiq",
        title: "EstateIQ",
        category: "ai",
        categoryLabel: "AI / MACHINE LEARNING",
        featured: true,
        year: "2026",

        description:
            "A house-price prediction project designed to explore property valuation through data analysis, predictive modelling and an interactive user experience.",

        highlights: [
            "Property price prediction",
            "Data-driven analysis",
            "Interactive interface"
        ],

        technologies: [
            "Python",
            "Machine Learning",
            "FastAPI",
            "JavaScript"
        ],

        image: "assets/images/felix_estate_iq.png",
        imageAlt: "EstateIQ property intelligence application preview",

        demoUrl: "https://felix-estate-iq.onrender.com/",
        repoUrl: "https://github.com/felixogunz/felix_estate_iq",

        status: "In development",

        accent: "gold"
    },

    {
        id: "felix-business-manager",
        title: "Felix Business Manager",
        category: "software",
        categoryLabel: "SOFTWARE ENGINEERING",
        featured: true,
        year: "2026",

        description:
            "A business management application designed to organise client relationships, projects and interactions through a structured backend and web interface.",

        highlights: [
            "Client management",
            "Project tracking",
            "Authentication and APIs"
        ],

        technologies: [
            "Python",
            "FastAPI",
            "SQLAlchemy",
            "JavaScript"
        ],

        image: "assets/images/felix_business_manager.png",
        imageAlt: "Felix Business Manager application preview",

        demoUrl: "https://felix-business-manager.onrender.com/",
        repoUrl: "https://github.com/felixogunz/felix-business-manager",

        status: "In development",

        accent: "blue"
    }
];
