import { TestBed } from '@angular/core/testing';

import { MusicCategoryService } from './music-category.service';

describe('MusicCategoryService', () => {
  let service: MusicCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusicCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
