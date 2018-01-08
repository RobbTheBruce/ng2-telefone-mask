import { NgModule } from "@angular/core";
import { TelefoneMasks } from './telefone.directive';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    providers: [],
    declarations: [TelefoneMasks],
    exports: [TelefoneMasks],
    imports: [
        FormsModule,
        CommonModule
    ]
})
export class TelefoneMask {

}