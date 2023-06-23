import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { BookEditPage } from './book-edit.page';

describe('BookEditPage', () => {
  let component: BookEditPage;
  let fixture: ComponentFixture<BookEditPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BookEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
