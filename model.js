var AGES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var MAX_PLAYERS = 4;

var Cards = new Meteor.Collection('cards');

var Games = new Meteor.Collection('games');

var Players = new Meteor.Collection('players');

if (Meteor.isServer) {
  // Meteor.publish('cardsByAge', function (set, level) {
  //   return Cards.find({set: set, level: level}).map(fisherYates);
  // });
}
