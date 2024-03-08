async function displayCards() {
    

    // if (localStorage.getItem('archiveList')) {
    //     window.archiveList = JSON.parse(localStorage.getItem('archiveList'));
    // }
    // else {
    //     window.archiveList = [];
    //}

    //fetch
    const archive_response = await fetch('/api/archive_data');
    let archiveList = await archive_response.json();

    // //TEST
    // let archiveList = [{"month":"March","day":7,"messages":[{"name":"Rachel","message":"Helaman 5:12 (<-- click)"}]},{"month":"April","day":6,"messages":[{"name":"Rachel","message":"Helaman 5:12 (<-- click)"}]}];

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

    // //TEST
    // let archiveList = [{"month":"March","day":7,"messages":[{"name":"Rachel","message":"Helaman 5:12 (<-- click)"}]},{"month":"April","day":6,"messages":[{"name":"Rachel","message":"Helaman 5:12 (<-- click)"}]}];

    //fetch
    const archive_response = await fetch('/api/archive_data');
    let archiveList = await archive_response.json();

    let archive = archiveList[index];
    localStorage.setItem('currentArchive', JSON.stringify(archive));
    window.location.href = 'archive-discussion.html';

}

displayCards();