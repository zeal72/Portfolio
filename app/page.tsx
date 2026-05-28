"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";

const projects = [
  {
    id: 1,
    name: "Abagold",
    visualClass: "pv-abagold",
    desc: " AbaGold — A fintech savings & referral platform built on the Ajo (African savings) model.",
    tags: ["React", "Tailwind CSS", "Typescript"],
    liveUrl: "Abagold.com.ng",
    codeUrl: "https://github.com/rad5-tech-hub/ajoplus",
  },
  {
    id: 2,
    name: "ScanRevuAI",
    visualClass: "pv-shopfront",
    desc: "An AI-powered review management platform built for hospitality managers. Collect guest reviews, surface insights with AI analysis, and get clear recommended actions — all in one dashboard.",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    liveUrl: "ScanrevuAI.com",
    codeUrl: "https://github.com/zeal72/RevuAi",
  },
  {
    id: 3,
    name: "MeetCon",
    visualClass: "pv-weather",
    desc: "A browser-based video conferencing tool that lets users create and join meetings instantly — no downloads, no installs required.",
    tags: ["Next.Js", "Tailwind CSS", "JavaScript"],
    liveUrl: "meet-space-eight.vercel.app",
    codeUrl: "https://github.com/zeal72/MeetCon",
  },
];

export default function Home() {
  const navbarRef = useRef<HTMLElement>(null);
  const navToggleRef = useRef<HTMLButtonElement>(null);
  const navLinksRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const navbar = navbarRef.current;
    if (!navbar) return;

    const updateNav = () => {
      navbar.classList.toggle("scrolled", window.scrollY > 36);
    };
    window.addEventListener("scroll", updateNav, { passive: true });
    updateNav();

    return () => window.removeEventListener("scroll", updateNav);
  }, []);

  useEffect(() => {
    const toggle = navToggleRef.current;
    const links = navLinksRef.current;
    if (!toggle || !links) return;

    const handleToggle = () => {
      const isOpen = links.classList.toggle("open");
      toggle.classList.toggle("open", isOpen);
      toggle.setAttribute("aria-expanded", String(isOpen));
    };

    toggle.addEventListener("click", handleToggle);

    const handleLinkClick = () => {
      links.classList.remove("open");
      toggle.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    };

    links.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", handleLinkClick);
    });

    return () => {
      toggle.removeEventListener("click", handleToggle);
      links.querySelectorAll("a").forEach((link) => {
        link.removeEventListener("click", handleLinkClick);
      });
    };
  }, []);

  useEffect(() => {
    const revealEls = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -56px 0px" }
    );

    revealEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const emailAnchor = document.querySelector(".contact-email") as HTMLAnchorElement | null;
    if (emailAnchor && navigator.clipboard) {
      const handleClick = () => {
        navigator.clipboard
          .writeText("abrahamzeal72@gmail.com")
          .catch(() => { });
      };
      emailAnchor.addEventListener("click", handleClick);
      return () => emailAnchor.removeEventListener("click", handleClick);
    }
  }, []);

  return (
    <>
      <nav id="navbar" aria-label="Main navigation" ref={navbarRef}>
        <div className="nav-inner">
          <a href="#hero" className="nav-logo" aria-label="Abraham Zeal — Back to top">
            <img src="/primary_mark.png" alt="Abraham Zeal" className="nav-logo-img" />
          </a>

          <button
            className="nav-toggle"
            id="navToggle"
            ref={navToggleRef}
            aria-label="Toggle navigation menu"
            aria-expanded="false"
            aria-controls="navLinks"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>

          <ul className="nav-links" id="navLinks" ref={navLinksRef} role="list">
            <li><a href="#work">Work</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <section id="hero" aria-label="Introduction — Abraham Zeal, Frontend Developer">
        <div className="hero-orbs" aria-hidden="true">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="orb orb-3"></div>
        </div>
        <div className="hero-grid" aria-hidden="true"></div>

        <div className="hero-layout">
          <div className="hero-content">
            <div className="hero-eyebrow" aria-label="Status: Available for freelance, based in Nigeria">
              <span className="dot" aria-hidden="true"></span>
              Available for Freelance &nbsp;·&nbsp; Nigeria
            </div>

            <h1 className="hero-headline">
              Built to<br />
              <em>Perform.</em><br />
              Designed<br />
              to&nbsp;Last.
            </h1>

            <p className="hero-sub">
              Frontend engineering for teams that refuse to settle —
              from Lagos to the world stage, one pixel-perfect interface at a time.
            </p>

            <div className="hero-ctas">
              <a href="#work" className="btn btn-primary" aria-label="View my projects">
                See My Work
                <i data-lucide="arrow-down" aria-hidden="true"></i>
              </a>
              <a href="#contact" className="btn btn-outline" aria-label="Jump to contact section">
                Get In Touch
              </a>
            </div>
          </div>

          <figure className="hero-figure">
            <div className="hero-figure-frame">
              <img src="/Me.jpg" alt="Abraham Zeal" className="hero-figure-img" />
              <div className="hero-figure-line" aria-hidden="true"></div>
              <div className="hero-figure-dot hero-figure-dot--tl" aria-hidden="true"></div>
              <div className="hero-figure-dot hero-figure-dot--bl" aria-hidden="true"></div>
            </div>
            <div className="hero-figure-bg" aria-hidden="true"></div>
          </figure>
        </div>

        <div className="scroll-cue" aria-hidden="true">
          <span className="scroll-cue-label">Scroll</span>
          <div className="scroll-cue-line"></div>
        </div>
      </section>

      <section id="work" aria-label="Selected projects">
        <div className="section-inner">
          <span className="section-label reveal">Selected Work</span>
          <h2 className="section-heading reveal delay-1">
            Things Ive<br />shipped.
          </h2>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article
                key={project.id}
                className={`project-card reveal delay-${Math.min(index + 1, 4)}`}
                aria-label={`Project: ${project.name}`}
              >
                <div className={`project-visual ${project.visualClass}`} aria-hidden="true">
                  <div className="pv-grid"></div>
                  <div className="pv-glow"></div>
                  <span className="pv-title">{project.name}</span>
                  <span className="pv-num">
                    {String(project.id).padStart(2, "0")} / 03
                  </span>
                </div>
                <div className="project-body">
                  <h3 className="project-name">{project.name}</h3>
                  <p className="project-desc">{project.desc}</p>
                  <ul className="project-tags" aria-label="Technologies used">
                    {project.tags.map((tag) => (
                      <li key={tag} className="tag">{tag}</li>
                    ))}
                  </ul>
                  <div className="project-actions">
                    <a
                      href={project.liveUrl}
                      className="btn btn-primary btn-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.name} live demo`}
                    >
                      Live Demo
                      <i data-lucide="external-link" aria-hidden="true"></i>
                    </a>
                    <a
                      href={project.codeUrl}
                      className="btn btn-outline btn-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.name} source code on GitHub`}
                    >
                      View Code
                      <i data-lucide="code-2" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" aria-label="About Abraham Zeal">
        <div className="section-inner">
          <span className="section-label reveal">About</span>
          <h2 className="section-heading reveal delay-1">
            The person<br />behind the code.
          </h2>

          <div className="about-layout">
            <div className="about-text reveal delay-1">
              <p>
                I&apos;m <strong>Abraham Zeal</strong> — a frontend developer based in Nigeria,
                building interfaces that hold up under real-world conditions: slow
                networks, diverse devices, high expectations.
              </p>
              <p>
                I care about the <strong>craft</strong> — precision in layout,
                intentionality in motion, and code that other developers are glad
                to inherit. I work with startups and product teams who want their
                frontend to be a <strong>competitive advantage</strong>, not an afterthought.
              </p>
              <p>
                Currently available for <strong>freelance</strong> and
                remote contract work.
              </p>
            </div>

            <div className="skills reveal delay-2">
              <div className="skill-group">
                <p className="skill-group-name">Languages</p>
                <ul className="skill-tags" role="list" aria-label="Programming languages">
                  <li className="skill-tag">HTML</li>
                  <li className="skill-tag">CSS</li>
                  <li className="skill-tag">JavaScript</li>
                  <li className="skill-tag">TypeScript</li>
                </ul>
              </div>

              <div className="skill-group">
                <p className="skill-group-name">Frameworks &amp; Libraries</p>
                <ul className="skill-tags" role="list" aria-label="Frameworks and libraries">
                  <li className="skill-tag">React</li>
                  <li className="skill-tag">Next.Js</li>
                  <li className="skill-tag">Tailwind CSS</li>
                </ul>
              </div>

              <div className="skill-group">
                <p className="skill-group-name">Tools &amp; Platforms</p>
                <ul className="skill-tags" role="list" aria-label="Tools and platforms">
                  <li className="skill-tag">Git</li>
                  <li className="skill-tag">Figma</li>
                  <li className="skill-tag">Vercel</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" aria-label="Contact Abraham Zeal">
        <div className="section-inner">
          <span className="section-label reveal">Get In Touch</span>

          <h2 className="contact-headline reveal delay-1">
            Ready when<br />you <em>are.</em>
          </h2>

          <p className="contact-body reveal delay-2">
            Have a project in mind? Let&apos;s talk. My inbox is always open to the right opportunity.
          </p>

          <a
            href="mailto:abrahamzeal72@gmail.com"
            className="contact-email reveal delay-2"
            aria-label="Send email to Abraham Zeal"
          >
            abrahamzeal72@gmail.com
          </a>

          <div className="contact-socials reveal delay-3">
            <a
              href="https://linkedin.com/in/abraham-zeal-9bab2b2b7"
              className="social-btn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View LinkedIn profile (opens in new tab)"
            >
              <i data-lucide="briefcase" aria-hidden="true"></i>
              LinkedIn
            </a>
            <a
              href="https://github.com/zeal72"
              className="social-btn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View GitHub profile (opens in new tab)"
            >
              <i data-lucide="code-2" aria-hidden="true"></i>
              GitHub
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-inner">
          <img src="/lockup-.png" alt="Abraham Zeal" className="footer-lockup" />
          <span className="footer-right">Frontend Developer &nbsp;·&nbsp; Nigeria</span>
        </div>
      </footer>
      <Script
        src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"
        strategy="afterInteractive"
        onLoad={() => lucide?.createIcons()}
      />
    </>
  );
}
