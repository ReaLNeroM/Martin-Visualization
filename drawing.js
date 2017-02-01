var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var val = 
[7, 2, 1, 0, 30, 0, 20, 0, 
7, 15, 1, 0, 30, 0, 4, 3, 
3, 0, 1, 0, 14, 0, 7, 3, 
1, 0, 1, 0, 7, 0, 2, 3,  
0, 0, 1, 0, 6, 0, 2, 3, 
0, 0, 3, 0, 38, 0, 25, 10, 
1, 0, 2, 0, 9, 0, 2, 4, 
0, 0, 1, 0, 22, 19, 2, 0, 
0, 0, 16, 1, 30, 11, 2, 0, 
0, 0, 3, 0, 6, 0, 3, 0, 
0, 0, 1, 0, 1, 0, 0, 0, 
0, 0, 1, 0, 18, 8, 9, 0, 
0, 0, 1, 0, 9, 8, 0, 0, 
0, 0, 3, 0, 18, 0, 15, 0, 
1, 1, 1, 0, 3, 0, 0, 0, 
1, 1, 1, 1, 19, 0, 15, 0, 
4, 1, 1, 0, 24, 0, 18, 0, 
1, 1, 2, 1, 17, 2, 10, 0, 
1, 1, 1, 1, 30, 0, 26, 0, 
3, 1, 1, 1, 7, 0, 1, 0, 
5, 5, 10, 1, 30, 1, 8, 0, 
1, 1, 1, 0, 14, 1, 10, 0, 
7, 3, 12, 1, 30, 0, 7, 0, 
3, 3, 9, 0, 30, 0, 15, 0, 
1, 1, 1, 0, 23, 0, 20, 0, 
1, 1, 1, 0, 23, 0, 20, 0, 
1, 1, 1, 0, 13, 0, 10, 0, 
1, 1, 4, 0, 6, 0, 0, 0, 
1, 1, 7, 0, 9, 0, 0, 0, 
1, 1, 13, 0, 15, 0, 0, 0, 
1, 1, 10, 0, 12, 0, 0, 0, 
1, 1, 1, 0, 3, 0, 0, 0, 
1, 1, 1, 0, 3, 0, 0, 0, 
1, 1, 16, 0, 18, 0, 0, 0, 
1, 1, 14, 0, 16, 0, 0, 0, 
2, 1, 27, 0, 30, 0, 0, 0, 
0, 0, 0, 0, 0, 0, 0, 0, 
0, 0, 0, 0, 0, 0, 0, 0, 
0, 0, 0, 0, 0, 0, 0, 0, 
0, 0, 0, 0, 0, 0, 0, 0, 
0, 0, 0, 0, 0, 0, 0, 0, 
0, 0, 0, 0, 0, 0, 0, 0, 
0, 0, 0, 0, 0, 0, 0, 0, 
0, 0, 0, 0, 0, 0, 0, 0, 
0, 0, 0, 0, 0, 0, 0, 0, 
0, 0, 0, 0, 0, 0, 0, 0, 
0, 0, 0, 0, 0, 0, 0, 0, 
0, 0, 0, 0, 0, 0, 0, 0, 
0, 0, 0, 0, 0, 0, 0, 0, 
0, 0, 0, 0, 0, 0, 0, 0, 
0, 0, 0, 0, 0, 0, 0, 0, 
0, 0, 0, 0, 0, 0, 0, 0, 
0, 0, 0, 0, 0, 0, 0, 0, 
0, 0, 0, 0, 0, 0, 0, 0, 
0, 0, 0, 0, 0, 0, 0, 0, 
0, 0, 0, 0, 0, 0, 0, 0, 
0, 0, 0, 0, 0, 0, 0, 0, 
0, 0, 0, 0, 0, 0, 0, 0, 
0, 0, 0, 0, 0, 0, 0, 0, 
0, 0, 0, 0, 0, 0, 0, 0, 
0, 0, 0, 0, 0, 0, 0, 0, 
0, 0, 0, 0, 0, 0, 0, 0, 
0, 0, 0, 0, 0, 0, 0, 0];

for(var i = 0; i < val.length; i += 8){
	for(var j = i; j < i + 8; j++){
		//val[j] mi e brojkata

		var s = "#00";
		s += String.fromCharCode(48 + Math.round(val[j] / 3));

		console.log(s);
		ctx.fillStyle = s;
		ctx.fillRect((j - i) * 100, i / 8 * 10, 100, 10);
	}
}