function setStudyGroupName() {
    const studyNameVar = sessionStorage.getItem('studyName');
    const studyClassEls = document.getElementsByClassName('studyGroup');
    for (el of studyClassEls) {
        el.textContent = studyNameVar;
    }
};

setStudyGroupName();