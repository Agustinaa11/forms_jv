const tasasCambio = {
    cuzco: 0.0031,     
    rio: 0.0048,       
    miami: 1193,    
    barcelona: 0.00075, 
    tokyo: 0.12,     
    londres: 0.00064,  
    sydney: 0.0013,   
    santiago: 0.81    
  };
  
  const monedas = {
    cuzco: "Soles",
    rio: "Reales",
    miami: "Dólares",
    barcelona: "Euros",
    tokyo: "Yenes",
    londres: "Libras",
    sydney: "Dólares australianos",
    santiago: "Pesos chilenos"
  };
  
  document.getElementById("viajeForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const dias = parseInt(document.getElementById("dias").value);
    const destino = document.getElementById("destino").value;
  
    const pesosNecesarios = dias * 100;
    const tasa = tasasCambio[destino];
    const moneda = monedas[destino];
    const convertido = (pesosNecesarios * tasa).toFixed(2);
  
    document.getElementById("resultado").innerHTML = `
      Necesitás <strong>${pesosNecesarios}</strong> pesos argentinos para tu viaje a ${destino.charAt(0).toUpperCase() + destino.slice(1)}.<br>
      Esos son, aproximadamente <strong>${convertido} ${moneda}</strong>.
    `;
  });
  