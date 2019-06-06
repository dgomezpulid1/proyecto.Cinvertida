function figuras() {
    var ale = document.getElementById('random');

    if (ale == '1'){
        Cruz();
        figuraCinvertida()
    }else{

    }
    function Cruz() {
        var pieza = 0; //pieza
        var pos = [  //Valores referencia de coordenadas relativas
            [0, 0],
            [0, 1],
            [-1, 0],
            [1, 0],
            [-1, -1],
            [0, -1],
            [1, -1],
            [0, -2]
        ];
        var piezas = [  //Diseño de las piezas, el primer valor de cada fila corresponde con el número de rotaciones posibles
            [4, 1, 2, 3, 4], // CInvertida Celda1
            [4, 0, 1, 5, 6], // Cruz   Celda2
        ];

        function colisionaPieza() {
            for (var v = 1; v < 5; v++) {
                var des = piezas[pieza][v];
                var pos2 = rotarCasilla(pos[des]);
                if (cuadroNoDisponible(pos2[0] + filaInicial, pos2[1] + columnaInicial)) {
                    return true;
                }
            }
            return false;
        }
        //Mueve la pieza lateralmente
        function moverPieza(des) {
            columnaInicial = columnaInicial + des;
            if (colisionaPieza()) {
                columnaInicial = columnaInicial - des;
            }
        }
        return pos2;
    }

    function figuraCinvertida() {
        var pieza = 0; //pieza
        var pos = [  //Valores referencia de coordenadas relativas
            [0, 0],
            [0, 1],
            [-1, 0],
            [1, 0],
            [-1, -1],
            [0, -1],
            [1, -1],
            [0, -2]
        ];
        var piezas = [  //Diseño de las piezas, el primer valor de cada fila corresponde con el número de rotaciones posibles
            [4, 0, 1, 2, 3], // .l. Celda1
            [4, 0, 1, 5, 6], // L   Celda2
        ];

        function colisionaPieza() {
            for (var v = 1; v < 5; v++) {
                var des = piezas[pieza][v];
                var pos2 = rotarCasilla(pos[des]);
                if (cuadroNoDisponible(pos2[0] + filaInicial, pos2[1] + columnaInicial)) {
                    return true;
                }
            }
            return false;
        }
        //Mueve la pieza lateralmente
        function moverPieza(des) {
            columnaInicial = columnaInicial + des;
            if (colisionaPieza()) {
                columnaInicial = columnaInicial - des;
            }
        }

        //Rota la pieza según el número de rotaciones posibles tenga la pieza activa. (posición 0 de la pieza)
        function rotarPieza() {
            rotacion = rotacion + 1;
            if (rotacion == piezas[pieza][0]) {
                rotacion = 0;
            }
            if (colisionaPieza()) {
                rotacion = rotacion - 1;
                if (rotacion == -1) {
                    rotacion = piezas[pieza][0] - 1;
                }
            }
        }

        //Obtiene unas coordenadas fila,columna y las rota 90 grados
        function rotarCasilla(celda) {
            var pos2 = [celda[0], celda[1]];
            for (var n = 0; n < rotacion; n++) {
                var fila = pos2[1];
                var columna = -pos2[0];
                pos2[0] = fila;
                pos2[1] = columna;
            }
            return pos2;
        }
    }
}
