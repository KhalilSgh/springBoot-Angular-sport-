import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordCupEventComponent } from './word-cup-event.component';

describe('WordCupEventComponent', () => {
  let component: WordCupEventComponent;
  let fixture: ComponentFixture<WordCupEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordCupEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordCupEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
