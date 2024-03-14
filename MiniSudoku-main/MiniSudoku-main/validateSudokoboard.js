function validateSudokuboard(sudokuboardString) {
    if (sudokuboardString.length != 16)
        return 'ugyldig brett, feil lengde';
    return 'helt utfylt, ingen feil';
}