
"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const projectGrid = document.querySelector("#project-grid");
    const projectFilters = document.querySelector("#project-filters");
    const menuToggle = document.querySelector("#menu-toggle");
    const navigation = document.querySelector("#primary-navigation");
    const currentYear = document.querySelector("#current-year");

    /*
     * Update the footer automatically.
     */
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    /*
     * Safely create an HTML element and assign its text.
     * Using textContent avoids interpreting project descriptions as HTML.
     */
    function createElement(tag, className, text = "") {
        const element = document.createElement(tag);

        if (className) {
            element.className = className;
        }

        element.textContent = text;

        return element;
    }

    /*
     * Only allow the expected project categories.
     */
    function isValidProject(project) {
        return Boolean(
            project &&
            typeof project.id === "string" &&
            typeof project.title === "string" &&
            typeof project.description === "string" &&
            ["ai", "software"].includes(project.category) &&
            Array.isArray(project.technologies) &&
            Array.isArray(project.highlights)
        );
    }

    /*
     * Create safe external links.
     * Blank URLs are omitted rather than rendered as broken links.
     */
    function createExternalLink(url, label, className) {
        if (typeof url !== "string" || !url.trim()) {
            return null;
        }

        let parsedUrl;

        try {
            parsedUrl = new URL(url);
        } catch {
            return null;
        }

        if (
            parsedUrl.protocol !== "https:" &&
            parsedUrl.protocol !== "http:"
        ) {
            return null;
        }

        const link = createElement("a", className, label);

        link.href = parsedUrl.href;
        link.target = "_blank";
        link.rel = "noopener noreferrer";

        return link;
    }

    /*
     * Render a single project card.
     */
    function createProjectCard(project) {
        const article = createElement("article", "project-card reveal");

        article.dataset.category = project.category;
        article.dataset.projectId = project.id;

        if (project.accent) {
            article.dataset.accent = project.accent;
        }

        const visual = createElement("div", "project-visual");

        const visualLabel = createElement(
            "span",
            "project-visual-label",
            project.categoryLabel || "SELECTED PROJECT"
        );

        visual.appendChild(visualLabel);

        /*
         * Use a real screenshot when one is available.
         */
        if (
            typeof project.image === "string" &&
            project.image.trim()
        ) {
            const image = document.createElement("img");

            image.src = project.image;
            image.alt = project.imageAlt || project.title;
            image.loading = "lazy";
            image.decoding = "async";

            image.addEventListener("error", () => {
                image.remove();
                visual.classList.add("project-visual-fallback");
            }, { once: true });

            visual.appendChild(image);
        } else {
            const placeholder = createElement(
                "div",
                "project-placeholder",
                project.category === "ai" ? "AI / ML" : "SOFTWARE"
            );

            const symbol = createElement(
                "span",
                "project-placeholder-symbol",
                project.category === "ai" ? "✳" : "⌘"
            );

            placeholder.prepend(symbol);
            visual.appendChild(placeholder);
        }

        const body = createElement("div", "project-body");

        const meta = createElement("div", "project-meta");

        meta.appendChild(
            createElement(
                "span",
                "project-category",
                project.categoryLabel || "PROJECT"
            )
        );

        meta.appendChild(
            createElement(
                "span",
                "project-year",
                project.year || ""
            )
        );

        body.appendChild(meta);

        body.appendChild(
            createElement("h3", "project-title", project.title)
        );

        body.appendChild(
            createElement(
                "p",
                "project-description",
                project.description
            )
        );

        /*
         * Display the project's main technical highlights.
         */
        if (project.highlights.length > 0) {
            const highlights = createElement(
                "ul",
                "project-highlights"
            );

            project.highlights.forEach((highlight) => {
                if (typeof highlight === "string") {
                    highlights.appendChild(
                        createElement("li", "", highlight)
                    );
                }
            });

            body.appendChild(highlights);
        }

        /*
         * Display technology tags.
         */
        const technologies = createElement(
            "div",
            "project-technologies"
        );

        project.technologies.forEach((technology) => {
            if (typeof technology === "string") {
                technologies.appendChild(
                    createElement(
                        "span",
                        "technology-tag",
                        technology
                    )
                );
            }
        });

        body.appendChild(technologies);

        /*
         * Add a repository or demo link only when a valid URL exists.
         */
        const actions = createElement("div", "project-actions");

        const demoLink = createExternalLink(
            project.demoUrl,
            "Live demo ↗",
            "project-link project-link-primary"
        );

        const repoLink = createExternalLink(
            project.repoUrl,
            "Source code ↗",
            "project-link project-link-secondary"
        );

        if (demoLink) {
            actions.appendChild(demoLink);
        }

        if (repoLink) {
            actions.appendChild(repoLink);
        }

        if (actions.children.length > 0) {
            body.appendChild(actions);
        } else {
            body.appendChild(
                createElement(
                    "p",
                    "project-status",
                    project.status || "Project details coming soon"
                )
            );
        }

        article.appendChild(visual);
        article.appendChild(body);

        return article;
    }

    /*
     * Render projects for the selected category.
     */
    function renderProjects(category = "all") {
        if (!projectGrid) {
            return;
        }

        projectGrid.replaceChildren();

        const validProjects = Array.isArray(projects)
            ? projects.filter(isValidProject)
            : [];

        const visibleProjects = validProjects.filter((project) => {
            return category === "all" ||
                project.category === category;
        });

        if (visibleProjects.length === 0) {
            projectGrid.appendChild(
                createElement(
                    "p",
                    "empty-projects",
                    "No projects are available in this category yet."
                )
            );
        } else {
            visibleProjects.forEach((project) => {
                projectGrid.appendChild(createProjectCard(project));
            });
        }

        projectGrid.setAttribute("aria-busy", "false");

        observeRevealElements(projectGrid);
    }

    /*
     * Connect the category filter buttons to the project catalogue.
     */
    if (projectFilters) {
        projectFilters.addEventListener("click", (event) => {
            const button = event.target.closest("[data-filter]");

            if (!button || !projectFilters.contains(button)) {
                return;
            }

            const category = button.dataset.filter;

            if (!["all", "ai", "software"].includes(category)) {
                return;
            }

            projectFilters.querySelectorAll("[data-filter]").forEach(
                (filterButton) => {
                    const isActive = filterButton === button;

                    filterButton.classList.toggle("active", isActive);
                    filterButton.setAttribute(
                        "aria-pressed",
                        String(isActive)
                    );
                }
            );

            renderProjects(category);
        });
    }

    /*
     * Mobile navigation.
     */
    function closeNavigation() {
        if (!menuToggle || !navigation) {
            return;
        }

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

        navigation.classList.remove("is-open");
        document.body.classList.remove("menu-open");
    }

    if (menuToggle && navigation) {
        menuToggle.addEventListener("click", () => {
            const isExpanded =
                menuToggle.getAttribute("aria-expanded") === "true";

            menuToggle.setAttribute(
                "aria-expanded",
                String(!isExpanded)
            );

            menuToggle.setAttribute(
                "aria-label",
                isExpanded
                    ? "Open navigation menu"
                    : "Close navigation menu"
            );

            navigation.classList.toggle("is-open", !isExpanded);
            document.body.classList.toggle("menu-open", !isExpanded);
        });

        navigation.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", closeNavigation);
        });

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                closeNavigation();
            }
        });

        window.addEventListener("resize", () => {
            if (window.innerWidth > 760) {
                closeNavigation();
            }
        });
    }

    /*
     * Reveal elements as they enter the viewport.
     * Respect the user's reduced-motion preference.
     */
    function observeRevealElements(root = document) {
        const elements = root.querySelectorAll(".reveal");

        if (
            !("IntersectionObserver" in window) ||
            window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ) {
            elements.forEach((element) => {
                element.classList.add("is-visible");
            });

            return;
        }

        elements.forEach((element) => {
            if (element.dataset.revealObserved === "true") {
                return;
            }

            element.dataset.revealObserved = "true";
            revealObserver.observe(element);
        });
    }

    const revealObserver = "IntersectionObserver" in window
        ? new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.12
        })
        : null;

    /*
     * Initialise the page.
     */
    renderProjects();
    observeRevealElements();
});
