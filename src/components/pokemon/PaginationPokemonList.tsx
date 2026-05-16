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

export default function PokemonPagination({
  currentPage,
  totalPages,
}: Readonly<Props>) {
  const visiblePages = getVisiblePages(currentPage, totalPages);

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={`?page=${currentPage - 1}`}
            aria-disabled={isFirstPage}
            className={isFirstPage ? "pointer-events-none opacity-50" : ""}
          />
        </PaginationItem>

        <PaginationItem>
          <Button
            asChild
            size="icon"
            variant={currentPage === 1 ? "outline" : "ghost"}
          >
            <Link href="?page=1">1</Link>
          </Button>
        </PaginationItem>

        {visiblePages[0] > 2 && (
          <PaginationItem>
            <span className="px-2">…</span>
          </PaginationItem>
        )}

        {visiblePages.map((page) => (
          <PaginationItem key={page}>
            <Button
              asChild
              size="icon"
              variant={page === currentPage ? "outline" : "ghost"}
            >
              <Link href={`?page=${page}`}>{page}</Link>
            </Button>
          </PaginationItem>
        ))}

        {visiblePages.at(-1)! < totalPages - 1 && (
          <PaginationItem>
            <span className="px-2">…</span>
          </PaginationItem>
        )}

        {totalPages > 1 && (
          <PaginationItem>
            <Button
              asChild
              size="icon"
              variant={currentPage === totalPages ? "outline" : "ghost"}
            >
              <Link href={`?page=${totalPages}`}>{totalPages}</Link>
            </Button>
          </PaginationItem>
        )}

        <PaginationItem>
          <PaginationNext
            href={`?page=${currentPage + 1}`}
            aria-disabled={isLastPage}
            className={isLastPage ? "pointer-events-none opacity-50" : ""}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
