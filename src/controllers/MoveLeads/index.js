
export default function(event){
    let alvo = event.target
    let leadSelecionada = alvo.nodeName == 'P' ? alvo : alvo.getElementsByTagName('p')[0]
    
    if(!leadSelecionada.innerHTML){
        return
    }
    
    console.log(alvo)
    
    let lead = window.usuarioLogado.leads.find(ld => ld.nome == leadSelecionada.innerHTML)
    console.log(lead)

    let estados = [
    ['1', '', ''],
    ['', '1', ''],
    ['', '', '1'] ]

    if (lead.estadoNumero < 3)
    lead.estadoNumero++

    lead.estado = estados[lead.estadoNumero]

    let bancoDeDados = JSON.parse(localStorage.bancoDeDados);

    let usuario = bancoDeDados.usuarios.find(user => user.nome == window.usuarioLogado.nome);
    usuario.leads = window.usuarioLogado.leads
    
    localStorage.bancoDeDados = JSON.stringify(bancoDeDados)

    let tr = leadSelecionada.parentNode.parentNode
    console.log(tr)
    
    if (lead.estadoNumero < 3) {
    let proximaPosicao = tr.children[lead.estadoNumero].getElementsByTagName('p')[0]
    proximaPosicao.innerHTML = leadSelecionada.innerHTML
    leadSelecionada.innerHTML = ''}
}
