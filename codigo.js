let produto1= 0;
let produto2= 0;
let produto3= 0;
let produto = produto1+produto2+produto3;
let prato='';
let pratoValor=0.00;
let liquido='';
let liquidoValor=0.00;
let doce='';
let doceValor=0.00;


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

    produto1=1;
    prato='Frango Yin Yang';
    pratoValor=14.90;
    if (produto1===1 & produto2===1 & produto3===1){
        const final = document.getElementById('checkout');
        const retirar = document.getElementById('tirar');
        final.classList.remove('escondido');
        retirar.classList.add('escondido');
    }
   

}

function escolherRisoto(){
    carne.classList.add('escondido');
    risoto.classList.remove('escondido');
    frango.classList.add('escondido');
    document.getElementById('frango').classList.remove('food');
    document.getElementById('risoto').classList.add('food');
    document.getElementById('carne').classList.remove('food');
    prato='Risoto Alho poro';
    pratoValor=15.90;
    produto1=1;
    if (produto1===1 & produto2===1 & produto3===1){
        const final = document.getElementById('checkout');
        const retirar = document.getElementById('tirar');
        final.classList.remove('escondido');
        retirar.classList.add('escondido');
    }
    
}

function escolherCarne(){
    frango.classList.add('escondido');
    carne.classList.remove('escondido');
    risoto.classList.add('escondido');
    document.getElementById('frango').classList.remove('food');
    document.getElementById('risoto').classList.remove('food');
    document.getElementById('carne').classList.add('food');
    prato='Strogonoff de carne';
    pratoValor=17.90;
    produto1=1;
    if (produto1===1 & produto2===1 & produto3===1){
        const final = document.getElementById('checkout');
        const retirar = document.getElementById('tirar');
        final.classList.remove('escondido');
        retirar.classList.add('escondido');
    }
    
}


function escolherMatte(){
    matte.classList.remove('escondido');
    guarana.classList.add('escondido');
    coca.classList.add('escondido');
    document.getElementById('matte').classList.add('food');
    document.getElementById('guarana').classList.remove('food');
    document.getElementById('coca').classList.remove('food');
    liquido='Matte';
    liquidoValor=2.90;
    produto2=1;
    if (produto1===1 & produto2===1 & produto3===1){
        const final = document.getElementById('checkout');
        const retirar = document.getElementById('tirar');
        final.classList.remove('escondido');
        retirar.classList.add('escondido');
    }
    

}

function escolherGuarana(){
    matte.classList.add('escondido');
    guarana.classList.remove('escondido');
    coca.classList.add('escondido');
    document.getElementById('matte').classList.remove('food');
    document.getElementById('guarana').classList.add('food');
    document.getElementById('coca').classList.remove('food');
    liquido='Guarana';
    liquidoValor=4.50;
    produto2=1;
    if (produto1===1 & produto2===1 & produto3===1){
        const final = document.getElementById('checkout');
        const retirar = document.getElementById('tirar');
        final.classList.remove('escondido');
        retirar.classList.add('escondido');
    }

}

function escolherCoca(){
    matte.classList.add('escondido');
    guarana.classList.add('escondido');
    coca.classList.remove('escondido');
    document.getElementById('matte').classList.remove('food');
    document.getElementById('guarana').classList.remove('food');
    document.getElementById('coca').classList.add('food');
    liquido='Coca';
    liquidoValor=4.90;
    produto2=1;
    if (produto1===1 & produto2===1 & produto3===1){
        const final = document.getElementById('checkout');
        const retirar = document.getElementById('tirar');
        final.classList.remove('escondido');
        retirar.classList.add('escondido');
    }
    
}

function escolherPudim(){
    pudim.classList.remove('escondido');
    pave.classList.add('escondido');
    petit.classList.add('escondido');
    document.getElementById('pudim').classList.add('food');
    document.getElementById('pave').classList.remove('food');
    document.getElementById('petit').classList.remove('food');
    doce='Pudim';
    doceValor=7.90;
    produto3=1;
    if (produto1===1 & produto2===1 & produto3===1){
        const final = document.getElementById('checkout');
        const retirar = document.getElementById('tirar');
        final.classList.remove('escondido');
        retirar.classList.add('escondido');
    }
    
}

function escolherPave(){
    pudim.classList.add('escondido');
    pave.classList.remove('escondido');
    petit.classList.add('escondido');
    document.getElementById('pudim').classList.remove('food');
    document.getElementById('pave').classList.add('food');
    document.getElementById('petit').classList.remove('food');
    doce='Pave';
    doceValor=8.90;
    produto3=1;
    if (produto1===1 & produto2===1 & produto3===1){
        const final = document.getElementById('checkout');
        const retirar = document.getElementById('tirar');
        final.classList.remove('escondido');
        retirar.classList.add('escondido');
    }
    
}

function escolherPetit(){
    pudim.classList.add('escondido');
    pave.classList.add('escondido');
    petit.classList.remove('escondido');
    document.getElementById('pudim').classList.remove('food');
    document.getElementById('pave').classList.remove('food');
    document.getElementById('petit').classList.add('food');
    doce='Petit Gateau';
    doceValor=10.90;
    produto3=1;
    if (produto1===1 & produto2===1 & produto3===1){
        const final = document.getElementById('checkout');
        const retirar = document.getElementById('tirar');
        final.classList.remove('escondido');
        retirar.classList.add('escondido');
    }
   
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


function zap(){
    let mensagem;
    let total =(doceValor+pratoValor+liquidoValor).toFixed(2) ;
    mensagem = `Olá, gostaria de fazer o pedido:\n- Prato: ${prato}\n- Bebida: ${liquido}\n- Sobremesa: ${doce}\nTotal: ${total}`;
    window.open('https://wa.me/+5521999999999?text=' + encodeURIComponent(mensagem));
}
