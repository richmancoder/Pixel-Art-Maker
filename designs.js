// Using ES6 Standards, just trying to use what I have learnt
//Using jQuery to make life easy

function makeGrid(event){
    event.preventDefault();

    let table = $('#pixelCanvas'); // The table
    table.empty(); // Clears table

    // Select size input
    let height = $('#inputHeight').val();
    let width = $('#inputWidth').val();

    let grid = ''; //creates the table body
    //The loop that creates the table rows and cells
    for (let colCount = 1; colCount <= height; colCount++) {
        grid += '<tr>';
        for (let rowCount = 1; rowCount <= width; rowCount++) {
            grid += '<td></td>'
        }
        grid += '</tr>';
    }
    return table.append(grid);
}

// Select color input
function addColor() {
    let color = $('#colorPicker').val();
    $(this).css('background-color', color);
}

// When size is submitted by the user, call makeGrid()
$('input[type="submit"]').click(makeGrid);
$('#pixelCanvas').on('click', 'td', addColor);
