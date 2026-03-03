// ===== quiz.js (Pro CBT Version with carousel fix) =====
const quizData = [

  // ===== QUESTIONS 1 – 90 =====
  {
    question: "In order to obtain satisfactory paraffin sections of bone, what must be removed?",
    options: { A: "Organic collagen matrix", B: "Inorganic calcium", C: "Cartilage", D: "Proteins" },
    answer: "B",
    explanation: "In order to obtain satisfactory paraffin sections of bone, inorganic calcium must be removed from the organic collagen matrix, calcified cartilage and surrounding tissues."
  },
  {
    question: "Decalcification process is carried out by which agents?",
    options: { A: "Enzymes", B: "Chemical agents", C: "Heat", D: "Water" },
    answer: "B",
    explanation: "This decalcification process is carried out by chemical agents; either acids to form soluble calcium salts, or chelating agents which bind to calcium ions."
  },
  {
    question: "Principles of Decalcification relies on the use of chemical agents that either ______ calcium salts.",
    options: { A: "Stain", B: "Dissolve or chelate", C: "Freeze", D: "Boil" },
    answer: "B",
    explanation: "Principles of Decalcification relies on the use of chemical agents that either dissolve or chelate calcium salts."
  },
  // … (continue questions 4–90 in same format)

  // ===== QUESTIONS 91 – 130 =====
  {
    question: "The main purpose of fixation in tissue processing is to:",
    options: { A: "Harden the tissue completely", B: "Preserve tissue structure and prevent autolysis", C: "Remove water from tissue", D: "Stain the tissue" },
    answer: "B",
    explanation: "Fixation preserves cellular structure and prevents autolysis and putrefaction."
  },
  {
    question: "Autolysis is caused by:",
    options: { A: "Bacterial invasion", B: "Poor staining technique", C: "Self-digestion by enzymes", D: "Overheating paraffin" },
    answer: "C",
    explanation: "Autolysis is the self-digestion of cells by their own enzymes after death."
  },
  {
    question: "Putrefaction is mainly caused by:",
    options: { A: "Heat", B: "Bacteria", C: "Alcohol", D: "Xylene" },
    answer: "B",
    explanation: "Putrefaction is tissue breakdown caused by bacterial action."
  },
  {
    question: "The ideal thickness of tissue for proper fixation is:",
    options: { A: "1–2 cm", B: "5–10 mm", C: "10–20 mm", D: "25 mm" },
    answer: "B",
    explanation: "Tissues should be 5–10 mm thick to allow proper penetration of fixative."
  },
  {
    question: "Formalin penetrates tissue at approximately:",
    options: { A: "1 mm per hour", B: "5 mm per hour", C: "10 mm per hour", D: "20 mm per hour" },
    answer: "A",
    explanation: "Formalin penetrates tissue at about 1 mm per hour."
  },
  {
    question: "Over-fixation may result in:",
    options: { A: "Poor staining", B: "Soft tissue", C: "Autolysis", D: "Tissue swelling" },
    answer: "A",
    explanation: "Over-fixation can reduce staining quality."
  },
  {
    question: "The purpose of dehydration is to:",
    options: { A: "Remove paraffin", B: "Remove water from tissue", C: "Add stain", D: "Fix tissue" },
    answer: "B",
    explanation: "Dehydration removes water before clearing."
  },
  {
    question: "The most commonly used dehydrating agent is:",
    options: { A: "Xylene", B: "Ethanol", C: "Formalin", D: "Paraffin" },
    answer: "B",
    explanation: "Ethanol is commonly used in graded concentrations for dehydration."
  },
  {
    question: "Clearing agents must be:",
    options: { A: "Water soluble", B: "Alcohol soluble", C: "Miscible with alcohol and paraffin", D: "Acidic" },
    answer: "C",
    explanation: "Clearing agents must mix with both alcohol and paraffin."
  },
  {
    question: "The most common clearing agent is:",
    options: { A: "Ethanol", B: "Formalin", C: "Xylene", D: "Acetone" },
    answer: "C",
    explanation: "Xylene is the most widely used clearing agent."
  },
  {
    question: "Over-clearing can cause tissue to become:",
    options: { A: "Soft", B: "Brittle", C: "Wet", D: "Swollen" },
    answer: "B",
    explanation: "Excess clearing makes tissue brittle."
  },
  // … (continue up to question 130 in the same format)

  // ===== LAST QUESTION (no trailing comma) =====
  {
    question: "The final step before microscopy is:",
    options: { A: "Fixation", B: "Embedding", C: "Mounting", D: "Dehydration" },
    answer: "C",
    explanation: "Mounting prepares slides for microscopic examination."
  }

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
