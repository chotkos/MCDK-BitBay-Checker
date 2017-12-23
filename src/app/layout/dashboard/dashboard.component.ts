import { BitbayService } from '../../services/bitbayService/bitbayService';
import { MessageService } from '../../services/messageService';
import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

import { AppState, StateService } from "../../services/stateService/stateService";
import { Subscription } from "rxjs/Rx";
import { HttpClient } from "@angular/common/http";
import { forEach } from '@angular/router/src/utils/collection';
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()],
    providers: [StateService, BitbayService, HttpClient]
})
export class DashboardComponent implements OnInit {

    subscription: Subscription;
    ratios: object;

    public state: AppState;

    constructor(private stateService: StateService,
        private messageService: MessageService,
        private bitbayService: BitbayService) {
        this.ratios = [];

        this.subscription = this.messageService
            .getMessage()
            .subscribe(event => {
                if (event.key == 'remove') {
                    this.state.Investments = this.state.Investments.filter(item => item.Id != event.data);
                    this.stateService.saveState(this.state);
                } else if (event.key == 'add') {
                    this.state.Investments.push(event.data);
                    this.stateService.saveState(this.state);
                }
            });

        this.state = stateService.getState();
    }


    getPairs(): Array<any> {
        var pairs = [];

        this.state.Investments.forEach(element => {
            if (pairs[element.CryptoCurrency + element.CountryCurrency]) {
                pairs[element.CryptoCurrency + element.CountryCurrency].push(element.Id);
            } else {
                pairs[element.CryptoCurrency + element.CountryCurrency] = [element.Id];
            }
        });

        return pairs;
    }

    ngOnInit() {

        var timer = 60000 / Object.keys(this.getPairs()).length;

        this.refreshData();
        setInterval(() => this.refreshData(), 60000);

    }

    refreshData() {
        var pairs = this.getPairs();
        this.bitbayService.getData(pairs);
        this.ratios = this.bitbayService.ratios;
        console.log(this.ratios);
    }

    handleStatEvent() { }

}
