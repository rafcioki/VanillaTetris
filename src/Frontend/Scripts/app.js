(function() {
    document.onreadystatechange = function() {
        if (document.readyState === 'interactive') {
            var domManipulation = new DomManipulation();

            var gameBoardContainer = document.getElementsByClassName('game-board-container');
            gameBoardContainer[0].appendChild(domManipulation.createTable(12, 7));
        }
    };
})();