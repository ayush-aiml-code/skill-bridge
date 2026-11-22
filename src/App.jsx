
import './App.css'

function App() {
  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <a href="#" className="logo">
          <span className="logo-icon">S</span>
          SkillSetu
        </a>

        <div className="nav-links">
          <a href="#agents">AI Agents</a>
          <a href="#skills">Skills Discovery</a>
          <a href="#opportunities">Opportunities</a>
        </div>

        <button className="nav-button">Get Started ↗</button>
      </nav>

      {/* Hero Section */}
      <main>
        <section className="hero">
          <div className="hero-content">
            <span className="eyebrow">
              ✦ AI-POWERED CAREER TRANSITION
            </span>

            <h1>
              Skills Did Not Leave.
              <br />
              <span>Only the Jobs Changed.</span>
            </h1>

            <p>
              Discover your hidden skills, learn new capabilities,
              and connect with better career opportunities.
            </p>

            <div className="hero-buttons">
              <a href="#skills" className="primary-button">
                Discover My Skills →
              </a>
              <a href="#opportunities" className="secondary-button">
                Explore Opportunities
              </a>
            </div>

            <div className="trust-text">
              Built for workers in India:
              <span> Roles are changing</span>
              <span> Returning to work</span>
              <span> Between jobs</span>
            </div>
          </div>

          {/* Skill Mapping Visual */}
          <div className="mapping-card">
            <div className="card-top">
              <span>● LIVE SKILL MAPPING</span>
              <span className="live-dot">LIVE</span>
            </div>

            <div className="ai-circle">
              <div className="ai-inner">
                <span>✦</span>
                <strong>AI</strong>
                <small>ENGINE</small>
              </div>
            </div>

            <div className="role-list">
              <span>Warehouse Lead</span>
              <span>Textile Operator</span>
              <span>Retail Associate</span>
              <span>Field Technician</span>
            </div>

            <div className="matched-roles">
              <h3>Matched roles</h3>
              <div className="match">
                <span>Logistics Analyst</span>
                <strong>94%</strong>
              </div>
              <div className="match">
                <span>Supply Chain Ops</span>
                <strong>88%</strong>
              </div>
              <div className="match">
                <span>Inventory Data Lead</span>
                <strong>82%</strong>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="stats">
          <div>
            <h2>0%</h2>
            <p>Transferability rate</p>
          </div>
          <div>
            <h2>0k+</h2>
            <p>Skills mapped</p>
          </div>
          <div>
            <h2>0.0/5</h2>
            <p>Matching accuracy</p>
          </div>
        </section>

<section className="agents-section" id="agents">
  <div className="agents-heading">
    <span className="eyebrow">AGENTIC CAREER ENGINE</span>
    <h2>Six AI agents working your transition</h2>
    <p>
      Each agent owns one part of the journey — from
      understanding your experience to matching opportunities.
    </p>
  </div>

  <div className="agents-grid">

    <div className="agent-card">
      <div className="agent-icon">✦</div>
      <span className="agent-number">01 / DISCOVER</span>
      <h3>Skills Discovery Agent</h3>
      <p>
        Identifies your existing skills, experience
        and transferable capabilities.
      </p>
      <a href="#skills">Explore Agent →</a>
    </div>

    <div className="agent-card">
      <div className="agent-icon">⌕</div>
      <span className="agent-number">02 / ANALYZE</span>
      <h3>Market Intelligence Agent</h3>
      <p>
        Analyzes job market trends and discovers
        emerging career opportunities.
      </p>
      <a href="#opportunities">Explore Agent →</a>
    </div>

    <div className="agent-card">
      <div className="agent-icon">◎</div>
      <span className="agent-number">03 / LEARN</span>
      <h3>Learning Pathway Agent</h3>
      <p>
        Creates personalized learning pathways
        to help you develop new skills.
      </p>
      <a href="#skills">Explore Agent →</a>
    </div>

    <div className="agent-card">
      <div className="agent-icon">⇄</div>
      <span className="agent-number">04 / MATCH</span>
      <h3>Inclusive Matching Agent</h3>
      <p>
        Connects your skills and experience
        with suitable career opportunities.
      </p>
      <a href="#opportunities">Explore Agent →</a>
    </div>

    <div className="agent-card">
      <div className="agent-icon">↗</div>
      <span className="agent-number">05 / PREPARE</span>
      <h3>Employer Readiness Agent</h3>
      <p>
        Helps candidates prepare their profiles
        and become ready for employers.
      </p>
      <a href="#opportunities">Explore Agent →</a>
    </div>

    <div className="agent-card">
      <div className="agent-icon">◈</div>
      <span className="agent-number">06 / REVIEW</span>
      <h3>Bias Audit Agent</h3>
      <p>
        Reviews matching outcomes to support
        fairness and inclusive recommendations.
      </p>
      <a href="#agents">Explore Agent →</a>
    </div>

  </div>
</section>


      </main>
    </div>
  )
}

export default App
