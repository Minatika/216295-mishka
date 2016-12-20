var container = document.querySelector("[id=map]");

ymaps.ready(function ()  {
  var myMap = new ymaps.Map(container, {
    center: [59.936731, 30.321691],
    zoom: 16,
    controls: ["zoomControl"]
  });
  myMap.behaviors.disable("scrollZoom");
  myMap.controls.add("zoomControl", {});

  var myPlacemark = new ymaps.Placemark([59.936289, 30.321606] , {},
    {
      iconLayout: "default#image",
      iconImageHref: "img/icon-map-pin.svg",
      iconImageSize: [67, 100],
      iconImageOffset: [-33, -100] });

    myMap.geoObjects.add(myPlacemark);
});
