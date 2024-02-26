function setStudyGroupName() {
    const studyNameVar = localStorage.getItem('studyName');
    const studyClassEls = document.getElementsByClassName('studyGroup');
    for (el of studyClassEls) {
        el.textContent = studyNameVar;
        console.log(el.textConent)
    }
};

setStudyGroupName();