import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InlineEditComponent } from './inlineEdit.component';


describe('InlineEditComponent', () => {
  let component: InlineEditComponent;
  let fixture: ComponentFixture<InlineEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InlineEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InlineEditComponent);
    component = fixture.componentInstance;
    component.data = "data";
    component.textContent = "text";
    component.editMode = false;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not render input at first',() =>{
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('input').length).toEqual(0);
  });

  it('should be editable after click',() =>{
    let div = fixture.debugElement.nativeElement.querySelector(".cell");
    div.click();
    fixture.detectChanges();
    let compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('input').length).not.toEqual(0);
  });
});
