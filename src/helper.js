export const validarPresupuesto = presupuesto => {
    let totalPresupuesto = parseInt(presupuesto, 10) || 0;
    if(totalPresupuesto > 0){
        return totalPresupuesto;
    }else{
        return false;
    }
}

export const revisarPresupuesto = (presupuesto, restante) => {
    let clase;
    if((presupuesto / 4) > restante){
        clase = "alert -danger"
    }else if((presupuesto / 2) > restante){
        clase = "alert-warning"
    }else {
        clase = "alert-succes"
    }return clase; 
    
}