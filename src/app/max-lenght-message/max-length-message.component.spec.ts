import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxLengthMessageComponent } from './max-length-message.component';

describe('MaxLenghtMessageComponent', () => {
  let component: MaxLengthMessageComponent;
  let fixture: ComponentFixture<MaxLengthMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaxLengthMessageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaxLengthMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
