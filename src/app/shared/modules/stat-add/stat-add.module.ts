import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatAddComponent } from './stat-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule,FormsModule, ReactiveFormsModule ],
    declarations: [StatAddComponent],
    exports: [StatAddComponent]
})
export class StatAddModule {}
