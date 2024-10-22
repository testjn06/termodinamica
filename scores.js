window.onload = function() {
    const scoreTable = document.getElementById('score-table');

    // Obtener los puntajes desde Firebase
    firebase.database().ref('playersScores').once('value', (snapshot) => {
        const playersScores = snapshot.val();
        
        for (let id in playersScores) {
            const player = playersScores[id];
            const row = document.createElement('tr');
            row.innerHTML = `<td>${player.name}</td><td>${player.score}</td>`;
            scoreTable.appendChild(row);
        }
    });
};