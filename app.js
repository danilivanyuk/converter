UISelectors = {
    convert_from_list: '#currency-from',
    conver_to_list: '#currency-to',
    input: '#input-currency',
    result: '.result'
}

const converter = new Converter();

const convert = function(){
    input_value = document.querySelector(UISelectors.input).value;
    let currency_from = document.querySelector(UISelectors.convert_from_list).value;
    let currency_to = document.querySelector(UISelectors.conver_to_list).value;
    
    let result = document.querySelector(UISelectors.result);
    // GET CURRENCY
    converter.getWeather(currency_from, currency_to)
    .then(data => {
        for (value in data){
            result.innerText = parseInt(data[value] * input_value) + ` ${currency_to}`;
        }
    })
    .catch(err => console.log(err));
}

document.querySelector(UISelectors.input).addEventListener('keyup', convert);

