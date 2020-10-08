import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationeffectComponent } from './animationeffect.component';

describe('AnimationeffectComponent', () => {
  let component: AnimationeffectComponent;
  let fixture: ComponentFixture<AnimationeffectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimationeffectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationeffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
