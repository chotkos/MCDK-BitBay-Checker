import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatComponent } from './stat.component';
/*import { ELECTRON_SCHEMA } from 'electron-schema';*/
import { WebviewDirective } from "../../webview/webview";



@NgModule({
    imports: [CommonModule],
    declarations: [StatComponent, WebviewDirective],
    exports: [StatComponent],
    /*schemas: [ELECTRON_SCHEMA]*/
})
export class StatModule {}
