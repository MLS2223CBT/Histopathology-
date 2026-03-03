







// ===== quiz.js (Pro CBT Version with carousel fix) =====
const quizData = [
  { question: "What is the collective term for the series of treatments required to prepare animal and human tissue for microscopic examination?",
    options: {A:"Fixation", B:"Tissue Processing", C:"Embedding", D:"Sectioning"},
    answer: "B",
    explanation: "Tissue Processing is the collective term for the series of treatments required to prepare animal and human tissue for microscopic examination." },
  { question: "Why must tissue be infiltrated with a supportive medium during processing?",
    options: {A:"To color the tissue", B:"To hold the cells firm and stationary", C:"To remove fat", D:"To dissolve the tissue"},
    answer: "B",
    explanation: "The aim of processing is to infiltrate the tissue with a supportive medium (usually paraffin wax) that holds the cells firm and stationary." },
  // Add first 50 questions here...
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
