DataStore.lectures.push({
    "id": 10,
    "title": "Lecture 10: Precipitimetry",
    "isPlaceholder": false,
    "summary": [
        { 
            "type": "title", 
            "content": "Introduction to Precipitimetry" 
        },
        { 
            "type": "note", 
            "title": "Important Note", 
            "content": "Precipitimetry titrations are based on the formation of an insoluble salt (precipitate). The precipitate should be sufficiently insoluble to ensure completion of the reaction ($K_{sp} = 10^{-10}$ or lower)." 
        },
        { 
            "type": "list", 
            "items": [
                "The precipitate needs not to be separated or to be pure (not consume the titrant).",
                "Requirements of titrations: the reaction should be rapid and the equivalence point is reached after addition of equivalent amount of the titrant."
            ] 
        },
        { 
            "type": "title", 
            "content": "1. Solubility Product Constant (Ksp)" 
        },
        { 
            "type": "definition", 
            "term": "Solubility Product Constant (Ksp)", 
            "content": "It is the product of multiplication of their ions' molar concentration in solution, each raised to the power of number of ions produced." 
        },
        { 
            "type": "list", 
            "items": [
                "The factor governing the completeness of a precipitation reaction is the solubility of the precipitate formed.",
                "The more insoluble the precipitate, the more complete is the reaction at the equivalence point.",
                "The equilibrium constant expressing the solubility of a precipitate is the Ksp."
            ] 
        },
        { 
            "type": "equation", 
            "content": "$AB \\rightleftharpoons A^+ + B^-$ \n $K_{sp} = [A^+][B^-]$" 
        },
        {
            "type": "text",
            "content": "Upon shaking a sparingly soluble salt with water, a very small amount of the solid is converted into soluble molecules, which ionizes spontaneously. "
        },
        { 
            "type": "example", 
            "title": "Calculation of Ksp from Solubility", 
            "content": "If the solubility of AgCl is 0.0015 g/L (M.Wt = 143):\nMolar solubility = $0.0015 / 143 = 1.05 \\times 10^{-5} M$\n$K_{sp} = [Ag^+][Cl^-] = (1.05 \\times 10^{-5})^2 = 1.1 \\times 10^{-10}$" 
        },
        { 
            "type": "example", 
            "title": "Calculation of Solubility from Ksp", 
            "content": "Molar solubility of $Ag_2S$ if $K_{sp} = 6 \\times 10^{-50}$:\n$Ag_2S \\rightleftharpoons 2Ag^+ + S^{2-}$\n$K_{sp} = [2X]^2[X] = 4X^3 = 6 \\times 10^{-50}$\n$X = 2.47 \\times 10^{-17} M$\nSolubility in g/L = Molar solubility $\\times$ M.Wt = $(2.47 \\times 10^{-17}) \\times 247.8 = 6.1 \\times 10^{-15} g/L$" 
        },
        { 
            "type": "title", 
            "content": "2. Factors Affecting Solubility" 
        },
        { 
            "type": "mindmap", 
            "center": "Factors Affecting Solubility", 
            "branches": [
                "A. Common Ion", 
                "B. Complex Formation", 
                "C. Temperature", 
                "D. Diverse Ion", 
                "E. Solvent", 
                "F. Acids"
            ] 
        },
        { 
            "type": "title", 
            "content": "A. Effect of Common Ion" 
        },
        { 
            "type": "list", 
            "items": [
                "The presence of a common ion usually causes depression of solubility (enhances precipitation). Example: Adding NaCl or $AgNO_3$ to AgCl causes precipitation.",
                "However, in some cases, a large excess of common ion may INCREASE solubility due to complex formation. Example: Large amount of NaCl dissolves AgCl due to the formation of silver dichloride complex $[AgCl_2]^- $."
            ] 
        },
        { 
            "type": "title", 
            "content": "B. Effect of Complex Formation" 
        },
        { 
            "type": "list", 
            "items": [
                "Solubility can be increased by including an ion (ligand/Lewis base) that forms a soluble complex with one of the precipitate components.",
                "Reagents like KCN dissolve all silver halides as it forms the stable silver cyanide complex $[Ag(CN)_2]^- $."
            ] 
        },
        { 
            "type": "table", 
            "headers": ["Precipitate", "Solubility in NH3", "Reason"], 
            "rows": [
                ["AgCl", "Highly soluble", "Has high Ksp ($1.1 \\times 10^{-10}$), readily forms $[Ag(NH_3)_2]^+$"],
                ["AgBr", "Slightly soluble", "Lower Ksp ($1.1 \\times 10^{-13}$), only a small amount dissolves"],
                ["AgI", "Insoluble", "Extremely low Ksp ($1.1 \\times 10^{-16}$), equilibrium hardly shifts"],
                ["Ag2S", "Insoluble (Even in KCN)", "Practically not dissociated due to very low Ksp ($6.3 \\times 10^{-50}$)"]
            ] 
        },
        { 
            "type": "title", 
            "content": "C. Effect of Temperature & D. Effect of Diverse Ion" 
        },
        { 
            "type": "list", 
            "items": [
                "**Temperature:** Solubility of most inorganic salts slightly increases by increasing temperature. Some remain sparingly soluble at elevated temps (e.g., $PbSO_4$).",
                "**Diverse Ion:** Diverse salts increase solubility due to the effect of electrical charges carried by diverse ions on the attractive force between the sparingly soluble ions (e.g., $BaSO_4$ in presence of $NaNO_3$)."
            ] 
        },
        { 
            "type": "title", 
            "content": "E. Effect of Solvent & F. Effect of Acids" 
        },
        { 
            "type": "list", 
            "items": [
                "**Solvent:** Addition of organic solvents (methanol, ethanol, acetone) reduces solubility. Example: 20 vol% ethanol makes $PbSO_4$ solubility practically negligible.",
                "**Acids (Weak acid salts):** Dissolve in strong acids (solvent effect). Example: $CaC_2O_4$ dissolves in strong acids.",
                "**Acids (Strong acid salts):** Behave similarly to indifferent electrolytes. AgCl is slightly soluble in 0.002 M HCl (common ion effect) but soluble in concentrated HCl (complex formation)."
            ] 
        },
        { 
            "type": "title", 
            "content": "3. Fractional Precipitation" 
        },
        { 
            "type": "definition", 
            "term": "Fractional Precipitation", 
            "content": "Successive precipitation of several halides using the same precipitating agent." 
        },
        { 
            "type": "list", 
            "items": [
                "Both $Cl^-$ and $I^-$ ions will be precipitated simultaneously when the ratio of their concentrations equals the ratio of their Ksp values.",
                "Simultaneous precipitation of AgCl and AgI occurs when $[Cl^-]/[I^-] = K_{sp}(AgCl) / K_{sp}(AgI) = 10^{-10} / 10^{-16} = 10^6$."
            ] 
        }
    ],
    "terms": [
        {
            "term": "Precipitimetry",
            "definition": "Titrations based on the formation of an insoluble salt (precipitate)."
        },
        {
            "term": "Solubility Product Constant (Ksp)",
            "definition": "The product of multiplication of the molar concentrations of ions in solution, each raised to the power of the number of ions produced."
        },
        {
            "term": "Common Ion Effect",
            "definition": "Depression of solubility caused by the presence of a common ion."
        },
        {
            "term": "Diverse Ion Effect",
            "definition": "Increase in solubility caused by ions different from those of the sparingly soluble salt."
        },
        {
            "term": "Fractional Precipitation",
            "definition": "Successive precipitation of several ions using the same precipitating agent according to differences in Ksp."
        }
    ],
    "reasons": [
        {
            "q": "Give reason: NH3 dissolves AgCl completely, AgBr is slightly soluble, while AgI is insoluble.",
            "a": "AgCl has a relatively high Ksp and readily forms the soluble silver ammine complex. AgBr has a lower Ksp, so only a small amount dissolves, while AgI has an extremely low Ksp, making it practically insoluble."
        },
        {
            "q": "Give reason: Silver sulfide (Ag2S) is insoluble in NH3 or KCN.",
            "a": "Due to the very low Ksp of Ag2S (6.3 × 10^-50), it is practically not dissociated in aqueous solution."
        },
        {
            "q": "Give reason: AgCl is slightly soluble in 0.002 M HCl but soluble in high concentration of HCl.",
            "a": "Dilute HCl behaves as a common ion and decreases solubility, while concentrated HCl causes complex formation and increases solubility."
        },
        {
            "q": "Give reason: NaNO3 dissolves AgCl completely.",
            "a": "Due to the diverse ion effect, where the electrical charges carried by diverse ions reduce the attractive force between Ag+ and Cl-."
        },
        {
            "q": "Give reason: AgBr is slightly soluble in ammonical solution.",
            "a": "Because AgBr has a lower Ksp than AgCl, only a small amount dissolves to form the silver ammine complex."
        },
        {
            "q": "Give reason: KCN completely dissolves all silver halides.",
            "a": "Because KCN forms the very stable silver cyanide complex [Ag(CN)2]-."
        },
        {
            "q": "Give reason: Large amount of NaCl can cause solubility of AgCl.",
            "a": "Due to formation of the soluble silver dichloride complex [AgCl2]-."
        }
    ],
    "qna": [
        {
            "q": "1. Precipitimetry is based on:",
            "a": "<strong>b) Formation of insoluble salts</strong>"
        },
        {
            "q": "2. A precipitation reaction is considered complete when:",
            "a": "<strong>c) The precipitate is sufficiently insoluble</strong>"
        },
        {
            "q": "3. The solubility product constant (Ksp) is defined as:",
            "a": "<strong>b) The product of the molar concentrations of ions raised to their stoichiometric coefficients</strong>"
        },
        {
            "q": "4. If the solubility of AgCl is 0.0015 g/L, and its molecular weight is 143 g/mol, what is its Ksp value?",
            "a": "<strong>a) 1.1 × 10^-10</strong>"
        },
        {
            "q": "5. The solubility of Pb3(PO4)2 is 0.00014 g/L, and its molecular weight is 811.6 g/mol. What is its Ksp?",
            "a": "<strong>a) 1.5 × 10^-32</strong>"
        },
        {
            "q": "6. The molar solubility of Ag2S in pure water is 2.47 × 10^-17 M. If Ksp(Ag2S) = 6 × 10^-50, what is its solubility in g/L?",
            "a": "<strong>a) 6.1 × 10^-15</strong>"
        },
        {
            "q": "7. AgCl is completely soluble in:",
            "a": "<strong>b) NH3</strong>"
        },
        {
            "q": "8. If 0.1 N AgNO3 is added to a mixture of 0.1 M NaCl, KI, and KBr, which precipitate is formed?",
            "a": "<strong>c) AgI</strong>"
        },
        {
            "q": "9. The common ion effect results in:",
            "a": "<strong>b) Decreased solubility of a precipitate</strong>"
        },
        {
            "q": "10. What happens when a large excess of NaCl is added to a saturated solution of AgCl?",
            "a": "<strong>c) AgCl dissolves due to complex formation</strong>"
        },
        {
            "q": "11. The presence of a Lewis base ligand (L) affects solubility by:",
            "a": "<strong>a) Increasing solubility via complex formation</strong>"
        },
        {
            "q": "12. In general, how does temperature affect solubility?",
            "a": "<strong>c) Slightly increases for most inorganic salts</strong>"
        },
        {
            "q": "13. The addition of organic solvents such as ethanol to a saturated salt solution typically:",
            "a": "<strong>b) Decreases solubility</strong>"
        },
        {
            "q": "14. Fractional precipitation is the process of:",
            "a": "<strong>b) Separating different salts based on different solubilities</strong>"
        },
        {
            "q": "15. The ratio of [Cl-] to [I-] required for simultaneous precipitation of AgCl and AgI is:",
            "a": "<strong>b) 1:10^6</strong>"
        }
    ],
    "quiz": [
        {
            "question": "Precipitimetry is based on:",
            "options": ["Formation of soluble salts", "Formation of insoluble salts", "Formation of complex compounds", "None of the above"],
            "correct": 1,
            "hint": "It involves a solid forming from a solution.",
            "questionAr": "تعتمد المعايرة الترسيبية على:", 
            "optionsAr": ["تكوين أملاح قابلة للذوبان", "تكوين أملاح غير قابلة للذوبان", "تكوين مركبات معقدة", "لا شيء مما سبق"], 
            "hintAr": "تتضمن تكوين مادة صلبة من محلول."
        },
        {
            "question": "A precipitation reaction is considered complete when:",
            "options": ["The precipitate dissolves back into the solution", "The solubility product constant (Ksp) is very high", "The precipitate is sufficiently insoluble", "The reaction is slow"],
            "correct": 2,
            "hint": "The solid must not easily dissociate back into ions.",
            "questionAr": "يعتبر تفاعل الترسيب مكتملاً عندما:", 
            "optionsAr": ["يذوب الراسب مرة أخرى في المحلول", "يكون ثابت حاصل الذوبان (Ksp) عالياً جداً", "يكون الراسب غير قابل للذوبان بدرجة كافية", "يكون التفاعل بطيئاً"], 
            "hintAr": "يجب ألا تتفكك المادة الصلبة بسهولة لتعود إلى أيونات."
        },
        {
            "question": "The solubility product constant (Ksp) is defined as:",
            "options": ["The sum of ion concentrations at equilibrium", "The product of the molar concentrations of ions raised to their stoichiometric coefficients", "The total solubility of a salt in solution", "The difference between reactant and product concentrations"],
            "correct": 1,
            "hint": "It involves multiplication and powers.",
            "questionAr": "يُعرف ثابت حاصل الذوبان (Ksp) بأنه:", 
            "optionsAr": ["مجموع تركيزات الأيونات عند الاتزان", "حاصل ضرب التركيزات المولارية للأيونات مرفوعة لمعاملاتها المتكافئة", "الذوبانية الكلية للملح في المحلول", "الفرق بين تركيزات المتفاعلات والنواتج"], 
            "hintAr": "يتضمن عملية ضرب وأسس."
        },
        {
            "question": "If the solubility of AgCl is 0.0015 g/L, and its molecular weight is 143 g/mol, what is its Ksp value?",
            "options": ["1.1 × 10^-10", "1.5 × 10^-5", "1.05 × 10^-5", "2.0 × 10^-6"],
            "correct": 0,
            "hint": "First find molar solubility, then square it.",
            "questionAr": "إذا كانت ذوبانية AgCl هي 0.0015 جم/لتر، ووزنه الجزيئي 143 جم/مول، فما هي قيمة الـ Ksp له؟", 
            "optionsAr": ["1.1 × 10^-10", "1.5 × 10^-5", "1.05 × 10^-5", "2.0 × 10^-6"], 
            "hintAr": "أوجد الذوبانية المولارية أولاً، ثم قم بتربيعها."
        },
        {
            "question": "The solubility of Pb3(PO4)2 is 0.00014 g/L, and its molecular weight is 811.6 g/mol. What is its Ksp?",
            "options": ["1.5 × 10^-32", "3.2 × 10^-15", "6.1 × 10^-5", "2.5 × 10^-7"],
            "correct": 0,
            "hint": "Ksp = [3X]^3 [2X]^2 where X is molar solubility.",
            "questionAr": "ذوبانية Pb3(PO4)2 هي 0.00014 جم/لتر، ووزنه الجزيئي 811.6 جم/مول. ما هي قيمة Ksp له؟", 
            "optionsAr": ["1.5 × 10^-32", "3.2 × 10^-15", "6.1 × 10^-5", "2.5 × 10^-7"], 
            "hintAr": "Ksp = [3X]^3 [2X]^2 حيث X هي الذوبانية المولارية."
        },
        {
            "question": "The molar solubility of Ag2S in pure water is 2.47 × 10^-17 M. If Ksp(Ag2S) = 6 × 10^-50, what is its solubility in g/L? (M.wt = 247.8)",
            "options": ["6.1 × 10^-15", "3.2 × 10^-10", "1.2 × 10^-7", "5.8 × 10^-6"],
            "correct": 0,
            "hint": "Multiply molar solubility by molecular weight.",
            "questionAr": "الذوبانية المولارية لـ Ag2S في الماء النقي هي 2.47 × 10^-17 M. إذا كان Ksp(Ag2S) = 6 × 10^-50، فما هي ذوبانيته بـ جم/لتر؟ (الوزن الجزيئي = 247.8)", 
            "optionsAr": ["6.1 × 10^-15", "3.2 × 10^-10", "1.2 × 10^-7", "5.8 × 10^-6"], 
            "hintAr": "اضرب الذوبانية المولارية في الوزن الجزيئي."
        },
        {
            "question": "AgCl is completely soluble in:",
            "options": ["0.001 M HCl", "NH3", "AgNO3", "All are correct"],
            "correct": 1,
            "hint": "It forms a silver ammine complex.",
            "questionAr": "AgCl قابل للذوبان تماماً في:", 
            "optionsAr": ["0.001 M HCl", "NH3", "AgNO3", "جميع الإجابات صحيحة"], 
            "hintAr": "يكون معقد أمين الفضة."
        },
        {
            "question": "If 0.1 N AgNO3 is added to a mixture of 0.1 M NaCl, KI, and KBr, which precipitate is formed first?",
            "options": ["AgCl", "AgBr", "AgI", "All are formed"],
            "correct": 2,
            "hint": "The one with the lowest Ksp precipitates first.",
            "questionAr": "إذا تمت إضافة 0.1 N AgNO3 إلى خليط من 0.1 M NaCl و KI و KBr، أي راسب سيتكون أولاً؟", 
            "optionsAr": ["AgCl", "AgBr", "AgI", "جميعها تتكون"], 
            "hintAr": "الذي يمتلك أقل Ksp يترسب أولاً."
        },
        {
            "question": "The common ion effect results in:",
            "options": ["Increased solubility of a precipitate", "Decreased solubility of a precipitate", "No effect on solubility", "Formation of complex compounds"],
            "correct": 1,
            "hint": "It shifts the equilibrium towards the solid salt.",
            "questionAr": "يؤدي تأثير الأيون المشترك إلى:", 
            "optionsAr": ["زيادة ذوبانية الراسب", "تقليل ذوبانية الراسب", "لا تأثير على الذوبانية", "تكوين مركبات معقدة"], 
            "hintAr": "يزيح الاتزان نحو الملح الصلب."
        },
        {
            "question": "What happens when a large excess of NaCl is added to a saturated solution of AgCl?",
            "options": ["AgCl remains unchanged", "AgCl precipitates more", "AgCl dissolves due to complex formation", "AgCl decomposes"],
            "correct": 2,
            "hint": "It forms the [AgCl2]- complex.",
            "questionAr": "ماذا يحدث عند إضافة كمية كبيرة جداً من NaCl إلى محلول مشبع من AgCl؟", 
            "optionsAr": ["يبقى AgCl كما هو", "يترسب AgCl أكثر", "يذوب AgCl بسبب تكوين المعقدات", "يتحلل AgCl"], 
            "hintAr": "يكون المعقد -[AgCl2]."
        },
        {
            "question": "The presence of a Lewis base ligand (L) affects solubility by:",
            "options": ["Increasing solubility via complex formation", "Decreasing solubility due to ionic interaction", "Precipitating all metal ions", "No effect on solubility"],
            "correct": 0,
            "hint": "Ligands bind to metal ions forming soluble species.",
            "questionAr": "يؤثر وجود رابطة قاعدة لويس (L) على الذوبانية من خلال:", 
            "optionsAr": ["زيادة الذوبانية عن طريق تكوين المعقدات", "تقليل الذوبانية بسبب التفاعل الأيوني", "ترسيب جميع الأيونات المعدنية", "لا تأثير على الذوبانية"], 
            "hintAr": "ترتبط الروابط (Ligands) بالأيونات المعدنية مكونة أنواعاً قابلة للذوبان."
        },
        {
            "question": "In general, how does temperature affect solubility?",
            "options": ["Always increases solubility", "Always decreases solubility", "Slightly increases for most inorganic salts", "Has no effect"],
            "correct": 2,
            "hint": "Heating generally helps solids dissolve.",
            "questionAr": "بشكل عام، كيف تؤثر درجة الحرارة على الذوبانية؟", 
            "optionsAr": ["تزيد الذوبانية دائماً", "تقلل الذوبانية دائماً", "تزيد قليلاً لمعظم الأملاح غير العضوية", "لا تأثير لها"], 
            "hintAr": "التسخين يساعد المواد الصلبة على الذوبان بشكل عام."
        },
        {
            "question": "The addition of organic solvents such as ethanol to a saturated salt solution typically:",
            "options": ["Increases solubility", "Decreases solubility", "Has no effect", "Reacts chemically with the salt"],
            "correct": 1,
            "hint": "Organic solvents lower the dielectric constant of the medium.",
            "questionAr": "إضافة المذيبات العضوية مثل الإيثانول إلى محلول ملحي مشبع يؤدي عادةً إلى:", 
            "optionsAr": ["زيادة الذوبانية", "تقليل الذوبانية", "لا تأثير له", "تتفاعل كيميائياً مع الملح"], 
            "hintAr": "تقلل المذيبات العضوية من ثابت العزل الكهربائي للوسط."
        },
        {
            "question": "Fractional precipitation is the process of:",
            "options": ["Precipitating all salts at once", "Separating different salts based on different solubilities", "Using organic solvents to dissolve salts", "Mixing multiple salts together"],
            "correct": 1,
            "hint": "It relies on differences in Ksp values.",
            "questionAr": "الترسيب التجزيئي هو عملية:", 
            "optionsAr": ["ترسيب جميع الأملاح دفعة واحدة", "فصل الأملاح المختلفة بناءً على اختلاف ذوبانيتها", "استخدام المذيبات العضوية لإذابة الأملاح", "خلط عدة أملاح معاً"], 
            "hintAr": "يعتمد على الاختلاف في قيم Ksp."
        },
        {
            "question": "The ratio of [Cl-] to [I-] required for simultaneous precipitation of AgCl and AgI is:",
            "options": ["1:100", "1:10^6", "1:10^3", "1:10^4"],
            "correct": 1,
            "hint": "Divide Ksp of AgCl by Ksp of AgI.",
            "questionAr": "النسبة بين [Cl-] إلى [I-] المطلوبة للترسيب المتزامن لـ AgCl و AgI هي:", 
            "optionsAr": ["1:100", "1:10^6", "1:10^3", "1:10^4"], 
            "hintAr": "اقسم Ksp لـ AgCl على Ksp لـ AgI."
        },
        {
            "question": "What is the maximum Ksp value for a precipitate to ensure completion of the titration?",
            "options": ["10^-10", "10^-5", "10^-2", "10^-15"],
            "correct": 0,
            "hint": "The value must be extremely small to ensure it is sufficiently insoluble.",
            "questionAr": "ما هو أقصى قيمة للـ Ksp لراسب لضمان اكتمال المعايرة؟", 
            "optionsAr": ["10^-10", "10^-5", "10^-2", "10^-15"], 
            "hintAr": "يجب أن تكون القيمة صغيرة جداً لضمان أنه غير قابل للذوبان بدرجة كافية."
        },
        {
            "question": "Which of the following is a requirement for precipitimetry titrations?",
            "options": ["The reaction should be rapid", "The precipitate must be pure", "The precipitate must be separated", "The reaction should be slow"],
            "correct": 0,
            "hint": "Titrations require immediate visual or instrumental feedback.",
            "questionAr": "أي مما يلي يعتبر من متطلبات معايرات الترسيب؟", 
            "optionsAr": ["يجب أن يكون التفاعل سريعاً", "يجب أن يكون الراسب نقياً", "يجب فصل الراسب", "يجب أن يكون التفاعل بطيئاً"], 
            "hintAr": "تتطلب المعايرات استجابة مرئية أو آلية فورية."
        },
        {
            "question": "Why is AgBr only slightly soluble in ammonia compared to AgCl?",
            "options": ["It forms a different complex", "Ammonia acts as a common ion", "It has a much lower Ksp than AgCl", "It is affected by temperature differences"],
            "correct": 2,
            "hint": "Lower solubility product means harder to shift equilibrium.",
            "questionAr": "لماذا يعتبر AgBr شحيح الذوبان في الأمونيا مقارنة بـ AgCl؟", 
            "optionsAr": ["لأنه يكون معقداً مختلفاً", "لأن الأمونيا تعمل كأيون مشترك", "لأن قيمة الـ Ksp له أقل بكثير من AgCl", "لأنه يتأثر باختلاف درجات الحرارة"], 
            "hintAr": "كلما قل ثابت حاصل الذوبان، زادت صعوبة إزاحة الاتزان."
        },
        {
            "question": "Why is Ag2S insoluble in both NH3 and KCN?",
            "options": ["It decomposes in water", "Its Ksp is extremely low (6.3 × 10^-50)", "It forms a completely different complex", "It has a high molar mass"],
            "correct": 1,
            "hint": "It is practically not dissociated in aqueous solution at all.",
            "questionAr": "لماذا يعتبر Ag2S غير قابل للذوبان في كل من NH3 و KCN؟", 
            "optionsAr": ["لأنه يتحلل في الماء", "لأن قيمة Ksp له منخفضة للغاية (6.3 × 10^-50)", "لأنه يكون معقداً مختلفاً تماماً", "لأن كتلته المولية عالية"], 
            "hintAr": "عملياً لا يتفكك في المحلول المائي على الإطلاق."
        },
        {
            "question": "The addition of NaNO3 to a saturated solution of BaSO4 represents which effect?",
            "options": ["Common ion effect", "Acid effect", "Diverse ion effect", "Solvent effect"],
            "correct": 2,
            "hint": "Na+ and NO3- are different from Ba2+ and SO4(2-).",
            "questionAr": "إضافة NaNO3 إلى محلول مشبع من BaSO4 يمثل أي تأثير؟", 
            "optionsAr": ["تأثير الأيون المشترك", "تأثير الحمض", "تأثير الأيون المتنوع", "تأثير المذيب"], 
            "hintAr": "الأيونات Na+ و NO3- تختلف عن Ba2+ و SO4(2-)."
        },
        {
            "question": "How does the diverse ion effect increase solubility?",
            "options": ["By reducing the attractive force between the sparingly soluble electrolyte ions", "By forming a new precipitate", "By lowering the temperature", "By increasing the pH"],
            "correct": 0,
            "hint": "Electrical charges from diverse ions shield the precipitate ions.",
            "questionAr": "كيف يزيد تأثير الأيون المتنوع من الذوبانية؟", 
            "optionsAr": ["عن طريق تقليل قوى التجاذب بين أيونات الإلكتروليت شحيح الذوبان", "عن طريق تكوين راسب جديد", "عن طريق خفض درجة الحرارة", "عن طريق زيادة درجة الـ pH"], 
            "hintAr": "الشحنات الكهربائية من الأيونات المتنوعة تحجب أيونات الراسب."
        },
        {
            "question": "Adding 20 vol% ethanol to lead sulphate makes its solubility:",
            "options": ["Highly increased", "Practically negligible", "Unchanged", "Equal to water"],
            "correct": 1,
            "hint": "Organic solvents decrease solubility of inorganic salts.",
            "questionAr": "إضافة 20% حجماً من الإيثانول إلى كبريتات الرصاص يجعل ذوبانيته:", 
            "optionsAr": ["تزداد بشكل كبير", "شبه معدومة عملياً", "لا تتغير", "مساوية للماء"], 
            "hintAr": "المذيبات العضوية تقلل من ذوبانية الأملاح غير العضوية."
        },
        {
            "question": "Which precipitate dissolves in the presence of strong acids due to the acid effect?",
            "options": ["CaC2O4", "AgCl", "BaSO4", "PbSO4"],
            "correct": 0,
            "hint": "It is a salt of a weak acid.",
            "questionAr": "أي راسب يذوب في وجود الأحماض القوية بسبب تأثير الحمض؟", 
            "optionsAr": ["CaC2O4", "AgCl", "BaSO4", "PbSO4"], 
            "hintAr": "إنه ملح لحمض ضعيف."
        },
        {
            "question": "Why is AgCl slightly soluble in 0.002 M HCl but completely soluble in concentrated HCl?",
            "options": ["Temperature changes", "Solvent effect", "Both act as diverse ions", "Dilute HCl acts as a common ion, while concentrated HCl forms a soluble complex"],
            "correct": 3,
            "hint": "Excess chloride ions form [AgCl2]-.",
            "questionAr": "لماذا يكون AgCl شحيح الذوبان في 0.002 M HCl ولكنه يذوب تماماً في HCl المركز؟", 
            "optionsAr": ["تغيرات درجة الحرارة", "تأثير المذيب", "كلاهما يعمل كأيونات متنوعة", "HCl المخفف يعمل كأيون مشترك، بينما HCl المركز يكون معقداً قابلاً للذوبان"], 
            "hintAr": "أيونات الكلوريد الزائدة تكون -[AgCl2]."
        },
        {
            "question": "Which reagent can readily dissolve ALL silver halides (AgCl, AgBr, AgI)?",
            "options": ["NH3", "KCN", "HCl", "Ethanol"],
            "correct": 1,
            "hint": "It forms a very stable complex [Ag(CN)2]-.",
            "questionAr": "أي كاشف يمكنه إذابة جميع هاليدات الفضة (AgCl, AgBr, AgI) بسهولة؟", 
            "optionsAr": ["NH3", "KCN", "HCl", "الإيثانول"], 
            "hintAr": "يكون معقداً مستقراً جداً -[Ag(CN)2]."
        },
        {
            "question": "The complex formed when AgCl dissolves in excess NH3 is:",
            "options": ["[Ag(NH3)2]+", "[AgCl(NH3)]", "[Ag(NH3)4]2+", "[Ag(CN)2]-"],
            "correct": 0,
            "hint": "It is a silver ammine complex.",
            "questionAr": "المعقد المتكون عند ذوبان AgCl في زيادة من NH3 هو:", 
            "optionsAr": ["[Ag(NH3)2]+", "[AgCl(NH3)]", "[Ag(NH3)4]2+", "[Ag(CN)2]-"], 
            "hintAr": "إنه معقد أمين الفضة."
        },
        {
            "question": "The complex formed when AgCl dissolves in a large excess of NaCl is:",
            "options": ["[AgCl2]-", "[AgCl3]2-", "[Ag2Cl]+", "[NaCl2]-"],
            "correct": 0,
            "hint": "It is a silver dichloride complex.",
            "questionAr": "المعقد المتكون عند ذوبان AgCl في زيادة كبيرة من NaCl هو:", 
            "optionsAr": ["[AgCl2]-", "[AgCl3]2-", "[Ag2Cl]+", "[NaCl2]-"], 
            "hintAr": "إنه معقد ثنائي كلوريد الفضة."
        },
        {
            "question": "If Ksp = [A+][B-], what is the expression for Ksp of Ag2S in terms of molar solubility (X)?",
            "options": ["X^2", "2X^3", "4X^3", "2X^2"],
            "correct": 2,
            "hint": "Ag2S gives 2 Ag+ and 1 S2-. So [2X]^2 * [X].",
            "questionAr": "إذا كان Ksp = [A+][B-]، فما هو التعبير الخاص بـ Ksp لـ Ag2S بدلالة الذوبانية المولارية (X)؟", 
            "optionsAr": ["X^2", "2X^3", "4X^3", "2X^2"], 
            "hintAr": "Ag2S يعطي 2 Ag+ و 1 S2-. إذن [2X]^2 * [X]."
        },
        {
            "question": "What happens to CaSO4 upon addition of 50 vol% ethanol?",
            "options": ["It separates quantitatively", "It dissolves completely", "It forms a complex", "It boils"],
            "correct": 0,
            "hint": "Ethanol decreases its solubility drastically.",
            "questionAr": "ماذا يحدث لـ CaSO4 عند إضافة 50% حجماً من الإيثانول؟", 
            "optionsAr": ["ينفصل كمياً (يترسب)", "يذوب تماماً", "يكون معقداً", "يغلي"], 
            "hintAr": "الإيثانول يقلل من ذوبانيته بشكل كبير."
        },
        {
            "question": "In fractional precipitation of halides using Ag+, which halide precipitates first?",
            "options": ["The one with the lowest Ksp", "The one with the highest Ksp", "The one with the highest molar mass", "The one with the lowest molar mass"],
            "correct": 0,
            "hint": "The least soluble salt forms a solid first.",
            "questionAr": "في الترسيب التجزيئي للهاليدات باستخدام +Ag، أي هاليد يترسب أولاً؟", 
            "optionsAr": ["الذي يمتلك أقل Ksp", "الذي يمتلك أعلى Ksp", "الذي يمتلك أعلى كتلة مولية", "الذي يمتلك أقل كتلة مولية"], 
            "hintAr": "الملح الأقل ذوباناً يكون مادة صلبة أولاً."
        }
    ],
    "summaryAr": [
        { 
            "type": "title", 
            "content": "مقدمة في المعايرة الترسيبية" 
        },
        { 
            "type": "note", 
            "title": "ملاحظة هامة", 
            "content": "تعتمد معايرات الترسيب على تكوين ملح غير قابل للذوبان (راسب). يجب أن يكون الراسب غير قابل للذوبان بدرجة كافية لضمان اكتمال التفاعل ($K_{sp} = 10^{-10}$ أو أقل)." 
        },
        { 
            "type": "list", 
            "items": [
                "لا يلزم فصل الراسب أو أن يكون نقياً (ألا يستهلك المادة المعايرة).",
                "متطلبات المعايرة: يجب أن يكون التفاعل سريعاً ويتم الوصول إلى نقطة التكافؤ بعد إضافة كمية مكافئة من المادة المعايرة."
            ] 
        },
        { 
            "type": "title", 
            "content": "1. ثابت حاصل الذوبان (Ksp)" 
        },
        { 
            "type": "definition", 
            "term": "ثابت حاصل الذوبان (Ksp)", 
            "content": "هو حاصل ضرب التركيز المولاري لأيوناتها في المحلول، كل منها مرفوع لأس يمثل عدد الأيونات الناتجة." 
        },
        { 
            "type": "list", 
            "items": [
                "العامل الذي يحكم اكتمال تفاعل الترسيب هو ذوبانية الراسب المتكون.",
                "كلما كان الراسب غير قابل للذوبان أكثر، كان التفاعل أكثر اكتمالاً عند نقطة التكافؤ.",
                "ثابت الاتزان الذي يعبر عن ذوبانية الراسب هو الـ Ksp."
            ] 
        },
        { 
            "type": "equation", 
            "content": "$AB \\rightleftharpoons A^+ + B^-$ \n $K_{sp} = [A^+][B^-]$" 
        },
        {
            "type": "text",
            "content": "عند رج ملح شحيح الذوبان مع الماء، تتحول كمية صغيرة جدًا من المادة الصلبة إلى جزيئات قابلة للذوبان، والتي تتأين تلقائيًا."
        },
        { 
            "type": "example", 
            "title": "حساب Ksp من الذوبانية", 
            "content": "إذا كانت ذوبانية AgCl هي 0.0015 جم/لتر (الوزن الجزيئي = 143):\nالذوبانية المولارية = $0.0015 / 143 = 1.05 \\times 10^{-5} M$\n$K_{sp} = [Ag^+][Cl^-] = (1.05 \\times 10^{-5})^2 = 1.1 \\times 10^{-10}$" 
        },
        { 
            "type": "example", 
            "title": "حساب الذوبانية من Ksp", 
            "content": "الذوبانية المولارية لـ $Ag_2S$ إذا كان $K_{sp} = 6 \\times 10^{-50}$:\n$Ag_2S \\rightleftharpoons 2Ag^+ + S^{2-}$\n$K_{sp} = [2X]^2[X] = 4X^3 = 6 \\times 10^{-50}$\n$X = 2.47 \\times 10^{-17} M$\nالذوبانية بـ جم/لتر = الذوبانية المولارية $\\times$ الوزن الجزيئي = $(2.47 \\times 10^{-17}) \\times 247.8 = 6.1 \\times 10^{-15} g/L$" 
        },
        { 
            "type": "title", 
            "content": "2. العوامل المؤثرة على الذوبانية" 
        },
        { 
            "type": "mindmap", 
            "center": "العوامل المؤثرة على الذوبانية", 
            "branches": [
                "أ. الأيون المشترك", 
                "ب. تكوين المعقدات", 
                "ج. درجة الحرارة", 
                "د. الأيون المتنوع (المختلف)", 
                "هـ. المذيب", 
                "و. الأحماض"
            ] 
        },
        { 
            "type": "title", 
            "content": "أ. تأثير الأيون المشترك" 
        },
        { 
            "type": "list", 
            "items": [
                "وجود أيون مشترك عادة ما يسبب انخفاض في الذوبانية (يعزز الترسيب). مثال: إضافة NaCl أو $AgNO_3$ إلى AgCl يسبب الترسيب.",
                "ومع ذلك، في بعض الحالات، الزيادة الكبيرة من الأيون المشترك قد تزيد من الذوبانية بسبب تكوين المعقدات. مثال: كمية كبيرة من NaCl تذيب AgCl بسبب تكوين معقد ثنائي كلوريد الفضة $[AgCl_2]^- $."
            ] 
        },
        { 
            "type": "title", 
            "content": "ب. تأثير تكوين المعقدات" 
        },
        { 
            "type": "list", 
            "items": [
                "يمكن زيادة الذوبانية عن طريق إدخال أيون (رابطة/قاعدة لويس) يشكل معقداً قابلاً للذوبان مع أحد مكونات الراسب.",
                "كواشف مثل KCN تذيب جميع هاليدات الفضة لأنها تشكل معقد سيانيد الفضة المستقر $[Ag(CN)_2]^- $."
            ] 
        },
        { 
            "type": "table", 
            "headers": ["الراسب", "الذوبانية في NH3", "السبب"], 
            "rows": [
                ["AgCl", "عالي الذوبانية", "يمتلك Ksp عالي ($1.1 \\times 10^{-10}$)، ويكون بسهولة $[Ag(NH_3)_2]^+$"],
                ["AgBr", "شحيح الذوبان", "يمتلك Ksp أقل ($1.1 \\times 10^{-13}$)، كمية صغيرة فقط تذوب"],
                ["AgI", "غير قابل للذوبان", "يمتلك Ksp منخفض جداً ($1.1 \\times 10^{-16}$)، الاتزان بالكاد ينزاح"],
                ["Ag2S", "غير قابل للذوبان (حتى في KCN)", "عملياً لا يتفكك بسبب انخفاض قيمة الـ Ksp جداً ($6.3 \\times 10^{-50}$)"]
            ] 
        },
        { 
            "type": "title", 
            "content": "ج. تأثير درجة الحرارة و د. تأثير الأيون المتنوع (المختلف)" 
        },
        { 
            "type": "list", 
            "items": [
                "**درجة الحرارة:** تزداد ذوبانية معظم الأملاح غير العضوية بشكل طفيف بزيادة درجة الحرارة. يظل بعضها شحيح الذوبان عند درجات الحرارة المرتفعة (مثل $PbSO_4$).",
                "**الأيون المتنوع (المختلف):** الأملاح المتنوعة تزيد الذوبانية بسبب تأثير الشحنات الكهربائية التي تحملها الأيونات المتنوعة على قوى التجاذب بين الأيونات شحيحة الذوبان (مثل $BaSO_4$ في وجود $NaNO_3$)."
            ] 
        },
        { 
            "type": "title", 
            "content": "هـ. تأثير المذيب و و. تأثير الأحماض" 
        },
        { 
            "type": "list", 
            "items": [
                "**المذيب:** إضافة المذيبات العضوية (ميثانول، إيثانول، أسيتون) يقلل من الذوبانية. مثال: 20% حجماً من الإيثانول تجعل ذوبانية $PbSO_4$ شبه معدومة.",
                "**الأحماض (أملاح الأحماض الضعيفة):** تذوب في الأحماض القوية (تأثير المذيب). مثال: $CaC_2O_4$ يذوب في الأحماض القوية.",
                "**الأحماض (أملاح الأحماض القوية):** تتصرف بشكل مشابه للإلكتروليتات الخاملة. AgCl شحيح الذوبان في 0.002 M HCl (تأثير الأيون المشترك) ولكنه يذوب في HCl المركز (تأثير تكوين المعقدات)."
            ] 
        },
        { 
            "type": "title", 
            "content": "3. الترسيب التجزيئي" 
        },
        { 
            "type": "definition", 
            "term": "الترسيب التجزيئي", 
            "content": "الترسيب المتتالي لعدة هاليدات باستخدام نفس عامل الترسيب." 
        },
        { 
            "type": "list", 
            "items": [
                "سيتم ترسيب أيونات $Cl^-$ و $I^-$ في نفس الوقت عندما تكون نسبة تركيزاتها مساوية لنسبة قيم Ksp الخاصة بها.",
                "الترسيب المتزامن لـ AgCl و AgI يحدث عندما يكون $[Cl^-]/[I^-] = K_{sp}(AgCl) / K_{sp}(AgI) = 10^{-10} / 10^{-16} = 10^6$."
            ] 
        }
    ]
});