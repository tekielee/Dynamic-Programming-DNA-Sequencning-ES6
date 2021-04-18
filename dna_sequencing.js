const GC = '-';
const SP = 1;
const GP = -1;
const MS = -1;

function NWSquencing(s1, s2) {
	let grid = [];
	let M = s1.length;
	let N = s2.length;
	
	for(let i = 0; i <= N; i++) {
		grid[i] = [];
		for(let j = 0; j <= M; j++) {
			grid[i][j] = null;
		}
	}
	grid[0][0] = 0;
	for(let i = 1; i <= M; i++) {
		grid[0][i] = -1 * i;
	}
	for(let i = 1; i <= N; i++) {
		grid[i][0] = -1 * i;
	}
	for(let i = 1; i <= N; i++) {
		for(let j = 1; j <= M; j++) {
			grid[i][j] = Math.max(grid[i - 1][j -1] + (s2[i - 1] === s1[j - 1] ? SP : MS), grid[i - 1][j] + GP, grid[i][j - 1] + GP);
		}
	}
	printSequence(grid, s1, s2, M, N);
}

function printSequence(grid, s1, s2, j, i) {
	let sq1 = [];
	let sq2 = [];
	let sq3 = [];
	do {
		let t = grid[i - 1][j];
		let d = grid[i - 1][j - 1];
		let l = grid[i][j - 1];
		let max = Math.max(t, d, l);
		switch(max) {
			case d:
				j--;
				i--;
				sq1.push(s1[j]);
				sq2.push(s2[i]);
				if(s1[j] === s2[i]) {
					sq3.push('|');
				} else {
					sq3.push('');
				}
				break;
			case t:
				i--;
				sq1.push(GC);
				sq2.push(s2[i]);
				sq3.push('');
				break;
			case l:
				j--;
				sq1.push(s1[j]);
				sq2.push(GC);
				sq3.push('');
				break;
		}
	} while(i > 0 && j > 0);
	console.log(sq1.reverse());
	console.log(sq3.reverse());
	console.log(sq2.reverse());
}

let X = 'GAATTCAGTTA';
let Y = 'GGATCGA';
	
NWSquencing(X, Y);	