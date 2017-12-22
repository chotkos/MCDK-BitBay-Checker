import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoSettingsComponent } from './crypto-settings.component';

describe('CryptoSettingsComponent', () => {
  let component: CryptoSettingsComponent;
  let fixture: ComponentFixture<CryptoSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CryptoSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
