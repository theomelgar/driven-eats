let produto = 0;
let total=0;
let prato=0;
let liquido=0;
let doce=0;
const carne = document.getElementById('carne').querySelector('.escondido');
const frango = document.getElementById('frango').querySelector('.escondido');
const risoto = document.getElementById('risoto').querySelector('.escondido');
const matte = document.getElementById('matte').querySelector('.escondido');
const guarana = document.getElementById('guarana').querySelector('.escondido');
const coca = document.getElementById('coca').querySelector('.escondido');
const pudim = document.getElementById('pudim').querySelector('.escondido');
const pave = document.getElementById('pave').querySelector('.escondido');
const petit = document.getElementById('petit').querySelector('.escondido');

function escolherFrango(){
    frango.classList.remove('escondido');
    carne.classList.add('escondido');
    risoto.classList.add('escondido');
    document.getElementById('frango').classList.add('food');
    document.getElementById('risoto').classList.remove('food');
    document.getElementById('carne').classList.remove('food');

    produto=produto+1;
    if (produto===3){
        const final = document.getElementById('checkout');
        const retirar = document.getElementById('tirar');
        final.classList.remove('escondido');
        retirar.classList.add('escondido');
    }
    return produto;

}

function escolherRisoto(){
    carne.classList.add('escondido');
    risoto.classList.remove('escondido');
    frango.classList.add('escondido');
    document.getElementById('frango').classList.remove('food');
    document.getElementById('risoto').classList.add('food');
    document.getElementById('carne').classList.remove('food');
    
    produto=produto+1;
    if (produto===3){
        const final = document.getElementById('checkout');
        const retirar = document.getElementById('tirar');
        final.classList.remove('escondido');
        retirar.classList.add('escondido');
    }
    return produto;
}

function escolherCarne(){
    frango.classList.add('escondido');
    carne.classList.remove('escondido');
    risoto.classList.add('escondido');
    document.getElementById('frango').classList.remove('food');
    document.getElementById('risoto').classList.remove('food');
    document.getElementById('carne').classList.add('food');
    
    produto=produto+1;
    if (produto===3){
        const final = document.getElementById('checkout');
        const retirar = document.getElementById('tirar');
        final.classList.remove('escondido');
        retirar.classList.add('escondido');
    }
    return produto;
}


function escolherMatte(){
    matte.classList.remove('escondido');
    guarana.classList.add('escondido');
    coca.classList.add('escondido');
    document.getElementById('matte').classList.add('food');
    document.getElementById('guarana').classList.remove('food');
    document.getElementById('coca').classList.remove('food');
    
    produto=produto+1;
    if (produto===3){
        const final = document.getElementById('checkout');
        const retirar = document.getElementById('tirar');
        final.classList.remove('escondido');
        retirar.classList.add('escondido');
    }
    return produto;

}

function escolherGuarana(){
    matte.classList.add('escondido');
    guarana.classList.remove('escondido');
    coca.classList.add('escondido');
    document.getElementById('matte').classList.remove('food');
    document.getElementById('guarana').classList.add('food');
    document.getElementById('coca').classList.remove('food');
    
    produto=produto+1;
    if (produto===3){
        const final = document.getElementById('checkout');
        const retirar = document.getElementById('tirar');
        final.classList.remove('escondido');
        retirar.classList.add('escondido');
    }
    return produto;
}

function escolherCoca(){
    matte.classList.add('escondido');
    guarana.classList.add('escondido');
    coca.classList.remove('escondido');
    document.getElementById('matte').classList.remove('food');
    document.getElementById('guarana').classList.remove('food');
    document.getElementById('coca').classList.add('food');
    
    produto=produto+1;
    if (produto===3){
        const final = document.getElementById('checkout');
        const retirar = document.getElementById('tirar');
        final.classList.remove('escondido');
        retirar.classList.add('escondido');
    }
    return produto;
}

function escolherPudim(){
    pudim.classList.remove('escondido');
    pave.classList.add('escondido');
    petit.classList.add('escondido');
    document.getElementById('pudim').classList.add('food');
    document.getElementById('pave').classList.remove('food');
    document.getElementById('petit').classList.remove('food');
    
    produto=produto+1;
    if (produto===3){
        const final = document.getElementById('checkout');
        const retirar = document.getElementById('tirar');
        final.classList.remove('escondido');
        retirar.classList.add('escondido');
    }
    return produto;
}

function escolherPave(){
    pudim.classList.add('escondido');
    pave.classList.remove('escondido');
    petit.classList.add('escondido');
    document.getElementById('pudim').classList.remove('food');
    document.getElementById('pave').classList.add('food');
    document.getElementById('petit').classList.remove('food');
    
    produto=produto+1;
    if (produto===3){
        const final = document.getElementById('checkout');
        const retirar = document.getElementById('tirar');
        final.classList.remove('escondido');
        retirar.classList.add('escondido');
    }
    return produto;
}

function escolherPetit(){
    pudim.classList.add('escondido');
    pave.classList.add('escondido');
    petit.classList.remove('escondido');
    document.getElementById('pudim').classList.remove('food');
    document.getElementById('pave').classList.remove('food');
    document.getElementById('petit').classList.add('food');
    
    produto=produto+1;
    if (produto===3){
        const final = document.getElementById('checkout');
        const retirar = document.getElementById('tirar');
        final.classList.remove('escondido');
        retirar.classList.add('escondido');
    }
    return produto;
}


/*function c(comi){
    const comida = document.querySelector('.food');
    if (comida !== null){
        comida.classList.remove('food');
        produto=produto-1;
    }
    comi.classList.add('food');
    produto=produto+1;
    return produto;
}

function d(bebi){
    const bebida = document.querySelector('.drink');
    if (bebida !== null){
        bebida.classList.remove('drink');
        produto=produto-1;
    }
    bebi.classList.add('drink');
    produto=produto+1;
    return produto;
}

function s(sobre){
    
    const sobremesa = document.querySelector('.dessert');
    
    if (sobremesa !== null){
        sobremesa.classList.remove('dessert');   
        produto=produto-1;
    }
    
    sobre.classList.add('dessert');
    produto=produto+1;
    return produto;
}*/

if (produto===3){
    const final = document.getElementById('checkout');
    const retirar = document.getElementById('tirar');
    final.classList.remove('escondido');
    retirar.classList.add('escondido');
}