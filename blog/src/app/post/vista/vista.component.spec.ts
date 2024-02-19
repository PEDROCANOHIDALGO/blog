import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VistaIndividualComponent } from './vista.component';



describe('VistaComponent', () => {
  let component: VistaIndividualComponent;
  let fixture: ComponentFixture<VistaIndividualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VistaIndividualComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VistaIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
