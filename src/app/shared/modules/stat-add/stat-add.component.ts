import { StateService } from '../../../services/stateService/stateService';
import { Investment } from '../../../services/stateService/model';
import { DictionaryService } from '../../../services/dictionaryService/dictionaries';
import { MessageService } from '../../../services/messageService';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-stat-add',
    templateUrl: './stat-add.component.html',
    styleUrls: ['./stat-add.component.scss'],
    providers: [DictionaryService]
})
export class StatAddComponent implements OnInit {
    @Output() event: EventEmitter<any> = new EventEmitter();

    public Country: Array<string>;
    public Crypto: Array<string>;
    public inv: Investment;


    constructor(private messageService: MessageService,
        private dictionaryService: DictionaryService,
        private stateService: StateService) {

    }

    ngOnInit() {
        this.Country = this.dictionaryService.getCountryCurrencies();
        this.Crypto = this.dictionaryService.getCryptoCurrencies();
        this.inv = new Investment({});
    }


    addNewInvestment() {
        if (this.validateInv()) {
            this.inv.Id = this.stateService.guid();
            this.inv.LastExchangeRate = 0;
            this.messageService.sendMessage('add', this.inv);
            this.clearValues();
        }
    }

    validateInv(): boolean {
        return (this.inv.CryptoCurrency != null &&
            this.inv.CountryCurrency != null &&
            this.inv.HowManyBought != null &&
            this.inv.OriginalExchangeRate != null);
    }

    clearValues() {
        this.inv = new Investment({});
    }

}
