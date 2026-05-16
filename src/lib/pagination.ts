export const PAGE_SIZE = 10;
export const MAX_VISIBLE_PAGES = 5;

export function getVisiblePages(
  currentPage: number,
  totalPages: number,
) {
  if (totalPages <= MAX_VISIBLE_PAGES) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  if (currentPage <= 3) {
    return [2, 3, 4, 5];
  }

  if (currentPage >= totalPages - 2) {
    return Array.from({ length: 4 }, (_, i) => totalPages - 4 + i);
  }

  return Array.from({ length: 5 }, (_, i) => currentPage - 2 + i);
}