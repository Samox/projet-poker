mainApp.component('player', {
  templateUrl: 'components/player/player.html',
  controller: function playerCtrl($routeParams) {
    this.playerId = $routeParams.playerId
    console.log(this.playerId);
  }
})
