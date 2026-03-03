// ===== quiz.js (Pro CBT Version with carousel fix) =====
const quizData = [
  { 
    question: "What is the collective term for the series of treatments required to prepare animal and human tissue for microscopic examination?",
    options: { A: "Fixation", B: "Tissue Processing", C: "Embedding", D: "Sectioning" },
    answer: "B",
    explanation: "Tissue Processing is the collective term for the series of treatments required to prepare animal and human tissue for microscopic examination." 
  },
  { 
    question: "Why must tissue be infiltrated with a supportive medium during processing?",
    options: { A: "To color the tissue", B: "To hold the cells firm and stationary", C: "To remove fat", D: "To dissolve the tissue" },
    answer: "B",
    explanation: "The aim of processing is to infiltrate the tissue with a supportive medium (usually paraffin wax) that holds the cells firm and stationary." 
  },
  { 
    question: "What is the first step in tissue processing after fixation?",
    options: { A: "Dehydration", B: "Clearing", C: "Infiltration", D: "Embedding" },
    answer: "A",
    explanation: "Dehydration is the chemical process of removing free and bound water from tissue cells and intercellular spaces." 
  },
  { 
    question: "Why is dehydration necessary before placing tissue in paraffin wax?",
    options: { A: "Paraffin wax is hydrophilic", B: "Paraffin wax is hydrophobic and immiscible with water", C: "Water helps wax infiltration", D: "Dehydration colors the tissue" },
    answer: "B",
    explanation: "Paraffin wax is hydrophobic (water-hating) and immiscible with water. If we attempt to place wet tissue directly into wax, the wax will not enter the tissue, resulting in a soft, mushy block." 
  },
  { 
    question: "When is dehydration considered complete?",
    options: { A: "Less than 50% water remains", B: "Less than 10% water remains", C: "Less than 3–4% water remains", D: "No water remains" },
    answer: "C",
    explanation: "Dehydration is usually considered complete when less than 3–4% of water remains in the tissue." 
  },
  { 
    question: "Why is a graded alcohol series used in dehydration?",
    options: { A: "To increase speed", B: "To prevent osmotic shock and tissue shrinkage", C: "To color the tissue", D: "To sterilize tissue" },
    answer: "B",
    explanation: "We do not throw tissue directly into 100% alcohol, as the rapid rush of water out of the cell would cause 'osmotic shock,' leading to severe shrinkage and distortion." 
  },
  { 
    question: "Which dehydrating agent is standard in histology?",
    options: { A: "Ethanol", B: "Methanol", C: "Butyl Alcohol", D: "Acetone" },
    answer: "A",
    explanation: "Ethyl Alcohol (Ethanol) is the standard dehydrant. It is fast, reliable, and relatively non-toxic." 
  },
  { 
    question: "Which dehydrating agent is fast but highly volatile and can cause shrinkage if left too long?",
    options: { A: "Ethanol", B: "Acetone", C: "Methanol", D: "Butyl Alcohol" },
    answer: "B",
    explanation: "Acetone acts very rapidly, is highly volatile, and causes excessive shrinkage and brittleness if left too long." 
  },
  { 
    question: "What is the purpose of clearing in tissue processing?",
    options: { A: "Remove alcohol and make tissue transparent", B: "Color the tissue", C: "Harden tissue", D: "Remove fat only" },
    answer: "A",
    explanation: "Clearing is the process of removing the dehydrating agent (alcohol) and replacing it with a fluid that is miscible with paraffin wax. Most clearing agents have a high refractive index, making the tissue translucent." 
  },
  { 
    question: "Which clearing agent is most widely used in routine processing?",
    options: { A: "Toluene", B: "Chloroform", C: "Xylene", D: "Cedarwood Oil" },
    answer: "C",
    explanation: "Xylene (Xylol) is the most widely used routine agent. Clears rapidly and makes tissue transparent." 
  },
  { 
    question: "Which clearing agent is gentle and suitable for delicate tissues but very slow?",
    options: { A: "Cedarwood Oil", B: "Xylene", C: "Toluene", D: "Chloroform" },
    answer: "A",
    explanation: "Cedarwood Oil is very gentle, used for delicate tissues. Very slow; requires overnight clearing." 
  },
  { 
    question: "What is infiltration in tissue processing?",
    options: { A: "Removal of water", B: "Removal of alcohol", C: "Replacement of clearing agent with wax", D: "Fixation of tissue" },
    answer: "C",
    explanation: "Infiltration is the process where the clearing agent diffuses out of the tissue and molten paraffin wax diffuses in to fill all the natural cavities, intracellular spaces, and interstices of the tissue." 
  },
  { 
    question: "At what temperature is tissue usually infiltrated with molten wax?",
    options: { A: "37°C", B: "50°C", C: "56–60°C", D: "70°C" },
    answer: "C",
    explanation: "Tissue is transferred to a bath of molten wax usually kept at 56°C - 60°C." 
  },
  { 
    question: "What is the purpose of using vacuum during infiltration?",
    options: { A: "Remove trapped air bubbles and speed up wax entry", B: "Cool the tissue", C: "Increase alcohol penetration", D: "Color the tissue" },
    answer: "A",
    explanation: "Using negative pressure (vacuum) pulls any remaining air bubbles out of the tissue and speeds up wax entry." 
  },
  { 
    question: "How can tissue processing be performed?",
    options: { A: "Manual only", B: "Automated only", C: "Manual or Automated", D: "Neither" },
    answer: "C",
    explanation: "Processing can be done by hand (Manual) or by machine (Automated)." 
  },
  { 
    question: "In manual processing, which container is usually used for fixation?",
    options: { A: "10% Formalin", B: "Xylene", C: "Paraffin Wax", D: "Alcohol" },
    answer: "A",
    explanation: "Containers 1-2: 10% Formalin (Fixation) in manual processing." 
  },
  { 
    question: "Which automated tissue processor type moves tissue baskets from one reagent to another?",
    options: { A: "Fluid Transfer", B: "Tissue Transfer (Dip and Dunk)", C: "Vacuum Processor", D: "Manual Processor" },
    answer: "B",
    explanation: "Tissue Transfer Type ('Dip and Dunk') uses a central arm to lift a basket containing tissue and lower it into the next beaker." 
  },
  { 
    question: "Which automated processor type keeps tissues stationary and pumps fluids in/out?",
    options: { A: "Dip and Dunk", B: "Fluid Transfer (Enclosed)", C: "Manual", D: "Vacuum Only" },
    answer: "B",
    explanation: "Fluid Transfer Type ('Enclosed') keeps tissues stationary in a chamber and pumps fluids in and out from storage bottles." 
  },
  { 
    question: "Why must tissue be labeled with graphite pencil or solvent-resistant ink?",
    options: { A: "To color the tissue", B: "To prevent washing away in alcohol/xylene", C: "To mark orientation", D: "To dry the tissue" },
    answer: "B",
    explanation: "Labeling must be done with graphite pencil or solvent-resistant ink. Standard ink will wash away in alcohol/xylene." 
  },
  { 
    question: "What is embedding (blocking)?",
    options: { A: "Cutting tissue into sections", B: "Enclosing infiltrated tissue in a solid medium", C: "Dehydration step", D: "Clearing step" },
    answer: "B",
    explanation: "Embedding (Blocking) is the process of enclosing the infiltrated tissue in a solid mass of medium (the 'block') using a mould." 
  },
  { 
    question: "Which embedding medium is standard for light microscopy?",
    options: { A: "Paraffin Wax", B: "Methacrylate", C: "Epoxy Resin", D: "Agar" },
    answer: "A",
    explanation: "Paraffin Wax is the standard for Light Microscopy." 
  },
  { 
    question: "Which embedding medium is water-soluble and good for fats/enzymes?",
    options: { A: "Paraffin Wax", B: "Carbowax", C: "Epoxy Resin", D: "Celloidin" },
    answer: "B",
    explanation: "Carbowax is water-soluble polyethylene glycol wax. Good for fats/enzymes that are destroyed by solvents." 
  },
  { 
    question: "Which embedding medium is used for electron microscopy?",
    options: { A: "Paraffin", B: "Epoxy Resin (Araldite)", C: "Agar", D: "Celloidin" },
    answer: "B",
    explanation: "Epoxy Resin (Araldite) is used for Electron Microscopy; paraffin is too soft for ultra-thin sections needed for EM." 
  },
  { 
    question: "Which mould allows adjustable block size?",
    options: { A: "Leuckhart Moulds", B: "Plastic Cassettes", C: "Tissue-Tek", D: "Metal Tray" },
    answer: "A",
    explanation: "Leuckhart Moulds (L-Moulds) are two L-shaped pieces of brass or lead, adjustable for any block size." 
  },
  { 
    question: "Which system uses perforated plastic cassettes for embedding?",
    options: { A: "Leuckhart Moulds", B: "Tissue-Tek System", C: "Manual Moulds", D: "Metal Base" },
    answer: "B",
    explanation: "Tissue-Tek System uses a stainless steel base mould and a perforated plastic cassette that becomes the 'handle' of the block." 
  },
  { 
    question: "Which paraffin wax additive reduces crystal formation?",
    options: { A: "Beeswax", B: "Ceresin", C: "Bayberry Wax", D: "None" },
    answer: "B",
    explanation: "Ceresin (0.3-0.5%) is a hard white wax from minerals (Ozokerite) that reduces crystal formation." 
  },
  { 
    question: "Which paraffin wax additive increases tackiness?",
    options: { A: "Beeswax", B: "Ceresin", C: "Bayberry Wax", D: "None" },
    answer: "A",
    explanation: "Beeswax is a yellow wax that increases stickiness, helping sections stick together in a ribbon." 
  },
  { 
    question: "Which paraffin wax additive lowers melting point?",
    options: { A: "Beeswax", B: "Ceresin", C: "Bayberry Wax", D: "Paraffin Only" },
    answer: "C",
    explanation: "Bayberry Wax is a vegetable wax that lowers the melting point." 
  },
  { 
    question: "What is critical in embedding regarding tissue placement?",
    options: { A: "Orientation to plane of sectioning", B: "Color coding", C: "Random placement", D: "Skipping capping" },
    answer: "A",
    explanation: "Orientation refers to how the tissue is positioned in the wax. If oriented wrong, the diagnosis may be impossible." 
  },
  { 
    question: "How should skin be oriented in the mould?",
    options: { A: "Parallel to surface", B: "Right angles to surface", C: "Diagonally upward", D: "Randomly" },
    answer: "B",
    explanation: "Skin: Cut in a plane at right angles to the surface to see epidermis, dermis, and subcutis in one view." 
  },
  { 
    question: "How should tubular structures be oriented?",
    options: { A: "Longitudinally", B: "Transversely", C: "Randomly", D: "Angled" },
    answer: "B",
    explanation: "Tubular Structures (Arteries, Vas Deferens, Fallopian Tube): Oriented transversely (on end) to show a complete ring of the wall layers and lumen." 
  },
  { 
    question: "How should multiple fragments be placed in the mould?",
    options: { A: "Scattered randomly", B: "Grouped in the center, aligned with long axis", C: "Only along edges", D: "Stacked on top of each other" },
    answer: "B",
    explanation: "Multiple Fragments: Group them in the center, aligned with the long axis of the mould. Do not scatter randomly." 
  },
  { 
    question: "Which embedding medium is used for friable tissue or tiny fragments?",
    options: { A: "Paraffin", B: "Agar", C: "Celloidin", D: "Epoxy" },
    answer: "B",
    explanation: "Agar Embedding: Friable tissue or multiple tiny fragments are set in agar jelly first, then processed as a single block in paraffin." 
  },
  { 
    question: "Which embedding medium is a form of nitrocellulose?",
    options: { A: "Paraffin", B: "Celloidin", C: "Epoxy", D: "Carbowax" },
    answer: "B",
    explanation: "Celloidin is a form of nitrocellulose used for very hard tissues (eyes, bones) where heat from paraffin would cause damage." 
  },
  { 
    question: "Which embedding medium is used for frozen sections?",
    options: { A: "Gelatin", B: "Paraffin", C: "Epoxy", D: "Celloidin" },
    answer: "A",
    explanation: "Gelatin is used for frozen sections on necrotic/crumbly tissue." 
  },
  { 
    question: "What is the purpose of the cold plate in an embedding machine?",
    options: { A: "Heat moulds", B: "Rapidly cool wax base", C: "Store forceps", D: "Agitate wax" },
    answer: "B",
    explanation: "Cold Plate: A refrigerated surface (4–5°C) to rapidly cool the wax base." 
  },
  { 
    question: "Why should forceps be kept warm during embedding?",
    options: { A: "To prevent tissue sticking", B: "To speed dehydration", C: "To clear wax", D: "For decoration" },
    answer: "A",
    explanation: "Forceps Wells keep forceps hot so wax doesn't stick to them." 
  },
  { 
    question: "What is the rule for the surface of tissue in embedding?",
    options: { A: "Face UP", B: "Face DOWN", C: "Random", D: "Tilted" },
    answer: "B",
    explanation: "General Rule: The surface to be cut/examined faces DOWN in the mould." 
  },
  { 
    question: "What is the melting point of standard paraffin wax?",
    options: { A: "45–50°C", B: "56–62°C", C: "65–70°C", D: "50–55°C" },
    answer: "B",
    explanation: "Paraffin Wax: Melting Point 56°C to 62°C." 
  },
  { 
    question: "Why is molten wax filtered before embedding?",
    options: { A: "Remove dust/grit that could nick microtome knife", B: "Cool the wax", C: "Change color", D: "Increase hardness" },
    answer: "A",
    explanation: "Molten wax must be filtered through coarse filter paper to remove dust/grit that could nick the microtome knife." 
  },

  // Add first 50 questions here...
  
  
  // ===== quiz.js - Block 2 (Questions 53-92) =====

  {
    question: "What is the purpose of tissue fixation?",
    options: { A: "Preserve tissue structure", B: "Stain the tissue", C: "Infiltrate with wax", D: "Remove fat" },
    answer: "A",
    explanation: "Fixation preserves the tissue in as life-like a state as possible by halting autolysis and decomposition."
  },
  {
    question: "Which fixative is most commonly used in histology?",
    options: { A: "Formalin", B: "Acetone", C: "Alcohol", D: "Xylene" },
    answer: "A",
    explanation: "10% Neutral Buffered Formalin is the most common fixative for routine histology."
  },
  {
    question: "Why is over-fixation undesirable?",
    options: { A: "Tissue becomes too hard", B: "Cells dissolve", C: "Blocks fail to harden", D: "Tissue shrinks minimally" },
    answer: "A",
    explanation: "Over-fixation can cause excessive hardening and brittleness, making tissue difficult to section."
  },
  {
    question: "What is the main effect of fixatives on proteins?",
    options: { A: "Denaturation and cross-linking", B: "Hydrolysis", C: "Oxidation", D: "Reduction" },
    answer: "A",
    explanation: "Fixatives preserve tissue by cross-linking proteins and denaturing enzymes to prevent autolysis."
  },
  {
    question: "Why is buffered formalin preferred over plain formalin?",
    options: { A: "Reduces pH-induced tissue distortion", B: "Speeds dehydration", C: "Increases wax infiltration", D: "Colors the tissue" },
    answer: "A",
    explanation: "Buffered formalin maintains neutral pH, preventing acid-induced artifacts such as tissue shrinkage or softening."
  },
  {
    question: "What is the ideal thickness for tissue sections for light microscopy?",
    options: { A: "1–2 mm", B: "3–5 μm", C: "10–20 μm", D: "50 μm" },
    answer: "B",
    explanation: "Thin sections of 3–5 μm allow proper light penetration and resolution for histological examination."
  },
  {
    question: "Which microtome is used for routine paraffin sections?",
    options: { A: "Rotary microtome", B: "Cryostat", C: "Sliding microtome", D: "Ultramicrotome" },
    answer: "A",
    explanation: "Rotary microtomes are standard for routine paraffin-embedded tissue sectioning."
  },
  {
    question: "Why are ribbons of tissue sections formed during sectioning?",
    options: { A: "To maintain order and orientation", B: "To color tissue evenly", C: "To cool the wax", D: "To sterilize slides" },
    answer: "A",
    explanation: "Ribbons maintain sequential order of sections, helping orientation and systematic mounting."
  },
  {
    question: "What is the purpose of water bath in sectioning?",
    options: { A: "Float sections for flattening", B: "Cool microtome blade", C: "Stain tissue", D: "Remove paraffin" },
    answer: "A",
    explanation: "Sections are floated on a water bath to relax and flatten before mounting on slides."
  },
  {
    question: "Why must slides be coated with adhesive before mounting sections?",
    options: { A: "Prevent sections from detaching during staining", B: "Color the tissue", C: "Dehydrate tissue", D: "Harden wax" },
    answer: "A",
    explanation: "Adhesive (e.g., albumin, poly-L-lysine) ensures tissue sections remain attached through staining and processing."
  },
  {
    question: "What is the main difference between paraffin embedding and frozen embedding?",
    options: { A: "Frozen embedding is faster and preserves enzyme activity", B: "Paraffin is water-soluble", C: "Frozen wax is used", D: "Paraffin preserves lipids best" },
    answer: "A",
    explanation: "Frozen embedding is rapid, used for urgent diagnosis and preserves enzymes and lipids better than paraffin."
  },
  {
    question: "What is a cryostat used for?",
    options: { A: "Cutting frozen sections", B: "Embedding in paraffin", C: "Dehydration", D: "Clearing tissue" },
    answer: "A",
    explanation: "Cryostats maintain tissue at low temperature for thin frozen sectioning."
  },
  {
    question: "Why is sucrose sometimes used before freezing tissue?",
    options: { A: "To prevent ice crystal formation", B: "To harden wax", C: "To dehydrate tissue", D: "To stain tissue" },
    answer: "A",
    explanation: "Sucrose acts as a cryoprotectant to prevent ice crystals which can damage cellular structures."
  },
  {
    question: "Which method preserves antigenicity for immunohistochemistry?",
    options: { A: "Frozen sectioning", B: "Over-fixation in formalin", C: "Acetone fixation only", D: "Prolonged paraffin embedding" },
    answer: "A",
    explanation: "Frozen sections preserve antigenicity, essential for immunohistochemical staining."
  },
  {
    question: "Why are tissue cassettes perforated?",
    options: { A: "Allow reagents to penetrate easily", B: "Reduce cost", C: "Stabilize tissue orientation", D: "Prevent contamination" },
    answer: "A",
    explanation: "Perforations allow fixation, dehydration, clearing, and wax infiltration solutions to contact tissue evenly."
  },
  {
    question: "Which factor affects rate of infiltration?",
    options: { A: "Tissue size and type", B: "Color of tissue", C: "Ambient light", D: "Wax brand" },
    answer: "A",
    explanation: "Large or dense tissues infiltrate slower than small, soft tissues."
  },
  {
    question: "What is the effect of residual water in tissue before embedding?",
    options: { A: "Poor wax infiltration", B: "Better sectioning", C: "No effect", D: "Increased staining" },
    answer: "A",
    explanation: "Residual water prevents proper wax infiltration, resulting in soft or incomplete blocks."
  },
  {
    question: "What is the function of clearing agents?",
    options: { A: "Make tissue transparent and miscible with wax", B: "Dehydrate tissue", C: "Stain tissue", D: "Preserve tissue" },
    answer: "A",
    explanation: "Clearing agents replace alcohol and render tissue transparent for wax infiltration."
  },
  {
    question: "Which tissue requires rapid fixation?",
    options: { A: "Brain tissue", B: "Bone", C: "Skin", D: "Fat" },
    answer: "A",
    explanation: "Brain tissue is highly autolytic and requires rapid fixation to preserve morphology."
  },




  

     {
    question: "Which wax additive improves section adherence to slides?",
    options: { A: "Beeswax", B: "Ceresin", C: "Bayberry wax", D: "Paraffin only" },
    answer: "A",
    explanation: "Beeswax increases stickiness, helping sections adhere to slides during processing and staining."
  },
  {
    question: "Why is negative pressure applied during automated processing?",
    options: { A: "Remove trapped air and improve infiltration", B: "Cool tissue", C: "Increase staining", D: "Color tissue" },
    answer: "A",
    explanation: "Vacuum removes air bubbles in tissue, allowing wax to infiltrate uniformly."
  },
  {
    question: "What is the effect of too rapid dehydration?",
    options: { A: "Tissue shrinkage and hardening", B: "Faster sectioning", C: "Better staining", D: "No effect" },
    answer: "A",
    explanation: "Rapid dehydration can cause osmotic shock leading to shrinkage and distortion."
  },
  {
    question: "Why are thin sections preferred in histology?",
    options: { A: "For optimal light microscopy resolution", B: "To reduce staining time", C: "To save wax", D: "To preserve tissue" },
    answer: "A",
    explanation: "Thin sections allow light to pass and improve resolution for cellular detail."
  },
  {
    question: "Which embedding medium is suitable for large, friable specimens?",
    options: { A: "Agar", B: "Paraffin", C: "Celoidin", D: "Gelatin" },
    answer: "A",
    explanation: "Agar supports delicate and friable tissues, keeping fragments together during processing."
  },
  {
    question: "Which microtome is used for ultra-thin sections for electron microscopy?",
    options: { A: "Ultramicrotome", B: "Rotary microtome", C: "Sliding microtome", D: "Cryostat" },
    answer: "A",
    explanation: "Ultramicrotomes cut sections <100 nm suitable for electron microscopy."
  },
  {
    question: "Why is orientation important during embedding?",
    options: { A: "Ensures diagnostic plane of section", B: "Colors tissue evenly", C: "Reduces wax use", D: "Prevents contamination" },
    answer: "A",
    explanation: "Correct orientation ensures the relevant structures are visible in sections for diagnosis."
  },
  {
    question: "Which agent is used to remove alcohol before wax infiltration?",
    options: { A: "Xylene", B: "Acetone", C: "Ethanol", D: "Water" },
    answer: "A",
    explanation: "Clearing agents like xylene replace alcohol and allow wax infiltration."
  },
  {
    question: "Why is gradual dehydration necessary?",
    options: { A: "Prevent tissue shrinkage and distortion", B: "Speed up processing", C: "Improve staining", D: "Cool tissue" },
    answer: "A",
    explanation: "Stepwise alcohol concentrations prevent osmotic shock and excessive shrinkage."
  },
  {
    question: "Which tissue types are prone to autolysis?",
    options: { A: "Liver, brain, pancreas", B: "Bone and cartilage", C: "Skin only", D: "Fat tissue only" },
    answer: "A",
    explanation: "High enzyme content in liver, brain, and pancreas accelerates autolysis if not fixed promptly."
  },
  {
    question: "What is the standard paraffin wax melting point range?",
    options: { A: "56–62°C", B: "45–50°C", C: "65–70°C", D: "50–55°C" },
    answer: "A",
    explanation: "Standard paraffin wax melts between 56–62°C for optimal infiltration."
  },
  {
    question: "Which factor affects section thickness?",
    options: { A: "Blade angle, tissue type, and hardness", B: "Slide type", C: "Water bath temperature only", D: "Dehydration time only" },
    answer: "A",
    explanation: "Blade angle, tissue hardness, and type determine the thickness and quality of sections."
  },
  {
    question: "Why should sections be mounted on coated slides?",
    options: { A: "Prevent detachment during staining", B: "Enhance color", C: "Speed dehydration", D: "Reduce wax usage" },
    answer: "A",
    explanation: "Coated slides ensure tissue remains attached through multiple staining and washing steps."
  },
  {
    question: "What is the purpose of cold embedding plates?",
    options: { A: "Rapidly solidify wax base", B: "Color tissue", C: "Dehydrate tissue", D: "Cool microtome blade" },
    answer: "A",
    explanation: "Cold plates quickly solidify wax blocks for embedding and easy sectioning."
  },



    // Questions 53–92

  {question:"What is the usual duration for dehydration per alcohol station?",
   options:{A:"30–45 minutes", B:"60–120 minutes", C:"5–10 minutes", D:"2–3 hours"},
   answer:"B",
   explanation:"Duration: Typically 60 to 120 minutes per station during dehydration."},

  {question:"Why is agitation important during dehydration?",
   options:{A:"Prevents tissue sticking to container", B:"Prevents saturated fluid layer from stagnating", C:"Colors the tissue", D:"Removes wax"},
   answer:"B",
   explanation:"Continuous rotation or vertical oscillation prevents a layer of saturated fluid from stagnating around the tissue, speeding up diffusion."},

  {question:"How does temperature affect dehydration rate?",
   options:{A:"Higher heat slows diffusion", B:"Temperature has no effect", C:"Heat increases diffusion but too high cooks tissue", D:"Low temperature hardens tissue"},
   answer:"C",
   explanation:"Heat increases the rate of diffusion, but high heat can 'cook' or harden tissue, causing artifacts."},

  {question:"What is the function of vacuum in tissue processing?",
   options:{A:"Removes alcohol", B:"Pulls trapped air bubbles and aids reagent penetration", C:"Increases wax melting point", D:"Colors tissue"},
   answer:"B",
   explanation:"Applying a vacuum removes trapped air bubbles, aiding reagent penetration and speeding up processing."},

  {question:"Why should the final alcohol in dehydration be fresh?",
   options:{A:"Old alcohol can evaporate", B:"Impure alcohol makes clearing agent milky", C:"Fresh alcohol prevents tissue shrinking", D:"It cools the tissue"},
   answer:"B",
   explanation:"If the final alcohol contains water, the subsequent clearing agent (xylene) will turn milky, and the wax will not enter."},

  {question:"What does anhydrous Copper Sulphate indicate in alcohol?",
   options:{A:"Moisture-free alcohol", B:"Alcohol is dirty", C:"Tissue is hard", D:"Alcohol needs warming"},
   answer:"A",
   explanation:"Anhydrous CuSO₄ pulls water molecules out of alcohol; white powder indicates dry alcohol, blue crystals indicate water present."},

  {question:"What is the advantage of using acetone for dehydration?",
   options:{A:"Slower and gentler", B:"Very rapid and cheap, easily removed by clearing agents", C:"Colors tissue", D:"Prevents shrinkage"},
   answer:"B",
   explanation:"Acetone acts very rapidly, is cheaper than ethanol, and is easily removed by most clearing agents."},

  {question:"What is a disadvantage of using acetone?",
   options:{A:"Causes excessive shrinkage and brittleness", B:"Does not remove water", C:"Slow action", D:"Too safe"},
   answer:"A",
   explanation:"Acetone is highly volatile and causes excessive shrinkage and brittleness if left too long."},

  {question:"Why is clearing called 'clearing'?",
   options:{A:"It removes fat", B:"Tissue becomes translucent due to refractive index change", C:"It colors tissue", D:"It hardens tissue"},
   answer:"B",
   explanation:"Most clearing agents have a high Refractive Index; when alcohol is removed and replaced, tissue becomes translucent."},

  {question:"Which clearing agent is not suitable for brain tissue due to brittleness?",
   options:{A:"Xylene", B:"Toluene", C:"Cedarwood Oil", D:"Chloroform"},
   answer:"A",
   explanation:"Xylene hardens tissue significantly if left too long; not suitable for brain tissue."},

  {question:"Which clearing agent is heavy, toxic, and does not make tissue transparent?",
   options:{A:"Xylene", B:"Chloroform", C:"Toluene", D:"Cedarwood Oil"},
   answer:"B",
   explanation:"Chloroform is excellent for uterus, muscle, and brain, but is heavy, toxic, and does not make tissue transparent."},

  {question:"Which clearing agent mixture is used for fibrous uterus tissues?",
   options:{A:"Carbol-Xylene", B:"Xylene", C:"Toluene", D:"Cedarwood Oil"},
   answer:"A",
   explanation:"Carbol-Xylene is a mixture of phenol and xylene; clears very rapidly and reserved for difficult tissues."},

  {question:"Why is paraffin wax used in infiltration?",
   options:{A:"Softens tissue", B:"Supports tissue for thin sectioning", C:"Colors tissue", D:"Removes alcohol"},
   answer:"B",
   explanation:"Paraffin wax fills natural cavities, intracellular spaces, and interstices of the tissue, giving support for cutting thin sections."},

  {question:"What is the usual wax temperature for infiltration?",
   options:{A:"37–40°C", B:"50–55°C", C:"56–60°C", D:"70–75°C"},
   answer:"C",
   explanation:"Molten wax is usually kept at 56–60°C for tissue infiltration."},

  {question:"How does vacuum help during infiltration?",
   options:{A:"Removes alcohol", B:"Pulls air bubbles and speeds wax entry", C:"Colors tissue", D:"Cools tissue"},
   answer:"B",
   explanation:"Vacuum removes trapped air bubbles and speeds up wax entry, especially in spongy tissue like lung."},

  {question:"Which manual processing container contains xylene?",
   options:{A:"3–4", B:"9–10", C:"1–2", D:"11–12"},
   answer:"B",
   explanation:"Containers 9–10 in manual processing are for xylene (clearing)."}, 

  {question:"Which embedding medium is used when paraffin heat would damage tissue?",
   options:{A:"Celloidin", B:"Paraffin", C:"Agar", D:"Epoxy"},
   answer:"A",
   explanation:"Celloidin is used for very hard tissues where heat from paraffin would cause damage."},

  {question:"Which embedding medium is polymerized and generates heat?",
   options:{A:"Paraffin", B:"Methacrylate", C:"Agar", D:"Gelatin"},
   answer:"B",
   explanation:"Methacrylate (plastic) is harder than wax, miscible with alcohol, but polymerization generates heat."},

  {question:"Which embedding medium is water-soluble and allows skipping alcohol/clearing?",
   options:{A:"Carbowax", B:"Paraffin", C:"Epoxy", D:"Celoidin"},
   answer:"A",
   explanation:"Carbowax is water-soluble; tissues go directly from fixation/water into Carbowax."},

  {question:"What is the use of agar embedding?",
   options:{A:"Tiny fragments or friable tissue", B:"Electron microscopy", C:"Light microscopy", D:"Frozen sections"},
   answer:"A",
   explanation:"Agar is used for friable tissue or multiple tiny fragments; double impregnation technique."},

  {question:"Why are forceps wells kept hot?",
   options:{A:"Prevent wax sticking", B:"Cool tissue", C:"Speed dehydration", D:"Prevent air bubbles"},
   answer:"A",
   explanation:"Forceps wells keep forceps hot so wax doesn't stick to them during embedding."},

  {question:"What is the purpose of the cold plate in embedding?",
   options:{A:"Cool wax rapidly", B:"Heat moulds", C:"Agitate wax", D:"Store forceps"},
   answer:"A",
   explanation:"Cold plate is a refrigerated surface to rapidly cool the wax base."},

  {question:"Which plane should skin be cut for embedding?",
   options:{A:"Parallel", B:"Right angles", C:"Diagonal", D:"Random"},
   answer:"B",
   explanation:"Skin should be cut at right angles to surface to see epidermis, dermis, and subcutis."},

  {question:"How should tubular structures be oriented?",
   options:{A:"Longitudinal", B:"Transverse", C:"Random", D:"Angled"},
   answer:"B",
   explanation:"Tubular structures should be oriented transversely to show complete rings of wall layers and lumen."},

  {question:"How should multiple tissue fragments be placed in the mould?",
   options:{A:"Scattered", B:"Grouped in center along long axis", C:"Edges", D:"Stacked"},
   answer:"B",
   explanation:"Multiple fragments should be grouped in the center, aligned with the long axis of the mould."},

  {question:"Which paraffin wax additive increases stickiness?",
   options:{A:"Beeswax", B:"Ceresin", C:"Bayberry Wax", D:"None"},
   answer:"A",
   explanation:"Beeswax increases tackiness, helping sections stick together in a ribbon."},

  {question:"Which paraffin wax additive reduces crystal formation?",
   options:{A:"Beeswax", B:"Ceresin", C:"Bayberry Wax", D:"None"},
   answer:"B",
   explanation:"Ceresin reduces crystal formation, making wax smoother."},

  {question:"Which paraffin wax additive lowers melting point?",
   options:{A:"Beeswax", B:"Ceresin", C:"Bayberry Wax", D:"None"},
   answer:"C",
   explanation:"Bayberry Wax lowers the melting point of wax."},

  {question:"What is the general rule for tissue orientation in embedding?",
   options:{A:"Face UP", B:"Face DOWN", C:"Random", D:"Tilted"},
   answer:"B",
   explanation:"The surface to be cut/examined faces DOWN in the mould."},

  {question:"Why should molten wax be filtered before embedding?",
   options:{A:"Remove dust/grit", B:"Cool wax", C:"Change color", D:"Increase hardness"},
   answer:"A",
   explanation:"Molten wax must be filtered to remove dust/grit that could nick the microtome knife."},

  {question:"What is the melting point of standard paraffin wax?",
   options:{A:"45–50°C", B:"56–62°C", C:"65–70°C", D:"50–55°C"},
   answer:"B",
   explanation:"Paraffin Wax melting point is 56–62°C."},

  {question:"What is embedding (blocking)?",
   options:{A:"Cutting tissue", B:"Enclosing tissue in solid medium", C:"Dehydration", D:"Clearing"},
   answer:"B",
   explanation:"Embedding is enclosing infiltrated tissue in a solid block using a mould."},

  {question:"Why is orientation critical during embedding?",
   options:{A:"For visual appeal", B:"Plane of sectioning determines diagnosis", C:"Random", D:"To speed processing"},
   answer:"B",
   explanation:"If tissue is oriented wrong, diagnosis may be impossible."},



  
// Questions 93–132

  {question:"Which microtome type is most commonly used in routine histology?",
   options:{A:"Sliding microtome", B:"Rotary microtome", C:"Cryostat", D:"Freezing microtome"},
   answer:"B",
   explanation:"Rotary microtome is most common for routine paraffin sections due to precision and ease of use."},

  {question:"What is the primary purpose of a microtome?",
   options:{A:"Embedding tissue", B:"Sectioning tissue into thin slices", C:"Dehydrating tissue", D:"Clearing tissue"},
   answer:"B",
   explanation:"Microtome cuts tissue into thin sections suitable for microscopy."},

  {question:"What thickness is typical for paraffin sections for light microscopy?",
   options:{A:"1–2 µm", B:"3–5 µm", C:"10–15 µm", D:"20–30 µm"},
   answer:"B",
   explanation:"Paraffin sections for light microscopy are usually 3–5 µm thick."},

  {question:"Why is trimming necessary before obtaining serial sections?",
   options:{A:"To remove excess wax", B:"To expose tissue block surface and remove damaged tissue", C:"To cool tissue", D:"To dye tissue"},
   answer:"B",
   explanation:"Trimming removes excess wax and damaged tissue, exposing fresh tissue surface for uniform sectioning."},

  {question:"Which knife edge is standard for routine paraffin microtomy?",
   options:{A:"Glass knife", B:"Disposable steel blade", C:"Diamond knife", D:"Ceramic knife"},
   answer:"B",
   explanation:"Disposable steel blades are standard for routine paraffin sections due to cost and ease of replacement."},

  {question:"Why might a diamond knife be used in microtomy?",
   options:{A:"Routine paraffin sections", B:"Electron microscopy ultrathin sections", C:"Frozen sections", D:"Dehydration step"},
   answer:"B",
   explanation:"Diamond knives are used for ultra-thin sections for electron microscopy due to durability and sharpness."},

  {question:"Which microtome accessory helps maintain uniform section thickness?",
   options:{A:"Section thickness dial", B:"Cold plate", C:"Forceps", D:"Embedding mould"},
   answer:"A",
   explanation:"Section thickness dial allows precise adjustment of thickness for consistent slices."},

  {question:"What is a ribbon in microtomy?",
   options:{A:"A strip of wax", B:"Continuous series of sections stuck together", C:"Dehydration tool", D:"Clearing agent"},
   answer:"B",
   explanation:"A ribbon is a series of consecutive sections that stick together after cutting, typical in paraffin microtomy."},

  {question:"Why is water bath used after sectioning?",
   options:{A:"Cool tissue", B:"Flatten and remove wrinkles from sections", C:"Dye sections", D:"Dehydrate sections"},
   answer:"B",
   explanation:"Floating sections on a warm water bath relaxes wrinkles and allows them to adhere smoothly to slides."},

  {question:"At what temperature is water bath usually maintained for paraffin sections?",
   options:{A:"25–30°C", B:"35–40°C", C:"45–50°C", D:"60–65°C"},
   answer:"C",
   explanation:"Water bath for paraffin sections is maintained at 45–50°C to relax sections without melting wax."},

  {question:"Why are slides coated before mounting sections?",
   options:{A:"Improve adhesion of sections to slide", B:"Dye tissue", C:"Dehydrate tissue", D:"Flatten tissue"},
   answer:"A",
   explanation:"Coating (e.g., poly-L-lysine) helps paraffin sections adhere firmly to slides during processing."},

  {question:"Which staining technique is routine for general tissue morphology?",
   options:{A:"Hematoxylin and Eosin", B:"PAS", C:"Silver stain", D:"Trichrome"},
   answer:"A",
   explanation:"Hematoxylin and Eosin (H&E) is the standard stain for general tissue structure."},

  {question:"What does hematoxylin stain?",
   options:{A:"Cytoplasm", B:"Nuclei (basophilic structures)", C:"Collagen", D:"Lipids"},
   answer:"B",
   explanation:"Hematoxylin stains basophilic structures, primarily nuclei, blue-purple."},

  {question:"What does eosin stain?",
   options:{A:"Nuclei", B:"Cytoplasm and extracellular matrix (acidophilic structures)", C:"Lipids", D:"Carbohydrates"},
   answer:"B",
   explanation:"Eosin stains acidophilic components like cytoplasm, collagen, and extracellular matrix pink."},

  {question:"Why is differentiation necessary after hematoxylin staining?",
   options:{A:"To remove excess dye from tissue", B:"To fix tissue", C:"To embed tissue", D:"To dehydrate tissue"},
   answer:"A",
   explanation:"Differentiation removes excess hematoxylin to provide clear contrast between nucleus and cytoplasm."},

  {question:"Why is bluing performed after differentiation?",
   options:{A:"To make nuclei appear blue instead of red-purple", B:"To embed tissue", C:"To remove wax", D:"To dehydrate tissue"},
   answer:"A",
   explanation:"Bluing converts reddish-purple hematoxylin to crisp blue, enhancing nuclear detail."},

  {question:"Which is a cytochemical stain for carbohydrates?",
   options:{A:"PAS", B:"H&E", C:"Silver", D:"Trichrome"},
   answer:"A",
   explanation:"Periodic Acid-Schiff (PAS) stains polysaccharides and mucosubstances magenta."},

  {question:"Which stain is used for reticular fibers?",
   options:{A:"H&E", B:"Silver stain", C:"Trichrome", D:"PAS"},
   answer:"B",
   explanation:"Reticulin (reticular) fibers are visualized using silver staining techniques."},

  {question:"Which stain differentiates collagen from muscle fibers?",
   options:{A:"H&E", B:"Masson’s Trichrome", C:"PAS", D:"Silver"},
   answer:"B",
   explanation:"Masson’s Trichrome stains collagen blue/green and muscle fibers red."},

  {question:"Why are frozen sections used?",
   options:{A:"Routine paraffin work", B:"Rapid diagnosis and enzyme preservation", C:"Permanent storage", D:"Dehydration"},
   answer:"B",
   explanation:"Frozen sections are rapid and preserve enzyme activity, used in intraoperative diagnosis."},

  {question:"What embedding medium is used in frozen sections?",
   options:{A:"Paraffin", B:"OCT compound", C:"Agar", D:"Epoxy resin"},
   answer:"B",
   explanation:"Optimal Cutting Temperature (OCT) compound is used for frozen section embedding."},

  {question:"At what temperature are frozen sections cut?",
   options:{A:"Room temperature", B:"-20°C to -30°C", C:"37°C", D:"56°C"},
   answer:"B",
   explanation:"Frozen sections are cut at -20°C to -30°C to maintain tissue integrity."},

  {question:"Why is cryostat preferred for frozen sections?",
   options:{A:"Maintains constant freezing temperature and allows precise sectioning", B:"Dehydrates tissue", C:"Clears tissue", D:"Colors tissue"},
   answer:"A",
   explanation:"Cryostat allows sections to be cut in a cold chamber with precise thickness control."},

  {question:"Which fixative is commonly used for frozen sections?",
   options:{A:"10% Formalin", B:"Acetone or alcohol-based", C:"Glutaraldehyde", D:"Osmium tetroxide"},
   answer:"B",
   explanation:"Acetone or alcohol-based fixatives are fast and preserve enzyme activity in frozen sections."},

  {question:"Why is rapid staining essential in frozen sections?",
   options:{A:"Permanent storage", B:"Provides quick diagnosis during surgery", C:"Enhances wax penetration", D:"Dehydrates tissue"},
   answer:"B",
   explanation:"Rapid staining allows pathologists to make intraoperative decisions quickly."},

  {question:"What is the main disadvantage of frozen sections?",
   options:{A:"Time-consuming", B:"Lower morphological quality than paraffin sections", C:"Cannot preserve enzymes", D:"Requires embedding in paraffin"},
   answer:"B",
   explanation:"Frozen sections often have lower resolution and section quality than paraffin sections."},

  {question:"Which fixative is considered universal for tissue preservation?",
   options:{A:"10% Neutral Buffered Formalin", B:"Acetone", C:"Alcohol", D:"Glutaraldehyde"},
   answer:"A",
   explanation:"10% NBF preserves tissue morphology well for routine histology."},

  {question:"Which fixative is preferred for electron microscopy?",
   options:{A:"10% NBF", B:"Glutaraldehyde", C:"Acetone", D:"Alcohol"},
   answer:"B",
   explanation:"Glutaraldehyde cross-links proteins, preserving ultrastructure for EM."},

  {question:"Which fixative is best for cytology smears?",
   options:{A:"Ethanol", B:"10% NBF", C:"Glutaraldehyde", D:"Formalin"},
   answer:"A",
   explanation:"Ethanol preserves cells on smears and prevents lysis."},

  {question:"Why is pH control important in fixation?",
   options:{A:"Prevents tissue dehydration", B:"Prevents nuclear shrinkage or chromatin artifacts", C:"Speeds wax penetration", D:"Colors tissue"},
   answer:"B",
   explanation:"Proper pH avoids nuclear artifacts and preserves morphology."},

  {question:"Why should tissue thickness be controlled during fixation?",
   options:{A:"Faster processing", B:"Ensures adequate penetration and preservation", C:"Colors tissue", D:"Hardens tissue"},
   answer:"B",
   explanation:"Thick tissue may not fix adequately; ideal thickness ensures uniform preservation."},

  {question:"Which factor accelerates fixation?",
   options:{A:"High temperature", B:"Small tissue size, good fixative volume, agitation", C:"Thick tissue", D:"Cold temperature"},
   answer:"B",
   explanation:"Smaller tissue, sufficient fixative, and agitation speed fixation."},

  {question:"Why is 10:1 fixative to tissue volume recommended?",
   options:{A:"Prevent tissue drying", B:"Ensure proper chemical penetration", C:"Speed dehydration", D:"Improve staining"},
   answer:"B",
   explanation:"Adequate volume ensures uniform chemical penetration for fixation."},

  {question:"Which fixative preserves enzyme activity?",
   options:{A:"10% NBF", B:"Alcohol-based or acetone", C:"Glutaraldehyde", D:"Xylene"},
   answer:"B",
   explanation:"Alcohol or acetone fixes while preserving enzyme activity, important for cytochemistry."},

  {question:"Which fixative is preferred for preserving lipids?",
   options:{A:"Osmium tetroxide", B:"10% NBF", C:"Acetone", D:"Alcohol"},
   answer:"A",
   explanation:"Osmium tetroxide preserves lipids, used for EM and special staining."},

  {question:"Why must tissue be labeled before fixation?",
   options:{A:"To identify orientation and specimen", B:"To speed dehydration", C:"To improve wax penetration", D:"To dye tissue"},
   answer:"A",
   explanation:"Labeling ensures correct identification and orientation of specimens throughout processing."},





  
// Questions 133–172
  {question:"What is the main purpose of fixation in histology?",
   options:{A:"Color tissue", B:"Preserve tissue morphology", C:"Dehydrate tissue", D:"Embed tissue"},
   answer:"B",
   explanation:"Fixation preserves tissue morphology and prevents autolysis and decomposition."},

  {question:"Which chemical group in formalin reacts with tissue proteins?",
   options:{A:"Aldehyde group", B:"Alcohol group", C:"Carboxyl group", D:"Ketone group"},
   answer:"A",
   explanation:"Formaldehyde (aldehyde group) cross-links proteins, preserving tissue structure."},

  {question:"Why is neutral buffered formalin preferred over unbuffered formalin?",
   options:{A:"Faster penetration", B:"Prevents acid formalin pigment formation", C:"Reduces dehydration time", D:"Improves embedding"},
   answer:"B",
   explanation:"Buffering prevents formation of formalin pigment and tissue artifacts."},

  {question:"Which fixative is best for preserving nucleic acids?",
   options:{A:"10% NBF", B:"Alcohol-based", C:"Glutaraldehyde", D:"Osmium tetroxide"},
   answer:"B",
   explanation:"Alcohol-based fixatives preserve DNA and RNA better than formalin."},

  {question:"Which factor slows fixation?",
   options:{A:"Thin tissue", B:"Large tissue block", C:"Agitation", D:"High fixative volume"},
   answer:"B",
   explanation:"Large or thick tissue slows penetration of fixative, leading to incomplete fixation."},

  {question:"What is the main disadvantage of acetone as a fixative?",
   options:{A:"Destroys enzymes", B:"Brittleness and shrinkage", C:"Slow fixation", D:"Does not preserve nucleic acids"},
   answer:"B",
   explanation:"Acetone fixes rapidly but may cause tissue brittleness and shrinkage."},

  {question:"Why is perfusion fixation used?",
   options:{A:"For small tissue pieces", B:"To rapidly fix entire organs via blood vessels", C:"For frozen sections", D:"To dehydrate tissue"},
   answer:"B",
   explanation:"Perfusion allows rapid fixation of large organs through vascular circulation."},

  {question:"Which fixative is preferred for immunohistochemistry?",
   options:{A:"10% NBF", B:"Alcohol-based", C:"Glutaraldehyde", D:"Osmium tetroxide"},
   answer:"B",
   explanation:"Alcohol-based fixatives preserve antigenicity better than cross-linking fixatives."},

  {question:"Why should tissue be trimmed before fixation?",
   options:{A:"Remove debris", B:"Ensure fixative penetration", C:"Color tissue", D:"Dehydrate tissue"},
   answer:"B",
   explanation:"Trimming to appropriate thickness ensures uniform fixative penetration."},

  {question:"Which factor is NOT critical for proper fixation?",
   options:{A:"Tissue size", B:"Fixative volume", C:"Temperature", D:"Slide coating"},
   answer:"D",
   explanation:"Slide coating is irrelevant to fixation; tissue size, fixative volume, and temperature matter."},

  {question:"Why is gentle agitation used during fixation?",
   options:{A:"Speed wax penetration", B:"Enhance fixative contact and penetration", C:"Color tissue", D:"Flatten tissue"},
   answer:"B",
   explanation:"Agitation helps fixative reach all tissue areas, ensuring uniform fixation."},

  {question:"Which fixative is used for electron microscopy to preserve membranes?",
   options:{A:"10% NBF", B:"Glutaraldehyde", C:"Ethanol", D:"Acetone"},
   answer:"B",
   explanation:"Glutaraldehyde cross-links proteins, preserving ultrastructure and membranes for EM."},

  {question:"What is postfixation in EM?",
   options:{A:"Secondary fixation with osmium tetroxide to preserve lipids", B:"Primary fixation", C:"Dehydration", D:"Embedding"},
   answer:"A",
   explanation:"Postfixation with osmium stabilizes lipid structures and enhances contrast in EM."},

  {question:"Why is dehydration required before paraffin embedding?",
   options:{A:"To remove alcohol", B:"Paraffin wax is hydrophobic", C:"Color tissue", D:"Section tissue"},
   answer:"B",
   explanation:"Wax cannot penetrate water; tissue must be dehydrated first."},

  {question:"Which alcohol series is commonly used in dehydration?",
   options:{A:"70%, 80%, 95%, 100%", B:"50%, 60%, 70%, 80%", C:"100% only", D:"20%, 40%, 60%, 80%"},
   answer:"A",
   explanation:"Graded series gradually removes water, preventing tissue shrinkage."},

  {question:"What is the purpose of clearing?",
   options:{A:"Color tissue", B:"Replace alcohol with wax-compatible fluid", C:"Dehydrate tissue", D:"Trim tissue"},
   answer:"B",
   explanation:"Clearing replaces dehydrant with a medium miscible with paraffin, making tissue translucent."},

  {question:"Which is the most common clearing agent?",
   options:{A:"Xylene", B:"Toluene", C:"Cedarwood oil", D:"Chloroform"},
   answer:"A",
   explanation:"Xylene is rapid, effective, and standard for routine clearing."},

  {question:"Why is infiltration important?",
   options:{A:"Remove water", B:"Replace clearing agent with wax for support", C:"Color tissue", D:"Dehydrate tissue"},
   answer:"B",
   explanation:"Infiltration fills tissue spaces with wax, providing structural support for sectioning."},

  {question:"What is embedding?",
   options:{A:"Sectioning tissue", B:"Enclosing tissue in solid medium", C:"Dehydration", D:"Clearing"},
   answer:"B",
   explanation:"Embedding surrounds tissue with solid medium to allow proper orientation and sectioning."},

  {question:"Which factor is critical in embedding?",
   options:{A:"Orientation of tissue", B:"Temperature only", C:"Wax type only", D:"Slide coating"},
   answer:"A",
   explanation:"Correct orientation ensures diagnostically relevant structures are visible."},

  {question:"Which embedding medium is preferred for electron microscopy?",
   options:{A:"Paraffin", B:"Epoxy resin", C:"Agar", D:"Celloidin"},
   answer:"B",
   explanation:"Epoxy resin provides ultra-thin support for EM sections."},

  {question:"Why is trimming necessary before sectioning?",
   options:{A:"Remove damaged tissue and wax", B:"Dehydrate tissue", C:"Clear tissue", D:"Color tissue"},
   answer:"A",
   explanation:"Trimming exposes fresh tissue surface for uniform sections."},

  {question:"What is a water bath used for after sectioning?",
   options:{A:"Color tissue", B:"Flatten and relax sections", C:"Dehydrate tissue", D:"Embed tissue"},
   answer:"B",
   explanation:"Warm water bath removes wrinkles and helps sections adhere to slides."},

  {question:"At what temperature is paraffin water bath maintained?",
   options:{A:"45–50°C", B:"25–30°C", C:"37°C", D:"60–65°C"},
   answer:"A",
   explanation:"Optimal temperature relaxes sections without melting wax."},

  {question:"Why are slides coated before mounting?",
   options:{A:"Improve adhesion", B:"Color tissue", C:"Dehydrate tissue", D:"Embed tissue"},
   answer:"A",
   explanation:"Coating ensures paraffin sections stick firmly to slides during staining."},

  {question:"Which stain shows general tissue morphology?",
   options:{A:"H&E", B:"PAS", C:"Silver", D:"Trichrome"},
   answer:"A",
   explanation:"Hematoxylin and eosin highlights general morphology and nuclei."},

  {question:"Which stain highlights polysaccharides?",
   options:{A:"PAS", B:"H&E", C:"Silver", D:"Trichrome"},
   answer:"A",
   explanation:"Periodic Acid-Schiff stains carbohydrates magenta."},

  {question:"Which stain is used for reticular fibers?",
   options:{A:"Silver stain", B:"H&E", C:"PAS", D:"Trichrome"},
   answer:"A",
   explanation:"Silver impregnation highlights reticular fibers black."},

  {question:"Which stain differentiates collagen and muscle?",
   options:{A:"Masson’s Trichrome", B:"H&E", C:"PAS", D:"Silver"},
   answer:"A",
   explanation:"Collagen stains blue/green and muscle stains red with Masson’s Trichrome."},

  {question:"Why are frozen sections used?",
   options:{A:"Rapid diagnosis and enzyme preservation", B:"Routine work", C:"Dehydration", D:"Embedding"},
   answer:"A",
   explanation:"Frozen sections allow intraoperative diagnosis and preserve enzyme activity."},

  {question:"Which embedding medium is used for frozen sections?",
   options:{A:"OCT compound", B:"Paraffin", C:"Agar", D:"Epoxy resin"},
   answer:"A",
   explanation:"OCT supports frozen tissue for rapid sectioning."},

  {question:"At what temperature are frozen sections cut?",
   options:{A:"-20°C to -30°C", B:"Room temperature", C:"37°C", D:"56°C"},
   answer:"A",
   explanation:"Frozen tissue requires low temperature to maintain integrity."},

  {question:"Which fixative is suitable for preserving enzymes in frozen sections?",
   options:{A:"Acetone or alcohol-based", B:"10% NBF", C:"Glutaraldehyde", D:"Osmium tetroxide"},
   answer:"A",
   explanation:"Alcohol or acetone preserves enzyme activity during fixation."},

  {question:"Which factor ensures good fixation of large tissue blocks?",
   options:{A:"Small size, agitation, sufficient fixative", B:"High temperature only", C:"Slide coating", D:"Embedding medium"},
   answer:"A",
   explanation:"Small size, agitation, and sufficient fixative volume ensure penetration and preservation."},

  {question:"Which type of microtome is used for frozen sections?",
   options:{A:"Cryostat", B:"Rotary microtome", C:"Sliding microtome", D:"Diamond microtome"},
   answer:"A",
   explanation:"Cryostat maintains cold temperature for frozen sectioning."},

  {question:"Which knife is typically used for paraffin sections?",
   options:{A:"Disposable steel blade", B:"Diamond knife", C:"Glass knife", D:"Ceramic knife"},
   answer:"A",
   explanation:"Disposable steel blades are standard for routine paraffin microtomy."},



  {question:"What is the function of fixation in tissue processing?",
   options:{A:"To soften tissue", B:"To preserve tissue and prevent decay", C:"To color tissue", D:"To remove water"},
   answer:"B",
   explanation:"Fixation preserves tissue and prevents decay by cross-linking proteins and stabilizing cell structures."},

  {question:"Which factor affects fixation rate?",
   options:{A:"Tissue size and thickness", B:"Color of tissue", C:"Shape of container", D:"Temperature only"},
   answer:"A",
   explanation:"Permeability and thickness of tissue affect how quickly fixatives penetrate."},

  {question:"Why is 10% formalin commonly used for fixation?",
   options:{A:"It is fast and cheap", B:"It is non-toxic", C:"It preserves tissue morphology and prevents decay", D:"It dehydrates tissue"},
   answer:"C",
   explanation:"10% formalin preserves tissue morphology and prevents decay."},

  {question:"What is the main risk if tissue is placed directly into 100% alcohol?",
   options:{A:"Faster processing", B:"Osmotic shock causing shrinkage and distortion", C:"Better clarity", D:"Tissue dissolves"},
   answer:"B",
   explanation:"Direct placement in 100% alcohol causes osmotic shock, leading to severe shrinkage and distortion."},

  {question:"Why is agitation used during dehydration?",
   options:{A:"To prevent tissue from floating", B:"To speed up diffusion and avoid saturated layers", C:"To color tissue", D:"To make tissue transparent"},
   answer:"B",
   explanation:"Agitation prevents stagnation of saturated fluid around tissue, speeding diffusion of dehydrants."},

  {question:"What is the role of temperature during dehydration?",
   options:{A:"No effect", B:"High temperature can cook tissue", C:"Low temperature speeds dehydration", D:"It changes tissue color"},
   answer:"B",
   explanation:"Heat increases diffusion rate but excessive heat can harden or 'cook' tissue, causing artifacts."},

  {question:"What is the purpose of using anhydrous Copper Sulphate in absolute alcohol?",
   options:{A:"To color tissue", B:"To absorb water and indicate when alcohol is no longer absolute", C:"To fix tissue", D:"To speed clearing"},
   answer:"B",
   explanation:"Anhydrous CuSO₄ absorbs water, prolongs alcohol life, and turns blue when alcohol is no longer water-free."},

  {question:"Why might acetone be preferred in some dehydration protocols?",
   options:{A:"It is slow and gentle", B:"Fast action and cheaper than ethanol for small biopsies", C:"It colors tissue", D:"It is non-flammable"},
   answer:"B",
   explanation:"Acetone acts rapidly and is often used for urgent or small biopsies, though it can cause shrinkage if left too long."},

  {question:"Which clearing agent is unsuitable for brain tissue?",
   options:{A:"Xylene", B:"Cedarwood Oil", C:"Chloroform", D:"Toluene"},
   answer:"A",
   explanation:"Xylene hardens tissue significantly and is unsuitable for brain tissue due to brittleness."},

  {question:"What is the main purpose of infiltration?",
   options:{A:"To remove water", B:"To make tissue colorful", C:"To fill tissue spaces with wax for sectioning", D:"To fix tissue"},
   answer:"C",
   explanation:"Infiltration replaces clearing agent with wax to support tissue for thin sectioning."},

  {question:"Which embedding medium is used to avoid heat damage to hard tissues like bones?",
   options:{A:"Paraffin Wax", B:"Celloidin", C:"Agar", D:"Carbowax"},
   answer:"B",
   explanation:"Celloidin is used for very hard tissues where heat from paraffin would cause damage."},

  {question:"Why is agar embedding used before paraffin for friable tissues?",
   options:{A:"To color tissue", B:"To provide initial support and prevent crumbling", C:"To harden tissue chemically", D:"To dehydrate tissue"},
   answer:"B",
   explanation:"Agar provides temporary support for friable or tiny tissue fragments before paraffin embedding."},

  {question:"Which embedding medium is water-soluble and avoids alcohol/clearing?",
   options:{A:"Carbowax", B:"Paraffin Wax", C:"Epoxy Resin", D:"Celloidin"},
   answer:"A",
   explanation:"Carbowax is water-soluble, allowing tissue to go directly from fixation into embedding without alcohol/clearing."},

  {question:"What is the purpose of the hot plate in embedding?",
   options:{A:"Cool wax", B:"Keep moulds and forceps warm to prevent wax solidifying", C:"Store forceps", D:"Rotate tissue"},
   answer:"B",
   explanation:"The hot plate keeps moulds and forceps warm so wax does not solidify prematurely."},

  {question:"How should elongate tissue be oriented in the mould?",
   options:{A:"Along the edge", B:"Diagonally to minimize vibration during cutting", C:"Randomly", D:"Only vertical"},
   answer:"B",
   explanation:"Elongate tissue is placed diagonally to minimize vibration during microtome cutting."},

  {question:"What is the purpose of paraffin wax additives like beeswax?",
   options:{A:"Lower melting point", B:"Increase stickiness to help ribbon formation", C:"Reduce hardness", D:"Color tissue"},
   answer:"B",
   explanation:"Beeswax increases tackiness, helping tissue sections stick together in ribbons."},

  {question:"What is the melting point range of standard paraffin wax?",
   options:{A:"45–50°C", B:"56–62°C", C:"65–70°C", D:"50–55°C"},
   answer:"B",
   explanation:"Standard paraffin wax melts between 56–62°C."},

  {question:"Which embedding medium is used for electron microscopy sections?",
   options:{A:"Paraffin Wax", B:"Epoxy Resin (Araldite)", C:"Agar", D:"Celloidin"},
   answer:"B",
   explanation:"Epoxy resin is used for EM because it is hard enough for ultra-thin sectioning."},

  {question:"Why are tissue cassettes useful in embedding?",
   options:{A:"Prevent labeling", B:"Provide a handle and stackable system for wax blocks", C:"Replace moulds", D:"Color tissue"},
   answer:"B",
   explanation:"Plastic cassettes hold tissue during processing and become handles during embedding, making blocks stackable."},

  {question:"What is the correct orientation for skin tissue in embedding?",
   options:{A:"Parallel to surface", B:"Cut at right angles to surface", C:"Random", D:"Angled upright"},
   answer:"B",
   explanation:"Skin should be cut at right angles to show epidermis, dermis, and subcutis in one section."},

  {question:"What is the correct orientation for tubular structures like arteries?",
   options:{A:"Longitudinal", B:"Transverse", C:"Diagonal", D:"Random"},
   answer:"B",
   explanation:"Tubular structures are oriented transversely to show the lumen and complete wall layers."},

  {question:"How should multiple tissue fragments be arranged in the mould?",
   options:{A:"Randomly scattered", B:"Grouped in center aligned with long axis", C:"On the edge", D:"Stacked"},
   answer:"B",
   explanation:"Multiple fragments should be grouped in the center aligned with the long axis of the mould."},

  {question:"Which medium is used for frozen sections and necrotic tissue?",
   options:{A:"Paraffin", B:"Gelatin", C:"Agar", D:"Celloidin"},
   answer:"B",
   explanation:"Gelatin is used for frozen sections on necrotic or crumbly tissue."},

  {question:"Why is orientation critical in embedding?",
   options:{A:"To prevent tissue from floating", B:"Determines plane of sectioning for correct diagnosis", C:"For labeling", D:"Random aesthetic"},
   answer:"B",
   explanation:"Incorrect orientation can make diagnosis impossible because the wrong plane may be sectioned."},

  {question:"What does clearing improve for microscopy?",
   options:{A:"Dehydration", B:"Transparency and refractive index", C:"Color", D:"Hardness"},
   answer:"B",
   explanation:"Clearing improves tissue transparency and adjusts refractive index closer to tissue proteins."},

  {question:"Which agent is a mixture of phenol and xylene used for difficult tissues?",
   options:{A:"Xylene", B:"Carbol-Xylene", C:"Chloroform", D:"Cedarwood Oil"},
   answer:"B",
   explanation:"Carbol-Xylene clears difficult tissues rapidly, reserved for fibrous tissues like uterus."},

  {question:"Why is chloroform sometimes preferred for uterus and brain?",
   options:{A:"Rapid clearing", B:"Does not harden tissue", C:"Cheap", D:"Color preservation"},
   answer:"B",
   explanation:"Chloroform clears without hardening tissues like uterus, muscle, or brain."},

  {question:"Which alcohol is rarely used due to toxicity but may be used for blood smears?",
   options:{A:"Ethanol", B:"Methanol", C:"Butyl Alcohol", D:"Isopropyl Alcohol"},
   answer:"B",
   explanation:"Methanol is toxic and volatile, rarely used in routine tissue processing but may be used for blood smears."},

  {question:"What is the purpose of using vacuum in automated tissue processing?",
   options:{A:"To color tissue", B:"To remove trapped air and speed reagent penetration", C:"To freeze tissue", D:"To heat tissue"},
   answer:"B",
   explanation:"Vacuum removes trapped air bubbles and improves reagent penetration in dense or spongy tissue."},

  {question:"Which tissue type dehydrates slower than others?",
   options:{A:"Liver", B:"Kidney", C:"Bone and fibrous skin", D:"Blood smear"},
   answer:"C",
   explanation:"Dense tissues like bone or fibrous skin take longer to dehydrate than soft tissues like liver or kidney."},

  {question:"Why must absolute alcohol be fresh at the final dehydration step?",
   options:{A:"To save cost", B:"Water in alcohol will cause milky xylene and poor wax infiltration", C:"To color tissue", D:"To increase shrinkage"},
   answer:"B",
   explanation:"If the final alcohol contains water, the clearing agent turns milky and wax will not enter tissue properly."},

  {question:"Why are tissue blocks cooled rapidly on a cold plate?",
   options:{A:"To color tissue", B:"To anchor tissue and solidify wax quickly", C:"To dehydrate tissue", D:"To remove wax"},
   answer:"B",
   explanation:"Rapid cooling anchors the tissue and solidifies the wax, preventing movement before sectioning."},

  {question:"Which step in processing directly follows fixation?",
   options:{A:"Clearing", B:"Dehydration", C:"Infiltration", D:"Embedding"},
   answer:"B",
   explanation:"Dehydration is the first step after fixation to remove water from the tissue."},






  {question:"Which factor is crucial for gentle processing of delicate tissues like embryos?",
   options:{A:"Lower alcohol concentrations and shorter intervals", B:"High temperature", C:"Use xylene only", D:"No fixation"},
   answer:"A",
   explanation:"Delicate tissues require lower alcohol concentrations and shorter intervals to prevent damage."},

  {question:"What is the role of filter paper during use of anhydrous Copper Sulphate?",
   options:{A:"To absorb water", B:"To prevent tissue staining", C:"To speed dehydration", D:"To color tissue"},
   answer:"B",
   explanation:"Filter paper prevents CuSO₄ crystals from directly contacting tissue, avoiding staining."},

  {question:"Why is orientation angled diagonally in hairy skin?",
   options:{A:"Random", B:"To prevent knife catching on hair shafts", C:"To speed cutting", D:"To color tissue"},
   answer:"B",
   explanation:"Angling hairy skin diagonally prevents the microtome knife from catching on hair shafts."}


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
