function nivel(){
	let x = document.getElementById('nivel-jogo').value;
	let nivel = parseInt(x);

	if(x == 150){
		document.getElementById('dificuldade').innerHTML = 'Fácil';
	}else if (x == 100){
		document.getElementById('dificuldade').innerHTML = 'Médio';
	}else {
		document.getElementById('dificuldade').innerHTML = 'Difícil';
	}
	return nivel;
};
function config(){
	let nickname = document.getElementById('nickname').value;
	document.getElementById('jogador').innerHTML = nickname;

	let container = document.getElementById('geral');
	container.style.display = 'flex';

	let painel = document.getElementById('painel-jogo');
	painel.style.display = 'none';
};
function ComecarJogo(){
	config();
	let number = nivel();
	jogo = setInterval(iniciarJogo, number);
};