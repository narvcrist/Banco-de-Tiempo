import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicarOfertasComponent } from './publicar-ofertas.component';

describe('PublicarOfertasComponent', () => {
  let component: PublicarOfertasComponent;
  let fixture: ComponentFixture<PublicarOfertasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicarOfertasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicarOfertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
