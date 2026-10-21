const projects = [
  {
    number: "01",
    type: "PRODUCT DESIGN · 2025",
    title: "A calmer way to plan",
    description:
      "A thoughtfully simple space for turning a long list of to-dos into a day that feels doable.",
    className: "project-lilac",
    mark: "daylight",
    markLabel: "A little more room to think",
  },
  {
    number: "02",
    type: "WEB DEVELOPMENT · 2024",
    title: "The good things index",
    description:
      "A tiny directory of independent places, makers, and ideas worth finding your way to.",
    className: "project-yellow",
    mark: "good things",
    markLabel: "Find your next favorite",
  },
  {
    number: "03",
    type: "IDENTITY · 2024",
    title: "Made to be kept",
    description:
      "A warm, flexible identity for a neighborhood shop that believes the little details matter.",
    className: "project-green",
    mark: "M / K",
    markLabel: "Objects for everyday rituals",
  },
];

const experience = [
  {
    dates: "2023 — NOW",
    role: "Independent designer & developer",
    detail: "Working with good people on useful things.",
  },
  {
    dates: "2020 — 2023",
    role: "Product designer · Studio North",
    detail: "Making digital products feel a little more human.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Your Name, home">
          <span className="wordmark-mark">YN</span>
          <span>Your Name</span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a className="nav-contact" href="#contact">
            Let&apos;s talk <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> OPEN TO WHAT&apos;S NEXT</p>
          <h1>
            Making the
            <br />
            internet feel
            <br />
            <span className="serif-accent">a little more</span> human.
          </h1>
          <p className="hero-intro">
            Hey, I&apos;m <strong>Your Name</strong> — a designer and developer
            who likes turning thoughtful ideas into useful, lovely things.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">
              Explore my work <span aria-hidden="true">↘</span>
            </a>
            <a className="text-link" href="#about">
              A bit about me <span aria-hidden="true">↗</span>
            </a>
          </div>
          <p className="hero-location">
            <span aria-hidden="true">✳</span> Currently somewhere with good coffee
          </p>
        </div>

        <div className="hero-art" aria-label="A preview of a project in progress">
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <div className="art-sun" />
          <div className="art-card">
            <div className="art-card-top">
              <span className="art-card-logo">d.</span>
              <span className="art-card-menu">•••</span>
            </div>
            <div className="art-card-lines">
              <span />
              <span />
              <span />
            </div>
            <div className="art-card-bottom">
              <span>YOUR NEXT GOOD IDEA</span>
              <span aria-hidden="true">↗</span>
            </div>
          </div>
          <div className="floating-note note-one">
            <span className="note-icon">✳</span>
            <span>Made with care</span>
          </div>
          <div className="floating-note note-two">
            <span className="note-stars">✦ ✦ ✦</span>
            <span>Always curious</span>
          </div>
          <span className="art-caption">A work in progress, always.</span>
        </div>
        <a className="scroll-cue" href="#work" aria-label="Scroll to selected work">
          <span>SCROLL A LITTLE</span>
          <span aria-hidden="true">↓</span>
        </a>
      </section>

      <section className="work-section section-wrap" id="work">
        <div className="section-heading">
          <div>
            <p className="eyebrow">A FEW RECENT FAVORITES</p>
            <h2>Selected work<span className="heading-period">.</span></h2>
          </div>
          <p className="section-aside">
            A little bit of this, a little bit of that.
            <br />
            Always made with intention.
          </p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className={`project-art ${project.className}`}>
                <div className="project-window">
                  <div className="window-chrome">
                    <span />
                    <span />
                    <span />
                    <span className="window-url">somewhere.good</span>
                  </div>
                  <div className="window-content">
                    <span className="window-overline">{project.markLabel}</span>
                    <span className="window-mark">{project.mark}</span>
                    <span className="window-arrow" aria-hidden="true">↗</span>
                  </div>
                </div>
                <span className="project-index">{project.number}</span>
              </div>
              <div className="project-meta">
                <p className="eyebrow">{project.type}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="work-note">
          <span aria-hidden="true">✳</span> More good things are in the works.
        </p>
      </section>

      <section className="about-section" id="about">
        <div className="section-wrap about-grid">
          <div className="about-heading">
            <p className="eyebrow">A LITTLE ABOUT ME</p>
            <h2>
              Curious by
              <br />
              nature<span className="heading-period">.</span>
            </h2>
            <div className="about-doodle" aria-hidden="true">✳</div>
          </div>
          <div className="about-copy">
            <p className="about-lede">
              I believe the best work happens when a good question meets a
              generous amount of curiosity.
            </p>
            <p>
              I move between design and code, helping ideas find their shape
              and become things people genuinely enjoy using. I care about
              clear thinking, small details, and making the complicated feel
              simple.
            </p>
            <p>
              Away from a screen, you&apos;ll probably find me wandering a
              bookshop, trying a new recipe, or taking the scenic route home.
            </p>
            <div className="experience">
              <p className="eyebrow">A LITTLE OF THE JOURNEY</p>
              {experience.map((item) => (
                <div className="experience-item" key={item.dates}>
                  <span className="experience-dates">{item.dates}</span>
                  <div>
                    <h3>{item.role}</h3>
                    <p>{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section section-wrap" id="contact">
        <div className="contact-card">
          <div className="contact-spark" aria-hidden="true">✳</div>
          <p className="eyebrow">HAVE A GOOD ONE IN MIND?</p>
          <h2>
            Let&apos;s make
            <br />
            <span className="serif-accent">something matter.</span>
          </h2>
          <p className="contact-copy">
            I&apos;m always up for a thoughtful conversation and a new
            challenge. Tell me what you&apos;re dreaming up.
          </p>
          <a className="button button-light" href="mailto:hello@example.com">
            Say hello <span aria-hidden="true">↗</span>
          </a>
          <span className="contact-stamp" aria-hidden="true">GOOD<br />THINGS<br />AHEAD</span>
        </div>
      </section>

      <footer className="site-footer section-wrap">
        <a className="wordmark" href="#home">
          <span className="wordmark-mark">YN</span>
          <span>Your Name</span>
        </a>
        <p>Made slowly, with care. © {new Date().getFullYear()}</p>
        <a className="back-to-top" href="#home">
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </footer>
    </main>
  );
}
