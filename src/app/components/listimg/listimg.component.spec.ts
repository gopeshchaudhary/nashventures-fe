import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListimgComponent } from './listimg.component';

describe('ListimgComponent', () => {
  let component: ListimgComponent;
  let fixture: ComponentFixture<ListimgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListimgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
