(function (w) {

  w.Class.TemplateManager.addComponent('menuItemAside',
    /**
     * Menu item single element
     * @author Alessandro Cipolletti
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

    }
  );

})(webpublicationNamespace);
