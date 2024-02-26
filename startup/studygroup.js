function setStudyGroupName() {
    const studyNameVar = localStorage.getItem('studyName');
    const studyClassEls = document.getElementsByClassName('studyGroup');
    for (el in studyClassEls) {
        el.textContent = studyNameVar;
}

};

setStudyGroupName();