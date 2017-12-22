import { BitbayService } from '../../services/bitbayService/bitbayService';
import { MessageService } from '../../services/messageService';
import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

import { AppState, StateService } from "../../services/stateService/stateService";
import { Subscription } from "rxjs/Rx";
import { HttpClient } from "@angular/common/http";
@Component({
    selector: 'app-notifications',
    templateUrl: './notifications.component.html',
    styleUrls: ['./notifications.component.scss'],
    animations: [routerTransition()],
    providers: [StateService, BitbayService, HttpClient]
})
export class NotificationsComponent implements OnInit {


    constructor() {
    }


    ngOnInit() {

    }


}
