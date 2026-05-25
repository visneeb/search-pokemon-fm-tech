// Pagination settings
export const PAGE_SIZE = 10;
export const MAX_VISIBLE_PAGES = 5;

// Generate visible page numbers for pagination UI
export function getVisiblePages(
  currentPage: number,
  totalPages: number,
) {

  // Show all pages if total pages are small
  if (totalPages <= MAX_VISIBLE_PAGES) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // Near the beginning → show starting pages
  if (currentPage <= 3) {
    return [2, 3, 4, 5];
  }

  // Near the end → show ending pages
  if (currentPage >= totalPages - 2) {
    return Array.from({ length: 4 }, (_, i) => totalPages - 4 + i);
  }

  // Middle pages → center around current page
  return Array.from({ length: 5 }, (_, i) => currentPage - 2 + i);
}