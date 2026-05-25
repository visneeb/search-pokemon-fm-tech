import Link from "next/link";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination";

import { Button } from "@/components/ui/button";

import { getVisiblePages } from "@/lib/pagination";

type Props = {
  currentPage: number;
  totalPages: number;
};

// Pagination component for Pokémon list
export default function PokemonPagination({
  currentPage,
  totalPages,
}: Readonly<Props>) {

  // Generate visible page numbers
  const visiblePages = getVisiblePages(
    currentPage,
    totalPages,
  );

  // Check page boundaries
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return (
    <Pagination>
      <PaginationContent>

        {/* Previous page button */}
        <PaginationItem>
          <PaginationPrevious
            href={`?page=${currentPage - 1}`}

            // Disable on first page
            aria-disabled={isFirstPage}
            className={
              isFirstPage
                ? "pointer-events-none opacity-50"
                : ""
            }
          />
        </PaginationItem>

        {/* First page button */}
        <PaginationItem>
          <Button
            asChild
            size="icon"

            // Highlight active page
            variant={
              currentPage === 1
                ? "outline"
                : "ghost"
            }
          >
            <Link href="?page=1">1</Link>
          </Button>
        </PaginationItem>

        {/* Left ellipsis */}
        {visiblePages[0] > 2 && (
          <PaginationItem>
            <span className="px-2">…</span>
          </PaginationItem>
        )}

        {/* Visible page numbers */}
        {visiblePages.map((page) => (
          <PaginationItem key={page}>
            <Button
              asChild
              size="icon"

              // Highlight current page
              variant={
                page === currentPage
                  ? "outline"
                  : "ghost"
              }
            >
              <Link href={`?page=${page}`}>
                {page}
              </Link>
            </Button>
          </PaginationItem>
        ))}

        {/* Right ellipsis */}
        {visiblePages.at(-1)! < totalPages - 1 && (
          <PaginationItem>
            <span className="px-2">…</span>
          </PaginationItem>
        )}

        {/* Last page button */}
        {totalPages > 1 && (
          <PaginationItem>
            <Button
              asChild
              size="icon"

              // Highlight last page if active
              variant={
                currentPage === totalPages
                  ? "outline"
                  : "ghost"
              }
            >
              <Link href={`?page=${totalPages}`}>
                {totalPages}
              </Link>
            </Button>
          </PaginationItem>
        )}

        {/* Next page button */}
        <PaginationItem>
          <PaginationNext
            href={`?page=${currentPage + 1}`}

            // Disable on last page
            aria-disabled={isLastPage}
            className={
              isLastPage
                ? "pointer-events-none opacity-50"
                : ""
            }
          />
        </PaginationItem>

      </PaginationContent>
    </Pagination>
  );
}