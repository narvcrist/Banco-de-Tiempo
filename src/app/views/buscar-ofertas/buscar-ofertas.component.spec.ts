import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarOfertasComponent } from './buscar-ofertas.component';

describe('BuscarOfertasComponent', () => {
  let component: BuscarOfertasComponent;
  let fixture: ComponentFixture<BuscarOfertasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarOfertasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarOfertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
