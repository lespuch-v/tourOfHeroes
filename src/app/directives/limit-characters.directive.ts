import { Directive, HostListener, input, Input, numberAttribute } from '@angular/core';

@Directive({
  selector: '[appLimitCharacters]',
  standalone: true
})
export class LimitCharactersDirective {
  @Input({transform: numberAttribute, alias: 'appLimitCharacters'}) maxLength: number = 0;

  @HostListener('input', ['$event'])
  onInput(event: InputEvent): void {
    const myInput = event.target as HTMLInputElement;
    if (myInput.value.length > this.maxLength) {
      myInput.value = myInput.value.slice(0, this.maxLength);
    }
  }

}
