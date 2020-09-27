
class Converter{
    async getWeather(currency_from, currency_to){
        // api_key = '98b76f8e9cecd0333575';
        const response = await fetch(`https://free.currconv.com/api/v7/convert?q=${currency_from}_${currency_to}&compact=ultra&apiKey=98b76f8e9cecd0333575`);
        
        const responseData = await response.json(); 

        return responseData;
    }
}