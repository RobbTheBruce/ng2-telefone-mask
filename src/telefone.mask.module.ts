import { NgModule } from "@angular/core";
import { TelefoneDirective } from './telefone.directive';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    providers: [],
    declarations: [TelefoneDirective],
    exports: [TelefoneDirective],
    imports: [
        FormsModule,
        CommonModule
    ]
})
export class TelefoneMaskModule {

}