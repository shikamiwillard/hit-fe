import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TechiesComponent } from './techies.component';
import { Apollo } from 'apollo-angular';

describe('TechiesComponent', () => {
  let component: TechiesComponent;
  let fixture: ComponentFixture<TechiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ Apollo ],
      declarations: [ TechiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
