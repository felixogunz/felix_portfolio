# Felix — AI & Software Engineering Portfolio

A professional portfolio showcasing projects in artificial intelligence,
machine learning, and software development.

## Overview

This website presents selected projects, technical capabilities,
engineering decisions, and professional contact information.

It is built with HTML5, CSS3, and vanilla JavaScript.

## Features

- Responsive layout for desktop, tablet, and mobile
- Project cards generated from a central JavaScript catalogue
- Category-based project filtering
- Accessible navigation and keyboard interactions
- Reduced-motion support
- Dedicated project descriptions and technology tags
- Optional live-demo and source-code links
- Lightweight static-site deployment

## Technology Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Git and GitHub

## Project Structure

felix-portfolio/
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── images/
│   └── js/
│       ├── main.js
│       └── projects.js
├── docs/
├── index.html
├── README.md
└── .gitignore

## Run Locally

Requirements: Python 3, or another local static HTTP server.

1. Clone the repository.
2. Open the project directory.
3. Start a local HTTP server.

python3 -m http.server 8000

4. Open http://localhost:8000 in your browser.

## Adding a Project

Open `assets/js/projects.js` and add a new project object to the
`projects` array.

Provide a unique project ID, title, category, description, technical
highlights, technologies, and verified URLs where available.

Use `ai` for AI and machine-learning projects, or `software` for
software-engineering projects.

Use authentic screenshots and describe the implemented functionality
accurately.

## Testing

Verify that:

- All project cards render correctly.
- Category filters work.
- Navigation works on desktop and mobile.
- All external links point to the intended destinations.
- The website has no browser-console errors.
- Layout, accessibility, and performance are checked before release.

## Deployment

The portfolio can be deployed as a static website through Vercel
or Cloudflare Pages.

Connect the repository to the chosen hosting provider and configure
the production deployment settings.

## Contact

Email: felixogunbowale@gmail.com

GitHub: [https://github.com/felixogunz]

LinkedIn: [https://www.linkedin.com/in/felix-ogunbowale/]

## Licence

Choose and add an appropriate licence before distributing this
project as open-source software.
