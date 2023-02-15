import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteBuildingComponent } from './delete-building.component';

describe('DeleteBuildingComponent', () => {
  let component: DeleteBuildingComponent;
  let fixture: ComponentFixture<DeleteBuildingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteBuildingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteBuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
