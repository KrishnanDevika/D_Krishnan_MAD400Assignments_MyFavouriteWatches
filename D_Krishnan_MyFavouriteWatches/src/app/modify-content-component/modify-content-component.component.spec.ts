import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyContentComponentComponent } from './modify-content-component.component';

describe('ModifyContentComponentComponent', () => {
  let component: ModifyContentComponentComponent;
  let fixture: ComponentFixture<ModifyContentComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyContentComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyContentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
