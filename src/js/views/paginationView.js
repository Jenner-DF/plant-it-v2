import View from "./View";

class PaginationView extends View {
  _parentElement = document.querySelector(".pagination");

  _generateMarkup() {
    const currentPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    //page 1 and other page
    //prettier-ignore
    if (currentPage === 1 && numPages > 1) {
      return `
      <button data-goto="${currentPage + 1}" class="btn--inline pagination__btn--next">
        <span>Page ${currentPage + 1}</span>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
        </svg>
      </button>`;
    }
    //last page
    //prettier-ignore

    if (currentPage === numPages && numPages > 1) {
      return `
      <button data-goto="${currentPage - 1}" class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-left"></use>
        </svg>
        <span>Page ${currentPage - 1}</span>
      </button>`;
    }
    //other page
    //prettier-ignore

    if (currentPage < numPages) {
      return ` 
      <button data-goto="${currentPage - 1}" class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-left"></use>
        </svg>
        <span>Page ${currentPage - 1}</span>
      </button>
      <button data-goto="${currentPage + 1}" class="btn--inline pagination__btn--next">
        <span>Page ${currentPage + 1}</span>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
        </svg>
      </button>
    `;
    }
    //page 1 and no other page
    return "";
  }
  addHandlerClick(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".btn--inline");
      if (!btn) return;

      const goToPage = +btn.dataset.goto; //convert to number
      console.log(goToPage);
      handler(goToPage);
    });
  }
}

export default new PaginationView();
