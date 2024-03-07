

async function createStudyGroup() {
    let studyGroups = [];
    const studyNameEl = document.querySelector('#studygroupinput');
    const studyName = studyNameEl.value;
    const response = await fetch('/api/studygroups'); //STILL NEED TO ADD ENDPOINT
    studyGroups = await response.json();

    if (studyName in studyGroups){ //NOT SURE IF VALID (what is the type of studyGroups?)
        const errorEl = document.querySelector('#createStudyErrror');
        errorEl.value = "That group name is taken. Please pick another." //is this how you change the value?? will it go away on refresh?
    }
    else {
        const response = await fetch('/api/studygroup', { //STILL NEED TO ADD ENDPOINT
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(studyName),
         });
        const studyGroups = await response.json();
        localStorage.setItem('studyGroups', JSON.stringify(studyGroups));
    }

}