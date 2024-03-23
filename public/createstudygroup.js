

async function createStudyGroup() {
    const studyNameEl = document.querySelector('#studygroupinput');
    const studyName = studyNameEl.value;
    const response = await fetch('/api/studygroups');
    const studyGroups = await response.json();
    console.log("Type: ", typeof(studyGroups), "List: ", studyGroups);

    if (studyGroups.some(x => x.studyGroupName === studyName)){ //NOT SURE IF VALID (what is the type of studyGroups?)
        const errorEl = document.getElementById('createStudyError');
        errorEl.innerText = "That group name is taken. Please pick another." //is this how you change the value?? will it go away on refresh?
    }
    else {
        const response = await fetch('/api/studygroup', { 
            method: 'POST',
            headers: {'content-type': 'text/plain'},
            body: studyName, //removed JSON.stringify
         });
        // const studyGroups = await response.json();
        // sessionStorage.setItem('studyGroups', JSON.stringify(studyGroups));
        window.location.href = 'index.html';
    }

}