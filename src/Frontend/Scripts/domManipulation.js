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