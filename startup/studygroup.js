function setStudyGroupName() {
    studyNameVar = localStorage.getItem('studyName');
    const studyClassEl = document.querySelector('.studyGroup');
    studyClassEl.textContent = studyNameVar;

};

setStudyGroupName();