# Implementation Plan: product-multi-filter-sidebar

## Overview

Build a React + Vite single-page app with a sticky filter sidebar (category, price, rating) and a reactive product grid. All filtering/sorting is pure in-memory logic via `filterEngine`. Tests use Vitest + React Testing Library for unit/integration and fast-check for property-based tests.

## Tasks

- [x] 1. Scaffold Vite + React + TypeScript project and install dependencies
  - Run `npm create vite@latest . -- --template react-ts` (or equivalent)
  - Install test deps: `npm install -D vitest @vitest/ui jsdom @testing-library/react @testing-library/user-event @testing-library/jest-dom fast-check`
  - Add `vitest.config.ts` with jsdom environment and `@testing-library/jest-dom` setup file
  - _Requirements: all (foundational setup)_

- [x] 2. Define data models, mock dataset, and filterEngine
  - [x] 2.1 Create `src/data/products.ts` with `Product` interface, `PRODUCTS` array (25 items), `DEFAULT_FILTERS`, and `DEFAULT_SORT`
    - Include `ActiveFilters`, `SortOrder` types as defined in design
    - _Requirements: 3.1, 4.4_

  - [x] 2.2 Create `src/lib/filterEngine.ts` implementing the pure `filterEngine` function
    - Category filter (empty array = inactive), price filter, rating filter (null = inactive), then sort
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 4.1, 4.2, 4.3, 4.4, 7.3, 7.4, 7.5, 7.6_

  - [x]* 2.3 Write property tests for filterEngine (Properties 1–5, 7–8)
    - **Property 1: Category filter correctness** — Validates: Requirements 3.2, 4.1
    - **Property 2: Price filter correctness** — Validates: Requirements 3.3, 4.2
    - **Property 3: Rating filter correctness** — Validates: Requirements 3.4, 4.3
    - **Property 4: Combinatorial AND correctness** — Validates: Requirements 3.1, 3.5
    - **Property 5: Default filters identity** — Validates: Requirements 4.4
    - **Property 7: Price-ascending sort order** — Validates: Requirements 7.3, 7.5, 7.6
    - **Property 8: Rating-descending sort order** — Validates: Requirements 7.4, 7.5, 7.6
    - Tag each test: `// Feature: product-multi-filter-sidebar, Property N: <text>`
    - File: `src/lib/filterEngine.test.ts`

- [ ] 3. Checkpoint — Run `npx vitest --run` and ensure filterEngine tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [-] 4. Build leaf UI components
  - [x] 4.1 Create `src/components/ProductCard.tsx`
    - Render image with `onError` fallback, name, `$XX.XX` price, filled/empty unicode stars from `Math.round(rating)`
    - _Requirements: 6.1, 6.2_

  - [ ] 4.2 Create `src/components/ProductGrid.tsx`
    - CSS Grid with `repeat(auto-fill, minmax(220px, 1fr))`, render one `ProductCard` per product
    - _Requirements: 6.1, 6.2, 6.3_

  - [x]* 4.3 Write property test for ProductGrid (Property 6)
    - **Property 6: Card rendering completeness** — Validates: Requirements 6.1, 6.2
    - Generate random subarray of PRODUCTS (length 1–25); assert card count equals array length and each card contains name, price string, star character
    - File: `src/components/ProductGrid.test.tsx`

  - [ ] 4.4 Create `src/components/EmptyState.tsx`
    - Render "No products match your filters." message and "Reset filters" button calling `onReset`
    - _Requirements: 5.1, 5.2, 5.3_

  - [x]* 4.5 Write unit tests for EmptyState and ProductCard
    - Assert EmptyState renders message text and "Reset filters" button
    - Assert ProductCard renders image, name, price, and star character
    - File: `src/components/EmptyState.test.tsx`

  - [ ] 4.6 Create `src/components/SortDropdown.tsx`
    - `<select>` with options: `default` ("Sort by"), `price-asc` ("Price: Low to High"), `rating-desc` ("Top Rated First")
    - _Requirements: 7.1, 7.2_

  - [x]* 4.7 Write unit test for SortDropdown
    - Assert "Price: Low to High" and "Top Rated First" options exist in the DOM
    - File: `src/components/SortDropdown.test.tsx`

- [-] 5. Build filter sidebar components
  - [ ] 5.1 Create `src/components/CategoryChecklist.tsx`
    - Render one checkbox per category (Electronics, Apparel, Footwear); toggle adds/removes from selected array
    - _Requirements: 1.2, 1.3, 2.1, 2.4_

  - [ ] 5.2 Create `src/components/RatingSelector.tsx`
    - Five radio buttons labeled "⭐ 1+", …, "⭐⭐⭐⭐⭐ 5"; clicking active selection sets value to null
    - _Requirements: 1.2, 1.5, 2.3_

  - [ ] 5.3 Create `src/components/PriceRangeSlider.tsx`
    - Two overlapping `<input type="range">` elements; clamp so min never exceeds max on change
    - Fires `onChange` on every `input` event
    - _Requirements: 1.2, 1.4, 2.2_

  - [ ] 5.4 Create `src/components/FilterSidebar.tsx`
    - Compose CategoryChecklist, PriceRangeSlider, RatingSelector in that DOM order
    - Apply `position: sticky; top: 0` via inline style or CSS class
    - _Requirements: 1.1, 1.2_

  - [x]* 5.5 Write unit tests for FilterSidebar and filter controls
    - Render FilterSidebar: assert all three control sections appear in DOM order
    - Render CategoryChecklist: assert Electronics, Apparel, Footwear checkboxes are present
    - Render RatingSelector: assert 5 radio inputs with values 1–5 are present
    - File: `src/components/FilterSidebar.test.tsx`

- [ ] 6. Checkpoint — Run `npx vitest --run` and ensure all component tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 7. Wire everything together in App and add integration tests
  - [x] 7.1 Implement `src/App.tsx`
    - Hold `filters: ActiveFilters` and `sortOrder: SortOrder` in `useState` with defaults
    - Call `filterEngine(PRODUCTS, filters, sortOrder)` inline during render to derive `visibleProducts`
    - Render `FilterSidebar` (left, sticky) + product section (right) with `SortDropdown` at top-right
    - Show `ProductGrid` when `visibleProducts.length > 0`, otherwise `EmptyState`
    - Implement `resetFilters()` restoring `DEFAULT_FILTERS` and `DEFAULT_SORT`
    - _Requirements: 1.1, 2.1, 2.2, 2.3, 2.4, 4.4, 5.1, 5.4, 7.1, 7.6_

  - [x]* 7.2 Write integration tests for App
    - Render App, select a category checkbox, assert only matching product names are shown
    - Render App, apply filters that produce zero results, assert EmptyState is displayed
    - Click "Reset filters" in EmptyState, assert full 25-product grid is restored
    - File: `src/App.test.tsx`

- [ ] 8. Final checkpoint — Run `npx vitest --run` and ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for a faster build under the 1-hour deadline
- Each task references specific requirements for traceability
- `filterEngine` is implemented and tested before any UI — this catches logic bugs early
- Property tests run 100 iterations each via fast-check; they cover the 8 correctness properties defined in design.md
- The dual-handle price slider uses two overlapping `<input type="range">` elements — no external slider library needed
