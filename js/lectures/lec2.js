DataStore.lectures.push({
    "id": 2,
    "title": "Lecture 2 : Acid Base",
    "isPlaceholder": false,
    "summary": [
        {
            "type": "note",
            "title": "Important Note",
            "content": "This lecture covers the calculations of pH for different types of solutions (Acids, Bases, Salts) and deeply introduces Neutralization (acid-base) Indicators along with their theories and classifications."
        },
        {
            "type": "title",
            "content": "1. pH Calculations"
        },
        {
            "type": "law",
            "title": "Strong Acids & Bases",
            "content": "pH of strong acid = -log[H⁺] \npOH of strong base = -log[OH⁻] \n(Remember: pH + pOH = pKw = 14)"
        },
        {
            "type": "example",
            "title": "Example: Strong Acid & Base",
            "content": "Calculate pH of 0.1 N HCl: \npH = -log(0.1) = 1. \n\nCalculate pH of 0.01 N NaOH: \npOH = -log(0.01) = 2 \npH = 14 - 2 = 12."
        },
        {
            "type": "law",
            "title": "Weak Acids & Bases",
            "content": "Weak Acid: pH = 1/2 pCa + 1/2 pKa \nWeak Base: pOH = 1/2 pCb + 1/2 pKb \n(Thus, pH = pKw - 1/2 pCb - 1/2 pKb)"
        },
        {
            "type": "title",
            "content": "pH of Salts"
        },
        {
            "type": "list",
            "items": [
                "Strong Acid + Strong Base = Neutral (pH = 7.0) e.g., NaCl, KCl.",
                "Weak Acid + Strong Base = Basic (pH = 1/2 pKw + 1/2 pKa - 1/2 pCs) e.g., CH3COONa.",
                "Weak Base + Strong Acid = Acidic (pH = 1/2 pKw - 1/2 pKb + 1/2 pCs) e.g., NH4Cl.",
                "Weak Acid + Weak Base = (pH = 1/2 pKw + 1/2 pKa - 1/2 pKb) e.g., CH3COONH4."
            ]
        },
        {
            "type": "title",
            "content": "2. Neutralization Indicators"
        },
        {
            "type": "mindmap",
            "center": "Types of Indicators",
            "branches": [
                "Color indicators: Dyes exhibit different colors in acid & basic solutions.",
                "Turbidity indicators: Form turbidity when desired pH is reached.",
                "Fluorescence indicators: Form or loss a fluorescence at the given pH."
            ]
        },
        {
            "type": "title",
            "content": "Theories of Color Change"
        },
        {
            "type": "definition",
            "term": "Ostwald Theory",
            "content": "Indicators are either weak organic acids or bases, in which un-dissociated molecules differ in color from their ions. (HInd ⇌ H⁺ + Ind⁻)"
        },
        {
            "type": "warning",
            "title": "Limitations of Ostwald Theory",
            "content": "1. Phenolphthalein has pink color in alkaline solution (pH 8-10), but in strong alkaline (pH 11-14) gives colorless again.\n2. Slow color change in some indicators, while ionic reactions are usually instantaneous.\n3. Some indicators show color changes in non-aqueous media where ionization is markedly decreased."
        },
        {
            "type": "definition",
            "term": "Chromogenic Theory",
            "content": "Color change depends on the presence of unsaturated chromophoric group in the indicator molecule (e.g., NO2, NO, N=N, C=C)."
        },
        {
            "type": "note",
            "title": "Structural Change Example (Phenolphthalein)",
            "content": "It is colorless at pH 4-7 due to the formation of a benzenoid structure (non-conjugated), and pink at pH 8-10 due to the formation of a quinonoid structure (conjugated). It becomes colorless again at pH 11-14."
        },
        {
            "type": "title",
            "content": "3. Classification of Indicators"
        },
        {
            "type": "list",
            "items": [
                "Single indicators: e.g. Phenolphthalein and Methyl orange.",
                "Universal (multi-range) indicators: A mixture of indicators covering a wide pH range. Used for rough determination of pH (not suitable for quantitative titration).",
                "Screened Indicators: A mixture of an indicator and a dye for sharper color change (e.g., Methyl orange & indigo carmine).",
                "Mixed indicators: A mixture of two indicators having similar or overlapped pH range but contrasting colors. Most accurate for quantitative analysis."
            ]
        },
        {
            "type": "title",
            "content": "4. Indicator Constant & Transition Interval"
        },
        {
            "type": "equation",
            "content": "pH = pKind + log([basic color] / [acid color])"
        },
        {
            "type": "steps",
            "title": "Color Change Intervals",
            "items": [
                "Middle tint form: when [basic color] = [acid color].",
                "Indicator shows basic color when: [basic color] ≈ 10 × [acid color].",
                "Indicator shows acidic color when: [acid color] ≈ 10 × [basic color]."
            ]
        },
        {
            "type": "law",
            "title": "Effective Range (Transition Interval)",
            "content": "The limit of visible color change is determined by: pH = pKind ± 1"
        },
        {
            "type": "table",
            "headers": ["Indicator", "Transition Interval", "Acidic Color", "Basic Color"],
            "rows": [
                ["Methyl orange", "3.1 - 4.4", "Red", "Yellow"],
                ["Bromothymol blue", "6.0 - 7.6", "Yellow", "Blue"],
                ["Phenolphthalein", "8.3 - 10.0", "Colorless", "Pink"]
            ]
        }
    ],
    "terms": [
        // (تركت المصطلحات كما هي لأنك لم تطلب ترجمة الـ terms)
        { "term": "Color indicators", "definition": "Dyes exhibit different colors in acidic and basic solutions." },
        { "term": "Turbidity indicators", "definition": "Indicators that form turbidity when the desired pH is reached." },
        { "term": "Fluorescence indicators", "definition": "Indicators that form or lose fluorescence at a given pH." },
        { "term": "Ostwald Theory", "definition": "Indicators are weak organic acids or bases in which un-dissociated molecules differ in color from their ions." },
        { "term": "Chromogenic Theory", "definition": "Color change depends on the presence of unsaturated chromophoric groups in the indicator molecule." },
        { "term": "Benzenoid structure", "definition": "Non-conjugated structure responsible for the colorless state of phenolphthalein." },
        { "term": "Quinonoid structure", "definition": "Conjugated structure responsible for the pink color of phenolphthalein." },
        { "term": "Universal indicators", "definition": "A mixture of indicators whose color change extends over a wide pH range. Used for rough pH determination." },
        { "term": "Screened indicators", "definition": "A mixture of an indicator and a dye used to obtain a sharper color change." },
        { "term": "Mixed indicators", "definition": "A mixture of two indicators having similar or overlapped pH ranges but showing contrasting colors." },
        { "term": "Middle tint form", "definition": "The state in which the acidic color equals the basic color." },
        { "term": "Transition interval", "definition": "The interval during which the color changes from acidic to basic form or vice versa." },
        { "term": "Indicator constant (pKind)", "definition": "The constant related to the ionization equilibrium of the indicator." },
        { "term": "Phthalein Indicators", "definition": "Indicators such as Phenolphthalein, o-Cresolphthalein, and Thymolphthalein." },
        { "term": "Sulphonephthalein Indicators", "definition": "Indicators such as Thymol blue, Bromophenol blue, and Phenol red." },
        { "term": "Azo Indicators", "definition": "Indicators containing an azo group such as Methyl yellow, Methyl orange, and Methyl red." },
        { "term": "Henderson-Hasselbalch equation", "definition": "An equation used to calculate the pH of buffer solutions." },
        { "term": "Acidic Indicator", "definition": "An indicator behaving as a weak acid such as phenolphthalein." },
        { "term": "Basic Indicator", "definition": "An indicator behaving as a weak base such as methyl orange." },
        { "term": "Chromophoric Group", "definition": "An unsaturated group responsible for color in indicator molecules." },
        { "term": "Conjugated System", "definition": "An alternating system of double and single bonds responsible for color development." },
        { "term": "Effective Range of Indicator", "definition": "The visible color change interval of an indicator represented by pH = pKind ± 1." },
        { "term": "Acid Color", "definition": "The color exhibited by the unionized acidic form of an indicator." },
        { "term": "Basic Color", "definition": "The color exhibited by the ionized basic form of an indicator." },
        { "term": "Unionized Form", "definition": "The non-dissociated form of an indicator molecule." },
        { "term": "Ionized Form", "definition": "The dissociated ionic form of an indicator molecule." }
    ],
    "reasons": [
        {
            "q": "Give Reason: Phenolphthalein (ph.ph.) is colorless in acidic medium and strongly alkaline medium (pH > 11) while pink at pH 8-10?",
            "a": "Because it forms a benzenoid structure (non-conjugated) in acidic and strongly alkaline media, while it forms a quinonoid structure (conjugated) at pH 8-10."
        },
        {
            "q": "Give Reason: Mixed indicators are most accurate for quantitative analysis?",
            "a": "Because mixed indicators consist of two indicators with overlapped pH ranges, resulting in a rapid and sharper color change at the end-point, reducing errors."
        }
    ],
    "qna": [
        // (نفس الشيء، تركتها كما هي لعدم وجود قوالب فارغة لها)
        { "q": "1. What is the pH of a 0.1 N HCl solution?", "a": "<strong>(b) 1</strong>" },
        { "q": "2. What is the pH of a 0.01 N NaOH solution?", "a": "<strong>(c) 12</strong>" },
        { "q": "3. Which formula is used to calculate the pH of a weak acid solution?", "a": "<strong>(b) pH = 1/2 pCa + 1/2 pKa</strong>" },
        { "q": "4. What is the pH of 0.05 M CH3COONa if pKa of CH3COOH is 4.74?", "a": "<strong>(c) 8.07</strong>" },
        { "q": "5. Which of the following is a weak acid or weak base that changes color with pH?", "a": "<strong>(b) Indicator</strong>" },
        { "q": "6. What is the transition range of Phenolphthalein?", "a": "<strong>(c) 8.3 - 10.0</strong>" },
        { "q": "7. Which theory explains that indicators change color due to ionization?", "a": "<strong>(b) Ostwald Theory</strong>" },
        { "q": "8. Why is Phenolphthalein colorless in acidic medium and strongly alkaline medium but pink at pH 8-10?", "a": "<strong>(c) Due to formation of benzenoid and quinonoid structures</strong>" },
        { "q": "9. Which of the following is NOT a type of indicator?", "a": "<strong>(d) Isotopic indicator</strong>" },
        { "q": "10. Which of the following indicators is an azo indicator?", "a": "<strong>(c) Methyl orange</strong>" },
        { "q": "11. What is the effective range of an indicator?", "a": "<strong>The transition interval (pH = pKind ± 1)</strong>" },
        { "q": "Short Note 1: Explain Ostwald Theory and its limitations.", "a": "It states that indicators are weak organic acids or bases in which un-dissociated molecules differ in color from their ions. Limitations include color changes in non-aqueous media and the behavior of phenolphthalein in strongly alkaline media." },
        { "q": "Short Note 2: Explain the Chromogenic Theory.", "a": "It states that color change depends on the presence of chromophoric unsaturated groups within the indicator molecule." },
        { "q": "Short Note 3: Explain why Phenolphthalein changes color with pH.", "a": "It is colorless due to the benzenoid structure and pink due to the quinonoid structure." },
        { "q": "Short Note 4: What is the transition interval of an indicator?", "a": "It is the interval during which the indicator changes from acidic color to basic color or vice versa. It is represented by pH = pKind ± 1." },
        { "q": "Short Note 5: How do buffer solutions resist pH changes?", "a": "Buffers resist pH changes by reacting with added hydrogen or hydroxyl ions and converting them into weakly ionized species." },
        { "q": "Short Note 6: What is the Henderson-Hasselbalch equation?", "a": "An equation used to calculate the pH of buffer solutions." },
        { "q": "Short Note 7: Why are mixed indicators more accurate?", "a": "Because they provide rapid and sharp color changes at the end-point, minimizing titration errors." },
        { "q": "Short Note 8: What are the characteristics of a good pH indicator?", "a": "A good indicator should have a sharp color change, distinct acidic and basic colors, suitable transition range near the equivalence point, high sensitivity, and should not interfere with the reaction." }
    ],
    "quiz": [
        {
            "question": "What is the pH of a 0.1 N HCl solution?",
            "options": ["0", "1", "2", "14"],
            "correct": 1,
            "hint": "pH of strong acid = -log[H+]",
            "questionAr": "ما هو الرقم الهيدروجيني (pH) لمحلول 0.1 N HCl؟", 
            "optionsAr": ["0", "1", "2", "14"], 
            "hintAr": "الرقم الهيدروجيني للحمض القوي = -log[H+]"
        },
        {
            "question": "What is the pH of a 0.01 N NaOH solution?",
            "options": ["10", "11", "12", "13"],
            "correct": 2,
            "hint": "First calculate pOH = -log[OH-], then pH = 14 - pOH",
            "questionAr": "ما هو الرقم الهيدروجيني (pH) لمحلول 0.01 N NaOH؟", 
            "optionsAr": ["10", "11", "12", "13"], 
            "hintAr": "احسب أولاً pOH = -log[OH-]، ثم pH = 14 - pOH"
        },
        {
            "question": "Which of the following formulas is used to calculate the pH of a weak acid solution?",
            "options": ["pH = -log[H+]", "pH = 1/2 pCa + 1/2 pKa", "pH = pKw - 1/2 pCb - 1/2 pKb", "pH = -log[OH-]"],
            "correct": 1,
            "hint": "Weak acids depend on concentration and Ka.",
            "questionAr": "أي من الصيغ التالية تستخدم لحساب الرقم الهيدروجيني لمحلول حمض ضعيف؟", 
            "optionsAr": ["pH = -log[H+]", "pH = 1/2 pCa + 1/2 pKa", "pH = pKw - 1/2 pCb - 1/2 pKb", "pH = -log[OH-]"], 
            "hintAr": "الأحماض الضعيفة تعتمد على التركيز و Ka."
        },
        {
            "question": "What is the pH of 0.05 M CH3COONa if pKa of CH3COOH is 4.74?",
            "options": ["6.5", "7.0", "8.07", "9.5"],
            "correct": 2,
            "hint": "Use the formula for salt of weak acid and strong base: pH = 1/2 pKw + 1/2 pKa - 1/2 pCs",
            "questionAr": "ما هو الرقم الهيدروجيني لـ 0.05 M CH3COONa إذا كان pKa لـ CH3COOH هو 4.74؟", 
            "optionsAr": ["6.5", "7.0", "8.07", "9.5"], 
            "hintAr": "استخدم صيغة ملح الحمض الضعيف والقاعدة القوية: pH = 1/2 pKw + 1/2 pKa - 1/2 pCs"
        },
        {
            "question": "Which of the following is a weak acid or weak base that changes color with pH?",
            "options": ["Buffer", "Indicator", "Salt", "Strong acid"],
            "correct": 1,
            "hint": "This is the definition of a color indicator.",
            "questionAr": "أي مما يلي عبارة عن حمض ضعيف أو قاعدة ضعيفة يتغير لونها بتغير الرقم الهيدروجيني (pH)؟", 
            "optionsAr": ["محلول منظم (Buffer)", "دليل (Indicator)", "ملح (Salt)", "حمض قوي"], 
            "hintAr": "هذا هو تعريف الدليل اللوني."
        },
        {
            "question": "What is the pH transition range of phenolphthalein?",
            "options": ["3.1 - 4.4", "4.2 - 6.3", "8.3 - 10.0", "6.0 - 7.6"],
            "correct": 2,
            "hint": "It turns from colorless to pink in basic medium.",
            "questionAr": "ما هو نطاق الانتقال للرقم الهيدروجيني للفينول فثالين؟", 
            "optionsAr": ["3.1 - 4.4", "4.2 - 6.3", "8.3 - 10.0", "6.0 - 7.6"], 
            "hintAr": "يتحول من عديم اللون إلى وردي في الوسط القاعدي."
        },
        {
            "question": "Which theory explains that indicators change color due to ionization?",
            "options": ["Chromogenic Theory", "Ostwald's Theory", "Bronsted-Lowry Theory", "Arrhenius Theory"],
            "correct": 1,
            "hint": "This theory relies on the difference in color between un-dissociated molecules and their ions.",
            "questionAr": "أي نظرية تفسر أن الأدلة يتغير لونها بسبب التأين؟", 
            "optionsAr": ["النظرية الكروموجينية", "نظرية أوستفالد", "نظرية برونستد-لوري", "نظرية أرهينيوس"], 
            "hintAr": "تعتمد هذه النظرية على الاختلاف في اللون بين الجزيئات غير المتأينة وأيوناتها."
        },
        {
            "question": "Why is phenolphthalein colorless at acidic pH and pH above 11, but pink at pH 8-10?",
            "options": ["Due to pKa difference", "Due to formation of a conjugate base", "Due to formation of a benzenoid and quinonoid structure", "Due to salt formation"],
            "correct": 2,
            "hint": "Benzenoid is non-conjugated (colorless), Quinonoid is conjugated (pink).",
            "questionAr": "لماذا يكون الفينول فثالين عديم اللون عند pH حمضي وعند pH أعلى من 11، ولكنه وردي عند pH 8-10؟", 
            "optionsAr": ["بسبب اختلاف pKa", "بسبب تكوين قاعدة مرافقة", "بسبب تكوين تركيب بنزينويد وكينونويد", "بسبب تكوين ملح"], 
            "hintAr": "تركيب البنزينويد غير مترافق (عديم اللون)، وتركيب الكينونويد مترافق (وردي)."
        },
        {
            "question": "Which of the following is NOT a type of indicator?",
            "options": ["Color indicator", "Turbidity indicator", "Fluorescence indicator", "Isotopic indicator"],
            "correct": 3,
            "hint": "Indicators are classified into Color, Turbidity, and Fluorescence.",
            "questionAr": "أي مما يلي لا يعتبر نوعاً من الأدلة؟", 
            "optionsAr": ["دليل لوني", "دليل عكارة", "دليل فلورة", "دليل نظائري (Isotopic indicator)"], 
            "hintAr": "تصنف الأدلة إلى لونية، عكارة، وفلورة."
        },
        {
            "question": "Which of the following indicators is an azo indicator?",
            "options": ["Phenolphthalein", "Bromophenol blue", "Methyl orange", "Thymolphthalein"],
            "correct": 2,
            "hint": "It contains the N=N chromophore.",
            "questionAr": "أي من الأدلة التالية يعتبر دليل آزو (azo indicator)؟", 
            "optionsAr": ["فينول فثالين", "أزرق البروموفينول", "ميثيل برتقالي", "ثيمول فثالين"], 
            "hintAr": "يحتوي على الكروموفور N=N."
        },
        {
            "question": "What is the pH of a salt derived from a strong acid and a strong base?",
            "options": ["Acidic", "Basic", "Neutral (pH = 7)", "Depends on concentration"],
            "correct": 2,
            "hint": "Strong acid and strong base neutralize completely without leaving excess H+ or OH-.",
            "questionAr": "ما هو الرقم الهيدروجيني لملح مشتق من حمض قوي وقاعدة قوية؟", 
            "optionsAr": ["حمضي", "قاعدي", "متعادل (pH = 7)", "يعتمد على التركيز"], 
            "hintAr": "الحمض القوي والقاعدة القوية يتعادلان تماماً دون ترك فائض من H+ أو OH-."
        },
        {
            "question": "What is the formula to calculate the pH of a salt of a weak base and a strong acid?",
            "options": ["pH = 1/2 pKw + 1/2 pKa - 1/2 pCs", "pH = 1/2 pKw - 1/2 pKb + 1/2 pCs", "pH = 1/2 pCa + 1/2 pKa", "pH = 7.0"],
            "correct": 1,
            "hint": "The resulting solution will be slightly acidic.",
            "questionAr": "ما هي الصيغة المستخدمة لحساب الرقم الهيدروجيني لملح مكون من قاعدة ضعيفة وحمض قوي؟", 
            "optionsAr": ["pH = 1/2 pKw + 1/2 pKa - 1/2 pCs", "pH = 1/2 pKw - 1/2 pKb + 1/2 pCs", "pH = 1/2 pCa + 1/2 pKa", "pH = 7.0"], 
            "hintAr": "المحلول الناتج سيكون حمضياً قليلاً."
        },
        {
            "question": "Which of the following is an example of a salt formed by a weak acid and a strong base?",
            "options": ["KCl", "NH4Cl", "CH3COONa", "Na2SO4"],
            "correct": 2,
            "hint": "It consists of acetate (weak acid) and sodium (strong base).",
            "questionAr": "أي مما يلي مثال لملح يتكون من حمض ضعيف وقاعدة قوية؟", 
            "optionsAr": ["KCl", "NH4Cl", "CH3COONa", "Na2SO4"], 
            "hintAr": "يتكون من الأسيتات (حمض ضعيف) والصوديوم (قاعدة قوية)."
        },
        {
            "question": "Indicators that form or lose fluorescence at a given pH are known as:",
            "options": ["Color indicators", "Turbidity indicators", "Fluorescence indicators", "Screened indicators"],
            "correct": 2,
            "hint": "The name implies the property of glowing/fluorescing.",
            "questionAr": "الأدلة التي تُكون أو تفقد الفلورة عند رقم هيدروجيني معين تعرف باسم:", 
            "optionsAr": ["أدلة لونية", "أدلة عكارة", "أدلة فلورة", "أدلة محجوبة"], 
            "hintAr": "الاسم يدل على خاصية التوهج/الفلورة."
        },
        {
            "question": "Phenolphthalein belongs to which class of indicators structurally?",
            "options": ["Azo indicators", "Sulphonephthalein indicators", "Phthalein indicators", "Mixed indicators"],
            "correct": 2,
            "hint": "Look at the suffix of the name.",
            "questionAr": "إلى أي فئة من الأدلة ينتمي الفينول فثالين من حيث التركيب الكيميائي؟", 
            "optionsAr": ["أدلة الآزو", "أدلة سلفون فثالين", "أدلة الفثالين", "أدلة مختلطة"], 
            "hintAr": "انظر إلى نهاية الاسم."
        },
        {
            "question": "Bromophenol blue is classified under which structural category?",
            "options": ["Phthalein indicators", "Sulphonephthalein indicators", "Azo indicators", "Screened indicators"],
            "correct": 1,
            "hint": "It contains a sulfonic acid functional group combined with a phthalein structure.",
            "questionAr": "يصنف أزرق البروموفينول تحت أي فئة تركيبية؟", 
            "optionsAr": ["أدلة الفثالين", "أدلة سلفون فثالين", "أدلة الآزو", "أدلة محجوبة"], 
            "hintAr": "يحتوي على مجموعة حمض السلفونيك الوظيفية مدمجة مع تركيب فثالين."
        },
        {
            "question": "According to the Chromogenic theory, which of the following is a chromophoric group?",
            "options": ["-OH", "-CH3", "-NO2", "-NH2"],
            "correct": 2,
            "hint": "It is an unsaturated group that imparts color (e.g., N=N, NO2).",
            "questionAr": "وفقاً للنظرية الكروموجينية، أي مما يلي يعتبر مجموعة حاملة للون (chromophoric group)؟", 
            "optionsAr": ["-OH", "-CH3", "-NO2", "-NH2"], 
            "hintAr": "هي مجموعة غير مشبعة تضفي لوناً (مثل، N=N, NO2)."
        },
        {
            "question": "Which type of indicators are used for rough determination of pH but are not suitable for titration?",
            "options": ["Mixed indicators", "Screened indicators", "Universal indicators", "Single indicators"],
            "correct": 2,
            "hint": "They consist of a multi-range mixture.",
            "questionAr": "ما هو نوع الأدلة المستخدمة في التقدير التقريبي للرقم الهيدروجيني ولكنها غير مناسبة للمعايرة؟", 
            "optionsAr": ["الأدلة المختلطة", "الأدلة المحجوبة", "الأدلة العامة", "الأدلة المفردة"], 
            "hintAr": "تتكون من خليط يغطي عدة نطاقات."
        },
        {
            "question": "What is a Screened indicator?",
            "options": ["Two indicators mixed together", "An indicator mixed with a dye", "An indicator used only in dark", "A pure single indicator"],
            "correct": 1,
            "hint": "The dye helps in making the color change sharper.",
            "questionAr": "ما هو الدليل المحجوب (Screened indicator)؟", 
            "optionsAr": ["دليلان ممزوجان معاً", "دليل ممزوج مع صبغة", "دليل يستخدم فقط في الظلام", "دليل مفرد نقي"], 
            "hintAr": "تساعد الصبغة في جعل التغير اللوني أكثر وضوحاً وحدة."
        },
        {
            "question": "Methyl orange and indigo carmine is an example of:",
            "options": ["Universal indicator", "Mixed indicator", "Screened indicator", "Single indicator"],
            "correct": 2,
            "hint": "It changes from green in alkaline to violet in acidic medium.",
            "questionAr": "الميثيل البرتقالي وصبغة النيلة (indigo carmine) هو مثال على:", 
            "optionsAr": ["دليل عام", "دليل مختلط", "دليل محجوب", "دليل مفرد"], 
            "hintAr": "يتغير لونه من الأخضر في الوسط القلوي إلى البنفسجي في الوسط الحمضي."
        },
        {
            "question": "Why are mixed indicators the most accurate for quantitative analysis?",
            "options": ["They have only one color", "They show a rapid and contrasting color change at the end-point", "They are cheaper to make", "They resist pH changes"],
            "correct": 1,
            "hint": "Their overlapped pH range provides a very sharp visual contrast.",
            "questionAr": "لماذا تعتبر الأدلة المختلطة هي الأكثر دقة للتحليل الكمي؟", 
            "optionsAr": ["لأن لها لون واحد فقط", "لأنها تظهر تغيراً لونياً سريعاً ومتبايناً عند نقطة النهاية", "لأنها أرخص في الصنع", "لأنها تقاوم تغيرات الرقم الهيدروجيني"], 
            "hintAr": "نطاق pH المتداخل الخاص بها يوفر تبايناً بصرياً حاداً جداً."
        },
        {
            "question": "Thymol blue and cresol red is an example of:",
            "options": ["Mixed indicator", "Screened indicator", "Universal indicator", "Turbidity indicator"],
            "correct": 0,
            "hint": "They have similar pH ranges (8.0-9.6 & 7.2-8.8) but contrasting colors.",
            "questionAr": "أزرق الثيمول وأحمر الكريسول هما مثال على:", 
            "optionsAr": ["دليل مختلط", "دليل محجوب", "دليل عام", "دليل عكارة"], 
            "hintAr": "لهما نطاقات pH متقاربة (8.0-9.6 و 7.2-8.8) ولكن بألوان متناقضة."
        },
        {
            "question": "When does an indicator exist in the 'middle tint' form?",
            "options": ["[basic color] = [acid color]", "[basic color] = 10 × [acid color]", "[acid color] = 10 × [basic color]", "pH = 7"],
            "correct": 0,
            "hint": "It happens exactly in the middle of the transition interval.",
            "questionAr": "متى يوجد الدليل في شكل 'الدرجة المتوسطة' (middle tint)؟", 
            "optionsAr": ["[اللون القاعدي] = [اللون الحمضي]", "[اللون القاعدي] = 10 × [اللون الحمضي]", "[اللون الحمضي] = 10 × [اللون القاعدي]", "pH = 7"], 
            "hintAr": "يحدث هذا بالضبط في منتصف فترة الانتقال."
        },
        {
            "question": "An indicator shows its basic color predominantly when:",
            "options": ["[acid color] ≈ 10 × [basic color]", "[basic color] = [acid color]", "[basic color] ≈ 10 × [acid color]", "pH = pKind"],
            "correct": 2,
            "hint": "The concentration of the basic form must be significantly higher.",
            "questionAr": "يُظهر الدليل لونه القاعدي بشكل سائد عندما:", 
            "optionsAr": ["[اللون الحمضي] ≈ 10 × [اللون القاعدي]", "[اللون القاعدي] = [اللون الحمضي]", "[اللون القاعدي] ≈ 10 × [اللون الحمضي]", "pH = pKind"], 
            "hintAr": "يجب أن يكون تركيز الشكل القاعدي أعلى بكثير."
        },
        {
            "question": "What is the mathematical expression for the transition interval (effective range) of an indicator?",
            "options": ["pH = pKind", "pH = pKind ± 1", "pH = pKind ± 2", "pH = pKa"],
            "correct": 1,
            "hint": "It covers one pH unit above and below the pKind.",
            "questionAr": "ما هو التعبير الرياضي لفترة الانتقال (المدى الفعال) للدليل؟", 
            "optionsAr": ["pH = pKind", "pH = pKind ± 1", "pH = pKind ± 2", "pH = pKa"], 
            "hintAr": "يغطي وحدة واحدة من الرقم الهيدروجيني أعلى وأسفل pKind."
        },
        {
            "question": "One of the limitations of Ostwald Theory is that:",
            "options": ["It perfectly explains all indicators", "It fails to explain color changes in non-aqueous media", "It states color is due to chromophores", "It only applies to strong acids"],
            "correct": 1,
            "hint": "Ionization is markedly decreased in non-aqueous media, yet color change still occurs.",
            "questionAr": "أحد أوجه القصور في نظرية أوستفالد هو أنها:", 
            "optionsAr": ["تفسر جميع الأدلة بشكل مثالي", "تفشل في تفسير التغيرات اللونية في الأوساط غير المائية", "تنص على أن اللون يرجع إلى الكروموفورات", "تنطبق فقط على الأحماض القوية"], 
            "hintAr": "يقل التأين بشكل ملحوظ في الأوساط غير المائية، ومع ذلك لا يزال التغير اللوني يحدث."
        },
        {
            "question": "What is the acidic color of Methyl orange?",
            "options": ["Yellow", "Red", "Blue", "Colorless"],
            "correct": 1,
            "hint": "It changes from Red to Yellow in the pH range 3.1 - 4.4.",
            "questionAr": "ما هو اللون الحمضي للميثيل البرتقالي؟", 
            "optionsAr": ["أصفر", "أحمر", "أزرق", "عديم اللون"], 
            "hintAr": "يتغير من الأحمر إلى الأصفر في نطاق pH من 3.1 إلى 4.4."
        },
        {
            "question": "What is the basic color of Bromothymol blue?",
            "options": ["Yellow", "Red", "Blue", "Colorless"],
            "correct": 2,
            "hint": "It operates in the range 6.0 - 7.6, changing from Yellow (acidic) to Blue (basic).",
            "questionAr": "ما هو اللون القاعدي لأزرق البروموثيمول؟", 
            "optionsAr": ["أصفر", "أحمر", "أزرق", "عديم اللون"], 
            "hintAr": "يعمل في النطاق 6.0 - 7.6، ويتغير من الأصفر (حمضي) إلى الأزرق (قاعدي)."
        },
        {
            "question": "Which of the following indicator classes contains a conjugated system responsible for color?",
            "options": ["Only Chromogenic indicators", "All organic indicators per Chromogenic theory", "Only Azo indicators", "Only Phthalein indicators"],
            "correct": 1,
            "hint": "The Chromogenic theory states that conjugated systems and unsaturated groups cause the color.",
            "questionAr": "أي من فئات الأدلة التالية يحتوي على نظام مترافق مسؤول عن اللون؟", 
            "optionsAr": ["الأدلة الكروموجينية فقط", "جميع الأدلة العضوية وفقاً للنظرية الكروموجينية", "أدلة الآزو فقط", "أدلة الفثالين فقط"], 
            "hintAr": "تنص النظرية الكروموجينية على أن الأنظمة المترافقة والمجموعات غير المشبعة هي التي تسبب اللون."
        },
        {
            "question": "In the context of the indicator equation: pH = pKind + log([basic color]/[acid color]), what happens if [basic color]/[acid color] = 1?",
            "options": ["pH = pKind", "pH = pKind + 1", "pH = pKind - 1", "pH = 0"],
            "correct": 0,
            "hint": "log(1) = 0.",
            "questionAr": "في سياق معادلة الدليل: pH = pKind + log([اللون القاعدي]/[اللون الحمضي])، ماذا يحدث إذا كانت النسبة [اللون القاعدي]/[اللون الحمضي] = 1؟", 
            "optionsAr": ["pH = pKind", "pH = pKind + 1", "pH = pKind - 1", "pH = 0"], 
            "hintAr": "لوغاريتم(1) = 0."
        }
    ],
    "summaryAr": [
        {
            "type": "note",
            "title": "ملاحظة هامة",
            "content": "تغطي هذه المحاضرة حسابات الرقم الهيدروجيني (pH) لأنواع مختلفة من المحاليل (الأحماض، القواعد، الأملاح) وتقدم شرحاً عميقاً لأدلة التعادل (حمض-قاعدة) إلى جانب نظرياتها وتصنيفاتها."
        },
        {
            "type": "title",
            "content": "1. حسابات الرقم الهيدروجيني (pH)"
        },
        {
            "type": "law",
            "title": "الأحماض والقواعد القوية",
            "content": "الرقم الهيدروجيني (pH) للحمض القوي = -log[H⁺] \nالرقم الهيدروكسيلي (pOH) للقاعدة القوية = -log[OH⁻] \n(تذكر: pH + pOH = pKw = 14)"
        },
        {
            "type": "example",
            "title": "مثال: حمض وقاعدة قوية",
            "content": "احسب الرقم الهيدروجيني (pH) لـ 0.1 N HCl: \npH = -log(0.1) = 1. \n\nاحسب الرقم الهيدروجيني (pH) لـ 0.01 N NaOH: \npOH = -log(0.01) = 2 \npH = 14 - 2 = 12."
        },
        {
            "type": "law",
            "title": "الأحماض والقواعد الضعيفة",
            "content": "الحمض الضعيف: pH = 1/2 pCa + 1/2 pKa \nالقاعدة الضعيفة: pOH = 1/2 pCb + 1/2 pKb \n(وبالتالي، pH = pKw - 1/2 pCb - 1/2 pKb)"
        },
        {
            "type": "title",
            "content": "الرقم الهيدروجيني (pH) للأملاح"
        },
        {
            "type": "list",
            "items": [
                "حمض قوي + قاعدة قوية = متعادل (pH = 7.0) مثل، NaCl, KCl.",
                "حمض ضعيف + قاعدة قوية = قاعدي (pH = 1/2 pKw + 1/2 pKa - 1/2 pCs) مثل، CH3COONa.",
                "قاعدة ضعيفة + حمض قوي = حمضي (pH = 1/2 pKw - 1/2 pKb + 1/2 pCs) مثل، NH4Cl.",
                "حمض ضعيف + قاعدة ضعيفة = (pH = 1/2 pKw + 1/2 pKa - 1/2 pKb) مثل، CH3COONH4."
            ]
        },
        {
            "type": "title",
            "content": "2. أدلة التعادل"
        },
        {
            "type": "mindmap",
            "center": "أنواع الأدلة",
            "branches": [
                "أدلة لونية: أصباغ تظهر ألواناً مختلفة في المحاليل الحمضية والقاعدية.",
                "أدلة العكارة (Turbidity indicators): تكون عكارة عند الوصول إلى الرقم الهيدروجيني المطلوب.",
                "أدلة الفلورة: تكون أو تفقد الفلورة عند الرقم الهيدروجيني المحدد."
            ]
        },
        {
            "type": "title",
            "content": "نظريات تغير اللون"
        },
        {
            "type": "definition",
            "term": "نظرية أوستفالد (Ostwald Theory)",
            "content": "الأدلة هي إما أحماض أو قواعد عضوية ضعيفة، حيث تختلف الجزيئات غير المتأينة في لونها عن أيوناتها. (HInd ⇌ H⁺ + Ind⁻)"
        },
        {
            "type": "warning",
            "title": "قصور نظرية أوستفالد",
            "content": "1. الفينول فثالين له لون وردي في المحلول القلوي (pH 8-10)، ولكنه يصبح عديم اللون مرة أخرى في الوسط شديد القلوية (pH 11-14).\n2. التغير اللوني البطيء في بعض الأدلة، بينما التفاعلات الأيونية عادة ما تكون لحظية.\n3. تُظهر بعض الأدلة تغيرات لونية في الأوساط غير المائية حيث يقل التأين بشكل ملحوظ."
        },
        {
            "type": "definition",
            "term": "النظرية الكروموجينية (Chromogenic Theory)",
            "content": "يعتمد التغير اللوني على وجود مجموعة حاملة للون (chromophoric) غير مشبعة في جزيء الدليل (مثل، NO2, NO, N=N, C=C)."
        },
        {
            "type": "note",
            "title": "مثال على التغير التركيبي (الفينول فثالين)",
            "content": "يكون عديم اللون عند pH 4-7 بسبب تكوين تركيب بنزينويد (غير مترافق/non-conjugated)، ووردي عند pH 8-10 بسبب تكوين تركيب كينونويد (مترافق/conjugated). ويصبح عديم اللون مرة أخرى عند pH 11-14."
        },
        {
            "type": "title",
            "content": "3. تصنيف الأدلة"
        },
        {
            "type": "list",
            "items": [
                "أدلة مفردة: مثل الفينول فثالين والميثيل البرتقالي.",
                "أدلة عامة (متعددة النطاقات): خليط من الأدلة يغطي نطاق واسع من الرقم الهيدروجيني. تستخدم للتقدير التقريبي للرقم الهيدروجيني (غير مناسبة للمعايرة الكمية).",
                "أدلة محجوبة (Screened Indicators): خليط من دليل وصبغة للحصول على تغير لوني أكثر وضوحاً وحدة (مثل، الميثيل البرتقالي وصبغة النيلة/indigo carmine).",
                "أدلة مختلطة (Mixed indicators): خليط من دليلين لهما نطاق pH متقارب أو متداخل ولكن بألوان متناقضة. هي الأكثر دقة للتحليل الكمي."
            ]
        },
        {
            "type": "title",
            "content": "4. ثابت الدليل وفترة الانتقال"
        },
        {
            "type": "equation",
            "content": "pH = pKind + log([اللون القاعدي] / [اللون الحمضي])"
        },
        {
            "type": "steps",
            "title": "فترات التغير اللوني",
            "items": [
                "شكل الدرجة المتوسطة (Middle tint form): عندما [اللون القاعدي] = [اللون الحمضي].",
                "يُظهر الدليل اللون القاعدي عندما: [اللون القاعدي] ≈ 10 × [اللون الحمضي].",
                "يُظهر الدليل اللون الحمضي عندما: [اللون الحمضي] ≈ 10 × [اللون القاعدي]."
            ]
        },
        {
            "type": "law",
            "title": "المدى الفعال (فترة الانتقال)",
            "content": "يتم تحديد حد التغير اللوني المرئي بواسطة: pH = pKind ± 1"
        },
        {
            "type": "table",
            "headers": ["الدليل (Indicator)", "فترة الانتقال", "اللون الحمضي", "اللون القاعدي"],
            "rows": [
                ["الميثيل البرتقالي", "3.1 - 4.4", "أحمر", "أصفر"],
                ["أزرق البروموثيمول", "6.0 - 7.6", "أصفر", "أزرق"],
                ["الفينول فثالين", "8.3 - 10.0", "عديم اللون", "وردي"]
            ]
        }
    ]
});