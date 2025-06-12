import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaultShellComponent } from './vault-shell.component';

describe('VaultShellComponent', () => {
  let component: VaultShellComponent;
  let fixture: ComponentFixture<VaultShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VaultShellComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VaultShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
