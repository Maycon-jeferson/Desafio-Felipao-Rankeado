let rank = saldoVitoras(90, 11)
let nomeRank = ""

function saldoVitoras(vitoriasPlayer, derrotaPlayer){
    let saldoVitoras = vitoriasPlayer - derrotaPlayer
    return saldoVitoras
}
switch (true){
    case (rank < 10):
        nomeRank = "Ferro"
        break

    case (rank > 11 && rank <= 20):
        nomeRank = "Bronze"
        break

    case (rank > 21 && rank <= 50):
        nomeRank = "Prata"
        break

    case (rank > 51 && rank <= 80):
        nomeRank = "Ouro"
        break

    case (rank > 81 && rank <= 90):
        nomeRank = "Diamante"
        break

    case (rank > 91 && rank <= 100):
        nomeRank = "Lendario"
        break
    
    default:
        nomeRank = "Imortal"
}

console.log("O Herói tem de saldo de " + rank + " está no nível de " + nomeRank)