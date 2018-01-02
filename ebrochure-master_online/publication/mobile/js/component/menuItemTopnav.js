(function (w) {

  w.Class.TemplateManager.addComponent('menuItemTopnav',
    /**
     * Menu item single element
     * @author Alessandro Cipolletti, Bruno Sabot
     * @method menuItemComponent
     * @memberof w.Class.TemplateManager.templateComponents
     */
    function (data) {

      data = w.Main.menuService.get(data.name);
      if (data.onload) {
        data.onload(this);
      }
      if (data.onclick) {
        this.addEventListener(w.Param.eventClick, data.onclick);
      }

      this.onTemplateInserted = function () {

        if (w.Param.isDesktop && this.hasAttribute("data-tooltip") === true) {
          w.Main.tooltipManager.register(this);
        }

      }.bind(this);

    }
  );

})(webpublicationNamespace);
