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
  },


  // ===== New 50 Decalcification Questions =====
const newQuizData = [
  {
    question: "Which property is most important when selecting a decalcifying agent for immunohistochemistry?",
    options: {A: "Speed of decalcification", B: "Preservation of tissue antigens", C: "Cost", D: "Ease of handling"},
    answer: "B",
    explanation: "Preservation of tissue antigens is critical for immunohistochemistry; strong acids may destroy antigens."
  },
  {
    question: "Which decalcifying agent is considered fastest for small biopsy specimens?",
    options: {A: "Formic acid", B: "EDTA", C: "Nitric acid", D: "Acetic acid"},
    answer: "C",
    explanation: "Nitric acid is a strong acid that decalcifies small specimens rapidly, often within 24 hours."
  },
  {
    question: "Why is old nitric acid not recommended for decalcification?",
    options: {A: "It reacts too slowly", B: "It is less effective than hydrochloric acid", C: "It damages tissue stainability", D: "It forms chelates"},
    answer: "C",
    explanation: "Old nitric acid can seriously damage tissue and affect staining properties; fresh acid should be used."
  },
  {
    question: "Which decalcifying agent can simultaneously fix and decalcify tissue?",
    options: {A: "Formalin-formic acid mixture", B: "Nitric acid", C: "EDTA", D: "Hydrochloric acid"},
    answer: "A",
    explanation: "A mixture of formalin and formic acid fixes tissues while decalcifying small bone pieces."
  },
  {
    question: "What is the main disadvantage of using strong acids for decalcification?",
    options: {A: "Slow decalcification", B: "High cost", C: "Tissue swelling and loss of enzyme activity", D: "Incomplete calcium removal"},
    answer: "C",
    explanation: "Strong acids decalcify quickly but can swell tissue and destroy enzymes or antigens."
  },
  {
    question: "Which factor does NOT affect the rate of decalcification?",
    options: {A: "Temperature", B: "Agitation", C: "Tissue shape", D: "Color of tissue"},
    answer: "D",
    explanation: "Temperature, agitation, concentration, and specimen size affect decalcification; tissue color does not."
  },
  {
    question: "What is a recommended fluid-to-tissue ratio during decalcification?",
    options: {A: "5:1", B: "10:1", C: "20:1", D: "50:1"},
    answer: "C",
    explanation: "A 20:1 volume ratio ensures sufficient decalcifying agent is available for complete reaction with calcium."
  },
  {
    question: "Which statement about weak organic acids is TRUE?",
    options: {A: "They decalcify faster than strong acids", B: "They are gentler and preserve tissue better", C: "They are not used in histology", D: "They cause severe tissue damage"},
    answer: "B",
    explanation: "Weak acids like formic acid are slower but gentler on tissue and better for immunohistochemistry."
  },
  {
    question: "Which weak acid is found in Carnoy’s and Bouin’s fixatives as an incidental decalcifier?",
    options: {A: "Formic acid", B: "Acetic acid", C: "Nitric acid", D: "Hydrochloric acid"},
    answer: "B",
    explanation: "Acetic acid is a weak decalcifier present in some fixatives, providing minor decalcification."
  },
  {
    question: "Why should decalcifying fluid be changed during the process?",
    options: {A: "To prevent acid depletion by calcium", B: "To lower pH", C: "To increase agitation", D: "To reduce tissue swelling"},
    answer: "A",
    explanation: "Calcium binds to acids or chelators, so fluid must be renewed to maintain decalcification efficiency."
  },
  {
    question: "Which is NOT a type of endpoint determination method?",
    options: {A: "Mechanical", B: "Chemical", C: "Radiographic", D: "Thermal"},
    answer: "D",
    explanation: "Mechanical, chemical, and radiographic methods are used; thermal methods are not."
  },
  {
    question: "During mechanical endpoint testing, which tool may be used?",
    options: {A: "Needle", B: "X-ray", C: "EDTA", D: "Formic acid"},
    answer: "A",
    explanation: "Mechanical testing involves probing or bending the specimen using a needle or pin."
  },
  {
    question: "Which chemical indicates remaining calcium in the chemical endpoint test?",
    options: {A: "Calcium carbonate", B: "Calcium oxalate", C: "Calcium phosphate", D: "Calcium hydroxide"},
    answer: "B",
    explanation: "Calcium oxalate precipitate forms when calcium is present, indicating incomplete decalcification."
  },
  {
    question: "In chemical endpoint testing, what is the purpose of ammonium hydroxide?",
    options: {A: "Neutralizes acid solution", B: "Dissolves calcium", C: "Agitates tissue", D: "Fixes tissue"},
    answer: "A",
    explanation: "Ammonium hydroxide neutralizes acid to prepare the solution for calcium detection with ammonium oxalate."
  },
  {
    question: "What is the main advantage of radiographic endpoint determination?",
    options: {A: "Low cost", B: "Non-destructive and highly accurate", C: "Requires no equipment", D: "Detects tissue antigens"},
    answer: "B",
    explanation: "Radiography visually confirms calcium removal without damaging tissue, giving high accuracy."
  },
  {
    question: "Which type of specimen is ideal for electrolytic decalcification?",
    options: {A: "Large bones", B: "Small bones attached to the anode", C: "Formalin-fixed tissues", D: "Paraffin blocks"},
    answer: "B",
    explanation: "Small bones are attached to the anode and current passes through the solution for rapid decalcification."
  },
  {
    question: "What is the main disadvantage of electrolytic decalcification?",
    options: {A: "Slow process", B: "Heat may damage tissue", C: "Cannot remove calcium", D: "Cannot be monitored"},
    answer: "B",
    explanation: "Heat generated during electrolytic decalcification can destroy tissue and stainability."
  },
  {
    question: "Which is NOT a chelating agent used for decalcification?",
    options: {A: "EDTA", B: "Formic acid", C: "Ethylenediaminetetraacetic acid", D: "Calcium-binding solution"},
    answer: "B",
    explanation: "EDTA is a chelating agent; formic acid is an acid decalcifier."
  },
  {
    question: "Why is EDTA slower than acids in decalcification?",
    options: {A: "It binds calcium without dissolving salts", B: "It reacts violently", C: "It evaporates quickly", D: "It is neutral"},
    answer: "A",
    explanation: "EDTA selectively binds calcium ions without dissolving tissue, making it slower but gentler."
  },
  {
    question: "What pH should EDTA solutions maintain for optimal calcium binding?",
    options: {A: "3.0", B: "5.5", C: "7.0–7.4", D: "9.0"},
    answer: "C",
    explanation: "Neutral pH (7.0–7.4) allows EDTA to efficiently bind calcium without damaging proteins."
  },
  {
    question: "What is surface decalcification primarily used for?",
    options: {A: "Minor calcium deposits in paraffin blocks", B: "Large cortical bones", C: "EDTA solution preparation", D: "Radiography calibration"},
    answer: "A",
    explanation: "Surface decalcification removes small foci of calcium after paraffin embedding, preserving the tissue core."
  },
  {
    question: "How long is a surface decalcification block typically exposed to decalcifying solution?",
    options: {A: "Several weeks", B: "Depends on tissue and requires close monitoring", C: "Instantly", D: "Never"},
    answer: "B",
    explanation: "Exposure time varies with tissue type and must be carefully monitored to prevent over-decalcification."
  },
  {
    question: "Which is an advantage of surface decalcification?",
    options: {A: "Preserves core tissue structure", B: "Rapid removal of calcium from dense bones", C: "Automated endpoint detection", D: "No monitoring needed"},
    answer: "A",
    explanation: "Surface decalcification selectively removes calcium while preserving internal tissue structures."
  },
  {
    question: "Which type of decalcification is preferred for large surgical specimens requiring immunohistochemistry?",
    options: {A: "Strong acid", B: "Chelating agent (EDTA)", C: "Electrolytic", D: "Ion exchange"},
    answer: "B",
    explanation: "EDTA preserves tissue antigens and cellular details, making it suitable for large specimens with immunostaining."
  },
  {
    question: "Which decalcifying agent is found in Perenyi’s fluid?",
    options: {A: "Nitric acid", B: "Formic acid", C: "EDTA", D: "Hydrochloric acid"},
    answer: "A",
    explanation: "Perenyi’s fluid contains nitric acid, a strong inorganic acid used for rapid decalcification."
  },
  {
    question: "Which acid is considered safest for routine surgical bone specimens?",
    options: {A: "Nitric acid", B: "Hydrochloric acid", C: "Formic acid", D: "Sulfuric acid"},
    answer: "C",
    explanation: "Formic acid is gentle and preserves tissue well, making it suitable for routine specimens."
  },
  {
    question: "Which factor can slow down decalcification at room temperature?",
    options: {A: "Low acid concentration", B: "High temperature", C: "High agitation", D: "Small tissue size"},
    answer: "A",
    explanation: "Lower concentration of acid or chelator slows the reaction with calcium."
  },
  {
    question: "Why is gentle agitation sometimes used during decalcification?",
    options: {A: "To damage tissue", B: "To improve fluid exchange around tissue", C: "To increase pH", D: "To dissolve tissue"},
    answer: "B",
    explanation: "Gentle agitation improves fluid exchange, potentially speeding decalcification without harming tissue."
  },
  {
    question: "Which method is considered controversial for speeding decalcification?",
    options: {A: "Mechanical agitation", B: "EDTA binding", C: "Formic acid immersion", D: "Radiography"},
    answer: "A",
    explanation: "Mechanical agitation's effect on decalcification speed is debated, though it is generally safe."
  },
  {
    question: "Which method can completely destroy cellular detail due to heat generation?",
    options: {A: "EDTA chelation", B: "Electrolytic decalcification", C: "Formic acid immersion", D: "Ion exchange"},
    answer: "B",
    explanation: "Electrolytic decalcification may generate heat, risking tissue destruction."
  },
  {
    question: "What is the role of ion exchange resins in decalcification?",
    options: {A: "Bind calcium ions from solution", B: "Dissolve organic matrix", C: "Neutralize acid", D: "Fix tissue"},
    answer: "A",
    explanation: "Ion exchange resins attract and remove calcium ions, maintaining efficient decalcification."
  },
  {
    question: "Which decalcification method reduces the need for frequent solution changes?",
    options: {A: "Strong acid", B: "EDTA", C: "Ion exchange resin", D: "Electrolytic"},
    answer: "C",
    explanation: "Ion exchange resin continuously removes calcium, reducing solution replacement frequency."
  },
  {
    question: "Which decalcifying agent may cause tissue swelling if used alone?",
    options: {A: "Acetic acid", B: "EDTA", C: "Formic acid", D: "Nitric acid"},
    answer: "A",
    explanation: "Acetic acid can cause tissue swelling and is usually part of a fixative mixture, not used alone."
  },
  {
    question: "Which endpoint determination method involves X-ray imaging?",
    options: {A: "Mechanical", B: "Chemical", C: "Radiographic", D: "Agitation"},
    answer: "C",
    explanation: "Radiographic method uses X-ray to detect remaining calcium."
  },
  {
    question: "Which endpoint result indicates complete decalcification in chemical testing?",
    options: {A: "Immediate precipitate", B: "Delayed precipitate", C: "Clear solution", D: "Bubbling"},
    answer: "C",
    explanation: "A clear solution after 30 minutes indicates no calcium remains."
  },
  {
    question: "Why should decalcifying solutions with more than 10% acid be diluted for chemical testing?",
    options: {A: "To increase reaction speed", B: "To improve test sensitivity", C: "To neutralize tissue", D: "To fix tissue"},
    answer: "B",
    explanation: "High acid concentrations reduce chemical endpoint sensitivity, requiring dilution."
  },
  {
    question: "Which is an advantage of chelating agents over strong acids?",
    options: {A: "Faster decalcification", B: "Better preservation of tissue and staining", C: "Lower cost", D: "No monitoring needed"},
    answer: "B",
    explanation: "Chelating agents preserve cellular detail and staining better than strong acids."
  },
  {
    question: "Which factor is essential for ensuring uniform decalcification in flat bone slabs?",
    options: {A: "Stacking slabs", B: "Suspending or spacing samples", C: "Using high temperature", D: "Using strong acid only"},
    answer: "B",
    explanation: "Suspending or spacing prevents surfaces from touching, allowing fluid access to all sides."
  },
  {
    question: "Which is a limitation of the radiographic endpoint method?",
    options: {A: "Inaccuracy", B: "Non-destructive", C: "Cannot be used with metallic fixatives", D: "Too fast"},
    answer: "C",
    explanation: "Tissues fixed with metallic fixatives appear radiopaque, interfering with X-ray assessment."
  },
  {
    question: "Which acid is sometimes combined with formalin for small needle biopsies?",
    options: {A: "Nitric acid", B: "Formic acid", C: "Hydrochloric acid", D: "Acetic acid"},
    answer: "B",
    explanation: "Formic acid-formalin mixture fixes and decalcifies small specimens effectively."
  },
  {
    question: "Which statement is TRUE about formic acid decalcification?",
    options: {A: "Faster than nitric acid", B: "Gentler and slower than strong acids", C: "Destroys all antigens", D: "Only used for large bones"},
    answer: "B",
    explanation: "Formic acid is slower than strong acids but preserves tissue structure and antigens."
  },
  {
    question: "What is the endpoint of decalcification?",
    options: {A: "When tissue is completely dissolved", B: "When calcium is sufficiently removed for sectioning", C: "After fixed time only", D: "After color change"},
    answer: "B",
    explanation: "The endpoint is when the tissue is soft enough for sectioning but not over-decalcified."
  },
  {
    question: "Which method uses negatively charged resins to attract calcium ions?",
    options: {A: "Electrolytic", B: "Chelating", C: "Ion exchange resin", D: "Strong acid"},
    answer: "C",
    explanation: "Ion exchange resins bind calcium ions, enhancing decalcification efficiency."
  },
  {
    question: "Which factor does NOT need monitoring during decalcification?",
    options: {A: "Temperature", B: "Agitation", C: "Tissue color", D: "Fluid concentration"},
    answer: "C",
    explanation: "Color is not important; temperature, agitation, and solution strength affect decalcification."
  },
  {
    question: "Which decalcification technique preserves the most delicate tissue structures?",
    options: {A: "Strong acids", B: "Electrolytic", C: "Chelating (EDTA)", D: "Surface decalcification"},
    answer: "C",
    explanation: "EDTA preserves tissue architecture and staining better than acids or electrolytic methods."
  }

];

// ===== The rest of the CBT quiz JS (navigation, options, feedback, etc.) =====

// Shuffle
function shuffleArray(array){ for(let i=array.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[array[i],array[j]]=[array[j],array[i]]; } }
shuffleArray(quizData);

// Variables
let currentQuestion=0;
let userAnswers={};
let score=0;
let carouselPage=0;
const carouselSize=10;

// DOM Elements
const questionEl=document.getElementById("question");
const optionsEl=document.getElementById("options");
const feedbackEl=document.getElementById("feedback");
const prevBtn=document.getElementById("prev-btn");
const nextBtn=document.getElementById("next-btn");
const questionNav=document.getElementById("question-nav");
const progressFill=document.getElementById("progress-fill");
const carouselPrev=document.getElementById("carousel-prev");
const carouselNext=document.getElementById("carousel-next");

// Initialize carousel
function initQuestionNav(){
  questionNav.innerHTML="";
  quizData.forEach((_,i)=>{
    const btn=document.createElement("button");
    btn.innerText=i+1; btn.className="q-btn";
    btn.addEventListener("click",()=>{ currentQuestion=i; showQuestion(); });
    questionNav.appendChild(btn);
  });
  showCarouselNumbers();
}

// Show question
function showQuestion(){
  if(currentQuestion>=quizData.length){ showFinalScore(); return; }
  const q=quizData[currentQuestion];
  questionEl.innerText=q.question; optionsEl.innerHTML=""; feedbackEl.innerText=""; nextBtn.disabled=true;

  for(let key in q.options){
    const li=document.createElement("li");
    const btn=document.createElement("button");
    btn.innerText=`${key}: ${q.options[key]}`; btn.className="option-btn";

    if(userAnswers[currentQuestion]){
      btn.disabled=true;
      if(userAnswers[currentQuestion]===key) btn.classList.add("selected");
      if(key===q.answer) btn.classList.add("correct");
      if(userAnswers[currentQuestion]===key && key!==q.answer) btn.classList.add("wrong");
    }

    btn.addEventListener("click",()=>selectOption(key));
    li.appendChild(btn); optionsEl.appendChild(li);
  }

  if(userAnswers[currentQuestion]){
    feedbackEl.innerText=(userAnswers[currentQuestion]===q.answer?"Correct! ":"Wrong! ") + q.explanation;
    nextBtn.disabled=false;
  }

  updateQuestionNav(); updateProgress();
  showCarouselNumbers();
}

// Option selection
function selectOption(key){
  const q=quizData[currentQuestion];
  userAnswers[currentQuestion]=key;
  const allBtns=optionsEl.querySelectorAll("button");
  allBtns.forEach(b=>b.disabled=true);
  allBtns.forEach(b=>{
    if(b.innerText.startsWith(q.answer+":")) b.classList.add("correct");
    if(b.innerText.startsWith(key+":") && key!==q.answer) b.classList.add("wrong");
  });
  if(key===q.answer){ feedbackEl.innerText="Correct! "+q.explanation; score++; }
  else{ feedbackEl.innerText="Wrong! "+q.explanation; }
  nextBtn.disabled=false;
  updateQuestionNav(); updateProgress();
}

// Update carousel numbers
function showCarouselNumbers(){
  const totalPages=Math.ceil(quizData.length/carouselSize);
  carouselPage=Math.floor(currentQuestion/carouselSize);
  const start=carouselPage*carouselSize;
  const end=Math.min(start+carouselSize,quizData.length);
  const buttons=questionNav.querySelectorAll(".q-btn");
  buttons.forEach((btn,i)=>{ btn.style.display=(i>=start && i<end)?"inline-block":"none"; });
}

// Carousel arrows
carouselPrev.addEventListener("click",()=>{ if(carouselPage>0){ carouselPage--; currentQuestion=carouselPage*carouselSize; showQuestion(); } });
carouselNext.addEventListener("click",()=>{ if(carouselPage<Math.ceil(quizData.length/carouselSize)-1){ carouselPage++; currentQuestion=carouselPage*carouselSize; showQuestion(); } });

// Update question nav colors
function updateQuestionNav(){
  const buttons=questionNav.querySelectorAll(".q-btn");
  buttons.forEach((btn,idx)=>{ btn.classList.remove("answered"); if(userAnswers[idx]) btn.classList.add("answered"); });
}

// Prev/Next
prevBtn.addEventListener("click",()=>{ if(currentQuestion>0){ currentQuestion--; showQuestion(); } });
nextBtn.addEventListener("click",()=>{ if(currentQuestion<quizData.length-1){ currentQuestion++; showQuestion(); } else{ currentQuestion=quizData.length; showFinalScore(); } });

// Progress bar
function updateProgress(){
  const answeredCount=Object.keys(userAnswers).length;
  const percent=(answeredCount/quizData.length)*100;
  progressFill.style.width=percent+"%";
}

// Final Score
function showFinalScore(){
  questionEl.innerText=`Quiz Completed! Your Score: ${score}/${quizData.length} (${Math.round((score/quizData.length)*100)}%)`;
  optionsEl.innerHTML=""; feedbackEl.innerText="";
  prevBtn.style.display="none"; nextBtn.style.display="none"; questionNav.style.display="none"; carouselPrev.style.display="none"; carouselNext.style.display="none";
  const restartBtn=document.createElement("button");
  restartBtn.innerText="Restart Quiz"; restartBtn.className="btn";
  restartBtn.addEventListener("click",()=>{
    currentQuestion=0; userAnswers={}; score=0; carouselPage=0;
    prevBtn.style.display="inline-block"; nextBtn.style.display="inline-block";
    questionNav.style.display="flex"; carouselPrev.style.display="inline-block"; carouselNext.style.display="inline-block";
    shuffleArray(quizData); showQuestion();
  });
  optionsEl.appendChild(restartBtn);
}

// Init
initQuestionNav(); showQuestion();

