drawBoard();

        function drawBoard() {
            drawDoubleRow();
            drawDoubleRow();
            drawDoubleRow();
            drawDoubleRow();
        }

        function drawDoubleRow() {
            drawRow('light', 'dark');
            drawRow('dark', 'light');
        }

        function drawRow(color1, color2) {
            document.getElementById('board').innerHTML += /*HTML*/`    
                <div class="${color1}Square"></div>
                <div class="${color2}Square"></div>
                <div class="${color1}Square"></div>
                <div class="${color2}Square"></div>
                <div class="${color1}Square"></div>
                <div class="${color2}Square"></div>
                <div class="${color1}Square"></div>
                <div class="${color2}Square"></div>
                `;
        }

        /*drawBoard();

        function drawBoard() {
            drawDoubleRow();
            drawDoubleRow();
            drawDoubleRow();
            drawDoubleRow();
        }

        function drawDoubleRow() {
            drawRowStartingWithLight();
            drawRowStartingWithDark();
        }

        function drawRowStartingWithLight() {
            drawDarkCell();
            drawRowCore();
        }

        function drawRowStartingWithDark() {
            drawRowCore();
            drawDarkCell();
        }


        function drawRowCore() {
            drawLightCell();
            drawDarkCell();
            drawLightCell();
            drawDarkCell();
            drawLightCell();
            drawDarkCell();
            drawLightCell();
        }

        function drawDarkCell() {
            document.getElementById('board').innerHTML +=/*HTML*/`
            <div class="darkSquare"></div>`;
        }

        function drawLightCell() {
            document.getElementById('board').innerHTML +=/*HTML*/`
            <div class="lightSquare"></div>`;
        }      