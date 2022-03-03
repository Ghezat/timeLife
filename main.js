

function timeLife(){

    let time = new Date()
    let hora = time.getHours();
    let minu = time.getMinutes();
    let seco = time.getSeconds();

    let t = document.querySelectorAll('.time')
    t[0].innerHTML = hora
    t[1].innerHTML = minu
    t[2].innerHTML = seco

}

setInterval(timeLife, 1000);



function capturar(){

    let di = document.getElementById('dia').value;
    let me = document.getElementById('mes').value;
    let ani = document.getElementById('anio').value;


        let dia = parseInt(di)
        let mes = parseInt(me)
        let anio = parseInt(ani)
   

    calculoVida(dia, mes, anio) 


    function calculoVida (dia, mes, anio){


        let MES = 12;
        let mesSign =0;
        let fecha = new Date();
        let diaAct = fecha.getDate();
        let mesAct = fecha.getMonth() + 1;
        let anioAct = fecha.getFullYear();

        let diaDif, mesDif, anioDif = 0;
        
        mesDif = (mesAct) - mes;
        mesSign = Math.sign(mesDif); 
        anioDif = anioAct - anio;
    
        console.log(`fecha de nacimiento ${dia}/${mes}/${anio}`)
  
        let tDias = dia;
        let tMes = (mes * 30);
        let tYear = (anioDif * 365);
        let totalDias = (tDias + tMes + tYear);
        let tDormido = Math.trunc((totalDias / 3));
  
        console.log(`has vivido ${totalDias} dias`);
        document.getElementById('dormido').innerText = `has vivido ${totalDias} dias y has dormido ${tDormido} dias`;


            let datos = document.getElementById('dato')
            datos.innerText = `Nacio el dia ${dia} de mes ${mes} en el año ${anio}`;
            let resultado = document.getElementById('resultado')

        if (mesSign === -1 && dia > diaAct){
            anioDif --
            MES = MES + mesDif
            diaDif = dia - diaAct
            console.log(`Usted tiene ${anioDif} años con ${MES} meses y ${diaDif} dias`)
            resultado.innerText = `Usted tiene ${anioDif} años con ${MES} meses y ${diaDif} dias`;

        } else if (mesSign === -1 && dia < diaAct){
            anioDif --
            MES = MES + mesDif;
            diaDif = diaAct - dia;  
            console.log(`Usted tiene ${anioDif} años con ${MES} meses y ${diaDif} dias`)
            resultado.innerText = `Usted tiene ${anioDif} años con ${MES} meses y ${diaDif} dias`;
        } else if (mesSign === 1 && dia > diaAct){
            mesDif = mesAct - mes;
            diaDif = dia - diaAct;
            console.log(`Usted tiene ${anioDif} años con ${mesDif} meses y ${diaDif} dias`)
            resultado.innerText = `Usted tiene ${anioDif} años con ${MES} meses y ${diaDif} dias`;
        } else if (mesSign === 1 && dia < diaAct){
            mesDif = mesAct - mes;
            diaDif = diaAct - dia ;
            console.log(`Usted tiene ${anioDif} años con ${mesDif} meses y ${diaDif} dias`)  
            resultado.innerText = `Usted tiene ${anioDif} años con ${MES} meses y ${diaDif} dias`;      
        } else if (mesSign === 0 && dia < diaAct) {
            anioDif --
            mesDif = mesAct - mes;
            diaDif = diaAct - dia;
            console.log(`Usted tiene ${anioDif} años con ${mesDif} meses y ${diaDif} dias`) 
            resultado.innerText = `Usted tiene ${anioDif} años con ${MES} meses y ${diaDif} dias`;
        } else if (mesSign === 0 && dia > diaAct) {
            anioDif --
            mesDif = mesAct - mes;
            diaDif = dia - diaAct;
            console.log(`Usted tiene ${anioDif} años con ${mesDif} meses y ${diaDif} dias`)
            resultado.innerText = `Usted tiene ${anioDif} años con ${MES} meses y ${diaDif} dias`;
        } 

       
        
    };

}; 



console.log('validacion de string')


let info ="holaaa"
function validation(caracter =""){
    if (!caracter) {
        console.log("debes introducir el dia de tu nacimiento")
    } else if (caracter.length >2 ){
        console.log("debes introducir maximo dos caracteres")
    } else
    console.log("exito")
}

validation(info);

/*       /* ***claculo dias*** */
/* 
      let tDias = dia;
      let tMes = (mes * 30);
      let tYear = (anio * 365);
      let totalDias = (tDias + tMes + tYear);

      console.log(`has vivido ${totalDias} dias`); */

      /* document.getElementById('dormidos').innerHTML = `has vidio ${totalDias}`; */
      /* ------------ */