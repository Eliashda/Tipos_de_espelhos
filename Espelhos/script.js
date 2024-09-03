function calcular() {
    const foco = parseFloat(document.getElementById('foco').value);
    const distancia = parseFloat(document.getElementById('distancia').value);
    const altura = parseFloat(document.getElementById('altura').value);

    // Verificar o tipo de espelho
    let tipoEspelho = '';
    if (foco > 0) {
        tipoEspelho = 'Espelho Côncavo';
    } else if (foco === 0) {
        tipoEspelho = 'Espelho Plano';
    } else {
        tipoEspelho = 'Espelho Convexo';
    }

    document.getElementById('tipo-espelho').innerText = `Tipo de Espelho: ${tipoEspelho}`;

    // Verificar se a imagem é imprópria
    if (distancia === foco) {
        document.getElementById('imagem-pl').innerText = 'Imagem Imprópria (P = F)';
        document.getElementById('imagem-real-virtual').innerText = '';
        document.getElementById('imagem-direita-esquerda').innerText = '';
        document.getElementById('altura-imagem').innerText = '';
        return;
    }

    // Calcular Pl
    const Pl = (foco * distancia) / (distancia - foco);
    document.getElementById('imagem-pl').innerText = `Posição da Imagem (Pl): ${Pl.toFixed(2)}`;

    // Determinar se a imagem é real ou virtual
    let imagemRealVirtual = '';
    if (Pl > 0) {
        imagemRealVirtual = 'Imagem Real (fora do espelho)';
    } else {
        imagemRealVirtual = 'Imagem Virtual (dentro do espelho)';
    }
    document.getElementById('imagem-real-virtual').innerText = `Imagem: ${imagemRealVirtual}`;

    // Calcular a ampliação (A)
    const A = Pl / distancia;
    let imagemDireitaEsquerda = '';
    if (A > 0) {
        imagemDireitaEsquerda = 'Imagem Direita';
    } else {
        imagemDireitaEsquerda = 'Imagem Invertida';
    }
    document.getElementById('imagem-direita-esquerda').innerText = `Orientação da Imagem: ${imagemDireitaEsquerda}`;

    // Calcular a altura da imagem (Yl)
    const Yl = Math.abs(A) * altura;
    document.getElementById('altura-imagem').innerText = `Altura da Imagem (Yl): ${Yl.toFixed(2)}`;
}
