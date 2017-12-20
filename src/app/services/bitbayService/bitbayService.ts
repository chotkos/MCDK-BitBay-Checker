import * as $ from 'jquery';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()
export class BitbayService {

    ratios: Object;
    /**
     *
     */
    constructor(private http: HttpClient) {
        this.ratios = [];
    }


    getLastValue(pair) {
        /*return $.ajax({
            url: 'https://bitbay.net/API/Public/' + pair + '/ticker.json',
            success: function (data) {
                return data;
            }
        });*/

        //return this.http.get<any>('https://bitbay.net/API/Public/' + pair + '/ticker.json');
        return this.http.get<any>('https://bitbay.net/API/Public/' + pair + '/ticker.json');
    }

    getData(pairs: any): any {
        console.log(pairs);
        //var results = [];
        var timeout = 61000 / Object.keys(pairs).length;
        let self = this;
        Object.keys(pairs).forEach(key => {
            let element = pairs[key];
            //setTimeout(() => {

            this.http.get<any>('https://bitbay.net/API/Public/' + key + '/ticker.json').subscribe(data => {
                self.ratios[key] = data; 
            })

            /*this.getLastValue(key).subscribe(data => {
                self.ratios[key] = data;
            });
            */

            /*
            this.getLastValue(key).done((data)=> {
                this.ratios[key] = data;
            });*/
            //}, timeout);
        });
    }






}