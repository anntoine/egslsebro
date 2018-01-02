(function (w) {

  function checkAlign(imageElement) {

    var containerHeight = window.getComputedStyle(this).getPropertyValue("height");
    var imageHeight = window.getComputedStyle(imageElement).getPropertyValue("height");

    if (parseInt(imageHeight, 10) > parseInt(containerHeight, 10)) {
      this.classList.add('menu-item--logo-bigger');
    }

  }

  w.Class.TemplateManager.addComponent('menuItem-logo',
    /**
     * Menu item single element
     * @author Alessandro Cipolletti
     * @method menuItemComponent
     * @memberof w.Class.TemplateManager.templateComponents
     */
    function (data) {

      var logoData = data.data.file;
      var imageElement = this.querySelector('.menu-item--logo-image');

      if (!logoData) {
        this.style.display = 'none';
        return;
      }

      if (logoData.url) {
        this.querySelector('.menu-item--logo').href = logoData.url;
      }

      if (logoData.image) {
        imageElement.src = w.Utils.resolveVariable(logoData.image);
      }

      if (w.Main.startupManager.get("reader.configurationVersion") !== 2) {
        this.classList.add("menu-item--logo-legacy");

        if (logoData.scale === false) {
          this.classList.add('menu-item--logo-fit');
        } else {
          this.onTemplateInserted = checkAlign.bind(this, imageElement);
        }

      } else {

        var scale = logoData.scale || "100%";

        if (scale === "fit") {
          this.classList.add('menu-item--logo-fit');
        } else {
          imageElement.style.height = scale;
        }

        if (w.Main.startupManager.has("ui.theme.mode", "v4")) {
          this.classList.add('menu-item--logo-wrapper-v4');
        }

        this.onTemplateInserted = checkAlign.bind(this, imageElement);

      }

      data = w.Main.menuService.get(data.name);
      if (data.onload) {
        data.onload(this);
      }
      if (data.onclick) {
        this.addEventListener(w.Param.eventClick, data.onclick);
      }

    }
  );

})(webpublicationNamespace);
