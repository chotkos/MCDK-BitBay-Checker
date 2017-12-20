import { MessageService } from '../../../services/messageService';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-stat',
    templateUrl: './stat.component.html',
    styleUrls: ['./stat.component.scss'] 
})
export class StatComponent implements OnInit {
    @Input() bgClass: string;
    @Input() icon: string;
    @Input() count: number;
    @Input() label: string;
    @Input() data: any;    
    @Input() ratio: any;
    @Output() event: EventEmitter<any> = new EventEmitter();

    constructor(private messageService: MessageService) {
        
    }

    ngOnInit() {}

    
    removeInvestment(event:any){
        this.messageService.sendMessage('remove', event);
    }
}
