import { NgModule } from "@angular/core";
import { TelefoneMaskDirective } from './telefone.directive';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    providers: [],
    declarations: [TelefoneMaskDirective],
    exports: [TelefoneMaskDirective],
    imports: [
        FormsModule,
        CommonModule
    ]
})
export class TelefoneMaskModule {

}