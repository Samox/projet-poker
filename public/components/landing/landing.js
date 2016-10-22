mainApp.component('landing', {
  templateUrl: 'components/landing/landing.html',
  controller: function landingCtrl($mdDialog, $window) {
      this.newPlayer = (ev) => {
        // Appending dialog to document.body to cover sidenav in docs app
        var confirm = $mdDialog.prompt()
          .title('What is your name')
          .placeholder('Player name')
          .ariaLabel('Player name')
          .targetEvent(ev)
          .ok('Okay!')

        $mdDialog.show(confirm).then(function(playerName) {
          console.log('bienvenue', playerName);
          $window.location.href = '#!/player/' + playerName;
        });
      }
    }
})
