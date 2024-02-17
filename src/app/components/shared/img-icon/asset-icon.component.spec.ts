import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetIconComponent } from './asset-icon.component';

describe('ImgIconComponent', () => {
  let component: AssetIconComponent;
  let fixture: ComponentFixture<AssetIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssetIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssetIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
