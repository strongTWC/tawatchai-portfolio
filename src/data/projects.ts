import { Project } from "@/types/project";

/**
 * Mock data only. Records intentionally include edge cases:
 * long titles, a missing cover image, missing optional fields,
 * and Draft / Needs Review / Private records that must never
 * render on the site.
 */
export const projects: Project[] = [
  {
    id: "p01",
    title: "Product Knowledge Development Programme",
    slug: "product-knowledge-development-programme",
    category: "Product Knowledge & Training",
    summary:
      "A structured product-knowledge programme built around skincare science, ritual and storytelling — turning ingredient lists into confident client conversations on the boutique floor.",
    role: "Learning content designer and floor-level facilitator",
    outcomes:
      "A reusable module structure that absorbed every new product launch; more consistent product storytelling across the team.",
    coverImage: "/images/cover_product_knowledge.jpg",
    completedAt: "2023-06-01",
    featured: true,
    skills: ["Product Training", "Skincare Science", "Facilitation", "Learning Design"],
    publicationStatus: "Published",
    projectType: "Historical Experience",
    caseStudy: {
      overview:
        "A structured programme that translated dense product information into short, repeatable learning modules for boutique beauty advisors.",
      businessContext:
        "In prestige beauty, product knowledge decays quickly. New formulations, limited editions and evolving claims mean advisors must continuously relearn how to present products accurately — while keeping every client conversation personal, compliant and unhurried.",
      objective:
        "Give advisors a durable, repeatable way to absorb product knowledge, so storytelling stays accurate and confident across the whole team.",
      role:
        "I designed the learning content, facilitated the sessions and reinforced them through one-to-one coaching on the floor.",
      approach: [
        "Mapped recurring knowledge gaps observed during real client interactions",
        "Built short learning modules around skincare categories, key ingredients and application rituals",
        "Translated technical claims into conversational storytelling frameworks",
        "Reinforced learning through on-the-job practice, shadowing and short debriefs",
      ],
      outcomes: [
        "A reusable module structure that could absorb each new product launch without redesign",
        "More consistent, confident product storytelling across the team",
        "Qualitative feedback from advisors and managers — formal metrics were intentionally not recorded",
      ],
      relatedNotes:
        "Experience referenced here is historical and described qualitatively; no business metrics are attached.",
    },
  },
  {
    id: "p02",
    title: "Retail Performance Improvement — Skincare Sales Development",
    slug: "skincare-sales-development-initiative",
    category: "Sales Performance & Business Development",
    summary:
      "A one-month, one-store initiative for a 40-person team. I initiated and drove a practical product-linking approach, using short learning videos to help employees build confidence in recommending the N1 skincare range.",
    role: "Project Initiator & Owner",
    outcomes:
      "Employees tried the lotion-to-foundation recommendation, reported successful sales, and began adapting the linking approach to serum and cream. Qualitative observations only; commercial figures remain confidential.",
    coverImage: "/images/cover_skincare_sales.jpg",
    completedAt: null,
    featured: true,
    skills: [
      "Project Initiation",
      "Product Knowledge Sharing",
      "Learning Media Production",
      "Stakeholder Coordination",
      "Team Engagement",
      "Retail Sales",
    ],
    publicationStatus: "Published",
    projectType: "Historical Experience",
    caseStudy: {
      overview:
        "A one-month workplace initiative in one store, involving 40 employees. I initiated and drove a practical response to the underperformance of the newly launched N1 skincare range, using product knowledge videos and product-linking examples to support more confident recommendations.",
      businessContext:
        "After launch, the N1 skincare range was below its sales target. Eye Cream was the lowest-performing product in the range. Employees were not yet confident recommending the products, and customers could perceive Eye Cream as non-essential. The initiative followed an initial brief from the Team Lead (TL) and RTS.",
      objective:
        "Help employees build confidence in recommending the N1 range by giving them practical product knowledge and a product-linking approach they could try in real customer conversations.",
      role:
        "Project Initiator & Owner. I initiated the approach, designed the activities and selling approach, independently created the learning videos from ideation through production and editing, coordinated sales information with TL, consulted Skincare Experts and the Training Team, briefed and coordinated with Retail Sales, and monitored and reported progress. Stakeholders contributed business information, subject expertise, consultation and operational coordination.",
      approach: [
        "Selected N1 Lotion (2,500) as a practical lead product employees could confidently introduce.",
        "Created a learning video demonstrating how to link N1 Lotion with foundation in a customer recommendation.",
        "Coordinated weekly team reporting through TL and used Dashbot as a supporting source for confidential sales information.",
        "Consulted Skincare Experts for product knowledge and selling techniques, and the Training Team for training input.",
        "Observed employees try the approach; after reported successful sales, other team members adopted it and independently adapted product linking to serum and cream.",
        "Supported team engagement activities, including weekly competition and double-scoring mechanics, as described in the project record."
      ],
      outcomes: [
        "Employees tried the lotion-to-foundation recommendation and reported successful sales.",
        "Other team members began adopting the approach and independently adapted product linking to serum and cream.",
        "The project owner observed increased confidence in skincare recommendations. This is a qualitative observation, not a measured confidence score.",
        "Actual sales figures are confidential. The available record does not establish a quantified result or prove that this initiative alone caused a sales change."
      ],
      relatedNotes:
        "Historical experience, reconstructed as a portfolio case study. At the time, I had not yet studied formal L&D frameworks; the original initiative was driven by retail experience, commercial understanding and practical problem-solving, not a formal ADDIE or TNA process. Any Project Charter, TNA, learning objectives, assessment, evaluation or other formal L&D artefacts created now must be labelled as retrospective portfolio demonstrations, not documents used in the original project. Exact project dates, full product naming and detailed double-scoring rules remain unconfirmed."
    },
  },
  {
    id: "p03",
    title: "Customer Discovery Training Workshop",
    slug: "customer-discovery-training-workshop",
    category: "Product Knowledge & Training",
    summary:
      "A self-initiated workshop design teaching beauty advisors the discovery conversation — the questions, the listening and the pacing behind a luxury consultation.",
    role: "Instructional designer and facilitator (demonstration project)",
    coverImage: "/images/cover_discovery_training.jpg",
    completedAt: "2024-02-15",
    featured: true,
    skills: ["Workshop Facilitation", "Learning Design", "Discovery Skills", "Role-play Design"],
    publicationStatus: "Published",
    projectType: "Portfolio Demonstration",
    caseStudy: {
      overview:
        "A ready-to-run half-day workshop that teaches advisors how to open, conduct and close a discovery-led luxury consultation.",
      businessContext:
        "Discovery is the single highest-leverage skill in beauty retail, yet it is usually absorbed informally rather than taught. New advisors imitate what they see; few are given the underlying structure.",
      objective:
        "Design a workshop that makes discovery teachable — with clear structure, live practice and feedback that protects confidence.",
      role:
        "As a self-initiated demonstration, I designed the full learner experience: agenda, facilitator notes, practice activities and feedback guides.",
      approach: [
        "Structured the workshop around a listen–diagnose–recommend arc",
        "Built a question bank covering skin, routine, lifestyle and occasion",
        "Designed paired role-plays with observer checklists instead of open critique",
        "Closed with personal action planning each participant takes back to the floor",
      ],
      outcomes: [
        "A complete, ready-to-run workshop kit — agenda, notes and practice activities",
        "A discovery question framework adaptable to any beauty category",
        "Peer-reviewed design — developed as a portfolio demonstration, not yet delivered in a company setting",
      ],
    },
  },
  {
    id: "p04",
    title: "OJT & Onboarding Coaching Support",
    slug: "ojt-onboarding-coaching-support",
    category: "Learning & Development",
    summary:
      "On-the-job coaching for new and transitioning team members — structured floor shadowing, guided practice and feedback loops through the first weeks on the floor.",
    role: "Floor coach and onboarding buddy",
    outcomes:
      "New joiners reached independent confidence faster; recurring gaps fed back into refresher content.",
    coverImage: "/images/cover_ojt.jpg",
    completedAt: "2023-01-20",
    featured: false,
    skills: ["Coaching", "Onboarding", "OJT", "Feedback"],
    publicationStatus: "Published",
    projectType: "Historical Experience",
    caseStudy: {
      overview:
        "A structured approach to on-the-job training: turning daily floor work into deliberate, coached practice for new advisors.",
      businessContext:
        "Retail onboarding often ends after systems training, leaving new advisors to learn service by observation. Without structure, habits form early — good and bad — and confidence takes months to build.",
      objective:
        "Support new joiners through their first weeks with structured shadowing, guided practice and daily feedback.",
      role:
        "I acted as the floor-level coach: pairing with new joiners, demonstrating rituals, observing practice and closing each day with a short debrief.",
      approach: [
        "Paired every new joiner with a structured shadowing plan",
        "Broke core service rituals into observable, practicable steps",
        "Held short daily debriefs to convert floor experience into learning",
        "Fed recurring gaps back into simple refresher content for the team",
      ],
      outcomes: [
        "New joiners reached independent confidence noticeably faster within the team",
        "A repeatable shadowing and debrief rhythm the team still uses",
        "Qualitative observations only — no formal metrics recorded",
      ],
    },
  },
  {
    id: "p05",
    title: "Luxury Clienteling Playbook",
    slug: "luxury-clienteling-playbook",
    category: "Sales Performance & Business Development",
    summary:
      "A proposed clienteling playbook for luxury boutiques — a practical framework for building client books, planning outreach and balancing digital tools with handwritten, personal gestures.",
    role: "Framework author (proposal)",
    coverImage: "/images/cover_clienteling.jpg",
    completedAt: null,
    featured: false,
    skills: ["Clienteling", "CRM Practice", "Client Experience", "Framework Design"],
    publicationStatus: "Published",
    projectType: "Proposed Framework",
    caseStudy: {
      overview:
        "A concept playbook that structures clienteling into three practices: knowing the client, planning the relationship and personalising every gesture.",
      businessContext:
        "Clienteling tools are widely adopted in luxury retail, but the practice around them often is not. Advisors are asked to record clients without being taught how to plan outreach or what makes a gesture feel personal rather than automated.",
      objective:
        "Design a playbook a boutique could adopt to make clienteling a daily, coached discipline rather than a data-entry task.",
      role:
        "This is a proposed framework written from floor experience — drafted, structured and documented for future use.",
      approach: [
        "Defined the client-book hygiene standard: profiles, preferences and private notes",
        "Designed an outreach cadence balancing brand moments with personal milestones",
        "Created gesture libraries pairing digital messages with handwritten touches",
        "Added coaching checkpoints so managers can support the practice weekly",
      ],
      outcomes: [
        "A documented concept framework, ready to pilot",
        "Not implemented — created as a proposal, not a delivered business project",
      ],
    },
  },
  {
    id: "p06",
    title: "New Beauty Advisor Onboarding Curriculum",
    slug: "new-beauty-advisor-onboarding-curriculum",
    category: "Learning & Development",
    summary:
      "A proposed 30-60-90 day onboarding curriculum for new beauty advisors — sequencing brand immersion, product knowledge and supervised client work.",
    role: "Curriculum designer (proposal)",
    coverImage: "/images/cover_onboarding.jpg",
    completedAt: null,
    featured: false,
    skills: ["Curriculum Design", "Onboarding", "Learning Architecture", "Facilitation"],
    publicationStatus: "Published",
    projectType: "Proposed Framework",
    caseStudy: {
      overview:
        "A proposed three-phase onboarding journey that takes a new beauty advisor from brand immersion to supervised independence in ninety days.",
      businessContext:
        "Beauty advisor turnover makes onboarding quality a direct business issue. Most curricula cover compliance and systems well, but leave service craft, product storytelling and clienteling to chance.",
      objective:
        "Structure the first ninety days so every new advisor finishes with the same core capabilities, evidenced through observed practice.",
      role:
        "A proposed curriculum drafted from on-the-job coaching experience — designed for a future pilot, not yet delivered.",
      approach: [
        "Days 1–30: brand immersion, service rituals and guided floor observation",
        "Days 31–60: product knowledge sprints paired with supervised client work",
        "Days 61–90: clienteling practice, peer feedback and a capability review",
        "Built-in manager check-ins and a simple capability checklist at each gate",
      ],
      outcomes: [
        "A complete 30-60-90 curriculum map ready to pilot with a boutique team",
        "Not implemented — a proposed framework, not a delivered business project",
      ],
    },
  },
  {
    id: "p07",
    title: "Team Engagement & Recruitment Toolkit",
    slug: "team-engagement-recruitment-toolkit",
    category: "Team Engagement & Recruitment",
    summary:
      "A demonstration toolkit for boutique teams — structured interview role-plays, first-90-days check-in guides and peer-recognition rituals for retail managers.",
    role: "Toolkit designer (demonstration project)",
    coverImage: "/images/cover_team.jpg",
    completedAt: "2024-05-10",
    featured: false,
    skills: ["Team Engagement", "Interview Skills", "Recognition", "Team Culture"],
    publicationStatus: "Published",
    projectType: "Portfolio Demonstration",
    caseStudy: {
      overview:
        "A demonstration toolkit giving boutique managers practical formats for recruiting fit and building daily team engagement.",
      businessContext:
        "Retail managers are promoted for sales excellence, then expected to recruit and engage teams without any structured support. Engagement routines, where they exist, are often inherited habits rather than designed practices.",
      objective:
        "Give managers ready-to-use formats for the people side of boutique leadership — hiring signals, check-ins and recognition.",
      role:
        "A self-initiated demonstration: I designed the toolkit structure and all sample materials to illustrate a capability, not a delivered company project.",
      approach: [
        "Wrote structured interview role-plays built around real boutique scenarios",
        "Designed a first-90-days check-in guide for new joiners and their managers",
        "Created lightweight peer-recognition rituals that survive busy trading weeks",
        "Formatted everything for print-and-use delivery in a back-office setting",
      ],
      outcomes: [
        "A complete toolkit with interview, check-in and recognition formats",
        "Designed for demonstration purposes — not implemented in a company setting",
      ],
    },
  },
  {
    id: "p08",
    title: "Retail Performance Improvement Framework",
    slug: "retail-performance-improvement-framework",
    category: "Sales Performance & Business Development",
    summary:
      "A proposed framework for improving boutique performance through weekly learning rhythms — turning targets into skills practice rather than pressure.",
    role: "Framework author (proposal)",
    coverImage: "/images/cover_performance.jpg",
    completedAt: null,
    featured: false,
    skills: ["Performance Frameworks", "Learning Rhythms", "Coaching", "Retail Operations"],
    publicationStatus: "Published",
    projectType: "Proposed Framework",
    caseStudy: {
      overview:
        "A proposed operating rhythm that connects weekly boutique performance conversations to specific, practised skills.",
      businessContext:
        "Performance conversations in retail tend to report numbers without building capability. Teams are told what to improve, rarely how — and pressure without practice shows up as stalled habits and disengagement.",
      objective:
        "Design a weekly rhythm where every performance conversation ends with one skill focus and one practice commitment.",
      role:
        "A proposed framework authored from floor experience — documented for future use, not implemented.",
      approach: [
        "Structured a weekly 20-minute review: one win, one focus, one practice",
        "Linked each focus to a micro-practice from the product-knowledge programme",
        "Added a simple observation sheet so progress is visible week to week",
        "Kept the whole rhythm light enough to survive peak trading periods",
      ],
      outcomes: [
        "A documented framework ready to pilot",
        "Not implemented — a proposal, not a delivered business project",
      ],
    },
  },
  {
    id: "p09",
    title:
      "The Beauty Advisor's Complete Guide to Structured Fragrance Storytelling, Client Conversation Frameworks and Long-Form Product Education in Prestige Retail",
    slug: "fragrance-storytelling-guide",
    category: "Product Knowledge & Training",
    summary:
      "A long-form self-initiated guide that turns fragrance education into a structured storytelling craft — olfactory families, layering logic and the conversation frameworks that help advisors translate scent into story. This record intentionally carries an extended title and description to test typography at its limits: how a display serif behaves when a project title runs to several lines, how card grids absorb uneven content, and how the reading rhythm holds across long-form editorial layouts.",
    role: "Author and instructional designer (demonstration project)",
    coverImage: "/images/cover_fragrance.jpg",
    completedAt: "2024-08-30",
    featured: false,
    skills: ["Fragrance Knowledge", "Storytelling", "Learning Design", "Long-form Content"],
    publicationStatus: "Published",
    projectType: "Portfolio Demonstration",
    caseStudy: {
      overview:
        "A long-form demonstration guide that structures fragrance education into teachable storytelling layers, from olfactory families to personal recommendation logic.",
      businessContext:
        "Fragrance is sold through emotion, yet most fragrance training delivers facts: notes, concentration, launch dates. Advisors memorise pyramids but struggle to turn them into a story a client can feel. Long-form content is often the missing bridge between training manuals and the thirty seconds of a live consultation.",
      objective:
        "Produce a guide that demonstrates how structured long-form education can equip advisors with ready-to-use fragrance narratives without oversimplifying the category.",
      role:
        "A self-initiated demonstration: researched, structured and written as a portfolio piece to show long-form learning design in the fragrance category.",
      approach: [
        "Organised the guide around olfactory families, each with a signature narrative arc",
        "Wrote conversation frameworks connecting scent profiles to client memory and occasion",
        "Included layering logic and cross-category recommendations as guided practice",
        "Formatted chapters for both self-paced reading and short team-training sessions",
      ],
      outcomes: [
        "A complete long-form guide, structured for reuse in team training sessions",
        "A demonstration of long-form learning design — not a company deliverable",
      ],
    },
  },
  {
    id: "p10",
    title: "Retail Coaching Observation Checklist",
    slug: "retail-coaching-observation-checklist",
    category: "Learning & Development",
    summary:
      "A lightweight observation checklist for coaching beauty advisors on the floor — what to watch, what to ask and how to give feedback that protects confidence.",
    role: "Checklist author (demonstration project)",
    completedAt: null,
    featured: false,
    skills: ["Coaching", "Observation", "Feedback", "Learning Tools"],
    publicationStatus: "Published",
    projectType: "Portfolio Demonstration",
    caseStudy: {
      overview:
        "A one-page observation instrument that helps coaches watch floor interactions deliberately and convert what they see into supportive feedback.",
      businessContext:
        "Floor coaching often happens in passing, which makes feedback late, vague or purely reactive. A structured observation keeps feedback specific and — just as importantly — protects the advisor's confidence in front of clients.",
      objective:
        "Design a checklist that makes a fifteen-minute observation enough to produce one meaningful coaching conversation.",
      role:
        "A self-initiated demonstration project — designed and documented, not yet delivered in a company setting.",
      approach: [
        "Defined observable behaviours across greeting, discovery, storytelling and closing",
        "Added prompt questions that turn observations into open coaching questions",
        "Kept the format to a single printable page for daily use",
        "Closed the loop with a two-line self-reflection for the advisor",
      ],
      outcomes: [
        "A one-page checklist ready for pilot use in any boutique",
        "Designed for demonstration purposes — not implemented in a company setting",
      ],
    },
  },
  {
    id: "p11",
    title: "Service Recovery & Complaint Handling Module",
    slug: "service-recovery-complaint-handling-module",
    category: "Learning & Development",
    summary:
      "A drafted training module on service recovery for luxury retail — turning complaints into loyalty through acknowledgement, ownership and graceful resolution.",
    role: "Module designer (work in progress)",
    completedAt: null,
    featured: false,
    skills: ["Service Recovery", "Learning Design", "Facilitation"],
    publicationStatus: "Draft",
    projectType: "Portfolio Demonstration",
  },
  {
    id: "p12",
    title: "Visual Merchandising Refresher Session",
    slug: "visual-merchandising-refresher-session",
    category: "Product Knowledge & Training",
    summary:
      "A short refresher session on visual merchandising principles for boutique teams — sightlines, focal points and keeping storytelling areas shoppable.",
    role: "Session designer (under review)",
    coverImage: "/images/cover_team.jpg",
    completedAt: null,
    featured: false,
    skills: ["Visual Merchandising", "Facilitation"],
    publicationStatus: "Needs Review",
    projectType: "Portfolio Demonstration",
  },
  {
    id: "p13",
    title: "Confidential Boutique Launch Readiness Plan",
    slug: "confidential-boutique-launch-readiness-plan",
    category: "Team Engagement & Recruitment",
    summary: "Private test record — must never render on the public site.",
    completedAt: null,
    featured: false,
    skills: [],
    publicationStatus: "Private",
    projectType: "Historical Experience",
  },
];
