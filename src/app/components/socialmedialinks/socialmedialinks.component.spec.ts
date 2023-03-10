import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialmedialinksComponent } from './socialmedialinks.component';

describe('SocialmedialinksComponent', () => {
  let component: SocialmedialinksComponent;
  let fixture: ComponentFixture<SocialmedialinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialmedialinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialmedialinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
