export class Investment { 
    constructor(init:any) {
        this.CryptoCurrency = init.CryptoCurrency,
        this.CountryCurrency = init.CountryCurrency,
        this.LastExchangeRate = init.LastExchangeRate,
        this.OriginalExchangeRate = init.OriginalExchangeRate,
        this.HowManyBought = init.HowManyBought
        this.Id = init.Id;
    }


    public CryptoCurrency:string;
    public CountryCurrency:string;
    public OriginalExchangeRate:number;
    public LastExchangeRate:number;
    public HowManyBought:number;
    public Id: string;
}