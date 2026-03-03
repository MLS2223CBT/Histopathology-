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
