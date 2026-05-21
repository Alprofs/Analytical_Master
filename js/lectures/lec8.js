DataStore.lectures.push({
    "id": 8,
    "title": "Lecture 8: Metallochromic Indicators & Types of EDTA Reactions",
    "isPlaceholder": false,
    "summary": [
        {
            "type": "note",
            "title": "Important Note",
            "content": "Complexometric titrations rely on metallochromic indicators to detect the end point and utilize various titration techniques depending on the analyte properties."
        },
        {
            "type": "title",
            "content": "1. Metal Ion (Metallochromic) Indicators"
        },
        {
            "type": "definition",
            "term": "Metallochromic Indicator",
            "content": "A compound whose color changes when it binds to a metal ion."
        },
        {
            "type": "equation",
            "content": "Mg-Ind. (red) + EDTA \u2192 Mg-EDTA (colorless) + Ind. (blue)"
        },
        {
            "type": "list",
            "items": [
                "The stability of the Metal-Indicator (M-Ind.) complex must be LESS than the stability of the Metal-EDTA complex; otherwise, the indicator will be blocked.",
                "The M-Ind. complex must have sufficient stability; otherwise, dissociation prevents a sharp color change.",
                "The change in equilibrium from M-Ind. to M-EDTA should be sharp and rapid.",
                "The indicator must be very sensitive to metal ions so the color change occurs near the equivalence point.",
                "These requirements must be fulfilled within the pH of the titration."
            ]
        },
        {
            "type": "title",
            "content": "Common Metal-Ion Indicators"
        },
        {
            "type": "table",
            "headers": ["Name", "Color of Free Indicator", "Color of Metal Complex"],
            "rows": [
                ["Eriochrome Black T (Erio-T)", "Blue", "Wine red"],
                ["Calmagite", "Blue", "Wine red"],
                ["Murexide", "Violet", "Yellow / Red"],
                ["Xylenol Orange", "Yellow / Violet", "Red"],
                ["Pyrocatechol Violet", "Yellow / Red-purple", "Blue"]
            ]
        },
        {
            "type": "title",
            "content": "2. Indicator Blocking"
        },
        {
            "type": "warning",
            "title": "Attention! Indicator Blocking",
            "content": "The indicator is blocked when it forms a metal complex stronger than the metal-EDTA complex, or when the metal-indicator complex dissociates too slowly. No color change can be observed."
        },
        {
            "type": "text",
            "content": "Eriochrome Black T (Erio-T) is blocked by Cu2+, Ni2+, Co2+, Cr3+, Fe3+, and Al3+. Therefore, it cannot be used for direct titration of these metals, but they can be determined via back titration."
        },
        {
            "type": "title",
            "content": "3. Types of EDTA Titration Techniques"
        },
        {
            "type": "mindmap",
            "center": "EDTA Titrations",
            "branches": [
                "Direct Titration",
                "Back Titration",
                "Displacement Titration",
                "Indirect Titration"
            ]
        },
        {
            "type": "title",
            "content": "A. Direct Titration"
        },
        {
            "type": "list",
            "items": [
                "The analyte solution is buffered to an appropriate pH where the metal-EDTA complex is sufficiently stable.",
                "The free indicator must have a distinctly different color from the metal-indicator complex.",
                "In highly alkaline medium, metals like Fe3+, Al3+, Cr3+, Fe2+, and Pb2+ precipitate as hydroxides."
            ]
        },
        {
            "type": "example",
            "title": "Auxiliary Complexing Agents",
            "content": "In the direct titration of Pb2+ at pH 10, tartrate is added as an auxiliary agent to prevent precipitation of Pb(OH)2. The Pb-tartrate stability must be less than Pb-EDTA."
        },
        {
            "type": "title",
            "content": "B. Back Titration"
        },
        {
            "type": "text",
            "content": "A known excess of EDTA is added to the analyte. The excess EDTA is then back titrated with a standard solution of a second metal ion."
        },
        {
            "type": "list",
            "items": [
                "Used when analyte precipitates at high pH.",
                "Used when analyte reacts too slowly with EDTA.",
                "Used when analyte blocks the indicator."
            ]
        },
        {
            "type": "steps",
            "title": "Procedure: Back Determination of Al3+",
            "items": [
                "Add excess standard EDTA to the Al3+ sample.",
                "Adjust pH to 7-8.",
                "Boil to accelerate the reaction, then cool.",
                "Add Erio-T indicator.",
                "Back titrate the excess EDTA with standard Zn2+."
            ]
        },
        {
            "type": "title",
            "content": "C. Displacement Titration"
        },
        {
            "type": "law",
            "title": "Displacement Principle",
            "content": "Applied for metal ions that lack a satisfactory indicator. The analyte displaces a weaker metal from its EDTA complex: M1(Sample) + M2-EDTA(Excess) \u2192 M1-EDTA + M2(Titrated)."
        },
        {
            "type": "example",
            "title": "Displacement Examples",
            "content": "1. Hg2+ displaces Mg2+ from Mg-EDTA because Kf of Hg-EDTA > Kf of Mg-EDTA.\n2. Ag+ is determined using Ni(CN)4^2-, releasing Ni2+ which is then titrated with EDTA."
        },
        {
            "type": "title",
            "content": "D. Indirect Titration"
        },
        {
            "type": "text",
            "content": "Primarily used for the determination of Anions."
        },
        {
            "type": "list",
            "items": [
                "Sulphate (SO4^2-): Precipitated as BaSO4, excess Ba2+ titrated.",
                "Phosphate (PO4^3-): Precipitated as MgNH4PO4, excess Mg2+ titrated.",
                "Cyanide (CN-): Uses excess Ni2+ to form Ni(CN)4^2-.",
                "Halogens (X-): Precipitated as AgX, dissolved in Ni(CN)4^2- producing equivalent Ni2+."
            ]
        },
        {
            "type": "title",
            "content": "4. EDTA Selectivity: Masking & Demasking"
        },
        {
            "type": "text",
            "content": "EDTA is unselective. Selectivity is increased by Masking/Demasking, pH control, Classical Separation, and Solvent Extraction."
        },
        {
            "type": "list",
            "items": [
                "Addition of Masking Agents: F- masks Al3+ (forming AlF6^3-). Cyanide masks Cd, Zn, Hg, Co, Cu, Ag, Ni, Fe (but NOT Mg, Ca, Mn, Pb).",
                "Kinetic Masking: Cr3+ reacts slowly, allowing fast titration of Fe3+.",
                "Oxidation State Adjustment: Ascorbic acid reduces Fe3+/Cu2+/Hg2+. Alkaline peroxide oxidizes Cr3+ to chromate."
            ]
        },
        {
            "type": "equation",
            "content": "Demasking of Zn: [Zn(CN)4]2- + 4 H.CHO + 4 H+ \u2192 4 H.CH(OH)CN + Zn2+ (Using formaldehyde/acetic acid or chloralhydrate)"
        },
        {
            "type": "example",
            "title": "pH Control Selectivity",
            "content": "Bi3+ and Th4+ can be titrated in highly acidic solution (pH= 2) using xylenol orange. To determine a Bi/Pb mixture, titrate Bi at pH 2, then add Hexamine to raise pH to 5 and titrate Pb using Erio-T."
        },
        {
            "type": "title",
            "content": "5. Chelation & Biological Action"
        },
        {
            "type": "table",
            "headers": ["Biological Element / Antidote", "Role / Target"],
            "rows": [
                ["Hemoglobin & Myoglobin", "Oxygen transport/storage (Contains Iron)"],
                ["Chlorophyll", "Photosynthesis (Contains Magnesium)"],
                ["Insulin", "Enzyme activation (Contains Zinc)"],
                ["Vitamin B12", "Biological functions (Contains Cobalt)"],
                ["Dimercaprol (BAL)", "Antidote for Arsenic, Gold, Lead, Mercury"],
                ["Penicillamine", "Antidote for Copper (Wilson's disease)"]
            ]
        }
    ],
    "terms": [
        {
            "term": "Metallochromic Indicator",
            "definition": "A compound whose color changes when it binds to a metal ion."
        },
        {
            "term": "Indicator Blocking",
            "definition": "A phenomenon where the indicator forms a metal complex stronger than the metal-EDTA complex or dissociates too slowly."
        },
        {
            "term": "Direct Titration",
            "definition": "A titration in which the analyte is titrated directly with EDTA at a suitable pH."
        },
        {
            "term": "Back Titration",
            "definition": "A technique in which excess EDTA is added and the remaining EDTA is back titrated with another metal ion."
        },
        {
            "term": "Displacement Titration",
            "definition": "A method where the analyte displaces another metal ion from its EDTA complex."
        },
        {
            "term": "Indirect Titration",
            "definition": "A technique used mainly for determination of anions."
        },
        {
            "term": "Masking",
            "definition": "Protection of certain ions from reacting with EDTA without physical separation."
        },
        {
            "term": "Demasking",
            "definition": "Release of a metal ion from its masking complex."
        },
        {
            "term": "Kinetic Masking",
            "definition": "Masking based on differences in reaction rates."
        }
    ],
    "reasons": [
        {
            "q": "Give reason: Addition of hexamine in determination of Bi<sup>3+</sup> & Pb<sup>2+</sup> mixture.",
            "a": "To raise the pH to about 5 after bismuth is titrated, allowing the formation of the Pb-EDTA complex using Erio-T as indicator."
        },
        {
            "q": "Give reason: Aluminium ion in basic medium cannot be determined directly using EDTA and Erio-T as indicator.",
            "a": "Because aluminium precipitates as Al(OH)<sub>3</sub> in alkaline medium, reacts slowly with EDTA, and blocks the Erio-T indicator."
        },
        {
            "q": "Give reason: Multidentate ligands form more stable metal complexes than monodentate ligands.",
            "a": "Due to the chelate effect resulting from formation of stable cyclic ring structures."
        },
        {
            "q": "Give reason: Addition of tartrate solution in preparation of Fehling’s reagent.",
            "a": "Because tartrate forms a soluble copper tartrate complex that prevents precipitation of Cu(OH)<sub>2</sub> in alkaline medium."
        },
        {
            "q": "Give reason: Iron-EDTA is used instead of iron alone in plants.",
            "a": "Because chelation increases the water solubility of iron and prevents its precipitation, increasing iron uptake."
        }
    ],
    "qna": [
        {
            "q": "Q1: The metal that can be masked by cyanide is ..............",
            "a": "<strong>3- copper</strong>"
        },
        {
            "q": "Q2: Determination of Iron (III) and chromium (III) mixture is based on ...............",
            "a": "<strong>3- kinetic masking</strong>"
        },
        {
            "q": "Q3: When the Metal-Ind. is more stable than Metal-EDTA, it is called .........",
            "a": "<strong>3- blocking</strong>"
        },
        {
            "q": "Q4: The method that can be used for determination of phosphate anions is ......... method.",
            "a": "<strong>3- Indirect</strong>"
        },
        {
            "q": "Q5: Magnesium is present in .....",
            "a": "<strong>4- chlorophyll</strong>"
        },
        {
            "q": "Q6: Which complex can be released by chloralhydrate?",
            "a": "<strong>2- Zn(CN)<sub>4</sub><sup>2-</sup></strong>"
        },
        {
            "q": "1- Multivalent cations form stable complexes with EDTA in .......... medium.",
            "a": "<strong>alkaline</strong>"
        },
        {
            "q": "2- The higher stability constant of the complex, the .......... inflection part of titration curve.",
            "a": "<strong>longer</strong>"
        },
        {
            "q": "3- The stability constant in the presence of another complexing agent is called ...............",
            "a": "<strong>Apparent (or conditional) stability constant</strong>"
        },
        {
            "q": "4- Oxine can be used as ................",
            "a": "<strong>precipitating agent</strong>"
        },
        {
            "q": "5- Example of bidentate ligand is .............., while EDTA is considered ............... ligand.",
            "a": "<strong>Ethylenediamine</strong>, <strong>multidentate (hexadentate)</strong>"
        },
        {
            "q": "Aluminium ion in basic medium cannot be determined directly using EDTA and Erio-T as indicator.",
            "a": "Because aluminium precipitates as Al(OH)<sub>3</sub> in alkaline medium, reacts slowly with EDTA, and blocks the Erio-T indicator."
        },
        {
            "q": "Multidentate ligands form more stable metal complexes than monodentate ligands.",
            "a": "Due to the chelate effect resulting from formation of stable cyclic ring structures."
        },
        {
            "q": "Addition of tartrate solution in preparation of Fehling’s reagent.",
            "a": "Because tartrate forms a soluble copper tartrate complex that prevents precipitation of Cu(OH)<sub>2</sub> in alkaline medium."
        },
        {
            "q": "Iron-EDTA is used instead of iron alone in plants.",
            "a": "Because chelation increases the water solubility of iron and prevents its precipitation, increasing iron uptake."
        }
    ],
    "quiz": [
        {
            "question": "Which EDTA titration technique is mainly used for determination of anions such as sulphate and phosphate?",
            "options": [
                "Direct titration",
                "Back titration",
                "Displacement titration",
                "Indirect titration"
            ],
            "correct": 3,
            "hint": "Anions are usually precipitated first with excess metal ions, then the excess metal is titrated with EDTA.",
            "questionAr": "أي من تقنيات معايرة الـ EDTA تُستخدم بشكل أساسي لتقدير الأنيونات مثل الكبريتات والفوسفات؟",
            "optionsAr": [
                "المعايرة المباشرة",
                "المعايرة الخلفية (الرجعية)",
                "معايرة الإحلال",
                "المعايرة غير المباشرة"
            ],
            "hintAr": "يتم عادةً ترسيب الأنيونات أولاً باستخدام فائض من أيونات المعادن، ثم يتم معايرة المعدن الزائد باستخدام الـ EDTA."
        },
        {
            "question": "Why is tartrate added in Fehling’s solution?",
            "options": [
                "To increase acidity",
                "To precipitate copper",
                "To form soluble copper tartrate complex",
                "To act as an indicator"
            ],
            "correct": 2,
            "hint": "Tartrate prevents precipitation of Cu(OH)2 in alkaline medium.",
            "questionAr": "لماذا يتم إضافة التارتارات في محلول فهلنج؟",
            "optionsAr": [
                "لزيادة الحموضة",
                "لترسيب النحاس",
                "لتكوين معقد تارتارات النحاس الذائب",
                "ليعمل كدليل (كاشف)"
            ],
            "hintAr": "التارتارات تمنع ترسيب هيدروكسيد النحاس الثنائي Cu(OH)2 في الوسط القلوي."
        },
        {
            "question": "The metal that can be masked by cyanide is:",
            "options": [
                "Lead",
                "Magnesium",
                "Copper",
                "Calcium"
            ],
            "correct": 2,
            "hint": "Cyanide forms stable complexes with transition metals like Cu, Zn, and Ni, but not alkaline earth metals.",
            "questionAr": "المعدن الذي يمكن حجب تأثيره (قناعه) بواسطة السيانيد هو:",
            "optionsAr": [
                "الرصاص",
                "المغنيسيوم",
                "النحاس",
                "الكالسيوم"
            ],
            "hintAr": "السيانيد يكون معقدات مستقرة مع المعادن الانتقالية مثل النحاس والزنك والنيكل، ولكن ليس مع المعادن القلوية الترابية."
        },
        {
            "question": "Determination of Iron (III) and chromium (III) mixture is based on:",
            "options": [
                "Addition of masking agent",
                "Change the oxidation state of the elements",
                "Kinetic masking",
                "Classical separation"
            ],
            "correct": 2,
            "hint": "Chromium reacts very slowly with EDTA, allowing Iron to be titrated first without interference.",
            "questionAr": "يعتمد تقدير خليط من الحديد (III) والكروم (III) على:",
            "optionsAr": [
                "إضافة عامل حجب (قناع)",
                "تغيير حالة الأكسدة للعناصر",
                "الحجب الحركي (Kinetic masking)",
                "الفصل التقليدي"
            ],
            "hintAr": "الكروم يتفاعل ببطء شديد مع الـ EDTA، مما يسمح بمعايرة الحديد أولاً دون حدوث تداخل."
        },
        {
            "question": "When the Metal-Indicator complex is more stable than the Metal-EDTA complex, it is called:",
            "options": [
                "Masking",
                "Demasking",
                "Blocking",
                "Selectivity"
            ],
            "correct": 2,
            "hint": "The indicator refuses to release the metal to EDTA, preventing a color change.",
            "questionAr": "عندما يكون معقد (المعدن-الدليل) أكثر استقراراً من معقد (المعدن-EDTA)، تسمى هذه الظاهرة:",
            "optionsAr": [
                "الحجب (Masking)",
                "إزالة الحجب (Demasking)",
                "حصر أو تعطيل الدليل (Blocking)",
                "الانتقائية"
            ],
            "hintAr": "يرفض الدليل تحرير المعدن للـ EDTA، مما يمنع ظهور أي تغير في اللون."
        },
        {
            "question": "Magnesium is present naturally in:",
            "options": [
                "Insulin",
                "Vitamin B12",
                "Enzymes",
                "Chlorophyll"
            ],
            "correct": 3,
            "hint": "It is the central element in the plant pigment responsible for photosynthesis.",
            "questionAr": "يتواجد المغنيسيوم بشكل طبيعي في:",
            "optionsAr": [
                "الأنسولين",
                "فيتامين ب12 (B12)",
                "الإنزيمات",
                "الكلوروفيل"
            ],
            "hintAr": "هو العنصر المركزي في الصبغة النباتية المسؤولة عن عملية البناء الضوئي."
        },
        {
            "question": "Which complex can be released (demasked) by using chloralhydrate?",
            "options": [
                "Ni(CN)4^2-",
                "Zn(CN)4^2-",
                "[Ag(CN)2]^-",
                "Zn-EDTA"
            ],
            "correct": 1,
            "hint": "Chloralhydrate or formaldehyde releases zinc from its cyanide complex.",
            "questionAr": "أي معقد يمكن تحريره (إزالة حجبه) باستخدام كلورالهيدرات؟",
            "optionsAr": [
                "Ni(CN)4^2-",
                "Zn(CN)4^2-",
                "[Ag(CN)2]^-",
                "Zn-EDTA"
            ],
            "hintAr": "الكلورالهيدرات أو الفورمالديهايد يقوم بتحرير الزنك من معقد السيانيد الخاص به."
        },
        {
            "question": "What is the primary indicator used for titrating Bismuth (Bi3+) at pH 2?",
            "options": [
                "Erio-T",
                "Murexide",
                "Xylenol orange",
                "Calmagite"
            ],
            "correct": 2,
            "hint": "It is highly suitable for acidic titrations and changes to red with metals.",
            "questionAr": "ما هو الدليل الأساسي المستخدم لمعايرة البزموت (Bi3+) عند أس هيدروجيني (pH) يساوي 2؟",
            "optionsAr": [
                "Erio-T",
                "الميوركسيد",
                "الكسيلينول البرتقالي (Xylenol orange)",
                "الكالماجيت"
            ],
            "hintAr": "هو دليل مناسب جداً للمعايرات الحمضية ويتغير لونه إلى الأحمر عند الارتباط بالمعادن."
        },
        {
            "question": "In the determination of a Bi3+ and Pb2+ mixture, Hexamine is added to:",
            "options": [
                "Mask the lead ions",
                "Demask bismuth",
                "Lower the pH to 2",
                "Raise the pH to about 5"
            ],
            "correct": 3,
            "hint": "Pb2+ requires a less acidic environment to form a stable EDTA complex.",
            "questionAr": "عند تقدير خليط من الـ Bi3+ والـ Pb2+، يتم إضافة الهكسامين لـ:",
            "optionsAr": [
                "حجب أيونات الرصاص",
                "إزالة حجب البزموت",
                "خفض الأس الهيدروجيني (pH) إلى 2",
                "رفع الأس الهيدروجيني (pH) إلى حوالي 5"
            ],
            "hintAr": "أيون الرصاص Pb2+ يتطلب وسطاً أقل حموضة لتكوين معقد مستقر مع الـ EDTA."
        },
        {
            "question": "Dimercaprol (BAL) is an effective antidote for poisoning by:",
            "options": [
                "Copper only",
                "Iron and Zinc",
                "Arsenic, gold, lead, and mercury",
                "Calcium and Magnesium"
            ],
            "correct": 2,
            "hint": "It was originally known as British anti-lewisite.",
            "questionAr": "يعتبر الديميركابرول (BAL) ترياقاً فعالاً للتسمم بـ:",
            "optionsAr": [
                "النحاس فقط",
                "الحديد والزنك",
                "الزرنيخ، الذهب، الرصاص، والزئبق",
                "الكالسيوم والمغنيسيوم"
            ],
            "hintAr": "كان يُعرف في الأصل باسم مضاد لويسيت البريطاني (British anti-lewisite)."
        },
        {
            "question": "Penicillamine is used as an effective antidote primarily for the treatment of:",
            "options": [
                "Lead poisoning",
                "Copper poisoning (Wilson's disease)",
                "Iron overload",
                "Mercury poisoning"
            ],
            "correct": 1,
            "hint": "It is heavily associated with Wilson's disease.",
            "questionAr": "يُستخدم البينيسيلامين كترياق فعال بشكل أساسي لعلاج:",
            "optionsAr": [
                "التسمم بالرصاص",
                "التسمم بالنحاس (مرض ويلسون)",
                "فرط تحميل الحديد",
                "التسمم بالزئبق"
            ],
            "hintAr": "يرتبط هذا العقار بشكل وثيق جداً بمرض ويلسون الإستقلابي."
        },
        {
            "question": "Which metal blocks the Eriochrome Black T (Erio-T) indicator?",
            "options": [
                "Magnesium",
                "Calcium",
                "Aluminium",
                "Zinc"
            ],
            "correct": 2,
            "hint": "Al3+ along with Cu, Ni, Co, Cr, and Fe block Erio-T.",
            "questionAr": "أي من المعادن التالية يسبب حصر أو تعطيل (Blocking) لدليل الإريوكروم الأسود T (Erio-T)؟",
            "optionsAr": [
                "المغنيسيوم",
                "الكالسيوم",
                "الألومنيوم",
                "الزنك"
            ],
            "hintAr": "أيون الألومنيوم Al3+ إلى جانب النحاس والنيكل والكوبالت والكروم والحديد تسبب جميعها تعطيل هذا الدليل."
        },
        {
            "question": "To determine Aluminum (Al3+), which titration method is strictly used to avoid precipitation and indicator blocking?",
            "options": [
                "Direct titration",
                "Back titration",
                "Displacement titration",
                "Indirect titration"
            ],
            "correct": 1,
            "hint": "Excess EDTA is added, boiled, and back titrated with Zn2+.",
            "questionAr": "لتقدير الألومنيوم (Al3+)، أي طرق المعايرة تُستخدم بدقة لتجنب الترسيب وتعطيل الدليل؟",
            "optionsAr": [
                "المعايرة المباشرة",
                "المعايرة الخلفية (الرجعية)",
                "معايرة الإحلال",
                "المعايرة غير المباشرة"
            ],
            "hintAr": "يتم إضافة فائض من الـ EDTA القياسي، ثم الغليان، وبعدها يتم إجراء معايرة رجعية باستخدام الـ Zn2+."
        },
        {
            "question": "Displacement titration is applied primarily for metal ions that:",
            "options": [
                "React too quickly",
                "Precipitate easily",
                "Do not have a satisfactory indicator",
                "Form weak EDTA complexes"
            ],
            "correct": 2,
            "hint": "By displacing a metal like Mg2+ that has a good indicator, the original metal can be quantified.",
            "questionAr": "تُطبق معايرة الإحلال بشكل أساسي لأيونات المعادن التي:",
            "optionsAr": [
                "تتفاعل بسرعة كبيرة",
                "تترسب بسهولة",
                "لا تملك دليلاً (كاشفاً) مناسباً",
                "تكون معقدات ضعيفة مع الـ EDTA"
            ],
            "hintAr": "من خلال إحلال معدن مثل Mg2+ يمتلك دليلاً ممتازاً، يمكن قياس كمية المعدن الأصلي بدقة."
        },
        {
            "question": "In indirect titration of Sulphate, what is it precipitated as before titration?",
            "options": [
                "CaSO4",
                "BaSO4",
                "MgSO4",
                "PbSO4"
            ],
            "correct": 1,
            "hint": "Barium is used to precipitate sulphate completely.",
            "questionAr": "في المعايرة غير المباشرة للكبريتات، على أي هيئة يتم ترسيبها قبل البدء بالمعايرة؟",
            "optionsAr": [
                "CaSO4",
                "BaSO4",
                "MgSO4",
                "PbSO4"
            ],
            "hintAr": "يتم استخدام الباريوم لترسيب الكبريتات بشكل كامل."
        },
        {
            "question": "Which of the following acts as a masking agent for Al3+?",
            "options": [
                "Cyanide",
                "Ascorbic acid",
                "Fluoride",
                "Alkaline peroxide"
            ],
            "correct": 2,
            "hint": "It forms a very stable AlF6^3- complex.",
            "questionAr": "أي مما يلي يعمل كعامل حجب (قناع) لأيون الألومنيوم Al3+؟",
            "optionsAr": [
                "السيانيد",
                "حمض الأسكوربيك",
                "الفلوريد",
                "بيروكسيد القلوي"
            ],
            "hintAr": "يقوم بتكوين معقد مستقر للغاية وهو AlF6^3-."
        },
        {
            "question": "To titrate Mg2+ in the presence of Al3+, what masking agent is added?",
            "options": [
                "Cyanide",
                "Fluoride",
                "Chloralhydrate",
                "Tartrate"
            ],
            "correct": 1,
            "hint": "Fluoride specifically masks Aluminum leaving Mg free.",
            "questionAr": "لمعايرة الـ Mg2+ في وجود الـ Al3+، ما هو عامل الحجب الذي يجب إضافته؟",
            "optionsAr": [
                "السيانيد",
                "الفلوريد",
                "كلورالهيدرات",
                "التارتارات"
            ],
            "hintAr": "الفلوريد يحجب الألومنيوم بشكل نوعي ومحدد، تاركاً المغنيسيوم حراً للتفاعل."
        },
        {
            "question": "Ascorbic acid is used to mask Fe3+, Cu2+, and Hg2+ by adjusting their:",
            "options": [
                "Oxidation state (reducing them)",
                "pH level",
                "Kinetic rate",
                "Precipitation point"
            ],
            "correct": 0,
            "hint": "Ascorbic acid is a known reducing agent.",
            "questionAr": "يُستخدم حمض الأسكوربيك لحجب Fe3+ و Cu2+ و Hg2+ عن طريق ضبط:",
            "optionsAr": [
                "حالة الأكسدة (عبر اختزالهم)",
                "مستوى الأس الهيدروجيني (pH)",
                "المعدل الحركي للتفاعل",
                "نقطة الترسيب"
            ],
            "hintAr": "حمض الأسكوربيك معروف علمياً بأنه عامل مختزل قوي."
        },
        {
            "question": "Cr3+ can be masked by oxidizing it to chromate ion using:",
            "options": [
                "Ascorbic acid",
                "Fluoride",
                "Alkaline peroxide",
                "Formaldehyde"
            ],
            "correct": 2,
            "hint": "Peroxide is a strong oxidizing agent.",
            "questionAr": "يمكن حجب الـ Cr3+ عن طريق أكسدته إلى أيون الكرومات باستخدام:",
            "optionsAr": [
                "حمض الأسكوربيك",
                "الفلوريد",
                "بيروكسيد القلوي",
                "الفورمالديهايد"
            ],
            "hintAr": "البيروكسيد يعتبر من العوامل المؤكسدة القوية."
        },
        {
            "question": "Which of the following metals CANNOT be masked by cyanide?",
            "options": [
                "Zinc (Zn2+)",
                "Copper (Cu2+)",
                "Iron (Fe3+)",
                "Lead (Pb2+)"
            ],
            "correct": 3,
            "hint": "Alkaline earths and Lead do not form stable cyanide complexes.",
            "questionAr": "أي من المعادن التالية لا يمكن حجب تأثيره بواسطة السيانيد؟",
            "optionsAr": [
                "الزنك (Zn2+)",
                "النحاس (Cu2+)",
                "الحديد (Fe3+)",
                "الرصاص (Pb2+)"
            ],
            "hintAr": "المعادن القلوية الترابية والرصاص لا تكون معقدات مستقرة مع السيانيد."
        },
        {
            "question": "In back titration, the titrant metal added to react with excess EDTA should:",
            "options": [
                "Displace the analyte from its EDTA complex",
                "Be identical to the analyte",
                "Not displace the analyte from its EDTA complex",
                "Precipitate the analyte"
            ],
            "correct": 2,
            "hint": "If it displaces the analyte, the results will be completely inaccurate.",
            "questionAr": "في المعايرة الخلفية، يجب على المعدن المستخدم كـمُعاير (والذي يتفاعل مع فائض الـ EDTA) أن:",
            "optionsAr": [
                "يُحل محل المادة المحللة من معقد الـ EDTA الخاص بها",
                "يكون مطابخاً تماماً للمادة المحللة",
                "لا يُحل محل المادة المحللة من معقد الـ EDTA الخاص بها",
                "يرسب المادة المحللة"
            ],
            "hintAr": "إذا قام بإزاحة المادة المحللة من معقدها، ستكون النتائج غير دقيقة وخاطئة تماماً."
        },
        {
            "question": "Hemoglobin and myoglobin are proteins complexed with:",
            "options": [
                "Copper",
                "Iron",
                "Magnesium",
                "Cobalt"
            ],
            "correct": 1,
            "hint": "They are responsible for oxygen transport and storage.",
            "questionAr": "الهيموجلوبين والميوجلوبين هما بروتينات ترتبط في معقدات مع معدن:",
            "optionsAr": [
                "النحاس",
                "الحديد",
                "المغنيسيوم",
                "الكوبالت"
            ],
            "hintAr": "هذه المركبات مسؤولة عن نقل الأكسجين وتخزينه داخل الجسم."
        },
        {
            "question": "Insulin relies on which metal for its structure/activation?",
            "options": [
                "Cobalt",
                "Iron",
                "Magnesium",
                "Zinc"
            ],
            "correct": 3,
            "hint": "It activates some carboxylases and phosphatases.",
            "questionAr": "يعتمد الأنسولين على أي معدن من أجل بنيته الهيكلية وتنشيطه؟",
            "optionsAr": [
                "الكوبالت",
                "الحديد",
                "المغنيسيوم",
                "الزنك"
            ],
            "hintAr": "هذا المعدن يقوم بتنشيط بعض إنزيمات الكربوكسيليز والفوسفاتيز."
        },
        {
            "question": "Vitamin B12 contains which essential metal?",
            "options": [
                "Cobalt",
                "Copper",
                "Iron",
                "Zinc"
            ],
            "correct": 0,
            "hint": "The chemical name of Vitamin B12 is Cobalamin.",
            "questionAr": "على ماذا يحتوي فيتامين ب12 (B12) من المعادن الأساسية التالية؟",
            "optionsAr": [
                "الكوبالت",
                "النحاس",
                "الحديد",
                "الزنك"
            ],
            "hintAr": "الاسم الكيميائي لفيتامين ب12 هو كوبالامين (Cobalamin)."
        },
        {
            "question": "For a successful M-Ind color change, the change in equilibrium from M-Ind to M-EDTA should be:",
            "options": [
                "Slow and gradual",
                "Sharp and rapid",
                "Reversible and slow",
                "pH independent"
            ],
            "correct": 1,
            "hint": "End points in titrations must be easily observable to avoid volume errors.",
            "questionAr": "لضمان حدوث تغير ناجح في لون معقد (المعدن-الدليل)، يجب أن يكون التغير في التوازن من M-Ind إلى M-EDTA:",
            "optionsAr": [
                "بطيئاً وتدريجياً",
                "حاداً وسريعاً",
                "منعكساً وبطيئاً",
                "مستقلاً عن الأس الهيدروجيني (pH)"
            ],
            "hintAr": "يجب أن تكون نقطة نهاية المعايرة واضحة وسهلة الملاحظة لتفادي الأخطاء في حساب الحجوم."
        },
        {
            "question": "The color of free Eriochrome Black T indicator is:",
            "options": [
                "Wine red",
                "Blue",
                "Yellow",
                "Violet"
            ],
            "correct": 1,
            "hint": "It changes to wine red when bound to a metal.",
            "questionAr": "لون دليل الإريوكروم الأسود T الحر (غير المرتبط بمعدن) هو:",
            "optionsAr": [
                "الأحمر النبيذي",
                "الأزرق",
                "الأصفر",
                "البنفسجي"
            ],
            "hintAr": "يتحول لونه إلى الأحمر النبيذي عند ارتباطه بأيون معدني."
        },
        {
            "question": "In the indirect determination of Cyanide, it is treated with an excess of:",
            "options": [
                "Ag+",
                "Ba2+",
                "Ni2+",
                "Mg2+"
            ],
            "correct": 2,
            "hint": "It forms a tetracyanonickelate complex.",
            "questionAr": "في التقدير غير المباشر للسيانيد، يتم معالجته بفائض من:",
            "optionsAr": [
                "أيون الفضة Ag+",
                "أيون الباريوم Ba2+",
                "أيون النيكل Ni2+",
                "أيون المغنيسيوم Mg2+"
            ],
            "hintAr": "يتفاعل ليكون معقد رباعي سيانو نيكلات (tetracyanonickelate)."
        },
        {
            "question": "What is the expected color of the Calmagite-Metal complex?",
            "options": [
                "Blue",
                "Wine red",
                "Orange",
                "Violet"
            ],
            "correct": 1,
            "hint": "Similar to Erio-T, the free indicator is blue and the complex is red.",
            "questionAr": "ما هو اللون المتوقع لمعقد (الكالماجيت-المعدن)؟",
            "optionsAr": [
                "الأزرق",
                "الأحمر النبيذي",
                "البرتقالي",
                "البنفسجي"
            ],
            "hintAr": "على غرار دليل Erio-T، يكون الدليل الحر أزرق اللون بينما يكون المعقد أحمر."
        },
        {
            "question": "Chelation is applied in biology and agriculture to:",
            "options": [
                "Make metals insoluble",
                "Increase water-solubility of metals like iron",
                "Block metal uptake in plants",
                "Destroy enzyme activity"
            ],
            "correct": 1,
            "hint": "Iron-EDTA is used in plants precisely because it is soluble.",
            "questionAr": "يُطبق تكوين المعقدات المخلبية (Chelation) في علم الأحياء والزراعة من أجل:",
            "optionsAr": [
                "جعل المعادن غير قابلة للذوبان",
                "زيادة ذوبان المعادن في الماء مثل الحديد",
                "منع امتصاص النبات للمعادن",
                "تدمير النشاط الإنزيمي"
            ],
            "hintAr": "يُستخدم معقد الحديد-EDTA للنباتات خصيصاً لأنه ذائب ويمنع ترسبه في التربة."
        },
        {
            "question": "If an analyte precipitates at a high pH in the absence of EDTA, which technique is most appropriate?",
            "options": [
                "Direct titration",
                "Back titration",
                "Displacement titration",
                "Acid-base titration"
            ],
            "correct": 1,
            "hint": "Adding excess EDTA before the pH is raised prevents precipitation.",
            "questionAr": "إذا كانت المادة المراد تحليلها تترسب عند أس هيدروجيني (pH) مرتفع في غياب الـ EDTA، فما هي التقنية الأكثر ملاءمة؟",
            "optionsAr": [
                "المعايرة المباشرة",
                "المعايرة الخلفية (الرجعية)",
                "معايرة الإحلال",
                "المعايرة الحمضية القلوية"
            ],
            "hintAr": "إضافة فائض من الـ EDTA قبل رفع قيمة الأس الهيدروجيني يمنع حدوث الترسيب."
        }
    ],
    "summaryAr": [
        {
            "type": "note",
            "title": "ملاحظة هامة",
            "content": "تعتمد معايرات تكوين المعقدات (Complexometric titrations) على الأدلة المعدنية لتحديد نقطة النهاية، وتستخدم تقنيات معايرة متنوعة بناءً على خصائص المادة المراد تحليلها."
        },
        {
            "type": "title",
            "content": "1. أدلة أيونات المعادن (الأدلة المعدنية)"
        },
        {
            "type": "definition",
            "term": "الدليل المعدني",
            "content": "مركب كيميائي يتغير لونه عند ارتباطه بأيون معدني."
        },
        {
            "type": "equation",
            "content": "Mg-Ind. (أحمر) + EDTA \u2192 Mg-EDTA (عديم اللون) + Ind. (أزرق)"
        },
        {
            "type": "list",
            "items": [
                "يجب أن يكون استقرار معقد (المعدن-الدليل) أقل من استقرار معقد (المعدن-EDTA)؛ وإلا سيحدث حصر وتعطيل للدليل.",
                "يجب أن يتمتع معقد (المعدن-الدليل) باستقرار كافٍ؛ وإلا فإن التفكك السريع سيمنع حدوث تغير حاد وواضح في اللون.",
                "يجب أن يكون التغير في الاتزان الكيميائي من معقد الدليل إلى معقد الـ EDTA حاداً وسريعاً.",
                "يجب أن يكون الدليل شديد الحساسية لأيونات المعادن بحيث يحدث تغير اللون بالقرب من نقطة التكافؤ.",
                "يجب أن تتحقق هذه الشروط والمتطلبات ضمن النطاق الهيدروجيني (pH) المحدد للمعايرة."
            ]
        },
        {
            "type": "title",
            "content": "الأدلة المعدنية الشائعة"
        },
        {
            "type": "table",
            "headers": ["الاسم", "لون الدليل الحر", "لون معقد المعدن"],
            "rows": [
                ["إريوكروم الأسود T (Erio-T)", "أزرق", "أحمر نبيذي"],
                ["كالماجيت", "أزرق", "أحمر نبيذي"],
                ["ميوركسيد", "بنفسجي", "أصفر / أحمر"],
                ["الكسيلينول البرتقالي", "أصفر / بنفسجي", "أحمر"],
                ["بيروكاتيكول البنفسجي", "أصفر / أحمر-أرجواني", "أزرق"]
            ]
        },
        {
            "type": "title",
            "content": "2. حصر وتعطيل الدليل (Indicator Blocking)"
        },
        {
            "type": "warning",
            "title": "تنبيه! حصر الدليل",
            "content": "يحدث حصر للدليل عندما يكون معقد المعدن المتكون معه أقوى من معقد (المعدن-EDTA)، أو عندما يتفكك معقد (المعدن-الدليل) ببطء شديد، مما يؤدي إلى عدم ملاحظة أي تغير في اللون."
        },
        {
            "type": "text",
            "content": "يتعرض دليل Erio-T للحجب بواسطة أيونات النحاس، النيكل، الكوبالت، الكروم، الحديد، والألومنيوم. لذلك، لا يمكن استخدامه في المعايرة المباشرة لهذه المعادن، ولكن يمكن تقديرها عبر المعايرة الخلفية."
        },
        {
            "type": "title",
            "content": "3. أنواع تقنيات معايرة الـ EDTA"
        },
        {
            "type": "mindmap",
            "center": "معايرات EDTA",
            "branches": [
                "المعايرة المباشرة",
                "المعايرة الخلفية (الرجعية)",
                "معايرة الإحلال",
                "المعايرة غير المباشرة"
            ]
        },
        {
            "type": "title",
            "content": "أ. المعايرة المباشرة"
        },
        {
            "type": "list",
            "items": [
                "يتم ضبط المحلول بوضع منظم (Buffer) عند أس هيدروجيني مناسب يكون فيه معقد (المعدن-EDTA) مستقراً بدرجة كافية.",
                "يجب أن يكون للدليل الحر لون مميز ومختلف تماماً عن لون معقده مع المعدن.",
                "في الوسط القلوي القوي، تترسب معادن مثل الحديد، الألومنيوم، الكروم، والرصاص على هيئة هيدروكسيدات."
            ]
        },
        {
            "type": "example",
            "title": "عوامل التعقيد المساعدة (المساعدة على الذوبان)",
            "content": "في المعايرة المباشرة للرصاص Pb2+ عند رقم هيدروجيني 10، تضاف التارتارات كعامل مساعد لمنع ترسب Pb(OH)2. ويشترط أن يكون استقرار معقد (الرصاص-تارتارات) أقل من معقد (الرصاص-EDTA)."
        },
        {
            "type": "title",
            "content": "ب. المعايرة الخلفية (الرجعية)"
        },
        {
            "type": "text",
            "content": "يتم إضافة كمية فائضة معلومة من الـ EDTA إلى المادة المراد تحليلها، ثم يتم معايرة الـ EDTA المتبقي (الزائد) بمحلول قياسي لأيون معدني آخر."
        },
        {
            "type": "list",
            "items": [
                "تُستخدم عندما تترسب المادة المحللة عند الأس الهيدروجيني المرتفع.",
                "تُستخدم عندما تتفاعل المادة المحللة ببطء شديد مع الـ EDTA.",
                "تُستخدم عندما تتسبب المادة المحللة في حجب وتعطيل الدليل."
            ]
        },
        {
            "type": "steps",
            "title": "طريقة العمل: التقدير الخلفي لأيون الألومنيوم Al3+",
            "items": [
                "إضافة فائض من الـ EDTA القياسي إلى عينة الألومنيوم Al3+.",
                "ضبط الأس الهيدروجيني (pH) بين 7-8.",
                "الغليان لتسريع وتيرة التفاعل، ثم التبريد.",
                "إضافة دليل Erio-T.",
                "معايرة الـ EDTA الزائد باستخدام محلول الزنك القياسي Zn2+."
            ]
        },
        {
            "type": "title",
            "content": "ج. معايرة الإحلال"
        },
        {
            "type": "law",
            "title": "مبدأ الإحلال",
            "content": "تُطبق لأيونات المعادن التي لا تملك دليلاً مناسباً؛ حيث تزيح المادة المراد تحليلها معدناً أضعف من معقد الـ EDTA الخاص به وفق المعادلة: M1(العينة) + M2-EDTA(فائض) \u2192 M1-EDTA + M2(المُعاير)."
        },
        {
            "type": "example",
            "title": "أمثلة على تفاعلات الإحلال",
            "content": "1. يزيح الزئبق Hg2+ المغنيسيوم من معقد Mg-EDTA لأن ثابت استقرار معقد الزئبق أعلى.\n2. يتم تقدير الفضة Ag+ باستخدام Ni(CN)4^2-، حيث ينطلق النيكل الحر Ni2+ ليعاير لاحقاً بالـ EDTA."
        },
        {
            "type": "title",
            "content": "د. المعايرة غير المباشرة"
        },
        {
            "type": "text",
            "content": "تُستخدم بشكل أساسي لتقدير الأنيونات (الشقوق الحامضية)."
        },
        {
            "type": "list",
            "items": [
                "الكبريتات (SO4^2-): تُرسب على هيئة BaSO4، ثم يُعاير الباريوم الزائد.",
                "الفوسفات (PO4^3-): تُرسب على هيئة MgNH4PO4، ثم يُعاير المغنيسيوم الزائد.",
                "السيانيد (CN-): يُستخدم فائض من النيكل Ni2+ لتكوين معقد Ni(CN)4^2-.",
                "الهالوجينات (X-): تُرسب على هيئة AgX، وتُذاب في Ni(CN)4^2- لإنتاج كمية مكافئة من النيكل الحُر."
            ]
        },
        {
            "type": "title",
            "content": "4. انتقائية الـ EDTA: الحجب وإزالة الحجب (Masking & Demasking)"
        },
        {
            "type": "text",
            "content": "مركب الـ EDTA غير انتقائي بطبعه. ويتم زيادة انتقائيته عبر عمليات الحجب وإزالة الحجب، التحكم في الأس الهيدروجيني، الفصل التقليدي، والاستخلاص بالمذيبات."
        },
        {
            "type": "list",
            "items": [
                "إضافة عوامل الحجب: يحجب الفلوريد الفلوريد الألومنيوم Al3+ (مكوناً AlF6^3-). ويحجب السيانيد الكادميوم، الزنك، الزئبق، الكوبالت، النحاس، الفضة، النيكل، والحديد (ولكنه لا يحجب المغنيسيوم، الكالسيوم، المنجنيز، والرصاص).",
                "الحجب الحركي: يتفاعل الكروم Cr3+ ببطء شديد، مما يتيح معايرة الحديد Fe3+ السريعة دون تداخل.",
                "تعديل حالة الأكسدة: يختزل حمض الأسكوربيك أيونات الحديد والاتحاد الثنائي للنحاس والزئبق، بينما يؤكسد البيروكسيد القلوي الكروم Cr3+ إلى كرومات."
            ]
        },
        {
            "type": "equation",
            "content": "إزالة حجب الزنك: [Zn(CN)4]2- + 4 H.CHO + 4 H+ \u2192 4 H.CH(OH)CN + Zn2+ (باستخدام الفورمالديهايد/حمض الأسيتيك أو كلورالهيدرات)"
        },
        {
            "type": "example",
            "title": "الانتقائية عبر التحكم في الأس الهيدروجيني (pH)",
            "content": "يمكن معايرة البزموت Bi3+ والثوريوم Th4+ في محلول شديد الحموضة (pH= 2) باستخدام دليل الكسيلينول البرتقالي. ولتقدير خليط من البزموت والرصاص، يُعاير البزموت أولاً عند pH 2، ثم يُضاف الهكسامين لرفع الـ pH إلى 5 لمعايرة الرصاص باستخدام دليل Erio-T."
        },
        {
            "type": "title",
            "content": "5. التمخلب والأهمية الحيوية (Chelation)"
        },
        {
            "type": "table",
            "headers": ["العنصر الحيوي / الترياق", "الدور / الهدف الحسي"],
            "rows": [
                ["الهيموجلوبين والميوجلوبين", "نقل وتخزين الأكسجين (يحتوي على الحديد)"],
                ["الكلوروفيل", "البناء الضوئي (يحتوي على المغنيسيوم)"],
                ["الأنسولين", "تنشيط الإنزيمات (يحتوي على الزنك)"],
                ["فيتامين ب12", "الوظائف الحيوية (يحتوي على الكوبالت)"],
                ["ديميركابرول (BAL)", "ترياق للزرنيخ، الذهب، الرصاص، والزئبق"],
                ["بينيسيلامين", "ترياق للنحاس (مرض ويلسون)"]
            ]
        }
    ]
});