const UNIDADES = ['zero', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez', 'onze', 'doze', 'treze', 'quatorze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'dezenove'];
const DEZENAS  = ['', 'dez', 'vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta','oitenta', 'noventa'];
const CENTENAS = ['','cento', 'duzentos', 'trezentos', 'quatrocentos', 'quinhentos', 'seiscentos','setecentos', 'oitocentos', 'novecentos'];
const MILHAR   = ['', 'mil'];

const MIN_NUMBER = -99999;
const MAX_NUMBER = 99999;
const REG        = /^-?\d+$/;

function toExtensive(number)
{   
    if ( !REG.test(number) )
    {
        return `O valor ${number} deve conter apenas números`;
    }

    if ( (number < MIN_NUMBER) || (number > MAX_NUMBER) )
    {
        return `O valor deve estar entre ${MIN_NUMBER} à ${MAX_NUMBER}`;
    }

    let negativo = (number < 0) ? 'menos' : '';

    number = Math.abs(number);

    const numberText = number.toString();
    
    let extensive = '';

    switch (numberText.length)
    {
        case 1:
        case 2: extensive = trata2Numeros(numberText); break;
        case 3: extensive = trata3Numeros(numberText); break;
        case 4: extensive = trata4Numeros(numberText); break;
        default:
                extensive = trata5Numeros(numberText); break;
    }
 
    extensive = `${negativo} ${extensive}`;
    extensive = removeConectorEDuplicado(extensive);

    return extensive.trim();
}

function trata2Numeros(numberText)
{
    let number = parseInt(numberText);
    let extensive = '';

    if (number <= 19)
    {
        extensive += `${UNIDADES[parseInt(number)]}`;
    }
    else
    {
        let n1 = numberText.charAt(0); 
        let n2 = numberText.charAt(1);
        
        let und    = `${DEZENAS[n1]}`;
        let dezena = `${UNIDADES[n2]}`;

        if (dezena != '')
        {
            if (dezena != 'zero') 
            {
                dezena = `${dezena}`;
                und    = `${und} e`;
            }
            else
            {
                dezena = '';
            }
        }

        extensive = `${und} ${dezena}`;
    }

    return extensive;
}

function trata3Numeros(numberText)
{
    let extensive = '';

    let n1 = numberText.charAt(0); 
    let n2 = numberText.charAt(1); 
    let n3 = numberText.charAt(2); 

    if ( (n1 > 0 && n1 < 10) && n2 == 0 && n3 == 0)
    {
        extensive = (n1 == 1) ? 'cem' : `${CENTENAS[n1]}`;   
    }
    else
    {
        let centena = `${CENTENAS[n1]}`;
        let dezena  = parseInt(`${n2}${n3}`);
        let und     = UNIDADES[n3];
            
        if (dezena < 20)
        {
            dezena  = UNIDADES[dezena];
            centena = `${centena} e`;
            und     = '';
        }
        else
        {
            dezena  = `${DEZENAS[n2]}`;

            if (und == 'zero') 
            {
                und = '';
            }
            else
            {
                dezena = `${dezena} e`;
            }
            
            centena = `${centena} e`;  
        }
            
        extensive = `${centena} ${dezena} ${und}`;
    }

    return extensive;
}

function trata4Numeros(numberText)
{
    let extensive = '';

    let n1 = numberText.charAt(0);
    let n2 = numberText.charAt(1); 
    let n3 = numberText.charAt(2); 
    let n4 = numberText.charAt(3); 
    
    extensive = (n1 == 1) ? `${MILHAR[n1]} ` : `${UNIDADES[n1]} mil `;
    
    if ( n2 > 0 || n3 > 0 || n4 > 0)
    {
        let casasRestantes = trata3Numeros(n2+n3+n4);
        extensive = `${extensive} e ${casasRestantes}`;
    }
   
    return extensive;
}

function trata5Numeros(numberText)
{
    let extensive = '';

    let n1 = numberText.charAt(0); 
    let n2 = numberText.charAt(1);
    let n3 = numberText.charAt(2); 
    let n4 = numberText.charAt(3); 
    let n5 = numberText.charAt(4); 
    
    extensive = `${trata2Numeros(`${n1}${n2}`)} mil`;

    let casasRestantes = `${trata3Numeros(n3+n4+n5)}`;

    if (casasRestantes != ' zero')
    {
        extensive = `${extensive} e ${casasRestantes}`;
    }

    return extensive;
}

function removeConectorEDuplicado(expressao)
{
    let expressaoSemEDuplicado = expressao.replace(/\s+e\s+e/g, ' e ');
    let expressaoLimpa         = expressaoSemEDuplicado.replace(/\s{2,}/g, ' ');
    return expressaoLimpa;
}

module.exports = (number) => toExtensive(number);