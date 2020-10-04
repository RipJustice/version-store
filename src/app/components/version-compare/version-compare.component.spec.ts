import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersionCompareComponent } from './version-compare.component';

describe('VersionCompareComponent', () => {
  let component: VersionCompareComponent;
  let fixture: ComponentFixture<VersionCompareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VersionCompareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VersionCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
