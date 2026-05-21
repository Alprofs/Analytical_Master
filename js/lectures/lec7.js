DataStore.lectures.push({
    "id": 7,
    "title": "Lecture 7 : Complexometric Titrations",
    "isPlaceholder": false,
    "summary": [
        {
            "type": "note",
            "title": "Important Note",
            "content": "Complexometric titrations depend on the formation of stable coordination complexes between metal ions and complexing agents. "
        },
        {
            "type": "title",
            "content": "1. Co-ordination Complexes"
        },
        {
            "type": "definition",
            "term": "Co-ordination Complexes",
            "content": "Neutral or ionic compounds that involve the formation of at least one coordinate bond (→) between the metal ion (cation: electron acceptor) and a complexing agent (electron donor)."
        },
        {
            "type": "list",
            "items": [
                "Analytical Importance:",
                "1. Specific separation of samples via insoluble complexes.",
                "2. Masking of certain metal ions to eliminate interference.",
                "3. Colorimetric analysis using colored complexes.",
                "4. Analytical separations using complexes soluble in organic solvents."
            ]
        },
        {
            "type": "title",
            "content": "2. Complexation Reactions & Ligands"
        },
        {
            "type": "text",
            "content": "Formation of a complex between a central metal atom (M) and a ligand (L). The reaction involves successive replacement of coordinated solvent molecules with one or more ligands."
        },
        {
            "type": "equation",
            "content": "M (H2O)n + L ⇌ M (H2O)(n-1) L + H2O ⇌ MLn"
        },
        {
            "type": "note",
            "title": "Coordination Number",
            "content": "It is the maximum number of monodentate ligands bound to the central atom. Ranges from 2 to 8 (4 and 6 are most common). Ions having even coordination numbers are much more common."
        },
        {
            "type": "mindmap",
            "center": "Types of Ligands",
            "branches": [
                "Monodentate: 1 donor atom (e.g., H2O, NH3, Cl-, CN-)",
                "Bidentate: 2 donor atoms (e.g., Ethylenediamine)",
                "Multidentate: >2 donor atoms (e.g., EDTA - hexadentate)"
            ]
        },
        {
            "type": "title",
            "content": "3. Stability of Complexes & The Chelate Effect"
        },
        {
            "type": "equation",
            "content": "Kf = [MY(n-4)+] / [Mn+][Y4-]"
        },
        {
            "type": "warning",
            "title": "The Chelate Effect!",
            "content": "Multidentate ligands form much more stable metal complexes than similar monodentate ligands. This results from the formation of a 5-membered 'ring or cycle-structure'."
        },
        {
            "type": "example",
            "title": "Chelate Effect Example",
            "content": "Cd2+ + 4 Methylamine (Monodentate) ➞ K = 3 x 10^6\nCd2+ + 2 Ethylenediamine (Bidentate) ➞ K = 2 x 10^10 (Much higher stability!)"
        },
        {
            "type": "table",
            "headers": ["Metal Chelate", "Metal Complex"],
            "rows": [
                ["Cyclic structure around the metal ion", "Central metal ion bonded to ligands (no cycle)"],
                ["Ligands bind through multiple coordination sites", "Ligands bind through various modes"],
                ["More stable", "Less stable"]
            ]
        },
        {
            "type": "title",
            "content": "4. Complexones & EDTA"
        },
        {
            "type": "definition",
            "term": "Complexones",
            "content": "Aminopolycarboxylic acids that act as excellent complexing agents."
        },
        {
            "type": "list",
            "items": [
                "Complexone I: NTAA",
                "Complexone II: EDTA",
                "Complexone III: Na2EDTA",
                "Complexone IV: CDTA",
                "Complexone V: EGTA",
                "Complexone VI: TTHA"
            ]
        },
        {
            "type": "note",
            "title": "Why is EDTA widely used?",
            "content": "1. Powerful complexing action.\n2. Commercially available.\n3. Formation of stable 5-membered rings on chelation. "
        },
        {
            "type": "text",
            "content": "In aqueous medium, Na2EDTA dissociates into a complex-forming ion (H2Y2-) which reacts with metals in a 1:1 ratio."
        },
        {
            "type": "equation",
            "content": "Mn+ + H2Y2- ⇌ MY(n-4)+ + 2H+"
        },
        {
            "type": "title",
            "content": "5. Effect of pH on Stability"
        },
        {
            "type": "text",
            "content": "Complex stability increases as pH increases because it decreases hydrogen ions and increases the active form of EDTA."
        },
        {
            "type": "table",
            "headers": ["pH Required", "Selected Metals"],
            "rows": [
                ["pH 1-3", "Zr4+, Th4+, Bi3+, Fe3+"],
                ["pH 4-6", "Pb2+, Cu2+, Zn2+, Co2+, Ni2+, Mn2+, Fe2+, Cd2+"],
                ["pH 8-10", "Ca2+, Sr2+, Ba2+, Mg2+"]
            ]
        },
        {
            "type": "warning",
            "title": "Hydrolysis Risk",
            "content": "Increasing pH too much enhances the tendency to form slightly soluble metallic hydroxides instead of stable EDTA complexes."
        },
        {
            "type": "title",
            "content": "6. Apparent (Conditional) Stability Constant"
        },
        {
            "type": "text",
            "content": "The actual stability is affected by the pH and the presence of other complexing agents. It is termed the Apparent Stability Constant."
        },
        {
            "type": "law",
            "title": "Effect of pH (α factor)",
            "content": "KH = K / α \n(As pH ↑, log α ↓ & log KH ↑)"
        },
        {
            "type": "law",
            "title": "Effect of other complexing agents (β factor)",
            "content": "KZ = K / β"
        },
        {
            "type": "law",
            "title": "Combined Effect",
            "content": "KHZ = K / (α × β)\nlog KHZ = log K - log α - log β"
        },
        {
            "type": "title",
            "content": "7. EDTA Titration Curve"
        },
        {
            "type": "steps",
            "title": "Titration Curve Regions",
            "items": [
                "Region 1: Excess Mn+ (Metal ion)",
                "Region 2: Equivalence point",
                "Region 3: Excess EDTA"
            ]
        },
        {
            "type": "note",
            "title": "Curve Rule",
            "content": "The greater the stability constant, the longer the inflection part of the curve and the sharper the end point at constant pH."
        },
        {
            "type": "title",
            "content": "8. Metallochromic Indicators"
        },
        {
            "type": "text",
            "content": "These are indicators that form colored weak complexes with metal ions and show a noticeable color change at the end point of the titration."
        }
    ],
    "terms": [
        {
            "term": "Co-ordination Complexes",
            "definition": "Neutral or ionic compounds involving coordinate bonds between a metal ion and a ligand."
        },
        {
            "term": "Ligand",
            "definition": "An atom, ion, or molecule capable of donating a lone pair of electrons to a metal ion."
        },
        {
            "term": "Coordination Number",
            "definition": "Maximum number of monodentate ligands attached to the central metal atom."
        },
        {
            "term": "Monodentate Ligand",
            "definition": "Ligand bound to the metal ion at only one point."
        },
        {
            "term": "Bidentate Ligand",
            "definition": "Ligand containing two donor atoms."
        },
        {
            "term": "Multidentate Ligand",
            "definition": "Ligand containing more than two coordinating atoms."
        },
        {
            "term": "Chelate",
            "definition": "A cyclic complex formed when a multidentate ligand binds to a metal ion."
        },
        {
            "term": "Chelate Effect",
            "definition": "Formation of more stable complexes by multidentate ligands due to cyclic ring formation."
        },
        {
            "term": "Complexones",
            "definition": "Aminopolycarboxylic acids used as excellent complexing agents."
        },
        {
            "term": "EDTA",
            "definition": "Complexone II; a hexadentate ligand widely used in complexometric titrations."
        },
        {
            "term": "Stability Constant (Kf)",
            "definition": "Equilibrium constant representing the stability of a metal complex."
        },
        {
            "term": "Stepwise Stability Constants",
            "definition": "Constants K1, K2 ... Kn representing successive ligand addition."
        },
        {
            "term": "Apparent Stability Constant",
            "definition": "Conditional stability constant affected by pH and other complexing agents."
        },
        {
            "term": "Metallochromic Indicator",
            "definition": "Indicator used in complexometric titrations that changes color at the end point."
        },
        {
            "term": "EDTA Titration Curve",
            "definition": "Plot of pM versus volume of EDTA added during titration."
        }
    ],
    "reasons": [
        {
            "q": "Why does the stability of metal-EDTA complexes increase as pH increases?",
            "a": "Because increasing pH decreases hydrogen ion concentration and increases the fraction of unprotonated EDTA (Y<sup>4-</sup>), thereby enhancing complex formation."
        },
        {
            "q": "Why are complexes formed by multidentate ligands more stable than those formed by monodentate ligands?",
            "a": "Due to the chelate effect resulting from formation of stable cyclic ring structures."
        },
        {
            "q": "Why does EDTA have the widest applications in complexometric titrations?",
            "a": "Because of its powerful complexing action, commercial availability, and formation of stable 5-membered rings upon chelation."
        },
        {
            "q": "Why can metal ions with +3 or +4 charges form stable EDTA complexes in highly acidic media?",
            "a": "Because these metal ions possess very high stability constants with EDTA, allowing complexes to remain stable even at high hydrogen ion concentration."
        }
    ],
    "qna": [
        {
            "q": "Q1: Zr<sup>3+</sup> forms stable EDTA complex at.......",
            "a": "<strong>4) pH 1-3</strong>"
        },
        {
            "q": "Q2: Ligands that contain more than 2 coordinating atoms in the molecule ...",
            "a": "<strong>2- multidentate</strong>"
        },
        {
            "q": "Q3: The stability of metal-EDTA complexes may be changed by .....",
            "a": "<strong>4- Answers 1 & 2</strong>"
        },
        {
            "q": "Q4: EDTA is called",
            "a": "<strong>2- Complexone II</strong>"
        },
        {
            "q": "Q5: Which metal is formed the most stable complex with EDTA ?",
            "a": "<strong>2- Ferric</strong>"
        },
        {
            "q": "1- Ligand that bound to the metal ion at only one point is ............... example ...............",
            "a": "<strong>monodentate</strong>, example <strong>H<sub>2</sub>O</strong>"
        },
        {
            "q": "2- The longer the inflection part of the curve, ............ the stability constant.",
            "a": "<strong>the greater</strong>"
        }
    ],
    "quiz": [
        {
            "question": "Which type of ligand forms the most stable complexes due to the chelate effect?",
            "options": [
                "Monodentate ligands",
                "Bidentate ligands",
                "Multidentate ligands",
                "Neutral ligands"
            ],
            "correct": 2,
            "hint": "These ligands form cyclic ring structures around the metal ion.",
            "questionAr": "أي نوع من اللواقط (ligands) يكوّن المتراكبات الأكثر استقراراً بسبب تأثير الاستخلاب؟",
            "optionsAr": [
                "اللواقط أحادية السن (Monodentate)",
                "اللواقط ثنائية السن (Bidentate)",
                "اللواقط متعددة السن (Multidentate)",
                "اللواقط المتعادلة"
            ],
            "hintAr": "هذه اللواقط تكوّن هياكل حلقية حول أيون المعدن."
        },
        {
            "question": "What happens to the stability of metal-EDTA complexes as pH increases?",
            "options": [
                "Stability decreases",
                "Stability remains constant",
                "Stability increases",
                "Complex precipitates immediately"
            ],
            "correct": 2,
            "hint": "Higher pH increases the amount of unprotonated EDTA.",
            "questionAr": "ماذا يحدث لاستقرار متراكبات المعدن مع EDTA عندما يزداد الرقم الهيدروجيني (pH)؟",
            "optionsAr": [
                "يقل الاستقرار",
                "يبقى الاستقرار ثابتاً",
                "يزداد الاستقرار",
                "يترسب المتراكب فوراً"
            ],
            "hintAr": "الرقم الهيدروجيني الأعلى يزيد من كمية الـ EDTA غير المبرتن (النشط)."
        },
        {
            "question": "Zr3+ and Fe3+ form stable EDTA complexes at:",
            "options": [
                "pH 12-14",
                "pH 8-10",
                "pH 4-6",
                "pH 1-3"
            ],
            "correct": 3,
            "hint": "Highly charged ions can form stable complexes even in high acidity.",
            "questionAr": "أيونات Zr3+ و Fe3+ تكوّن متراكبات مستقرة مع EDTA عند:",
            "optionsAr": [
                "pH 12-14",
                "pH 8-10",
                "pH 4-6",
                "pH 1-3"
            ],
            "hintAr": "الأيونات ذات الشحنة العالية يمكنها تكوين متراكبات مستقرة حتى في الحموضة العالية."
        },
        {
            "question": "Ligands that contain more than 2 coordinating atoms in the molecule are called:",
            "options": [
                "Monodentate",
                "Multidentate",
                "Bidentate",
                "Non-dentate"
            ],
            "correct": 1,
            "hint": "EDTA is a famous example.",
            "questionAr": "اللواقط التي تحتوي على أكثر من ذرتين تناسقيتين في الجزيء تُسمى:",
            "optionsAr": [
                "أحادية السن (Monodentate)",
                "متعددة السن (Multidentate)",
                "ثنائية السن (Bidentate)",
                "غير مسننة"
            ],
            "hintAr": "الـ EDTA هو مثال شهير عليها."
        },
        {
            "question": "The apparent stability of metal-EDTA complexes may be changed by:",
            "options": [
                "pH only",
                "Presence of other complexing agents only",
                "Color of the sample",
                "Both pH and presence of other complexing agents"
            ],
            "correct": 3,
            "hint": "Consider factors alpha and beta.",
            "questionAr": "يمكن أن يتغير الاستقرار الظاهري (Apparent stability) لمتراكبات المعدن مع EDTA بسبب:",
            "optionsAr": [
                "الرقم الهيدروجيني (pH) فقط",
                "وجود عوامل معقدة أخرى فقط",
                "لون العينة",
                "كلا من الرقم الهيدروجيني ووجود عوامل معقدة أخرى"
            ],
            "hintAr": "تذكر عوامل ألفا وبيتا."
        },
        {
            "question": "EDTA is also known commercially as:",
            "options": [
                "Complexone I",
                "Complexone II",
                "Complexone III",
                "Complexone IV"
            ],
            "correct": 1,
            "hint": "It is the second complexone in the classification.",
            "questionAr": "يُعرف الـ EDTA تجارياً أيضاً باسم:",
            "optionsAr": [
                "Complexone I",
                "Complexone II",
                "Complexone III",
                "Complexone IV"
            ],
            "hintAr": "هو الكومبلكسون الثاني في التصنيف."
        },
        {
            "question": "Which metal forms the most stable complex with EDTA among the following?",
            "options": [
                "Ferrous (Fe2+)",
                "Ferric (Fe3+)",
                "Sodium (Na+)",
                "Zinc (Zn2+)"
            ],
            "correct": 1,
            "hint": "It has a log K value of 25.1.",
            "questionAr": "أي من المعادن التالية يكوّن المتراكب الأكثر استقراراً مع الـ EDTA؟",
            "optionsAr": [
                "الحديد الثنائي (Fe2+)",
                "الحديد الثلاثي (Fe3+)",
                "الصوديوم (Na+)",
                "الزنك (Zn2+)"
            ],
            "hintAr": "يمتلك قيمة log K تساوي 25.1."
        },
        {
            "question": "A ligand that binds to the metal ion at only one point is an example of:",
            "options": [
                "Monodentate",
                "Bidentate",
                "Multidentate",
                "Chelating agent"
            ],
            "correct": 0,
            "hint": "Water and Ammonia are examples.",
            "questionAr": "اللاقط الذي يرتبط بأيون المعدن في نقطة واحدة فقط هو مثال على:",
            "optionsAr": [
                "أحادي السن (Monodentate)",
                "ثنائي السن (Bidentate)",
                "متعدد السن (Multidentate)",
                "عامل مخلبي (Chelating agent)"
            ],
            "hintAr": "الماء والأمونيا أمثلة على ذلك."
        },
        {
            "question": "The longer the inflection part of the EDTA titration curve, the _________ the stability constant.",
            "options": [
                "lower",
                "greater",
                "more neutral",
                "less significant"
            ],
            "correct": 1,
            "hint": "A sharper curve means a stronger complex.",
            "questionAr": "كلما كان جزء الانعطاف (inflection part) في منحنى معايرة الـ EDTA أطول، كان ثابت الاستقرار _________.",
            "optionsAr": [
                "أقل",
                "أكبر",
                "أكثر تعادلاً",
                "أقل أهمية"
            ],
            "hintAr": "المنحنى الأكثر حدة يعني متراكباً أقوى."
        },
        {
            "question": "What is the coordination number of a central metal?",
            "options": [
                "Number of protons in its nucleus",
                "The minimum number of multidentate ligands",
                "The maximum number of monodentate ligands bound to it",
                "Its oxidation state"
            ],
            "correct": 2,
            "hint": "It ranges from 2 to 8.",
            "questionAr": "ما هو الرقم التناسقي (Coordination number) للمعدن المركزي؟",
            "optionsAr": [
                "عدد البروتونات في نواته",
                "الحد الأدنى لعدد اللواقط متعددة السن",
                "الحد الأقصى لعدد اللواقط أحادية السن المرتبطة به",
                "حالة الأكسدة الخاصة به"
            ],
            "hintAr": "يتراوح من 2 إلى 8."
        },
        {
            "question": "Which of the following is an example of a bidentate ligand?",
            "options": [
                "Water (H2O)",
                "Ammonia (NH3)",
                "Ethylenediamine (En)",
                "Chloride (Cl-)"
            ],
            "correct": 2,
            "hint": "It has two nitrogen donor atoms.",
            "questionAr": "أي مما يلي هو مثال على لاقط ثنائي السن (bidentate)؟",
            "optionsAr": [
                "الماء (H2O)",
                "الأمونيا (NH3)",
                "الإيثيلين ثنائي الأمين (En)",
                "الكلوريد (Cl-)"
            ],
            "hintAr": "يحتوي على ذرتي نيتروجين مانحتين."
        },
        {
            "question": "Which coordination numbers are much more common for ions?",
            "options": [
                "Odd numbers",
                "Even numbers",
                "Prime numbers",
                "Fractions"
            ],
            "correct": 1,
            "hint": "4 and 6 are the most common.",
            "questionAr": "أي الأرقام التناسقية تكون أكثر شيوعاً للأيونات؟",
            "optionsAr": [
                "الأرقام الفردية",
                "الأرقام الزوجية",
                "الأعداد الأولية",
                "الكسور"
            ],
            "hintAr": "4 و 6 هي الأكثر شيوعاً."
        },
        {
            "question": "Which is generally more stable?",
            "options": [
                "Metal Complex",
                "Metal Chelate",
                "Both have exact same stability",
                "Unbound metal ion"
            ],
            "correct": 1,
            "hint": "It forms a cyclic structure.",
            "questionAr": "أيهما يكون أكثر استقراراً بشكل عام؟",
            "optionsAr": [
                "المتراكب المعدني (Metal Complex)",
                "المتراكب المخلبي (Metal Chelate)",
                "كلاهما لهما نفس الاستقرار بالضبط",
                "أيون المعدن الحر (غير المرتبط)"
            ],
            "hintAr": "لأنه يكوّن هيكلاً حلقياً."
        },
        {
            "question": "Complexones are chemically classified as:",
            "options": [
                "Inorganic salts",
                "Aminopolycarboxylic acids",
                "Simple alcohols",
                "Aromatic hydrocarbons"
            ],
            "correct": 1,
            "hint": "They contain amine and carboxylic acid groups.",
            "questionAr": "تُصنف الكومبلكسونات كيميائياً على أنها:",
            "optionsAr": [
                "أملاح غير عضوية",
                "أحماض أمينو بولي كربوكسيليك (Aminopolycarboxylic acids)",
                "كحولات بسيطة",
                "هيدروكربونات عطرية"
            ],
            "hintAr": "تحتوي على مجموعات الأمين وحمض الكربوكسيليك."
        },
        {
            "question": "Complexone III is known as:",
            "options": [
                "NTAA",
                "EDTA",
                "Na2EDTA",
                "CDTA"
            ],
            "correct": 2,
            "hint": "It is the disodium salt of EDTA.",
            "questionAr": "يُعرف Complexone III باسم:",
            "optionsAr": [
                "NTAA",
                "EDTA",
                "Na2EDTA",
                "CDTA"
            ],
            "hintAr": "هو ملح ثنائي الصوديوم للـ EDTA."
        },
        {
            "question": "In what molar ratio does Na2EDTA typically react with metal ions?",
            "options": [
                "1:2",
                "2:1",
                "1:1",
                "1:3"
            ],
            "correct": 2,
            "hint": "It surrounds the metal completely regardless of its charge.",
            "questionAr": "بأي نسبة مولارية يتفاعل Na2EDTA عادةً مع أيونات المعادن؟",
            "optionsAr": [
                "1:2",
                "2:1",
                "1:1",
                "1:3"
            ],
            "hintAr": "يحيط بالمعدن بالكامل بغض النظر عن شحنته."
        },
        {
            "question": "At what pH do metals like Ca2+, Sr2+, and Mg2+ form stable EDTA complexes?",
            "options": [
                "pH 1-3",
                "pH 4-6",
                "pH 8-10",
                "pH 0"
            ],
            "correct": 2,
            "hint": "They require an alkaline medium.",
            "questionAr": "عند أي رقم هيدروجيني (pH) تكوّن معادن مثل Ca2+، Sr2+، و Mg2+ متراكبات مستقرة مع EDTA؟",
            "optionsAr": [
                "pH 1-3",
                "pH 4-6",
                "pH 8-10",
                "pH 0"
            ],
            "hintAr": "إنها تتطلب وسطاً قلوياً."
        },
        {
            "question": "What is the potential problem of increasing the pH too much during EDTA titration?",
            "options": [
                "EDTA degrades",
                "Formation of slightly soluble metallic hydroxides",
                "Water boils off",
                "The complex becomes gaseous"
            ],
            "correct": 1,
            "hint": "Excess OH- ions react with the metal.",
            "questionAr": "ما هي المشكلة المحتملة لزيادة الرقم الهيدروجيني بشكل كبير جداً أثناء معايرة الـ EDTA؟",
            "optionsAr": [
                "يتحلل الـ EDTA",
                "تكوين هيدروكسيدات معدنية شحيحة الذوبان",
                "يتبخر الماء",
                "يصبح المتراكب غازياً"
            ],
            "hintAr": "تتفاعل أيونات OH- الزائدة مع المعدن."
        },
        {
            "question": "The factor alpha (α) in the conditional stability constant equation accounts for the effect of:",
            "options": [
                "Temperature",
                "pH",
                "Other complexing agents",
                "Pressure"
            ],
            "correct": 1,
            "hint": "It represents the fraction of unprotonated EDTA.",
            "questionAr": "يُحسب معامل ألفا (α) في معادلة ثابت الاستقرار الظاهري لتوضيح تأثير:",
            "optionsAr": [
                "درجة الحرارة",
                "الرقم الهيدروجيني (pH)",
                "العوامل المعقدة الأخرى",
                "الضغط"
            ],
            "hintAr": "يمثل الجزء غير المبرتن من الـ EDTA."
        },
        {
            "question": "The factor beta (β) in the conditional stability constant equation accounts for the effect of:",
            "options": [
                "pH",
                "Other complexing agents",
                "Temperature",
                "Solvent density"
            ],
            "correct": 1,
            "hint": "It represents metal ions complexed by other species.",
            "questionAr": "يُحسب معامل بيتا (β) في معادلة ثابت الاستقرار الظاهري لتوضيح تأثير:",
            "optionsAr": [
                "الرقم الهيدروجيني (pH)",
                "العوامل المعقدة الأخرى",
                "درجة الحرارة",
                "كثافة المذيب"
            ],
            "hintAr": "يمثل أيونات المعادن المرتبطة بأنواع أخرى."
        },
        {
            "question": "Region 3 in the EDTA titration curve represents:",
            "options": [
                "Excess metal ions",
                "Equivalence point",
                "Excess EDTA",
                "Formation of precipitate"
            ],
            "correct": 2,
            "hint": "It is the flat part at the top of the curve.",
            "questionAr": "المنطقة 3 في منحنى معايرة الـ EDTA تمثل:",
            "optionsAr": [
                "فائض من أيونات المعدن",
                "نقطة التكافؤ",
                "فائض من الـ EDTA",
                "تكوين راسب"
            ],
            "hintAr": "هو الجزء المسطح في أعلى المنحنى."
        },
        {
            "question": "Region 1 in the EDTA titration curve represents:",
            "options": [
                "Excess EDTA",
                "Equivalence point",
                "Excess metal ions",
                "Buffer capacity"
            ],
            "correct": 2,
            "hint": "It is the start of the titration.",
            "questionAr": "المنطقة 1 في منحنى معايرة الـ EDTA تمثل:",
            "optionsAr": [
                "فائض من الـ EDTA",
                "نقطة التكافؤ",
                "فائض من أيونات المعدن",
                "السعة المنظمة (Buffer capacity)"
            ],
            "hintAr": "هي بداية المعايرة."
        },
        {
            "question": "Complexone I is also known as:",
            "options": [
                "NTAA",
                "EDTA",
                "CDTA",
                "EGTA"
            ],
            "correct": 0,
            "hint": "It is the first one in the list.",
            "questionAr": "يُعرف Complexone I أيضاً باسم:",
            "optionsAr": [
                "NTAA",
                "EDTA",
                "CDTA",
                "EGTA"
            ],
            "hintAr": "هو الأول في القائمة."
        },
        {
            "question": "The equation KH = K / α represents:",
            "options": [
                "Absolute stability constant",
                "Apparent stability constant affected by pH",
                "Rate of reaction",
                "Solubility product"
            ],
            "correct": 1,
            "hint": "H stands for Hydrogen ion concentration relation.",
            "questionAr": "المعادلة KH = K / α تمثل:",
            "optionsAr": [
                "ثابت الاستقرار المطلق",
                "ثابت الاستقرار الظاهري المتأثر بالرقم الهيدروجيني",
                "معدل التفاعل",
                "حاصل الإذابة"
            ],
            "hintAr": "حرف H يشير إلى العلاقة بتركيز أيون الهيدروجين."
        },
        {
            "question": "EDTA has 2 nitrogen and 4 oxygen atoms available for coordination, making it:",
            "options": [
                "Monodentate",
                "Bidentate",
                "Hexadentate",
                "Octadentate"
            ],
            "correct": 2,
            "hint": "2 + 4 = 6 coordination sites.",
            "questionAr": "يمتلك الـ EDTA ذرتي نيتروجين و 4 ذرات أكسجين متاحة للتناسق، مما يجعله:",
            "optionsAr": [
                "أحادي السن",
                "ثنائي السن",
                "سداسي السن (Hexadentate)",
                "ثماني السن"
            ],
            "hintAr": "2 + 4 = 6 مواقع تناسقية."
        },
        {
            "question": "Complexes that are soluble in organic solvents form the basis for:",
            "options": [
                "Colorimetric analysis",
                "Analytical separations",
                "Masking of metal ions",
                "Gas chromatography"
            ],
            "correct": 1,
            "hint": "Extraction procedures rely on this.",
            "questionAr": "المتراكبات القابلة للذوبان في المذيبات العضوية تشكل الأساس لـ:",
            "optionsAr": [
                "التحليل اللوني",
                "الفصائل التحليلية (Analytical separations)",
                "حجب أيونات المعادن",
                "الكروماتوغرافيا الغازية"
            ],
            "hintAr": "تعتمد إجراءات الاستخلاص على هذا."
        },
        {
            "question": "A coordinate bond is formed between a metal ion and a:",
            "options": [
                "Electron acceptor",
                "Complexing agent (electron donor)",
                "Proton donor",
                "Neutron source"
            ],
            "correct": 1,
            "hint": "Ligands share their lone pair of electrons.",
            "questionAr": "تتكون الرابطة التناسقية بين أيون المعدن و:",
            "optionsAr": [
                "مستقبل إلكترونات",
                "عامل معقد (مانح للإلكترونات)",
                "مانح بروتونات",
                "مصدر نيوترونات"
            ],
            "hintAr": "اللواقط تشارك زوجها الحر من الإلكترونات."
        },
        {
            "question": "Complexone IV is also known as:",
            "options": [
                "EGTA",
                "TTHA",
                "CDTA",
                "EDTA"
            ],
            "correct": 2,
            "hint": "It starts with C.",
            "questionAr": "يُعرف Complexone IV أيضاً باسم:",
            "optionsAr": [
                "EGTA",
                "TTHA",
                "CDTA",
                "EDTA"
            ],
            "hintAr": "يبدأ بحرف C."
        },
        {
            "question": "Masking of certain metal ions helps to:",
            "options": [
                "Change their color",
                "Increase their weight",
                "Eliminate their interference with other metals",
                "Evaporate them faster"
            ],
            "correct": 2,
            "hint": "It 'hides' them during analysis.",
            "questionAr": "يساعد حجب (Masking) بعض أيونات المعادن على:",
            "optionsAr": [
                "تغيير لونها",
                "زيادة وزنها",
                "التخلص من تداخلها مع المعادن الأخرى",
                "تبخيرها بشكل أسرع"
            ],
            "hintAr": "إنه 'يخفيها' أثناء التحليل."
        },
        {
            "question": "The chelate effect results from the formation of stable:",
            "options": [
                "Linear structures",
                "5-membered ring structures",
                "10-membered ring structures",
                "Double bonds"
            ],
            "correct": 1,
            "hint": "The rings enclose the metal ion securely.",
            "questionAr": "ينتج تأثير الاستخلاب عن تكوين هياكل مستقرة لـ:",
            "optionsAr": [
                "هياكل خطية",
                "هياكل حلقية خماسية (5-membered ring)",
                "هياكل حلقية عشارية",
                "روابط مزدوجة"
            ],
            "hintAr": "الحلقات تحيط بأيون المعدن بإحكام."
        }
    ],
    "summaryAr": [
        {
            "type": "note",
            "title": "ملاحظة هامة",
            "content": "تعتمد المعايرات التعقيدية على تكوين متراكبات تناسقية مستقرة بين أيونات المعادن والعوامل المعقدة."
        },
        {
            "type": "title",
            "content": "1. المتراكبات التناسقية (Co-ordination Complexes)"
        },
        {
            "type": "definition",
            "term": "المتراكبات التناسقية",
            "content": "مركبات متعادلة أو أيونية تتضمن تكوين رابطة تناسقية واحدة على الأقل (→) بين أيون المعدن (الكاتيون: مستقبل للإلكترونات) والعامل المعقد (مانح للإلكترونات)."
        },
        {
            "type": "list",
            "items": [
                "الأهمية التحليلية:",
                "1. فصل محدد للعينات عبر متراكبات غير قابلة للذوبان.",
                "2. حجب (Masking) بعض أيونات المعادن للتخلص من التداخل.",
                "3. التحليل اللوني باستخدام المتراكبات الملونة.",
                "4. الفصائل التحليلية باستخدام متراكبات قابلة للذوبان في المذيبات العضوية."
            ]
        },
        {
            "type": "title",
            "content": "2. تفاعلات التعقيد واللواقط (Ligands)"
        },
        {
            "type": "text",
            "content": "تكوين متراكب بين ذرة معدن مركزية (M) ولاقط (L). يتضمن التفاعل استبدالاً متتالياً لجزيئات المذيب المتناسقة بلاقط واحد أو أكثر."
        },
        {
            "type": "equation",
            "content": "M (H2O)n + L ⇌ M (H2O)(n-1) L + H2O ⇌ MLn"
        },
        {
            "type": "note",
            "title": "الرقم التناسقي (Coordination Number)",
            "content": "هو الحد الأقصى لعدد اللواقط أحادية السن المرتبطة بالذرة المركزية. يتراوح من 2 إلى 8 (4 و 6 هي الأكثر شيوعاً). الأيونات التي تمتلك أرقاماً تناسقية زوجية هي الأكثر شيوعاً بكثير."
        },
        {
            "type": "mindmap",
            "center": "أنواع اللواقط (Types of Ligands)",
            "branches": [
                "أحادية السن (Monodentate): ذرة مانحة واحدة (مثل H2O, NH3, Cl-, CN-)",
                "ثنائية السن (Bidentate): ذرتين مانحتين (مثل الإيثيلين ثنائي الأمين)",
                "متعددة السن (Multidentate): أكثر من ذرتين مانحتين (مثل EDTA - سداسي السن)"
            ]
        },
        {
            "type": "title",
            "content": "3. استقرار المتراكبات وتأثير الاستخلاب (The Chelate Effect)"
        },
        {
            "type": "equation",
            "content": "Kf = [MY(n-4)+] / [Mn+][Y4-]"
        },
        {
            "type": "warning",
            "title": "تأثير الاستخلاب!",
            "content": "تكوّن اللواقط متعددة السن متراكبات معدنية أكثر استقراراً بكثير من اللواقط أحادية السن المشابهة. وينتج هذا عن تكوين 'حلقة أو هيكل دائري' خماسي الأعضاء."
        },
        {
            "type": "example",
            "title": "مثال على تأثير الاستخلاب",
            "content": "Cd2+ + 4 ميثيل أمين (أحادي السن) ➞ K = 3 x 10^6\nCd2+ + 2 إيثيلين ثنائي الأمين (ثنائي السن) ➞ K = 2 x 10^10 (استقرار أعلى بكثير!)"
        },
        {
            "type": "table",
            "headers": ["المتراكب المخلبي (Metal Chelate)", "المتراكب المعدني (Metal Complex)"],
            "rows": [
                ["هيكل حلقي حول أيون المعدن", "أيون المعدن المركزي مرتبط باللواقط (بدون حلقة)"],
                ["ترتبط اللواقط عبر مواقع تناسق متعددة", "ترتبط اللواقط عبر أوضاع مختلفة"],
                ["أكثر استقراراً", "أقل استقراراً"]
            ]
        },
        {
            "type": "title",
            "content": "4. الكومبلكسونات والـ EDTA"
        },
        {
            "type": "definition",
            "term": "الكومبلكسونات (Complexones)",
            "content": "أحماض أمينو بولي كربوكسيليك تعمل كعوامل معقدة ممتازة."
        },
        {
            "type": "list",
            "items": [
                "الكومبلكسون الأول: NTAA",
                "الكومبلكسون الثاني: EDTA",
                "الكومبلكسون الثالث: Na2EDTA",
                "الكومبلكسون الرابع: CDTA",
                "الكومبلكسون الخامس: EGTA",
                "الكومبلكسون السادس: TTHA"
            ]
        },
        {
            "type": "note",
            "title": "لماذا يُستخدم الـ EDTA على نطاق واسع؟",
            "content": "1. تأثير تعقيدي قوي.\n2. متاح تجارياً.\n3. تكوين حلقات خماسية مستقرة عند الاستخلاب."
        },
        {
            "type": "text",
            "content": "في الوسط المائي، يتفكك Na2EDTA إلى أيون مُكوِّن للمتراكبات (H2Y2-) والذي يتفاعل مع المعادن بنسبة 1:1."
        },
        {
            "type": "equation",
            "content": "Mn+ + H2Y2- ⇌ MY(n-4)+ + 2H+"
        },
        {
            "type": "title",
            "content": "5. تأثير الرقم الهيدروجيني (pH) على الاستقرار"
        },
        {
            "type": "text",
            "content": "يزداد استقرار المتراكب مع زيادة الـ pH لأنه يقلل من أيونات الهيدروجين ويزيد من الشكل النشط للـ EDTA."
        },
        {
            "type": "table",
            "headers": ["الـ pH المطلوب", "المعادن المختارة"],
            "rows": [
                ["pH 1-3", "Zr4+, Th4+, Bi3+, Fe3+"],
                ["pH 4-6", "Pb2+, Cu2+, Zn2+, Co2+, Ni2+, Mn2+, Fe2+, Cd2+"],
                ["pH 8-10", "Ca2+, Sr2+, Ba2+, Mg2+"]
            ]
        },
        {
            "type": "warning",
            "title": "خطر التحلل المائي",
            "content": "زيادة الـ pH بشكل مبالغ فيه تعزز من ميل تكوين هيدروكسيدات معدنية شحيحة الذوبان بدلاً من متراكبات EDTA المستقرة."
        },
        {
            "type": "title",
            "content": "6. ثابت الاستقرار الظاهري (المشروط)"
        },
        {
            "type": "text",
            "content": "يتأثر الاستقرار الفعلي بالرقم الهيدروجيني ووجود عوامل معقدة أخرى. ويُطلق عليه اسم 'ثابت الاستقرار الظاهري' (Apparent Stability Constant)."
        },
        {
            "type": "law",
            "title": "تأثير الـ pH (معامل α)",
            "content": "KH = K / α \n(كلما زاد الـ pH ↑، قل log α ↓ وزاد log KH ↑)"
        },
        {
            "type": "law",
            "title": "تأثير العوامل المعقدة الأخرى (معامل β)",
            "content": "KZ = K / β"
        },
        {
            "type": "law",
            "title": "التأثير المشترك",
            "content": "KHZ = K / (α × β)\nlog KHZ = log K - log α - log β"
        },
        {
            "type": "title",
            "content": "7. منحنى معايرة EDTA"
        },
        {
            "type": "steps",
            "title": "مناطق منحنى المعايرة",
            "items": [
                "المنطقة 1: فائض من Mn+ (أيون المعدن)",
                "المنطقة 2: نقطة التكافؤ",
                "المنطقة 3: فائض من EDTA"
            ]
        },
        {
            "type": "note",
            "title": "قاعدة المنحنى",
            "content": "كلما كان ثابت الاستقرار أكبر، كان جزء الانعطاف في المنحنى أطول، وكانت نقطة النهاية أكثر حدة عند رقم هيدروجيني ثابت."
        },
        {
            "type": "title",
            "content": "8. الكواشف الميتالوكرومية (Metallochromic Indicators)"
        },
        {
            "type": "text",
            "content": "هي كواشف تكوّن متراكبات ضعيفة ملونة مع أيونات المعادن وتظهر تغييراً ملحوظاً في اللون عند نقطة النهاية للمعايرة."
        }
    ]
});