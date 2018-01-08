import { NgModule } from "@angular/core";
import { TelefoneMasks } from './telefone.directive';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    providers: [],
    declarations: [TelefoneMask],
    exports: [TelefoneMask],
    imports: [
        FormsModule,
        CommonModule
    ]
})
export class TelefoneMask {

}