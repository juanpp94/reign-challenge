import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavNewComponent } from './fav-new.component';

describe('FavNewComponent', () => {
  let component: FavNewComponent;
  let fixture: ComponentFixture<FavNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
