// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);

function currentStatus(playerA, playerB, wins) {
  let points = {
    [playerA]: 0,
    [playerB]: 0,
  };

  wins.forEach((player) => {
    points[player]++;
  });

  for (let player in points) {
    if (points[player] <= 2) {
      points[player] = points[player] * 15;
    } else if (points[player] === 3) {
      points[player] = 40;
    } else if (points[player] > 3) {
      points[player] = points[player] * 15;
    }
  }

  if (points[playerA] > 30) {
    if (points[playerA] === points[playerB]) {
      return `${playerA} Deuce - ${playerB} Deuce`;
    }

    if (points[playerA] > points[playerB]) {
      let diff = points[playerA] - points[playerB];
      return diff > 20 ? `${playerA} Wins` : `${playerA} Advantage`;
    } else {
      let diff = points[playerB] - points[playerA];
      return diff > 20 ? `${playerB} Wins` : `${playerB} Advantage`;
    }
  }
  return `${playerA} ${points[playerA]} - ${playerB} ${points[playerB]}`;
}

console.log('Game 1', currentStatus('Gokul', 'Roger', []));

console.log(
  'Game 2',
  currentStatus('Gokul', 'Roger', ['Roger', 'Gokul', 'Roger', 'Roger'])
);

console.log(
  'Game 3',
  currentStatus('Gokul', 'Roger', ['Roger', 'Gokul', 'Roger', 'Roger', 'Gokul'])
);

console.log(
  'Game 4',
  currentStatus('Gokul', 'Roger', [
    'Roger',
    'Roger',
    'Gokul',
    'Roger',
    'Gokul',
    'Gokul',
  ])
);

console.log(
  'Game 5',
  currentStatus('Gokul', 'Roger', [
    'Roger',
    'Roger',
    'Gokul',
    'Roger',
    'Gokul',
    'Gokul',
    'Roger',
  ])
);

console.log(
  'Game 6',
  currentStatus('Gokul', 'Roger', [
    'Roger',
    'Gokul',
    'Gokul',
    'Roger',
    'Gokul',
    'Gokul',
    'Roger',
    'Gokul',
    'Roger',
    'Roger',
  ])
);

console.log(
  'Game 7',
  currentStatus('Gokul', 'Roger', [
    'Roger',
    'Gokul',
    'Gokul',
    'Roger',
    'Gokul',
    'Gokul',
    'Roger',
    'Gokul',
    'Roger',
    'Roger',
    'Gokul',
  ])
);
console.log(
  'Game 8',
  currentStatus('Gokul', 'Roger', [
    'Roger',
    'Gokul',
    'Gokul',
    'Roger',
    'Gokul',
    'Gokul',
    'Roger',
    'Gokul',
    'Roger',
    'Roger',
    'Gokul',
    'Roger',
  ])
);

console.log(
  'Game 9',
  currentStatus('Gokul', 'Roger', [
    'Roger',
    'Gokul',
    'Gokul',
    'Roger',
    'Gokul',
    'Gokul',
    'Roger',
    'Gokul',
    'Roger',
    'Roger',
    'Gokul',
    'Roger',
    'Roger',
  ])
);

console.log(
  'Game 10',
  currentStatus('Gokul', 'Roger', [
    'Roger',
    'Gokul',
    'Gokul',
    'Roger',
    'Gokul',
    'Gokul',
    'Roger',
    'Gokul',
    'Roger',
    'Roger',
    'Gokul',
    'Roger',
    'Roger',
    'Roger',
  ])
);
