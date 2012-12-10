////////// Main client application logic //////////

//////
////// Utility functions
//////

var player = function () {
  return Players.findOne(Session.get('player_id'));
};

var game = function () {
  var me = player();
  return me && me.game_id && Games.findOne(me.game_id);
};

//////
////// lobby template: shows everyone not currently playing, and
////// offers a button to start a fresh game.
//////

Template.lobby.show = function () {
  // only show lobby if we're not in a game
  return !game();
};

Template.lobby.waiting = function () {
  var players = Players.find({_id: {$ne: Session.get('player_id')},
                              name: {$ne: ''},
                              game_id: {$exists: false}});

  return players;
};

Template.lobby.count = function () {
  var players = Players.find({_id: {$ne: Session.get('player_id')},
                              name: {$ne: ''},
                              game_id: {$exists: false}});

  return players.count();
};

Template.lobby.disabled = function () {
  var me = player();
  if (me && me.name)
    return '';
  return 'disabled="disabled"';
};

Template.lobby.events({
  'keyup input#myname': function (evt) {
    var name = $('#lobby input#myname').val().trim();
    Players.update(Session.get('player_id'), {$set: {name: name}});
  },
  'click button.startgame': function () {
    Meteor.call('start_new_game');
  }
});

//////
////// board template: renders the card piles in the game.  if there is no
////// game, show a splash screen.
//////

Template.achievements.show = function () {
  return game();
};

Template.achievements.standard = function () {
  var g = game();
  return g && g.achievements && g.achievements.standard;
};

Template.achievements.special = function () {
  var g = game();
  return g && g.achievements && g.achievements.special;
};

Template.piles.show = function () {
  return game();
};

Template.piles.piles = function () {
  var g = game();
  return g && g.piles;
};

Template.piles.events({
  'click .card': function () {
    console.log(this);
  }
});

//////
////// Initialization
//////

Meteor.startup(function () {
  // code to run on client at startup

  // Does not handle hot reload
  var player_id = Session.get('player_id');
  if (!player_id) {
    player_id = Players.insert({name: '', idle: false});
    Session.set('player_id', player_id);
  }
});

// Meteor.subscribe('cardsByAge');
