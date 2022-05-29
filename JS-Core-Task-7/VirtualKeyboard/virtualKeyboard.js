"use strict";

let FcapsLock = '0';
let Fshift = '0';

//BackSpace
function funcDel() {
	let valu = document.getElementById('display').innerHTML;
  let x = document.getElementById('display').innerHTML.length;
	let y = 1;
	let z = x-y;
	document.getElementById('display').innerHTML=valu.slice(0,z);
}
//CapsLock
function funcCL() {
	if (FcapsLock == '0') {
		FcapsLock = '1';
	}
	else if (FcapsLock == '1') {
		FcapsLock = '0';
	}
}
//Shift
function funcShift() {
	if (Fshift == '0') {
		Fshift = '1';
	}else if (Fshift == '1') {
		Fshift = '0';
	}
}
//Enter
function funcEnter() {
	let valu = document.getElementById('display').innerHTML;
	document.getElementById('display').innerHTML=valu+'<br>';
}
//Tab
function funcTab() {
	let valu = document.getElementById('display').innerHTML;
	document.getElementById('display').innerHTML=valu+'&nbsp&nbsp&nbsp';
}
//Space
function funcSpace() {
	let valu = document.getElementById('display').innerHTML;
	document.getElementById('display').innerHTML=valu+'\t';
}
//Letter keys
//q
function funcq() {
	let valu = document.getElementById('display').innerHTML;
	if (FcapsLock == '0') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'q';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'Q';
		}
	}else if (FcapsLock == '1') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'Q';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'q';
		}
	}
}
//w
function funcw() {
	let valu = document.getElementById('display').innerHTML;
	if (FcapsLock == '0') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'w';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'W';
		}
	}else if (FcapsLock == '1') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'W';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'w';
		}
	}
}
//e
function funce() {
	let valu = document.getElementById('display').innerHTML;
	if (FcapsLock == '0') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'e';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'E';
		}
	}else if (FcapsLock == '1') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'E';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'e';
		}
	}
}
//r
function funcr() {
	let valu = document.getElementById('display').innerHTML;
	if (FcapsLock == '0') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'r';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'R';
		}
	}else if (FcapsLock == '1') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'R';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'r';
		}
	}
}
//t
function funct() {
	let valu = document.getElementById('display').innerHTML;
	if (FcapsLock == '0') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'t';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'T';
		}
	}else if (FcapsLock == '1') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'T';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'t';
		}
	}
}
//y
function funcy() {
	let valu = document.getElementById('display').innerHTML;
	if (FcapsLock == '0') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'y';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'Y';
		}
	}else if (FcapsLock == '1') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'Y';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'y';
		}
	}
}
//u
function funcu() {
	let valu = document.getElementById('display').innerHTML;
	if (FcapsLock == '0') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'u';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'U';
		}
	}else if (FcapsLock == '1') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'U';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'u';
		}
	}
}
//i
function funci() {
	let valu = document.getElementById('display').innerHTML;
	if (FcapsLock == '0') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'i';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'I';
		}
	}else if (FcapsLock == '1') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'I';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'i';
		}
	}
}
//o
function funco() {
	let valu = document.getElementById('display').innerHTML;
	if (FcapsLock == '0') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'o';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'O';
		}
	}else if (FcapsLock == '1') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'O';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'o';
		}
	}
}
//p
function funcp() {
	let valu = document.getElementById('display').innerHTML;
	if (FcapsLock == '0') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'p';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'P';
		}
	}else if (FcapsLock == '1') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'P';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'p';
		}
	}
}
//a
function funca() {
	let valu = document.getElementById('display').innerHTML;
	if (FcapsLock == '0') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'a';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'A';
		}
	}else if (FcapsLock == '1') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'A';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'a';
		}
	}
}
//s
function funcs() {
	let valu = document.getElementById('display').innerHTML;
	if (FcapsLock == '0') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'s';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'S';
		}
	}else if (FcapsLock == '1') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'S';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'s';
		}
	}
}
//d
function funcd() {
	let valu = document.getElementById('display').innerHTML;
	if (FcapsLock == '0') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'d';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'D';
		}
	}else if (FcapsLock == '1') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'D';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'d';
		}
	}
}
//f
function funcf() {
	let valu = document.getElementById('display').innerHTML;
	if (FcapsLock == '0') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'f';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'F';
		}
	}else if (FcapsLock == '1') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'F';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'f';
		}
	}
}
//g
function funcg() {
	let valu = document.getElementById('display').innerHTML;
	if (FcapsLock == '0') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'g';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'G';
		}
	}else if (FcapsLock == '1') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'G';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'g';
		}
	}
}
//h
function funch() {
	let valu = document.getElementById('display').innerHTML;
	if (FcapsLock == '0') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'h';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'H';
		}
	}else if (FcapsLock == '1') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'H';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'h';
		}
	}
}
//j
function funcj() {
	let valu = document.getElementById('display').innerHTML;
	if (FcapsLock == '0') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'j';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'J';
		}
	}else if (FcapsLock == '1') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'J';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'j';
		}
	}
}

//k
function funck() {
	let valu = document.getElementById('display').innerHTML;
	if (FcapsLock == '0') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'k';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'K';
		}
	}else if (FcapsLock == '1') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'K';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'k';
		}
	}
}
//l
function funcl() {
	let valu = document.getElementById('display').innerHTML;
	if (FcapsLock == '0') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'l';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'L';
		}
	}else if (FcapsLock == '1') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'L';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'l';
		}
	}
}

//z
function funcz() {
	let valu = document.getElementById('display').innerHTML;
	if (FcapsLock == '0') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'z';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'Z';
		}
	}else if (FcapsLock == '1') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'Z';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'z';
		}
	}
}
//x
function funcx() {
	let valu = document.getElementById('display').innerHTML;
	if (FcapsLock == '0') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'x';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'X';
		}
	}else if (FcapsLock == '1') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'X';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'x';
		}
	}
}
//c
function funcc() {
	let valu = document.getElementById('display').innerHTML;
	if (FcapsLock == '0') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'c';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'C';
		}
	}else if (FcapsLock == '1') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'C';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'c';
		}
	}
}
//v
function funcv() {
	let valu = document.getElementById('display').innerHTML;
	if (FcapsLock == '0') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'v';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'V';
		}
	}else if (FcapsLock == '1') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'V';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'v';
		}
	}
}
//b
function funcb() {
	let valu = document.getElementById('display').innerHTML;
	if (FcapsLock == '0') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'b';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'B';
		}
	}else if (FcapsLock == '1') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'B';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'b';
		}
	}
}
//n
function funcn() {
	let valu = document.getElementById('display').innerHTML;
	if (FcapsLock == '0') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'n';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'N';
		}
	}else if (FcapsLock == '1') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'N';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'n';
		}
	}
}
//m
function funcm() {
	let valu = document.getElementById('display').innerHTML;
	if (FcapsLock == '0') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'m';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'M';
		}
	}else if (FcapsLock == '1') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+'M';
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+'m';
		}
	}
}
//Number Keys
//1
function func1() {
	let valu = document.getElementById('display').innerHTML;
	if (Fshift == '0') {
		document.getElementById('display').innerHTML=valu+'1';
	}else if (Fshift = '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'!';
	}
}
//2
function func2() {
	let valu = document.getElementById('display').innerHTML;
	if (Fshift == '0') {
		document.getElementById('display').innerHTML=valu+'2';
	}else if (Fshift = '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'@';
	}
}
//3
function func3() {
	let valu = document.getElementById('display').innerHTML;
	if (Fshift == '0') {
		document.getElementById('display').innerHTML=valu+'3';
	}else if (Fshift = '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'#';
	}
}
//4
function func4() {
	let valu = document.getElementById('display').innerHTML;
	if (Fshift == '0') {
		document.getElementById('display').innerHTML=valu+'4';
	}else if (Fshift = '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'$';
	}
}
//5
function func5() {
	let valu = document.getElementById('display').innerHTML;
	if (Fshift == '0') {
		document.getElementById('display').innerHTML=valu+'5';
	}else if (Fshift = '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'%';
	}
}
//6
function func6() {
	let valu = document.getElementById('display').innerHTML;
	if (Fshift == '0') {
		document.getElementById('display').innerHTML=valu+'6';
	}else if (Fshift = '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'^';
	}
}
//7
function func7() {
	let valu = document.getElementById('display').innerHTML;
	if (Fshift == '0') {
		document.getElementById('display').innerHTML=valu+'7';
	}else if (Fshift = '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'&';
	}
}
//8
function func8() {
	let valu = document.getElementById('display').innerHTML;
	if (Fshift == '0') {
		document.getElementById('display').innerHTML=valu+'8';
	}else if (Fshift = '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'*';
	}
}
//9
function func9() {
	let valu = document.getElementById('display').innerHTML;
	if (Fshift == '0') {
		document.getElementById('display').innerHTML=valu+'9';
	}else if (Fshift = '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'(';
	}
}
//0
function func0() {
	let valu = document.getElementById('display').innerHTML;
	if (Fshift == '0') {
		document.getElementById('display').innerHTML=valu+'0';
	}else if (Fshift = '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+')';
	}
}
//Special keys
function funcSc1() {
	let valu = document.getElementById('display').innerHTML;
	if (Fshift == '0') {
		document.getElementById('display').innerHTML=valu+'`';
	}else if (Fshift = '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'~';
	}
}
function funcSc2() {
	let valu = document.getElementById('display').innerHTML;
	if (Fshift == '0') {
		document.getElementById('display').innerHTML=valu+'_';
	}else if (Fshift = '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'-';
	}
}
function funcSc3() {
	let valu = document.getElementById('display').innerHTML;
	if (Fshift == '0') {
		document.getElementById('display').innerHTML=valu+'[';
	}else if (Fshift = '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'{';
	}
}
function funcSc4() {
	let valu = document.getElementById('display').innerHTML;
	if (Fshift == '0') {
		document.getElementById('display').innerHTML=valu+']';
	}else if (Fshift = '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'}';
	}
}
function funcSc5() {
	let valu = document.getElementById('display').innerHTML;
	if (Fshift == '0') {
		document.getElementById('display').innerHTML=valu+'\\';
	}else if (Fshift = '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'|';
	}
}
function funcSc6() {
	let valu = document.getElementById('display').innerHTML;
	if (Fshift == '0') {
		document.getElementById('display').innerHTML=valu+';';
	}else if (Fshift = '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+':';
	}
}
function funcSc7() {
	let valu = document.getElementById('display').innerHTML;
	if (Fshift == '0') {
		document.getElementById('display').innerHTML=valu+"'";
	}else if (Fshift = '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'"';
	}
}
function funcSc8() {
	let valu = document.getElementById('display').innerHTML;
	if (Fshift == '0') {
		document.getElementById('display').innerHTML=valu+',';
	}else if (Fshift = '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'<';
	}
}
function funcSc9() {
	let valu = document.getElementById('display').innerHTML;
	if (Fshift == '0') {
		document.getElementById('display').innerHTML=valu+'/';
	}else if (Fshift = '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'?';
	}
}
function funcDot() {
	let valu = document.getElementById('display').innerHTML;
	if (Fshift == '0') {
		document.getElementById('display').innerHTML=valu+'.';
	}else if (Fshift = '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'>';
	}
}
