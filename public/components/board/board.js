mainApp.component('board', {
  templateUrl: 'components/board/board.html',
  controller: function boardCtrl(Board) {
    Board.getBoard().$promise
    .then(board => {
      this.board = board
    })
  }
})
