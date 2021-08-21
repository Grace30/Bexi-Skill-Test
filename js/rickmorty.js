function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function fillCard(card, char) {
    card.querySelector('img').setAttribute('src', char.image);
    card.querySelector('.name').textContent = char.name;
    card.querySelector('.origin').textContent = char.origin.name;
    card.querySelector('.species').textContent = char.species;
    let status = card.querySelector('.status');
    status.textContent = char.status;
    if (char.status == 'Alive') {
        status.classList.add('status-alive');
    } else {
        if (char.status == 'Dead') {
            status.classList.add('status-dead');
        } else {
            status.classList.add('status-unknown');
        }
    }
}



(function () {
    let ids = [];
    while (ids.length < 5) {
        // 671 personajes
        let tempID = getRandomInt(1, 671);
        if (!ids.find(e => e === tempID)) ids.push(tempID);
    }
    ids = ids.join(",");
    fetch("https://rickandmortyapi.com/api/character/" + ids).then(e => e.json())
    .then(function(json) {
        document.querySelectorAll('.character-card').forEach(function(card, index) {
            fillCard(card, json[index]);
        })
    });
})();