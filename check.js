// ===== quiz.js (Decalcification CBT) =====

const quizData = [
  {
    question: "In order to obtain satisfactory paraffin sections of bone, what must be removed?",
    options: {
      A: "Organic collagen matrix",
      B: "Inorganic calcium",
      C: "Cartilage",
      D: "Proteins"
    },
    answer: "B",
    explanation: "In order to obtain satisfactory paraffin sections of bone, inorganic calcium must be removed from the organic collagen matrix, calcified cartilage, and surrounding tissues."
  },
  {
    question: "Which of the following is NOT a criterion for a good decalcifying agent?",
    options: {
      A: "Complete removal of calcium",
      B: "Absence of tissue damage",
      C: "Enhancement of tissue antigenicity",
      D: "Reasonable speed of decalcification"
    },
    answer: "C",
    explanation: "A good decalcifying agent should remove calcium, preserve tissue structure, allow staining, and work at a reasonable speed. Enhancement of antigenicity is not a criterion."
  },
  {
    question: "Which factor does NOT influence the choice of decalcifier?",
    options: {
      A: "Urgency of the case",
      B: "Degree of mineralization",
      C: "Staining techniques required",
      D: "Color of bone tissue"
    },
    answer: "D",
    explanation: "The choice of decalcifier is influenced by urgency, degree of mineralization, extent of investigation, and required staining techniques. Bone color is irrelevant."
  },
  {
    question: "How does the concentration of the decalcifying agent affect decalcification?",
    options: {
      A: "Higher concentration slows decalcification",
      B: "Lower concentration damages tissue more",
      C: "Higher concentration speeds decalcification but may harm tissue",
      D: "Concentration has no effect"
    },
    answer: "C",
    explanation: "Higher acid concentration decalcifies faster but can damage tissue cells and affect staining."
  },
  {
    question: "Why is a large volume of decalcifying fluid recommended?",
    options: {
      A: "To speed up fixation",
      B: "To prevent depletion of the agent by calcium reaction",
      C: "To reduce tissue swelling",
      D: "To neutralize pH automatically"
    },
    answer: "B",
    explanation: "A large fluid volume ensures the decalcifying agent is not depleted by calcium ions, maintaining effectiveness."
  },
  {
    question: "What is the recommended temperature range for decalcification?",
    options: {
      A: "4–10°C",
      B: "18–25°C",
      C: "30–40°C",
      D: "50–60°C"
    },
    answer: "B",
    explanation: "Room temperature (18–25°C) is acceptable. Higher temperatures may accelerate decalcification but risk tissue maceration."
  },
  {
    question: "Which statement about agitation during decalcification is TRUE?",
    options: {
      A: "Agitation is harmful to tissues",
      B: "Agitation is always necessary",
      C: "Gentle agitation may speed decalcification without harming tissue",
      D: "Agitation prevents chemical reaction"
    },
    answer: "C",
    explanation: "Gentle agitation such as rocking or stirring can speed up decalcification and is generally safe for tissue."
  },
  {
    question: "What is the main purpose of suspending bone specimens in decalcifying fluid?",
    options: {
      A: "To save fluid",
      B: "To ensure all surfaces are in contact with the fluid",
      C: "To dry the tissue faster",
      D: "To increase tissue hardness"
    },
    answer: "B",
    explanation: "Suspension allows decalcifying fluid to access all bone surfaces evenly for effective decalcification."
  },
  {
    question: "Which is the first step in the decalcification technique?",
    options: {
      A: "Decalcification",
      B: "Tissue selection",
      C: "Acid neutralization",
      D: "Thorough washing"
    },
    answer: "B",
    explanation: "Decalcification begins with tissue selection, followed by fixation and other steps."
  },
  {
    question: "Strong inorganic acids like nitric acid are recommended for:",
    options: {
      A: "Large dense bones only",
      B: "Rapid decalcification of small biopsy specimens",
      C: "Long-term tissue preservation",
      D: "Chelation of calcium ions"
    },
    answer: "B",
    explanation: "Strong acids decalcify rapidly but can damage tissue. They are best for small or urgent biopsy specimens."
  },
  {
    question: "Which of these is a weak organic acid used extensively as a primary decalcifier?",
    options: {
      A: "Hydrochloric acid",
      B: "Nitric acid",
      C: "Formic acid",
      D: "Sulfuric acid"
    },
    answer: "C",
    explanation: "Formic acid is a weak organic acid commonly used for routine decalcification, gentle on tissue."
  },
  {
    question: "What is the main principle of the Ion Exchange Resin decalcification method?",
    options: {
      A: "Electroplating calcium ions",
      B: "Binding calcium ions from solution using negatively charged resins",
      C: "Dissolving calcium with strong acids only",
      D: "Heating bone to remove minerals"
    },
    answer: "B",
    explanation: "Ion exchange resins attract and remove calcium ions from the decalcifying solution, improving efficiency."
  },
  {
    question: "Which is an advantage of the ion exchange resin method?",
    options: {
      A: "Low cost",
      B: "Reduced tissue preservation",
      C: "Accelerated decalcification with better tissue preservation",
      D: "Unlimited use in large bones"
    },
    answer: "C",
    explanation: "This method accelerates decalcification while preserving tissue and reducing the need for frequent solution changes."
  },
  {
    question: "What is the main disadvantage of the ion exchange resin method?",
    options: {
      A: "Slower decalcification",
      B: "High cost and limited use in large specimens",
      C: "Tissue distortion",
      D: "Loss of calcium ions"
    },
    answer: "B",
    explanation: "Ion exchange resins are costly and not practical for large specimens."
  },
  {
    question: "How does the electrolytic decalcification method work?",
    options: {
      A: "Using chelating agents to bind calcium",
      B: "Passing electric current to move calcium ions toward the cathode",
      C: "Using only strong acids without current",
      D: "Heating tissues to remove calcium"
    },
    answer: "B",
    explanation: "The bone is attached to the anode and current attracts calcium ions to the cathode, speeding decalcification."
  },
  {
    question: "Which chelating agent is commonly used for decalcification?",
    options: {
      A: "Nitric acid",
      B: "EDTA",
      C: "Hydrochloric acid",
      D: "Formic acid"
    },
    answer: "B",
    explanation: "EDTA binds calcium ions selectively without dissolving tissue, preserving staining and structure."
  },
  {
    question: "What pH range is optimal for EDTA decalcification?",
    options: {
      A: "3–4",
      B: "5–6",
      C: "7–7.4",
      D: "9–10"
    },
    answer: "C",
    explanation: "EDTA works best at neutral pH (7–7.4). Lower pH slows binding, and higher pH may damage proteins."
  },
  {
    question: "Surface decalcification is primarily used for:",
    options: {
      A: "Large bones",
      B: "Tissues embedded in paraffin with minor calcium deposits",
      C: "Complete tissue blocks",
      D: "Rapid fixation"
    },
    answer: "B",
    explanation: "Surface decalcification removes small calcium foci from paraffin-embedded tissue blocks."
  },
  {
    question: "Which is the most accurate method for determining the endpoint of decalcification?",
    options: {
      A: "Mechanical method",
      B: "Chemical method",
      C: "Radiographic method",
      D: "Agitation method"
    },
    answer: "C",
    explanation: "Radiography visually confirms removal of calcium and is non-destructive, making it highly accurate."
  },
  {
    question: "In the chemical endpoint test, what indicates complete decalcification?",
    options: {
      A: "Immediate white precipitate after ammonium hydroxide",
      B: "Delayed calcium oxalate precipitate",
      C: "Clear solution after 30 minutes",
      D: "Formation of bubbles in solution"
    },
    answer: "C",
    explanation: "A clear solution after 30 minutes indicates all calcium has been removed, confirming complete decalcification."
  }
];

// ===== The rest of the CBT quiz JS (navigation, options, feedback, etc.) =====

