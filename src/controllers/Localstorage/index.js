let ExportObject = {    
  pegarBD: function() {
    let bancoDeDados
    
    if(!localStorage.bancoDeDados){
      localStorage.bancoDeDados = JSON.stringify({
        usuarios : []
      })           
    }
    bancoDeDados = JSON.parse(localStorage.bancoDeDados);
    
    return bancoDeDados
  },
  salvarBD: function(obj){
    localStorage.bancoDeDados = JSON.stringify(obj)
  }
}
export default ExportObject