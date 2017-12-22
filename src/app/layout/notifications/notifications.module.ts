import { MessageService } from '../../services/messageService';
import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { NotificationsRoutingModule } from './notifications-routing.module';
import { NotificationsComponent } from './notifications.component';
import {
    CryptoSettingsComponent
} from './components';
import { StatModule, StatAddModule } from '../../shared';
import { AppState,  StateService } from "../../services/stateService/stateService"; 


@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        NotificationsRoutingModule,
        StatModule,
        StatAddModule
    ],
    declarations: [
        NotificationsComponent,
        CryptoSettingsComponent
    ],
    providers:[ StateService, MessageService ]
})
export class NotificationsModule { 


    constructor() {
    } 



}
