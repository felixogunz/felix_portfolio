
"use strict";

/*
  FELIX OGUNBOWALE PORTFOLIO
  PROJECT CATALOGUE
*/

const projects = [

    // 01. FELIX LEGAL AI

    {
        id: "legal-chatbot",

        title: "Felix Legal AI",

        category: "ai",
        categoryLabel: "AI / LEGAL TECHNOLOGY",

        featured: true,
        year: "2026",

        description:
            "An AI-powered Nigerian legal research and document analysis platform built with Python, Flask and the OpenAI API. Designed to support legal professionals and users with conversational legal research, case analysis, document-assisted queries and structured legal drafting through an integrated digital workspace.",

        highlights: [
            "Developed an OpenAI-powered conversational legal research assistant focused on Nigerian law.",
            "Implemented PDF, TXT and DOCX document uploads with contextual document analysis.",
            "Engineered structured AI response generation for legal research, case analysis and document drafting.",
            "Built user authentication, conversation history and password recovery workflows.",
            "Integrated input validation, CSRF protection and rate-limiting mechanisms.",
            "Deployed a publicly accessible application using Render and configured the custom domain felixlawai.com."
        ],

        technologies: [
            "Python",
            "Flask",
            "OpenAI API",
            "JavaScript",
            "HTML5",
            "CSS3",
            "SQLite",
            "PostgreSQL",
            "REST APIs",
            "Render"
        ],

        image: "assets/images/felix_legal_chatbot.png",

        imageAlt: "Felix Legal AI Nigerian legal research and document analysis platform",

        demoUrl: "https://felixlawai.com/",

        repoUrl: "https://github.com/felixogunz/felix-legal-chatbot",

        status: "Live Demo",

        accent: "mint"
    },


    // 02. FELIX SPAMGUARD AI

    {
        id: "spamguard-ai",

        title: "Felix SpamGuard AI",

        category: "ai",
        categoryLabel: "AI / MACHINE LEARNING",

        featured: true,
        year: "2026",

        description:
            "A machine learning-powered spam detection platform that applies natural language processing and supervised classification to distinguish legitimate messages from spam. Built with Python, scikit-learn and FastAPI, the application provides real-time predictions, spam probabilities and interpretable prediction signals.",

        highlights: [
            "Engineered an end-to-end machine learning pipeline using TF-IDF vectorisation and Logistic Regression.",
            "Achieved 98.1% accuracy on a held-out test set of 1,290 messages.",
            "Recorded 90.9% spam precision, 93.8% recall, 92.3% F1-score and 99.6% ROC-AUC.",
            "Implemented model persistence and repeatable training workflows for consistent inference.",
            "Developed false-positive and false-negative analysis to evaluate classification errors.",
            "Built FastAPI endpoints for browser-based predictions, application health checks and model performance metrics.",
            "Deployed the application with an interactive frontend for real-time message classification."
        ],

        technologies: [
            "Python",
            "scikit-learn",
            "TF-IDF",
            "Logistic Regression",
            "FastAPI",
            "JavaScript",
            "HTML5",
            "CSS3",
            "REST APIs"
        ],

        image: "assets/images/felix_spamguard_ai.png",

        imageAlt: "Felix SpamGuard AI machine learning spam classification platform",

        demoUrl: "https://felix-spamguard-ai.onrender.com/",

        repoUrl: "https://github.com/felixogunz/felix_spamguard_ai",

        status: "Live Demo",

        accent: "mint"
    },


    // 03. ESTATEIQ

    {
        id: "estateiq",

        title: "EstateIQ",

        category: "ai",
        categoryLabel: "AI / PROPERTY TECHNOLOGY",

        featured: true,
        year: "2026",

        description:
            "A data-driven Nigerian property valuation platform that applies machine learning to estimate residential property prices using location and property characteristics. Designed to make property intelligence more accessible through predictive modelling, interactive visualisation and a user-focused valuation interface.",

        highlights: [
            "Developed a property price prediction pipeline using Random Forest regression.",
            "Prepared and processed Nigerian residential property data for machine learning applications.",
            "Implemented numerical and categorical preprocessing for property-related features.",
            "Evaluated model performance using an 80/20 train-test split and MAE, RMSE and R² metrics.",
            "Built a Flask-based application with property input controls and API endpoints for predictions and model metrics.",
            "Designed an interactive valuation interface featuring Nigerian naira estimates and Chart.js visualisations.",
            "Structured the application into reusable components to support maintainability and future product enhancements."
        ],

        technologies: [
            "Python",
            "Flask",
            "pandas",
            "NumPy",
            "scikit-learn",
            "Random Forest",
            "HTML5",
            "CSS3",
            "JavaScript",
            "Chart.js",
            "REST APIs"
        ],

        image: "assets/images/felix_estate_iq.png",

        imageAlt: "EstateIQ Nigerian property valuation and price prediction platform",

        demoUrl: "https://felix-estate-iq.onrender.com/",

        repoUrl: "https://github.com/felixogunz/felix_estate_iq",

        status: "Deployed",

        accent: "gold"
    },


    // 04. FELIX BUSINESS MANAGER

    {
        id: "felix-business-manager",

        title: "Felix Business Manager",

        category: "software",
        categoryLabel: "SOFTWARE ENGINEERING / BUSINESS TECHNOLOGY",

        featured: true,
        year: "2026",

        description:
            "A full-stack business and client relationship management application designed to help professionals organise client records, manage projects, track interactions and monitor business activities through an integrated dashboard. Built with Python, FastAPI and relational database technologies.",

        highlights: [
            "Designed and developed a structured client, project and interaction management system.",
            "Engineered backend services using Python, FastAPI and SQLAlchemy.",
            "Implemented JWT authentication, password hashing and ownership-based access controls.",
            "Developed REST API endpoints for authentication, client management, projects and interaction records.",
            "Implemented database session management and structured relational data models.",
            "Integrated email-based password recovery and tested Gmail SMTP delivery.",
            "Organised the application into reusable models, schemas, services, routes, templates and frontend assets.",
            "Designed the application architecture to support maintainability and future business workflow enhancements."
        ],

        technologies: [
            "Python",
            "FastAPI",
            "SQLAlchemy",
            "PostgreSQL",
            "JWT Authentication",
            "HTML5",
            "CSS3",
            "JavaScript",
            "Jinja2",
            "REST APIs"
        ],

        image: "assets/images/felix_business_manager.png",

        imageAlt: "Felix Business Manager client and project management application",

        demoUrl: "https://felix-business-manager.onrender.com/",

        repoUrl: "https://github.com/felixogunz/felix-business-manager",

        status: "Deployed",

        accent: "blue"
    }

];
