export class DictionaryService
{
    getCountryCurrencies():Array<string>{
        return ["PLN", "EUR", "USD"];
    }

    getCryptoCurrencies():Array<string>{
        return ["BTC", "BTG", "LSK", "BCC","GAME", "LTC", "ETH", "DASH" ];
    }

}