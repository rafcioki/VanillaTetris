function DomManipulation() {
    this.createTable = function(numberOfRows, numberOfColumns) {
        var table = document.createElement('table');

        createBodyFor(table, numberOfRows, numberOfColumns);

        return table;
    };

    function createBodyFor(table, numberOfRows, numberOfColumns) {
        for (var i = 0; i < numberOfRows; ++i) {
            var row = table.insertRow(i);

            for (var j = 0; j < numberOfColumns; ++j) {
                var cell = row.insertCell(j);
            }
        }
    }
}
(function() {
    document.onreadystatechange = function() {
        if (document.readyState === 'interactive') {
            var domManipulation = new DomManipulation();

            var gameBoardContainer = document.getElementsByClassName('game-board-container');
            gameBoardContainer[0].appendChild(domManipulation.createTable(12, 7));
        }
    };
})();