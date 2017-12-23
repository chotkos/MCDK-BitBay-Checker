import { MessageService } from '../../../services/messageService';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as $ from 'jquery'; 
import { DictionaryService } from '../../../services/dictionaryService/dictionaries';
/*import { ELECTRON_SCHEMA } from 'electron-schema';*/

@Component({
    selector: 'app-stat',
    templateUrl: './stat.component.html',
    styleUrls: ['./stat.component.scss'],
    providers: [DictionaryService]
})
export class StatComponent implements OnInit {
    @Input() bgClass: string;
    @Input() icon: string;
    @Input() count: number;
    @Input() label: string;
    @Input() data: any;
    @Input() ratio: any;
    @Output() event: EventEmitter<any> = new EventEmitter();

    public dict:object;

    constructor(private messageService: MessageService, dictionaryService:DictionaryService) {
        this.dict = dictionaryService.getCurrenciesToCharts();
    }

    ngOnInit() {
        /*
                let el = '<webview preload="../preload.js" id="foo" src="https://bitbay.net/pl/kurs-walut/kurs-'+this.data.CryptoCurrency.toLowerCase()+'-'+this.data.CountryCurrency.toLowerCase()+'" style="display:inline-flex; width:640px; height:480px"></webview>';
        
                $('#chart-place').replaceWith(el);
        */
        /*
        setInterval(function () {
            debugger;
            const webview: any = document.querySelector('#foo');
            webview.loadURL('https://bitbay.net/pl/kurs-walut/kurs-' + this.data.CryptoCurrency.toLowerCase() + '-' + this.data.CountryCurrency.toLowerCase());

        }, 1000);*/
        /*
        setTimeout(function(){
            var arr  = document.getElementsByTagName('webview');
            for(var i=0;i<arr.length;i++){
                (arr[i] as any).reloadIgnoringCache();
            }
        },1000)*/


        $('#'+this.data.CryptoCurrency+'-'+this.data.CountryCurrency+' > webview').attr('id','wv-'+this.data.CryptoCurrency+'-'+this.data.CountryCurrency);
    }


    removeInvestment(event: any) {
        this.messageService.sendMessage('remove', event);
    }
}
