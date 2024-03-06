function displayCards() {
    

    if (localStorage.getItem('archiveList')) {
        window.archiveList = JSON.parse(localStorage.getItem('archiveList'));
    }
    else {
        window.archiveList = [];
    }

    const cardListEl = document.getElementById('cardList');

    index = 0;
    for (archive of archiveList) {
        const cardEl = document.createElement('div');
        cardEl.classList.add('card');
        cardEl.setAttribute('id', index);
        cardEl.setAttribute('onclick', 'movePage(archive)'); //not sure if archive is passed in or not
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

function movePage(archive) {
    //can stay local (not server) (i think)
    localStorage.setItem('currentArchive', JSON.stringify(archive));
    window.location.href = 'archive-discussion.html';

}

displayCards();