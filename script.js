$(document).ready(function(){
$("#price").click(function() {
var collss = $('#columns').val();
var rowwss = $('#rows').val();
var table_height = $('#table-height').val();
var table_width = $('#table-width').val();
$("table").css({"height": table_height * 10, "width": table_width *10})

var field_mas = [];


for (var i = 0; i < rowwss; i++) {
	field_mas[i] = [];
	for (var j = 0; j < collss; j++) {
		field_mas[i][j] = 0;
	}
}

var rez;
var results = document.getElementById('results');
var field = document.getElementById('field');

var gen_row;
var gen_cols = "";

draw_table();

field.addEventListener('click', function (e) {
	var target = e.target;

	if (target.tagName === 'TD') {

		if (field_mas[target.id[0]][target.classList[0]] == 1) {
			field_mas[target.id[0]][target.classList[0]] = 0;
		} else {
			field_mas[target.id[0]][target.classList[0]] = 1;
		}
		draw_table();
	}

}, false);

function draw_table() {
	var ryad = [];
	var price = 0;
	var num_ryad = 0;

	field.innerHTML = "";
	for (var i = 0; i < rowwss; i++) {
		gen_row = document.createElement('tr');
		gen_row.className = "getn-tr";
		gen_cols = "";

		ryad[num_ryad] = 0;

		for (var j = 0; j < collss; j++) {
			gen_cols += "<td id = '" + i + "' class = '" + j;
			if (field_mas[i][j]) {
                price += 100;
            } else {
				gen_cols += " empty";
			}
			gen_cols += "'>" + "</td>";

			if (field_mas[i][j] == 1) {
				ryad[num_ryad]++;
			} else {
				if (field_mas[i][j - 1] == 1) {
					num_ryad++;
					ryad[num_ryad] = 0;
				}
			}
		} /*j end*/

		gen_row.innerHTML = gen_cols;
		field.appendChild(gen_row);
	}

    rez = 'Кінцева ціна: ' + price + ' гривень';
	
    results.innerHTML = '';
	results.innerHTML = rez;
}
});
})