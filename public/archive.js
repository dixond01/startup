async function setArchiveList() {
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.toLocaleString('default', { month: 'long' });

    //fetch (changed to return the date_list)
    const archive_response = await fetch('/api/archive_data');
    let dateList = await archive_response.json();

    // const isObjectInArray = dateList.some(obj => {
    //     // Check if the object matches the searchObject
    //     return obj.month === searchObject.month && obj.day === searchObject.day /* Add more conditions as needed */;
    // });

    let archiveList = [];
    const searchObject = {month: currentMonth, day: currentDay}; //currentDay may be wrong type?
    console.log("dateList", dateList, "searchObject", searchObject);
    archiveList = dateList.filter(obj => obj.month !== searchObject.month && obj.day !== searchObject.day);
    //archiveList = dateList.filter(obj => obj !== searchObject);
    console.log("archiveList: ", archiveList);
    return archiveList;
}

async function displayCards(archiveList) {

    const cardListEl = document.getElementById('cardList');

    index = 0;
    for (archive of archiveList) {
        const cardEl = document.createElement('div');
        cardEl.classList.add('card');
        cardEl.setAttribute('id', index);
        cardEl.setAttribute('onclick', `movePage(${index})`); //not sure if archive is passed in or not
        cardListEl.appendChild(cardEl);

        const dateEl = document.createElement('h4');
        dateEl.classList.add('date');
        dateEl.innerText = `${archive.month} ${archive.day}`; //placeholder for week (day range)
        cardEl.appendChild(dateEl);

        const lessonEl = document.createElement('div');
        lessonEl.classList.add('lessonTitle');
        lessonEl.innerText = `${archive.month} ${archive.day}`; //placeholder for lesson title
        cardEl.appendChild(lessonEl);

        //increment index for each archive in archiveList
        index++;

    }
}

async function movePage(index) {
    //can stay local (not server) (i think)

    //fetch
    // const archive_response = await fetch('/api/archive_data');
    // let archiveList = await archive_response.json();
    const promise = setArchiveList();
    promise.then(result => {
        const archiveList = result;
        let archive = archiveList[index];
        localStorage.setItem('currentArchive', JSON.stringify(archive));
        window.location.href = 'archive-discussion.html';
    });

    // let archive = archiveList[index];
    // localStorage.setItem('currentArchive', JSON.stringify(archive));
    // window.location.href = 'archive-discussion.html';

}

const promise = setArchiveList();
    promise.then(result => {
        displayCards(result);
    });
