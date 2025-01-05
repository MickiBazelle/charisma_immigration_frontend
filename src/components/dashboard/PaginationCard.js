export const PaginationCard = ({ pageSize, totalItems }) => {
  return (
    <div className="mt-4 card-body rounded bg-ebonyClay">
      <div className="flex items-center justify-between">
        <div
          role="status"
          aria-live="polite"
          className="gridjs-summary text-smoke ml-5"
          title="Page 1 of 2"
        >
          Showing <b>1</b> to <b>{pageSize}</b> of <b>{totalItems}</b> results
        </div>
        <div className="float-right mr-5 my-3">
          <div className="flex">
            <button
              tabIndex="0"
              disabled=""
              title="Previous"
              aria-label="Previous"
              className="text-smoke mr-2 h-[40px] bg-mirage rounded-lg hover:bg-ebonyClayHover px-4 x-4 border-[0.2px] border-gray-500"
            >
              Previous
            </button>
            <div className="mx-1"></div>
            <button
              tabIndex="0"
              title="Next"
              aria-label="Next"
              className="text-smoke mr-2 h-[40px] bg-mirage hover:bg-ebonyClayHover rounded-lg px-4 x-4 border-[0.2px] border-gray-500"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
