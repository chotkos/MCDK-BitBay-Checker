export class DictionaryService
{
    getCountryCurrencies():Array<string>{
        return ["PLN", "EUR", "USD"];
    }

    getCryptoCurrencies():Array<string>{
        return ["BTC", "BTG", "LSK", "BCC","GAME", "LTC", "ETH", "DASH" ];
    }

    getCurrenciesToCharts():object{
        var res:object = {};
        res['BTC'] = 'bitcoin';   
        res['BTG'] = 'bitcoingold';  
        res['ETH'] = 'ethereum';  
        res['LSK'] = 'lisk';  
        res['LTC'] = 'litecoin';  
        res['GAME'] = 'game';  
        res['DASH'] = 'dash';  
        res['BCC'] = 'bitcoin-cash';   

        return res;
    }

}