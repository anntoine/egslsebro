(function (w) {

  function getPages() {

    return NIApi.page.getVisiblePages().then(function (pages) {

      if (pages.length === 0) {

        return Promise.resolve({
          pages: '',
          isOffset: true
        });

      }

      var offsetPages = pages.map(function (page) {
        return w.Utils.byOffsetIndex(page);
      });

      return Promise.resolve({
        pages: offsetPages.join(' - '),
        isOffset: w.Utils.isOffsetIndex(pages[pages.length - 1])
      });

    });

  }

  function updateControlPage() {

    getPages().then(function (data) {

      this.pageControlCurrent.innerHTML = data.pages;
      if (data.isOffset) {
        this.pageControlOffsetHidden.style.display = 'none';
      } else {
        this.pageControlOffsetHidden.style.display = '';
      }

    }.bind(this));

  }

  w.Class.TemplateManager.addComponent('menuItem-page_control',
    /**
     * Page control on the menu
     * @author Bruno Sabot
     * @method menuItemComponent
     * @memberof w.Class.TemplateManager.templateComponents
     */
    function (data) {

      this.pageControl = this;
      this.pageControlCurrent = this.querySelector('[data-section="current"]');
      this.pageControlTotal = this.querySelector('[data-section="total"]');
      this.pageControlChanger = this.querySelector('[data-section="changer"]');
      this.pageControlClose = this.querySelector('[data-section="close"]');
      this.pageControlField = this.querySelector('[data-section="field"]');
      this.pageControlOffsetHidden = this.querySelector('[data-section="offset-hidden"]');

      this.pageControlOffsetHidden.style.display = 'none';

      // Put into body for z-index priority
      document.body.appendChild(this.pageControlChanger);
      if (w.Param.newThemeVersion) {
        this.classList.add('webpub--v4');
      }

      // Display the page changer
      this.addEventListener('click', function () {
        this.pageControlChanger.classList.add('webpub--active');
        this.pageControlField.focus();
      });

      // Hide the page changer
      this.pageControlChanger.addEventListener('click', function (e) {

        if (e.target === this) {
          this.classList.remove('webpub--active');
        }

      });

      // Close
      this.pageControlClose.addEventListener('click', function (e) {
        this.pageControlChanger.classList.remove('webpub--active');
      }.bind(this));

      // Counter change
      this.pageControlField.addEventListener('keyup', function () {

        var value = parseInt(this.value, 10);

        if (isNaN(value)) {

          if (this.value !== "") {
            this.value = this.value.replace(/[^0-9]+/g, "");
          }

          return;

        }

        var offset = parseInt(w.Main.xmlManager.get("common-configuration", "config", "shift"), 10) || 0;
        var offsetPage = (value + offset);
        var maxPage = w.Utils.byOffsetIndex(w.Utils.prodTools.getPageLength());

        if (value > maxPage) {

          this.value = maxPage;
          offsetPage = (maxPage + offset);

        } else {
          this.value = value;
        }

        NIApi.page.open(offsetPage);

      });

      // Listen page change
      updateControlPage.apply(this);

      NIApi.page.getCount()
        .then(function (pageCount) {
          this.pageControlTotal.innerHTML = w.Utils.byOffsetIndex(pageCount);
        }.bind(this));

      NIApi.event.onPageChange(updateControlPage.bind(this));

      window.addEventListener(w.Param.eventResize, function () {
        window.setTimeout(updateControlPage.bind(this), 16);
      }.bind(this));

    }
  );

})(webpublicationNamespace);
