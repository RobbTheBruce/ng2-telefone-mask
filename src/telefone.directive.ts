import { Directive, ElementRef, HostListener, Renderer } from '@angular/core';

@Directive({
    selector: '[telefoneMask]'
})
export class TelefoneMaskDirective {
    public nativeElement: HTMLInputElement;

    constructor(public element: ElementRef, public render: Renderer) {
        this.nativeElement = this.element.nativeElement;
        this.nativeElement.maxLength = 15;
    }

    @HostListener('keydown', ['$event']) onKeyDown(event) {
        let e = <KeyboardEvent>event;
        if ([46, 8, 9, 27, 13].indexOf(e.keyCode) !== -1) {
            return;
        }
        let ch = (e.key);
        let regEx = new RegExp('^[0-9]*$');
        if (regEx.test(ch))
            return;
        else
            e.preventDefault();

    }

    @HostListener('keyup', ['$event']) onKeyUp(e: Event) {
        let v = this.nativeElement.value;
        v = v.replace(/\D/g, "");
        v = v.replace(/^(\d{2})(\d)/g, "($1) $2");
        v = v.replace(/(\d)(\d{4})$/, "$1-$2");
        this.nativeElement.value = v;
    }

}