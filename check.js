// ===== quiz.js (Pro CBT Version with carousel fix) =====
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
explanation: "In order to obtain satisfactory paraffin sections of bone, inorganic calcium must be removed from the organic collagen matrix, calcified cartilage and surrounding tissues."
},

{
question: "Decalcification process is carried out by which agents?",
options: {
A: "Enzymes",
B: "Chemical agents",
C: "Heat",
D: "Water"
},
answer: "B",
explanation: "This decalcification process is carried out by chemical agents; either acids to form soluble calcium salts, or chelating agents which bind to calcium ions."
},

{
question: "Principles of Decalcification relies on the use of chemical agents that either ______ calcium salts.",
options: {
A: "Stain",
B: "Dissolve or chelate",
C: "Freeze",
D: "Boil"
},
answer: "B",
explanation: "Principles of Decalcification relies on the use of chemical agents that either dissolve or chelate calcium salts."
},

{
question: "One criteria for good decalcifying agents is:",
options: {
A: "Complete removal of calcium",
B: "Tissue swelling",
C: "Rapid boiling",
D: "Color preservation"
},
answer: "A",
explanation: "Complete removal of calcium."
},

{
question: "A good decalcifying agent should ensure:",
options: {
A: "Tissue swelling",
B: "Absence of damage to tissue cells or fibres",
C: "Rapid dehydration",
D: "Increased temperature"
},
answer: "B",
explanation: "Absence of damage to tissue cells or fibres."
},

{
question: "A good decalcifying agent should cause:",
options: {
A: "Non-impairment of subsequent staining technique",
B: "Loss of stainability",
C: "Tissue distortion",
D: "Cell shrinkage"
},
answer: "A",
explanation: "Non-impairment of subsequent staining technique."
},

{
question: "One criteria for good decalcifying agents includes:",
options: {
A: "Reasonable speed of decalcification",
B: "Extreme heat",
C: "Prolonged acid exposure",
D: "Metal deposition"
},
answer: "A",
explanation: "Reasonable speed of decalcification."
},

{
question: "The choice of decalcifier is influenced by:",
options: {
A: "Color of tissue",
B: "Four inter-dependent factors",
C: "Container size",
D: "Room lighting"
},
answer: "B",
explanation: "THE CHOICE OF DECALCIFIER IS INFLUENCED BY FOUR INTER-DEPENDENT FACTORS."
},

{
question: "One factor influencing choice of decalcifier is:",
options: {
A: "Urgency of the case",
B: "Room temperature",
C: "Container type",
D: "Water source"
},
answer: "A",
explanation: "Urgency of the case."
},

{
question: "Another factor influencing choice of decalcifier is:",
options: {
A: "Degree of mineralization of the bone",
B: "Shape of tissue",
C: "Age of patient",
D: "Fixative color"
},
answer: "A",
explanation: "Degree of mineralization of the bone."
},

{
question: "Extent of the investigation required is:",
options: {
A: "A decalcification artifact",
B: "A factor influencing the choice of decalcifier",
C: "A staining method",
D: "A washing technique"
},
answer: "B",
explanation: "Extent of the investigation required."
},

{
question: "Staining techniques required is:",
options: {
A: "A decalcification method",
B: "A factor influencing the choice of decalcifier",
C: "A washing stage",
D: "An embedding medium"
},
answer: "B",
explanation: "Staining techniques required."
},

{
question: "More concentrated acid solutions decalcify bone:",
options: {
A: "More slowly",
B: "More rapidly",
C: "At the same rate",
D: "Not at all"
},
answer: "B",
explanation: "Generally, more concentrated acid solutions decalcify bone more rapidly, but are more harmful to the tissue."
},

{
question: "More concentrated acid solutions are:",
options: {
A: "Less harmful",
B: "More harmful to the tissue",
C: "Neutral",
D: "Protective"
},
answer: "B",
explanation: "Generally, more concentrated acid solutions decalcify bone more rapidly, but are more harmful to the tissue."
},

{
question: "4 M formic acid decalcified twice as fast as:",
options: {
A: "2 M solution",
B: "1 M solution",
C: "10 M solution",
D: "Buffered solution"
},
answer: "B",
explanation: "It was found that 4 M formic acid decalcified twice as fast as a 1 M solution without harming tissue staining."
},

{
question: "Recommended fluid volume compared with tissue volume is:",
options: {
A: "5:1",
B: "10:1",
C: "20:1",
D: "1:1"
},
answer: "C",
explanation: "This is accomplished by using a large volume of fluid compared with the volume of tissue (20 : 1 is recommended)."
},

{
question: "If sufficiently large volume of fluid is used per g of tissue:",
options: {
A: "50 ml",
B: "100 ml",
C: "10 ml",
D: "200 ml"
},
answer: "B",
explanation: "If a sufficiently large volume of fluid is used (100 ml per g of tissue) it is not necessary to renew the decalcifying agent."
},

{
question: "At 60°C, bone and tissues may become:",
options: {
A: "Hardened",
B: "Completely macerated",
C: "Frozen",
D: "Fixed"
},
answer: "B",
explanation: "At 60°C, the bone, soft tissues and cells may become completely macerated almost as soon as they are decalcified."
},

{
question: "Acceptable room temperature range is:",
options: {
A: "10–15°C",
B: "18–25°C",
C: "30–40°C",
D: "40–50°C"
},
answer: "B",
explanation: "In practice a room temperature (RT) range of 18–25°C is acceptable."
},

{
question: "Lower temperature decreases:",
options: {
A: "Damage",
B: "Reaction rates",
C: "Calcium binding",
D: "Staining"
},
answer: "B",
explanation: "Conversely, lower temperature decreases reaction rates."
},

{
question: "Agitation influences:",
options: {
A: "Fluid exchange",
B: "Color change",
C: "Freezing",
D: "Embedding"
},
answer: "A",
explanation: "Mechanical agitation influences fluid exchange within, as well as around tissues."
},

{
question: "Gentle fluid agitation is achieved by:",
options: {
A: "Low speed rotation",
B: "High heat",
C: "Boiling",
D: "Freezing"
},
answer: "A",
explanation: "Gentle fluid agitation is achieved by low speed rotation, rocking, stirring or bubbling air into the solution."
},

{
question: "Decalcifying fluid should contact:",
options: {
A: "One surface",
B: "All surfaces of a specimen",
C: "Bottom only",
D: "Top only"
},
answer: "B",
explanation: "The decalcifying fluid should be able to contact all surfaces of a specimen."
},

{
question: "Flat bone slabs should not touch:",
options: {
A: "Air",
B: "Each other or the bottom of a container",
C: "Thread",
D: "Cassette"
},
answer: "B",
explanation: "Flat bone slabs should not touch each other or the bottom of a container."
},

{
question: "Small numbers and similar sized specimens in one container are:",
options: {
A: "Avoided",
B: "Preferred",
C: "Prohibited",
D: "Useless"
},
answer: "B",
explanation: "Small numbers and similar sized specimens in one container are preferred."
},

{
question: "Acid decalcification involves immersing tissues in:",
options: {
A: "Water",
B: "Acid solutions",
C: "Alcohol",
D: "Resin"
},
answer: "B",
explanation: "These methods involve immersing tissues in acid solutions that dissolve calcium ions."
},

{
question: "Strong inorganic acids include:",
options: {
A: "Formic",
B: "Nitric, hydrochloric",
C: "Acetic",
D: "Picric"
},
answer: "B",
explanation: "Strong inorganic acids, e.g. nitric, hydrochloric."
},

{
question: "Recommended concentration of strong inorganic acids is:",
options: {
A: "1–2%",
B: "5–10%",
C: "20%",
D: "50%"
},
answer: "B",
explanation: "These may be used as simple aqueous solutions with recommended concentrations of 5–10%."
},

{
question: "Strong acids cause:",
options: {
A: "Tissue shrinking",
B: "Tissue swelling",
C: "No change",
D: "Freezing"
},
answer: "B",
explanation: "They decalcify rapidly, cause tissue swelling."
},

{
question: "Strong acids may seriously damage:",
options: {
A: "Container",
B: "Tissue stainability",
C: "Air",
D: "Thread"
},
answer: "B",
explanation: "Can seriously damage tissue stainability if used for longer than 24–48 hours."
},

{
question: "Old nitric acid should be:",
options: {
A: "Reused",
B: "Replaced with fresh stock",
C: "Heated",
D: "Filtered"
},
answer: "B",
explanation: "Old nitric acid is particularly damaging and should be replaced with fresh stock."
},

{
question: "Strong acids are used for:",
options: {
A: "Large frozen blocks",
B: "Needle and small biopsy specimens",
C: "Surface decalcification",
D: "Chelating only"
},
answer: "B",
explanation: "Strong acids are used for needle and small biopsy specimens allowing rapid diagnosis within 24 hours or less."
},

{
question: "Examples of strong acid decalcifier include:",
options: {
A: "EDTA",
B: "Aqueous nitric acid 5–10%",
C: "Formic only",
D: "Resin"
},
answer: "B",
explanation: "Examples of Strong Acid Decalcifier. 1. Aqueous nitric acid, 5–10%."
},

{
question: "Formic acid is:",
options: {
A: "Strong inorganic acid",
B: "Weak organic acid used extensively as a primary decalcifier",
C: "Chelator",
D: "Resin"
},
answer: "B",
explanation: "Formic acid is the only weak acid used extensively as a primary decalcifier."
},

{
question: "Formic acid is:",
options: {
A: "Faster and harsher than nitric",
B: "Gentler and slower than HCl or nitric acids",
C: "Not used",
D: "Metallic"
},
answer: "B",
explanation: "Formic acid is gentler and slower than HCl or nitric acids."
},

{
question: "Decalcification with formic acid is usually complete in:",
options: {
A: "2 hours",
B: "1–10 days",
C: "30 minutes",
D: "2 weeks"
},
answer: "B",
explanation: "Decalcification is usually complete in 1–10 days depending on the size, type of bone and acid concentration."
},

{
question: "Ion exchange resins remove:",
options: {
A: "Proteins",
B: "Calcium ions",
C: "Water",
D: "Wax"
},
answer: "B",
explanation: "Resins with a negative charge attract and bind the positively charged calcium ions."
},

{
question: "Electrolytic method attaches bone to:",
options: {
A: "Cathode",
B: "Anode (positive pole)",
C: "Negative pole",
D: "Resin"
},
answer: "B",
explanation: "The bone is attached to the anode (positive pole)."
},

{
question: "Chelating agent used is:",
options: {
A: "Formic acid",
B: "Nitric acid",
C: "EDTA",
D: "Resin"
},
answer: "C",
explanation: "The chelating agent generally used for decalcification is ethylenediaminetetraacetic acid (EDTA)."
},


  // ===== QUESTIONS 91 – 130 =====


  // ===== QUESTIONS 91 – 130 =====

{
question: "The main purpose of fixation in tissue processing is to:",
options: {
A: "Harden the tissue completely",
B: "Preserve tissue structure and prevent autolysis",
C: "Remove water from tissue",
D: "Stain the tissue"
},
answer: "B",
explanation: "Fixation preserves cellular structure and prevents autolysis and putrefaction."
},

{
question: "Autolysis is caused by:",
options: {
A: "Bacterial invasion",
B: "Poor staining technique",
C: "Self-digestion by enzymes",
D: "Overheating paraffin"
},
answer: "C",
explanation: "Autolysis is the self-digestion of cells by their own enzymes after death."
},

{
question: "Putrefaction is mainly caused by:",
options: {
A: "Heat",
B: "Bacteria",
C: "Alcohol",
D: "Xylene"
},
answer: "B",
explanation: "Putrefaction is tissue breakdown caused by bacterial action."
},

{
question: "The ideal thickness of tissue for proper fixation is:",
options: {
A: "1–2 cm",
B: "5–10 mm",
C: "10–20 mm",
D: "25 mm"
},
answer: "B",
explanation: "Tissues should be 5–10 mm thick to allow proper penetration of fixative."
},

{
question: "Formalin penetrates tissue at approximately:",
options: {
A: "1 mm per hour",
B: "5 mm per hour",
C: "10 mm per hour",
D: "20 mm per hour"
},
answer: "A",
explanation: "Formalin penetrates tissue at about 1 mm per hour."
},

{
question: "Over-fixation may result in:",
options: {
A: "Poor staining",
B: "Soft tissue",
C: "Autolysis",
D: "Tissue swelling"
},
answer: "A",
explanation: "Over-fixation can reduce staining quality."
},

{
question: "The purpose of dehydration is to:",
options: {
A: "Remove paraffin",
B: "Remove water from tissue",
C: "Add stain",
D: "Fix tissue"
},
answer: "B",
explanation: "Dehydration removes water before clearing."
},

{
question: "The most commonly used dehydrating agent is:",
options: {
A: "Xylene",
B: "Ethanol",
C: "Formalin",
D: "Paraffin"
},
answer: "B",
explanation: "Ethanol is commonly used in graded concentrations for dehydration."
},

{
question: "Clearing agents must be:",
options: {
A: "Water soluble",
B: "Alcohol soluble",
C: "Miscible with alcohol and paraffin",
D: "Acidic"
},
answer: "C",
explanation: "Clearing agents must mix with both alcohol and paraffin."
},

{
question: "The most common clearing agent is:",
options: {
A: "Ethanol",
B: "Formalin",
C: "Xylene",
D: "Acetone"
},
answer: "C",
explanation: "Xylene is the most widely used clearing agent."
},

{
question: "Over-clearing can cause tissue to become:",
options: {
A: "Soft",
B: "Brittle",
C: "Wet",
D: "Swollen"
},
answer: "B",
explanation: "Excess clearing makes tissue brittle."
},

{
question: "Paraffin wax is used for:",
options: {
A: "Fixation",
B: "Dehydration",
C: "Embedding",
D: "Staining"
},
answer: "C",
explanation: "Paraffin wax supports tissue during sectioning."
},

{
question: "The melting point of paraffin wax used in histology is usually:",
options: {
A: "30–35°C",
B: "45–60°C",
C: "80–90°C",
D: "100°C"
},
answer: "B",
explanation: "Paraffin used in histology melts around 45–60°C."
},

{
question: "Embedding molds are used to:",
options: {
A: "Dry slides",
B: "Shape paraffin blocks",
C: "Stain tissues",
D: "Fix specimens"
},
answer: "B",
explanation: "Embedding molds give shape to paraffin blocks."
},

{
question: "The instrument used to cut thin tissue sections is called:",
options: {
A: "Centrifuge",
B: "Microtome",
C: "Autoclave",
D: "Incubator"
},
answer: "B",
explanation: "A microtome cuts thin tissue sections."
},

{
question: "Routine paraffin sections are usually cut at:",
options: {
A: "1–2 µm",
B: "3–5 µm",
C: "10–15 µm",
D: "20 µm"
},
answer: "B",
explanation: "Routine paraffin sections are cut at 3–5 micrometers."
},

{
question: "A dull microtome blade causes:",
options: {
A: "Smooth sections",
B: "Chatter",
C: "Better staining",
D: "Faster cutting"
},
answer: "B",
explanation: "A dull blade causes chatter (vibrations)."
},

{
question: "Chatter in sections appears as:",
options: {
A: "Dark lines",
B: "Parallel ridges",
C: "Bubbles",
D: "Folds"
},
answer: "B",
explanation: "Chatter appears as parallel lines across the section."
},

{
question: "Floatation bath temperature should be:",
options: {
A: "Below paraffin melting point",
B: "Above 100°C",
C: "Room temperature",
D: "Freezing"
},
answer: "A",
explanation: "The water bath is kept slightly below the melting point of paraffin."
},

{
question: "The purpose of the water bath is to:",
options: {
A: "Stain sections",
B: "Flatten tissue sections",
C: "Fix tissue",
D: "Dehydrate tissue"
},
answer: "B",
explanation: "The water bath helps flatten wrinkled sections."
},

{
question: "Adhesives are used on slides to:",
options: {
A: "Color tissue",
B: "Prevent section detachment",
C: "Dry slides",
D: "Clear tissue"
},
answer: "B",
explanation: "Adhesives help sections stick firmly to slides."
},

{
question: "The most common routine stain in histology is:",
options: {
A: "Gram stain",
B: "Ziehl-Neelsen",
C: "Hematoxylin and Eosin",
D: "Giemsa"
},
answer: "C",
explanation: "H&E is the standard routine stain."
},

{
question: "Hematoxylin stains:",
options: {
A: "Cytoplasm",
B: "Nuclei",
C: "Collagen",
D: "Fat"
},
answer: "B",
explanation: "Hematoxylin stains nuclei blue/purple."
},

{
question: "Eosin stains:",
options: {
A: "Nuclei",
B: "Cytoplasm",
C: "DNA only",
D: "Lipids"
},
answer: "B",
explanation: "Eosin stains cytoplasm pink."
},

{
question: "Bluing converts hematoxylin to:",
options: {
A: "Red",
B: "Green",
C: "Blue",
D: "Yellow"
},
answer: "C",
explanation: "Bluing makes hematoxylin appear blue."
},

{
question: "Mounting medium is used to:",
options: {
A: "Stain tissue",
B: "Preserve stained sections",
C: "Fix tissue",
D: "Cut sections"
},
answer: "B",
explanation: "Mounting medium preserves stained sections under coverslip."
},

{
question: "Air bubbles under coverslip are caused by:",
options: {
A: "Too much mounting medium",
B: "Improper mounting technique",
C: "Overfixation",
D: "Excess dehydration"
},
answer: "B",
explanation: "Improper mounting causes air bubbles."
},

{
question: "Inadequate dehydration results in:",
options: {
A: "Proper embedding",
B: "Poor clearing",
C: "Better staining",
D: "Hard tissue"
},
answer: "B",
explanation: "Incomplete dehydration interferes with clearing."
},

{
question: "The purpose of quality control in histology is to:",
options: {
A: "Increase cost",
B: "Ensure accurate results",
C: "Delay processing",
D: "Reduce workload"
},
answer: "B",
explanation: "Quality control ensures reliable and accurate results."
},

{
question: "Labeling errors can lead to:",
options: {
A: "Better results",
B: "Misdiagnosis",
C: "Faster processing",
D: "Improved staining"
},
answer: "B",
explanation: "Wrong labeling may result in misdiagnosis."
},

{
question: "The freezing method of sectioning uses:",
options: {
A: "Paraffin",
B: "Cryostat",
C: "Incubator",
D: "Autoclave"
},
answer: "B",
explanation: "Cryostat is used for frozen sectioning."
},

{
question: "Frozen sections are mainly used for:",
options: {
A: "Routine staining",
B: "Urgent diagnosis",
C: "Long-term storage",
D: "Dehydration"
},
answer: "B",
explanation: "Frozen sections provide rapid intraoperative diagnosis."
},

{
question: "Artifacts in tissue sections are:",
options: {
A: "Normal structures",
B: "Processing errors",
C: "Types of cells",
D: "Stains"
},
answer: "B",
explanation: "Artifacts are distortions caused during processing."
},

{
question: "Knife marks in sections are caused by:",
options: {
A: "Sharp blade",
B: "Damaged blade edge",
C: "Proper embedding",
D: "Correct temperature"
},
answer: "B",
explanation: "Blade defects cause knife marks."
},

{
question: "Section folds are prevented by:",
options: {
A: "Cold water bath",
B: "Proper floatation",
C: "Skipping dehydration",
D: "Reducing fixation time"
},
answer: "B",
explanation: "Proper floatation on water bath removes folds."
},

{
question: "Microtome clearance angle affects:",
options: {
A: "Staining color",
B: "Section quality",
C: "Fixation",
D: "Embedding"
},
answer: "B",
explanation: "Correct clearance angle ensures smooth sectioning."
},

{
question: "Rehydration during staining occurs after:",
options: {
A: "Mounting",
B: "Deparaffinization",
C: "Fixation",
D: "Embedding"
},
answer: "B",
explanation: "Rehydration follows deparaffinization."
},

{
question: "Deparaffinization is done using:",
options: {
A: "Water",
B: "Xylene",
C: "Alcohol",
D: "Formalin"
},
answer: "B",
explanation: "Xylene removes paraffin from sections."
},

{
question: "The final step before microscopy is:",
options: {
A: "Fixation",
B: "Embedding",
C: "Mounting",
D: "Dehydration"
},
answer: "C",
explanation: "Mounting prepares slides for microscopic examination."
},



];

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
