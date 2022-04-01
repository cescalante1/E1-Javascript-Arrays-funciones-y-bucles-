const pizza = ["harina", "sal", "azucar", "aceite", "agua", "levadura", "salsa", "queso", "jamon","oregano"];




function funcionpizza(pizza){

    let pares = [];
    let impares = [];

    for (let i=0; i < pizza.length; i++){


        if (pizza[i].length % 2 == 0){

            pares.push(pizza[i]);
            
        }
        else{

            impares.push(pizza[i]);
            
        }
    }

    console.log("Los ingredientes pares son " + pares);
    console.log("Los ingredientes impares son " + impares);


}

funcionpizza(pizza);