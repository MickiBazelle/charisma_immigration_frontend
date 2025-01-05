export const TestimonialPagination = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const getPageNumbers = () => {
    const maxButtons = 10;
    const halfMaxButtons = Math.floor(maxButtons / 2);

    let startPage = Math.max(1, currentPage - halfMaxButtons);
    let endPage = Math.min(totalPages, currentPage + halfMaxButtons);

    if (currentPage <= halfMaxButtons) {
      endPage = Math.min(totalPages, maxButtons);
    }

    if (currentPage > totalPages - halfMaxButtons) {
      startPage = Math.max(1, totalPages - maxButtons + 1);
    }

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  const renderPaginationButtons = () => {
    const pages = getPageNumbers();

    return (
      <>
        {pages[0] > 1 && (
          <>
            <button onClick={() => onPageChange(1)}>1</button>

            {pages[0] > 2 && (
              <span className="mt-2 ml-2" style={{}}>
                ...
              </span>
            )}
          </>
        )}
        {pages.map((page) => (
          <button
            key={page}
            className={`h-10 w-10 mr-0.5${
              page === currentPage ? "active bg-gray-200 rounded-full" : ""
            }`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ))}
        {pages[pages.length - 1] < totalPages && (
          <>
            {pages[pages.length - 1] < totalPages - 1 && (
              <span className="mt-2 mr-2" style={{}}>
                ...
              </span>
            )}
            <button onClick={() => onPageChange(totalPages)}>
              {totalPages}
            </button>
          </>
        )}
      </>
    );
  };

  return <div className="pagination">{renderPaginationButtons()}</div>;
};
