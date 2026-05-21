// ==========================================================================
// User Interface Logic (DOM Manipulation)
// ==========================================================================

const UI = {
    container: document.getElementById('app-container'),
    backBtn: document.getElementById('back-btn'),
    appTitle: document.getElementById('app-title'),
    translateBtn: document.getElementById('floating-translate-btn'),
    currentLecture: null,
    isRTL: false,
    activeSection: null,

    init() {
        this.isRTL = false;
        document.body.classList.remove('rtl-mode');
    },

    hideAllOverlays() {
        document.getElementById('win-overlay').style.display = 'none';
    },

    toggleTranslation() {
        this.isRTL = !this.isRTL;
        if (this.isRTL) {
            document.body.classList.add('rtl-mode');
            this.translateBtn.innerText = "English ← Arabic";
        } else {
            document.body.classList.remove('rtl-mode');
            this.translateBtn.innerText = "English → Arabic";
        }

        if (this.activeSection === 'summary') {
            this.openSection('summary');
        } else if (this.activeSection === 'quiz') {
            if (typeof QuizController !== 'undefined' && QuizController.currentRoundQuestions.length > 0) {
                QuizController.loadQuestion();
            } else {
                this.openSection('quiz');
            }
        }
    },

    renderHome() {
        this.init();
        this.backBtn.classList.add('hidden');
        this.translateBtn.classList.add('hidden');
        this.backBtn.onclick = null;
        this.appTitle.innerText = "Analytical Master";
        
        let html = `<div class="screen"><div class="lecture-grid">`;
        
        DataStore.lectures.forEach(lecture => {
            const isCompleted = DataStore.userProgress.completedLectures.includes(lecture.id);
            const statusText = isCompleted ? "COMPLETED" : "NOT STARTED";
            const progressWidth = isCompleted ? "100%" : "0%";
            
            const lockedClass = lecture.isPlaceholder ? "locked" : "";
            const onClickAttr = lecture.isPlaceholder ? 
                `onclick="alert('Content to be added soon!')"` : 
                `onclick="App.openLecture(${lecture.id})"`;

            html += `
                <div class="lecture-card ${lockedClass}" ${onClickAttr}>
                    <div class="lecture-title">${lecture.title}</div>
                    <div style="font-size: 14px; color: var(--text-muted); font-weight: 700;">${statusText}</div>
                    <div class="main-progress-bg">
                        <div class="main-progress-fill" style="width: ${progressWidth};"></div>
                    </div>
                </div>
            `;
        });
        html += `</div></div>`;
        this.container.innerHTML = html;
    },

    renderLecture(lecture) {
        this.currentLecture = lecture;
        this.backBtn.classList.remove('hidden');
        this.translateBtn.classList.add('hidden'); 
        this.appTitle.innerText = `Lec ${lecture.id}`;
        this.backBtn.onclick = () => this.renderHome();

        let gridHtml = `<div class="screen" id="lecture-menu"><div class="section-grid">`;

        if (lecture.summary) gridHtml += this.createSectionCard('summary', 'Summary', 'ملخص شامل لأهم النقاط الأساسية');
        if (lecture.terms && lecture.terms.length > 0) gridHtml += this.createSectionCard('terms', 'Scientific Terms', 'جميع المصطلحات العلمية بالمحاضرة');
        if (lecture.reasons && lecture.reasons.length > 0) gridHtml += this.createSectionCard('reasons', 'Give Reason', 'أهم أسئلة التعليل المذكورة');
        if (lecture.qna && lecture.qna.length > 0) gridHtml += this.createSectionCard('qna', 'Q&A', 'إجابات الأسئلة الموجودة في نهاية المحاضرة');
        if (lecture.quiz && lecture.quiz.length > 0) gridHtml += this.createSectionCard('quiz', 'QUIZ', 'اختبر فهمك للمحاضرة');

        gridHtml += `</div></div>`;
        gridHtml += `<div id="section-content"></div>`;

        this.container.innerHTML = gridHtml;
    },

    createSectionCard(id, title, desc) {
        return `
            <div class="section-card" onclick="UI.openSection('${id}')">
                <div class="section-title" style="font-family: 'Cairo', sans-serif;">${title}</div>
                <div class="section-desc" style="font-family: 'Cairo', sans-serif;">${desc}</div>
            </div>
        `;
    },

openSection(sectionId) {
        this.activeSection = sectionId;
        document.getElementById('lecture-menu').style.display = 'none';
        const contentDiv = document.getElementById('section-content');
        contentDiv.style.display = 'block';

        if (sectionId === 'summary') {
            this.translateBtn.classList.remove('hidden');
        } else {
            this.translateBtn.classList.add('hidden');
        }

        this.backBtn.onclick = () => {
            this.init();
            contentDiv.style.display = 'none';
            document.getElementById('lecture-menu').style.display = 'block';
            this.translateBtn.classList.add('hidden');
            this.backBtn.onclick = () => this.renderHome(); 
        };

        const lec = this.currentLecture;
        let contentHtml = ``;

        if (sectionId === 'summary') {
            let summaryData = (this.isRTL && lec.summaryAr && lec.summaryAr.length > 0) ? lec.summaryAr : lec.summary;
            let html = '';
            
            if (Array.isArray(summaryData)) {
                summaryData.forEach(block => {
                    // معالجة النزول لسطر جديد
                    let txt = block.content ? block.content.replace(/\n/g, '<br>') : '';
                    
                    if (block.type === 'note') {
                        html += `<div class="orange-note-box"><div class="orange-note-title">💡 ${block.title}</div><p>${txt}</p></div>`;
                    } else if (block.type === 'law') {
                        html += `<div class="law-box"><div class="law-title">⚖️ ${block.title}</div><p>${txt}</p></div>`;
                    } else if (block.type === 'equation') {
                        html += `<div class="eq-box">${txt}</div>`;
                    } else if (block.type === 'example') {
                        html += `<div class="example-box"><div class="example-title">📝 ${block.title}</div><p>${txt}</p></div>`;
                    } else if (block.type === 'warning') {
                        html += `<div class="warning-box"><div class="warning-title">⚠️ ${block.title}</div><p>${txt}</p></div>`;
                    } else if (block.type === 'definition') {
                        html += `<div class="def-box"><div class="def-title">📌 ${block.term}</div><p>${txt}</p></div>`;
                    } else if (block.type === 'steps') {
                        let stepsHtml = block.items.map(s => `<li>${s.replace(/\n/g, '<br>')}</li>`).join('');
                        html += `<div class="steps-box"><div class="steps-title">🔢 ${block.title}</div><ol class="steps-list">${stepsHtml}</ol></div>`;
                    } else if (block.type === 'mindmap') {
                        let branchesHtml = block.branches.map(b => `<div class="mindmap-leaf">${b}</div>`).join('');
                        html += `<div class="mindmap-container"><div class="mindmap-center">${block.center}</div><div class="mindmap-branches">${branchesHtml}</div></div>`;
                    } else if (block.type === 'table') {
                        let headersHtml = block.headers.map(h => `<th>${h}</th>`).join('');
                        let rowsHtml = block.rows.map(r => `<tr>${r.map(d => `<td>${d.replace(/\n/g, '<br>')}</td>`).join('')}</tr>`).join('');
                        html += `<div class="summary-table-wrapper"><table class="summary-table"><thead><tr>${headersHtml}</tr></thead><tbody>${rowsHtml}</tbody></table></div>`;
                    } else if (block.type === 'list') {
                        let itemsHtml = block.items.map(i => `<li>${i.replace(/\n/g, '<br>')}</li>`).join('');
                        html += `<ul style="margin-bottom:15px; margin-left: 20px;">${itemsHtml}</ul>`;
                    } else if (block.type === 'title') {
                        html += `<h3 style="color:var(--secondary-blue-dark); margin: 20px 0 10px;">${txt}</h3>`;
                    } else if (block.type === 'text') {
                        html += `<p style="margin-bottom:10px;">${txt}</p>`;
                    }
                });
                contentHtml = `<div class="screen summary-wrapper english-content">${html}</div>`;
            } else {
                let cleanSummary = summaryData.replace(/class="note-box"/g, 'class="orange-note-box"');
                cleanSummary = cleanSummary.replace(/💡 <strong>Important Note:<\/strong>/g, '<div class="orange-note-title">💡 Important Note:</div>');
                contentHtml = `<div class="screen summary-wrapper english-content">${cleanSummary}</div>`;
            }
        } 
        else if (sectionId === 'terms') {
            contentHtml = `<div class="screen english-content">` + lec.terms.map(t => `<div class="term-card"><h3>${t.term}</h3><p>${t.definition}</p></div>`).join('') + `</div>`;
        } 
        else if (sectionId === 'reasons') {
            contentHtml = `<div class="screen english-content">` + lec.reasons.map(r => `<div class="reason-card"><div class="q-box"><div>${r.q}</div></div><div class="a-box"><div>${r.a}</div></div></div>`).join('') + `</div>`;
        } 
        else if (sectionId === 'qna') {
            contentHtml = `<div class="screen english-content">` + lec.qna.map(q => `<div class="qna-card"><div class="q-box"><div>${q.q}</div></div><div class="a-box"><div>${q.a}</div></div></div>`).join('') + `</div>`;
        } 
        else if (sectionId === 'quiz') {
            contentHtml = `
                <div class="screen" style="text-align:center; padding-top: 80px;">
                    <h2 style="margin-bottom: 30px; font-family: 'Cairo', sans-serif;">Ready to test your knowledge?</h2>
                    <button class="btn-main" style="width: 80%; box-shadow: 0 6px 0 var(--btn-green-dark);" onclick="QuizController.startQuiz(${lec.id})">Start Quiz</button>
                </div>
            `;
            this.backBtn.classList.add('hidden');
        }
        
        contentDiv.innerHTML = contentHtml;

        // تفعيل تحويل معادلات LaTeX إلى شكل رياضي بعد إدراج HTML
        if (window.renderMathInElement) {
            renderMathInElement(contentDiv, {
                delimiters: [
                    {left: "$$", right: "$$", display: true},
                    {left: "$", right: "$", display: false}
                ],
                throwOnError: false
            });
        }
    },

    renderQuizQuestion(qData, currentIndex, totalNum, roundNum) {
        this.activeSection = 'quiz'; 
        const contentDiv = document.getElementById('section-content');
        const progressPercent = ((currentIndex + 1) / totalNum) * 100;
        const isAnswered = qData.userAnswerIndex !== null;

        this.translateBtn.classList.remove('hidden');

        let qText = (this.isRTL && qData.questionAr) ? qData.questionAr : qData.question;
        let qOptions = (this.isRTL && qData.optionsAr && qData.optionsAr.length > 0) ? qData.optionsAr : qData.options;
        let qHint = (this.isRTL && qData.hintAr) ? qData.hintAr : qData.hint;

        let html = `
            <div class="quiz-wrapper">
                <div class="quiz-header">
                    <span class="close-btn" onclick="UI.exitQuiz()">✕</span>
                    <div class="quiz-progress-bar-bg">
                        <div class="quiz-progress-bar-fill" style="width: ${progressPercent}%;"></div>
                    </div>
                    <div style="font-weight: 800; font-size: 16px; direction: ltr;">${currentIndex + 1}/${totalNum}</div>
                </div>
                <div id="round-info">Round ${roundNum}</div>
                <div class="quiz-question-box">${qText.replace(/\n/g, '<br>')}</div>
                <div class="options-container">
        `;

        qData.shuffledIndices.forEach(originalIdx => {
            let stateClass = "active-click";
            let clickAction = `onclick="QuizController.selectOption(this, ${originalIdx})"`;

            if (isAnswered) {
                clickAction = ""; 
                stateClass = "locked"; 
                if (originalIdx === qData.correct) stateClass += " correct";
                else if (originalIdx === qData.userAnswerIndex && qData.userAnswerIndex !== qData.correct) stateClass += " wrong";
            }
            html += `<div class="option-btn ${stateClass}" ${clickAction}>${qOptions[originalIdx].replace(/\n/g, '<br>')}</div>`;
        });
        html += `</div>`;
        
        if (isAnswered && qHint) {
            html += `
                <div class="orange-note-box">
                    <div class="orange-note-title">💡 ${this.isRTL ? "لماذا هذه الإجابة صحيحة؟" : "Why is this correct?"}</div>
                    <ul class="explanation-list"><li>${qHint.replace(/\n/g, '<br>')}</li></ul>
                </div>
            `;
        }

        const backDisabled = currentIndex === 0 ? "disabled" : "";
        const nextDisabled = !isAnswered ? "disabled" : "";
        const nextText = (currentIndex === totalNum - 1 && isAnswered) ? (this.isRTL ? "إنهاء" : "FINISH") : (this.isRTL ? "التالي" : "NEXT");

        html += `
                <div class="quiz-footer">
                    <button class="nav-btn next" ${nextDisabled} onclick="QuizController.nextQuestion()">${nextText}</button>
                    <button class="nav-btn prev" ${backDisabled} onclick="QuizController.prevQuestion()">${this.isRTL ? "الرجوع" : "BACK"}</button>
                </div>
            </div>
        `;
        contentDiv.innerHTML = html;

        // تفعيل تحويل معادلات LaTeX داخل الكويز أيضاً
        if (window.renderMathInElement) {
            renderMathInElement(contentDiv, {
                delimiters: [
                    {left: "$$", right: "$$", display: true},
                    {left: "$", right: "$", display: false}
                ],
                throwOnError: false
            });
        }
    },

    exitQuiz() {
        this.init();
        if (typeof QuizController !== 'undefined') QuizController.currentRoundQuestions = [];
        document.getElementById('section-content').style.display = 'none';
        document.getElementById('lecture-menu').style.display = 'block';
        this.translateBtn.classList.add('hidden');
        this.backBtn.classList.remove('hidden');
        this.backBtn.onclick = () => this.renderHome(); 
    },

    showWinOverlay() {
        this.translateBtn.classList.add('hidden');
        document.getElementById('win-overlay').style.display = 'flex';
        confetti({ particleCount: 300, spread: 100, origin: { y: 0.6 }, colors: ['#12D11E', '#2196F3', '#FFC107'] });
    }
};