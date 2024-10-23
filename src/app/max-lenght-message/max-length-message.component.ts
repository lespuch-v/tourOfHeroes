import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-max-length-message',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './max-length-message.component.html',
  styleUrl: './max-length-message.component.css'
})
export class MaxLengthMessageComponent {

  @Input() currentHeroNameLength!: number;
  @Input() maxCharacterLimit!: number;
}
