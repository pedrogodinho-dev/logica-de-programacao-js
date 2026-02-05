/*Sistema de Permissão
Uma função que valida múltiplos critérios (Nível e Conexão) para autorizar o acesso a partidas ranqueadas. */

function podeJogarRanked(nivel, internetOk) {
    // A regra é: Nível 30 ou mais E internet tem que estar true
    return nivel >= 30 && internetOk;
}
    let nivelDoJogador = 32;
    let conexaoEstavel = true;

    if (podeJogarRanked(nivelDoJogador, conexaoEstavel)) {
        console.log("✅ Acesso liberado! Boa partida, invocador.");
    } else {
        console.log("❌ Acesso negado. Verifique seu nível ou sua conexão.");
    }
