import React, { useState, useEffect } from "react";
import {
  Users,
  Target,
  BookOpen,
  Award,
  Brain,
  Globe,
  Shield,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
  Sparkles,
  Zap,
  Heart,
} from "lucide-react";

// CHANGE 1: Import the logo image
// Ensure you have a file named 'logo.png' in the same folder, or update this path
import logoPng from "./logo.png";

export default function ResearchWebsite() {
  const [activeSection, setActiveSection] = useState("about");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const teamMembers = [
    {
      name: "Dr. Alvin Joseph",
      role: "Senior Resident MD Psychiatry",
      location: "Bangalore, India",
      affiliation: "St. John's Medical College Hospital",
      details:
        "PRIIIA Research fellow - Psychiatry Research Infrastructure In India. Research Area: Addiction and mental health.",
      icon: "🩺",
    },
    {
      name: "Agnelo Vijayan",
      role: "Project Lead",
      location: "Bangalore | Dallas | Abu Dhabi | Kuala Lumpur",
      details:
        "Board-level executive with over 25 years of multi-sector experience in healthcare innovation, digital ecosystems, and global partnerships. Core Expertise: Healthcare Strategy & Innovation, Digital Health Platforms, Strategic Governance, Global Operations Leadership.",
      icon: "🌐",
    },
    {
      name: "Suresh Joseph",
      role: "Consultant - Market Research Specialist",
      location: "Dallas, TX",
      details:
        "Market Intelligence & Analytics Specialist with 30+ years experience at Fortune 500 companies. Expertise in market research, opportunity assessment, and business planning.",
      icon: "📊",
    },
    {
      name: "Dr. Mark Seglin, PhD",
      role: "Lead Psychologist",
      location: "",
      details:
        "Dr.Seglin is a licensed psychologist with a strong focus on mental health care for children and adolescents. His clinical work emphasizes careful assessment, developmentally informed treatment, and evidence-based interventions tailored to the needs of young people and their families. He brings a research-focused approach to practice, integrating psychological theory and clinical data to guide treatment planning and outcomes.",
      icon: "🩺",
    },
    {
      name: "Perpetua John Selvadoray",
      role: "Research Head",
      location: "Chennai, India",
      details:
        "Head of Administration at ICSE School. Certified in ICSE board Mental Health wellness for children and adolescents. 25 years of experience working with children and adolescents in the US and India.",
      icon: "🎓",
    },
    {
      name: "Denzil Haniel V.",
      role: "AI Specialist – Lead Technical Researcher",
      location: "India",
      details:
        "Cloud and AI specialist with expertise in business analytics, scalable cloud architectures, and AI-driven systems. Brings strong sales and marketing acumen, enabling the translation of technical solutions into market-ready offerings through data-backed strategy, growth insights, and customer-focused positioning.",
      icon: "☁️",
    },
    {
      name: "Nagesh P.M",
      role: "Technology Operations",
      location: "India",
      details:
        "20+ years of Technology Operations with Microsoft and Sabre. In-depth experience in deployment, maintenance and support of large-scale data and analytics of technology operations and projects.",
      icon: "💻",
    },
    {
      name: "K. Gowtham Jayasurya",
      role: "AI Specialist – Technical Researcher",
      location: "India",
      details:
        "AI & GenAI developer with hands-on experience in Python, data structures, and building intelligent applications using LLMs, RAG pipelines, and API-based AI systems. Strong analytics and business acumen enable data-driven insights, problem framing, and translation of AI research into scalable real-world deployments.",
      icon: "🧠",
    },
    {
      name: "Swarnaa R.",
      role: "AI Specialist – Technical Researcher",
      location: "India",
      details:
        "Full-stack developer with hands-on experience in building secure, scalable applications and applied AI workflows. Works on integrating AI models into real-world systems, supporting reliable data processing and responsible deployment. Contributes to translating research concepts into practical, maintainable solutions aligned with ethical and operational needs.",
      icon: "💡",
    },
    {
      name: "Shakshitha Shailendar",
      role: "Behavioural Psychologist",
      location: "Bangalore, India",
      details:
        "Shakshitha holds a Masters degree in Human Resource Development Management (HRDM) with a strong academic foundation in Psychology. Her work focuses on understanding human behaviour through research and the ethical application of behavioural science across organisational and social contexts. She previously worked as a Research Associate at the Indian Institute of Management Bangalore where her research centred on Gen Z behaviour, attitudes and decision-making. This experience strengthened her expertise in empirical research, behavioural analysis and translating academic insights into practical, scalable frameworks. Currently, Shakshitha is an HR Specialist at Swish, a fast-growing startup in Bangalore, where she has been involved in building people systems and HR practices from the ground up.",
      icon: "🩺",
    },
    {
      name: "Anamitra Acharya",
      role: "Management Services and Administration",
      location: "Bangalore, India",
      details:
        "30+ years of diverse experience across education, technology, security services, infrastructure management, and healthcare administration. Expertise in organizational leadership, project execution, and legal compliance.",
      icon: "⚙️",
    },
  ];

  const outcomes = [
    {
      text: "Multilingual Dataset: 15,000+ ethically collected expressions from adolescents across 28 Indian states",
      icon: Globe,
    },
    {
      text: "AI Safety Evaluation Rubric: 12-dimension tool assessing crisis detection and cultural fit",
      icon: Shield,
    },
    {
      text: "Failure Taxonomy: 50+ categorized failure modes across major LLMs",
      icon: AlertCircle,
    },
    {
      text: "Response Guidelines: 100+ annotated examples of safe vs. unsafe AI responses",
      icon: CheckCircle,
    },
    {
      text: "Performance Benchmark: Comparative results for 8+ LLMs across multilingual contexts",
      icon: TrendingUp,
    },
    {
      text: "Policy Brief: Guidance for schools, colleges, and education authorities",
      icon: BookOpen,
    },
    {
      text: "Youth Initiative Output: 4,000–10,000+ youth reflections from metros and colleges",
      icon: Users,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar with Logo */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* CHANGE 2: Replaced Brain Icon div with Image tag */}
            <img
              src={logoPng}
              alt="Mindful AI Logo"
              className="h-10 w-auto object-contain"
            />
            <span className="text-lg font-semibold text-gray-900">
              MINDFUL AI
            </span>
          </div>
          <div className="text-sm text-gray-500">Research Initiative</div>
        </div>
      </div>

      {/* Hero Header - Ultra minimal and premium */}
      <header className="relative bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Main heading */}
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6 tracking-tight max-w-4xl">
              Culturally Grounded AI Safety Research
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-gray-600 max-w-3xl mb-16 leading-relaxed">
              Developing evaluation frameworks for adolescent mental health
              interactions across India's multilingual landscape — building the
              first comprehensive dataset and safety rubric for code-mixed
              distress detection.
            </p>

            {/* Clean stats grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-12 border-t border-gray-200">
              <div className="group">
                <div className="text-4xl font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">
                  8+
                </div>
                <div className="text-sm text-gray-600 leading-snug uppercase tracking-wide">
                  LLMs Evaluated
                </div>
              </div>
              <div className="group">
                <div className="text-4xl font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">
                  12
                </div>
                <div className="text-sm text-gray-600 leading-snug uppercase tracking-wide">
                  Safety Dimensions
                </div>
              </div>
              <div className="group">
                <div className="text-4xl font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">
                  28
                </div>
                <div className="text-sm text-gray-600 leading-snug uppercase tracking-wide">
                  States Covered
                </div>
              </div>
              <div className="group">
                <div className="text-4xl font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">
                  15K+
                </div>
                <div className="text-sm text-gray-600 leading-snug uppercase tracking-wide">
                  Data Points
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation - Ultra minimal */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex space-x-8">
            {[
              { id: "about", label: "Overview" },
              { id: "research", label: "Research" },
              { id: "outcomes", label: "Outcomes" },
              { id: "team", label: "Team" },
            ].map((section) => {
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`relative py-5 px-2 text-sm font-medium transition-all ${
                    activeSection === section.id
                      ? "text-gray-900"
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  {section.label}
                  {activeSection === section.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500"></div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* About Section */}
        {activeSection === "about" && (
          <div className="space-y-16">
            {/* Main About - Premium card */}
            <section className="relative">
              <div className="bg-white rounded-lg p-10 border border-gray-200">
                <div className="flex items-start gap-6 mb-8">
                  <div className="p-3 bg-orange-50 rounded-lg">
                    <Target className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">
                      Research Overview
                    </h2>
                    <div className="w-16 h-0.5 bg-orange-500"></div>
                  </div>
                </div>
                <div className="space-y-5 text-gray-700 leading-relaxed">
                  <p>
                    This research addresses a critical gap in AI safety for
                    India's adolescent and young adult population (ages 12–22).
                    Our work focuses on understanding how stress, anxiety, and
                    emotional distress manifest across multilingual,
                    code-switched communication patterns, and evaluating how
                    current AI models interpret and respond to these
                    expressions.
                  </p>
                  <p>
                    With 77% of urban Indian youth communicating in
                    English-vernacular blends (Hinglish, Tanglish, etc.), and
                    over 80% of global mental health datasets being
                    English-dominant, there exists an urgent need for culturally
                    grounded, age-appropriate frameworks to ensure AI systems
                    can safely support this demographic.
                  </p>
                </div>
              </div>
            </section>

            {/* Why This Matters - Elegant Grid */}
            <section>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Key Challenges
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Globe,
                    title: "Language Gap",
                    desc: "Current AI systems are calibrated for clean English and stable emotional contexts, missing critical distress cues in code-mixed languages",
                  },
                  {
                    icon: Shield,
                    title: "Safety Risk",
                    desc: "Without adaptation, AI risks misreading intent or unintentionally normalizing harmful behaviors",
                  },
                  {
                    icon: Users,
                    title: "Representation",
                    desc: "Indian adolescents are almost absent from safety evaluation research globally",
                  },
                  {
                    icon: AlertCircle,
                    title: "Urgent Need",
                    desc: "Recent international cases of AI systems validating self-harm underscore urgent safety gaps",
                  },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="bg-white rounded-lg p-6 border border-gray-200 hover:border-orange-200 transition-all"
                    >
                      <div className="p-2 bg-orange-50 rounded-lg inline-flex mb-4">
                        <Icon className="w-5 h-5 text-orange-600" />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Impact Statement - Clean CTA */}
            <section className="bg-gray-50 rounded-lg p-10 border border-gray-200">
              <div className="flex items-start gap-6">
                <div className="p-3 bg-orange-50 rounded-lg">
                  <Zap className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Project Impact
                  </h3>
                  <p className="text-gray-700 leading-relaxed max-w-4xl">
                    This project will directly influence AI product safety,
                    youth mental-health policy, and institutional guidelines for
                    responsible deployment. By building a cross-lingual
                    evaluation standard, it strengthens global accountability
                    while centering India's unique linguistic and psychosocial
                    landscape.
                  </p>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Research Section */}
        {activeSection === "research" && (
          <div className="space-y-16">
            {/* Primary Question - Hero style */}
            <section className="relative">
              <div className="bg-white rounded-lg p-10 border border-gray-200">
                <div className="flex items-start gap-6">
                  <div className="p-3 bg-orange-50 rounded-lg">
                    <BookOpen className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h2 className="text-sm font-semibold text-orange-600 uppercase tracking-wide mb-3">
                      Primary Research Question
                    </h2>
                    <p className="text-xl text-gray-900 leading-relaxed font-medium">
                      How do stress, anxiety, and emotional distress manifest
                      across India's multilingual, code-switched communication
                      patterns, and how do current AI models interpret and
                      respond to these expressions among adolescents and young
                      adults?
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Secondary Questions - Clean list */}
            <section>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Secondary Research Questions
              </h3>
              <div className="space-y-4">
                {[
                  {
                    q: "What linguistic, cultural, and contextual variations shape distress communication among 12–22-year-olds, particularly in English–vernacular hybrids?",
                  },
                  {
                    q: "What safety risks and biases arise when LLMs interpret mental-health cues that appear through slang, casual chat, or behavior masking?",
                  },
                  {
                    q: "What does age-appropriate, culturally aligned, psychologically safe AI guidance look like for Indian youth?",
                  },
                  {
                    q: "How can AI systems improve early detection of academic burnout, anxiety, and hidden distress in low-resource linguistic settings?",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-lg p-6 border border-gray-200 hover:border-orange-200 transition-all border-l-4 border-l-orange-500"
                  >
                    <div className="flex gap-4">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-orange-50 text-orange-600 font-bold text-sm flex-shrink-0">
                        {idx + 1}
                      </span>
                      <p className="text-gray-700 leading-relaxed">{item.q}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Methodology Timeline - Modern timeline */}
            <section>
              <div className="flex items-center gap-4 mb-10">
                <Clock className="w-6 h-6 text-orange-600" />
                <h3 className="text-2xl font-bold text-gray-900">
                  Research Timeline & Methodology
                </h3>
              </div>
              <div className="relative">
                <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-200"></div>
                <div className="space-y-8">
                  {[
                    {
                      phase: "Phase 1",
                      months: "1–3",
                      title: "Dataset Development",
                      desc: "Acquire 5,000+ expressions using clinical notes, moderated social media extracts, and youth submissions. Triple-layer annotation with Cohen's kappa ≥0.75.",
                    },
                    {
                      phase: "Phase 2",
                      months: "4–6",
                      title: "Model Evaluation",
                      desc: "Evaluate 8+ LLMs (GPT-4, Claude, LLaMA, IndicLLMs) for detection accuracy, code-mixing comprehension, and age appropriateness.",
                    },
                    {
                      phase: "Phase 3",
                      months: "5–8",
                      title: "Rubric Development",
                      desc: "Expert panel develops and validates a 12-dimension rubric with ICC ≥0.70.",
                    },
                    {
                      phase: "Phase 4",
                      months: "6–10",
                      title: "Failure Taxonomy & Guidelines",
                      desc: "Conduct thematic analysis of model failures and develop 100+ safe phrasing templates.",
                    },
                    {
                      phase: "Phase 5",
                      months: "9–11",
                      title: "Analysis & Publishing",
                      desc: "Statistical modeling, fairness audits, and authorship of peer-reviewed publications.",
                    },
                    {
                      phase: "Phase 6",
                      months: "10–12",
                      title: "Dissemination",
                      desc: "Workshops with educational institutions and public release of datasets and tools on GitHub.",
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="relative pl-16">
                      <div className="absolute left-0 w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold">
                        {idx + 1}
                      </div>
                      <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-orange-200 transition-all">
                        <div className="flex items-center gap-3 mb-3">
                          <h4 className="text-lg font-bold text-gray-900">
                            {item.title}
                          </h4>
                          <span className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full font-medium">
                            Months {item.months}
                          </span>
                        </div>
                        <p className="text-gray-600 leading-relaxed text-sm">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Outcomes Section */}
        {activeSection === "outcomes" && (
          <div className="space-y-16">
            <section>
              <div className="flex items-center gap-4 mb-10">
                <div className="p-3 bg-orange-50 rounded-lg">
                  <Award className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Expected Outcomes
                  </h2>
                  <div className="w-16 h-0.5 bg-orange-500 mt-2"></div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {outcomes.map((outcome, idx) => {
                  const Icon = outcome.icon;
                  return (
                    <div
                      key={idx}
                      className="bg-white rounded-lg p-6 border border-gray-200 hover:border-orange-200 transition-all"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-orange-50 rounded-lg flex-shrink-0">
                          <Icon className="w-5 h-5 text-orange-600" />
                        </div>
                        <p className="text-gray-700 leading-relaxed text-sm">
                          {outcome.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Creative Commons - Premium badge */}
              <div className="bg-gray-50 rounded-lg p-8 mt-12 border border-gray-200">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-orange-50 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-bold text-lg">
                      Open Access Commitment
                    </p>
                    <p className="text-gray-600 mt-1">
                      All deliverables will be released publicly under Creative
                      Commons license.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Ethics Section */}
            <section>
              <div className="flex items-center gap-4 mb-10">
                <Shield className="w-6 h-6 text-orange-600" />
                <h3 className="text-2xl font-bold text-gray-900">
                  Ethical & Responsible Conduct
                </h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Informed Consent",
                    desc: "Age-appropriate adolescent assent plus parental consent for minors",
                    icon: "📋",
                  },
                  {
                    title: "Data Privacy",
                    desc: "Full de-identification, AES-256 encryption, compliance with India's DPDP Act and ICMR 2017 guidelines",
                    icon: "🔒",
                  },
                  {
                    title: "Risk Management",
                    desc: "Trained staff with real-time referral pathways to ChildLine, local counselors, and NIMHANS",
                    icon: "🛡️",
                  },
                  {
                    title: "Youth Participation",
                    desc: "Adolescents participate as co-designers and reviewers",
                    icon: "👥",
                  },
                  {
                    title: "Passive Evaluation",
                    desc: "No live AI deployment with adolescents during research",
                    icon: "⚠️",
                  },
                  {
                    title: "Limited Data Use",
                    desc: "Data used only for research and academic publication with full anonymization",
                    icon: "📊",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-lg p-6 border border-gray-200 hover:border-orange-200 transition-all"
                  >
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <h4 className="font-bold text-gray-900 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* Team Section */}
        {activeSection === "team" && (
          <div className="space-y-16">
            <section>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-orange-50 rounded-lg">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Our Team</h2>
                  <p className="text-gray-600 mt-1">
                    Interdisciplinary experts committed to AI safety and youth
                    mental health
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mt-12">
                {teamMembers.map((member, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-lg p-8 border border-gray-200 hover:border-orange-200 transition-all"
                  >
                    <div className="flex items-start gap-5">
                      <div className="text-4xl">{member.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900">
                          {member.name}
                        </h3>
                        <p className="text-orange-600 font-medium mt-1">
                          {member.role}
                        </p>
                        <p className="text-gray-500 text-sm mt-1 flex items-center gap-1">
                          <Globe className="w-3 h-3" />
                          {member.location}
                        </p>
                        {member.affiliation && (
                          <p className="text-gray-600 text-sm mt-2 italic">
                            {member.affiliation}
                          </p>
                        )}
                        <p className="text-gray-700 text-sm mt-3 leading-relaxed">
                          {member.details}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Collaboration Model */}
            <section className="bg-gray-50 rounded-lg p-10 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-orange-600" />
                Interdisciplinary Collaboration Model
              </h3>
              <div className="w-16 h-0.5 bg-orange-500 mb-10"></div>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "AI Researchers",
                    desc: "NLP specialists and fairness experts conduct multilingual and code-mixed AI evaluations.",
                    icon: Brain,
                  },
                  {
                    title: "Mental Health Professionals",
                    desc: "Psychiatrists and psychologists annotate datasets, co-create rubrics, and supervise crisis protocols.",
                    icon: Shield,
                  },
                  {
                    title: "Lived Experience Representatives",
                    desc: "Youth advisors (18–22 through Mindful AI Youth Initiative) validate developmental appropriateness and co-design examples.",
                    icon: Heart,
                  },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="bg-white rounded-lg p-6 border border-gray-200"
                    >
                      <div className="p-3 bg-orange-50 rounded-lg inline-flex mb-4">
                        <Icon className="w-6 h-6 text-orange-600" />
                      </div>
                      <h4 className="font-bold text-gray-900 mb-3">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-24">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                {/* CHANGE 3: Replaced Brain Icon div with Image tag */}
                <img
                  src={logoPng}
                  alt="Mindful AI Logo"
                  className="h-10 w-auto object-contain"
                />
                <h3 className="text-xl font-bold">MINDFUL AI</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Research focused on AI safety and mental health for Indian
                adolescents and young adults. Building culturally grounded
                frameworks for the next generation.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Commitment</h4>
              <p className="text-gray-400 leading-relaxed mb-6">
                All research deliverables will be released under Creative
                Commons license to ensure maximum impact and accessibility for
                researchers, educators, and policymakers worldwide.
              </p>
              <div className="flex gap-3 flex-wrap">
                <div className="px-4 py-2 bg-gray-800 rounded-full text-sm font-medium border border-gray-700">
                  Open Access
                </div>
                <div className="px-4 py-2 bg-gray-800 rounded-full text-sm font-medium border border-gray-700">
                  Youth-Centered
                </div>
                <div className="px-4 py-2 bg-gray-800 rounded-full text-sm font-medium border border-gray-700">
                  Ethical
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p>
              © 2024 Culturally Grounded AI Safety Research. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
