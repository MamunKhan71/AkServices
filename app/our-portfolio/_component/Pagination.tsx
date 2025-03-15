import { ChevronLeft, ChevronRight } from "lucide-react"

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  data?: Array<{
    imageUrl: string
    category: string
    title: string
  }>
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const renderPageNumbers = () => {
    const pageNumbers = []

    // Previous button
    pageNumbers.push(
      <li key="prev" className="inline-block">
        <button
          onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="flex items-center px-3 py-2 text-base text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Previous
        </button>
      </li>,
    )

    // First 3 pages
    for (let i = 1; i <= Math.min(3, totalPages); i++) {
      pageNumbers.push(
        <li key={i} className="inline-block">
          <button
            onClick={() => onPageChange(i)}
            className={`px-4 py-2.5 mx-1 text-base font-medium rounded-none ${
              currentPage === i
                ? "bg-black text-white"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
            }`}
          >
            {i}
          </button>
        </li>,
      )
    }

    // Ellipsis if there are more than 5 pages
    if (totalPages > 5) {
      pageNumbers.push(
        <li key="ellipsis" className="inline-block px-3 py-2 mx-1 text-base text-gray-500">
          ...
        </li>,
      )
    }

    // Last 2 pages if there are more than 3 pages
    if (totalPages > 3) {
      for (let i = Math.max(totalPages - 1, 4); i <= totalPages; i++) {
        pageNumbers.push(
          <li key={i} className="inline-block">
            <button
              onClick={() => onPageChange(i)}
              className={`px-3 py-2 mx-1 text-base font-medium rounded-none ${
                currentPage === i
                  ? "bg-black text-white"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
              }`}
            >
              {i}
            </button>
          </li>,
        )
      }
    }

    // Next button
    pageNumbers.push(
      <li key="next" className="inline-block">
        <button
          onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="flex items-center px-3 py-2 text-base text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
          <ChevronRight className="w-4 h-4 ml-1" />
        </button>
      </li>,
    )

    return pageNumbers
  }

  return (
    <nav aria-label="Pagination" className="flex justify-center mt-8">
      <ul className="flex items-center space-x-1">{renderPageNumbers()}</ul>
    </nav>
  )
}

