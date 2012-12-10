////////// Server only logic //////////

function fisherYates (myArray) {
  var i = myArray.length;
  if (i === 0) return myArray;
  while (--i) {
    var j = Math.floor(Math.random() * (i + 1));
    var tempi = myArray[i];
    var tempj = myArray[j];
    myArray[i] = tempj;
    myArray[j] = tempi;
  }
  return myArray;
}

function createPiles() {
  var piles = [];
  var level;
  var cards;
  for (var i = 0; i < AGES.length; i++) {
    level = i + 1;
    cards = Cards.find({level: level}).fetch();
    piles[i] = {level: level, cards: fisherYates(cards)};
  }
  return piles;
}

function selectAchievements(piles) {
  var achievements = { standard: [], special: [] };
  for (var i = 0; i < AGES.length - 1; i++) {
    achievements.standard[i] = piles[i].cards.shift();
  }
  return achievements;
}

Meteor.methods({
  start_new_game: function (evt) {
    var game_id = Games.insert({});
    // move everyone who is ready in the lobby to the game
    Players.update({game_id: null, idle: false, name: {$ne: ''}},
                   {$set: {game_id: game_id}},
                   {multi: true});
    // Save a record of who is in the game, so when they leave we can
    // still show them.
    var players = Players.find({game_id: game_id},
                               {fields: {_id: true, name: true}}).fetch();

    var piles = createPiles();
    var achievements = selectAchievements(piles);

    Games.update({_id: game_id},
                 {$set: {players: players, piles: piles, achievements: achievements}});

    return game_id;
  }
});

//////
////// Initialization
//////

Meteor.startup(function () {
  // code to run on server at startup

  if (Cards.find().count() === 0) {
    THE_CARDS.forEach(function(card) {
      Cards.insert(card);
    });
  }

});

