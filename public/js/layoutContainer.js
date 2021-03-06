// Generated by CoffeeScript 1.6.1
(function() {

  window.ResizeLayoutContainer = function(params) {
    var cols, eHeight, eWidth, element, height, nHeight, nWidth, parent, parent$, rows, spacing, testHeight, testWidth, videoCount, width;
    params = params ? params : {};
    parent = params.container ? params.container : "#streams_container";
    element = params.element ? params.element : ".OT_video-container";
    parent$ = $(parent);
    parent$.css({
      'padding-top': "0"
    });
    videoCount = parent$.find(element).length;
    width = parent$.innerWidth();
    height = parent$.innerHeight();
    rows = 1;
    cols = Math.ceil(videoCount * 1.0 / rows);
    eWidth = 0;
    eHeight = 0;
    while (true) {
      cols = Math.ceil(videoCount * 1.0 / rows);
      nWidth = width * 1.0 / cols;
      nHeight = (nWidth / 4.0) * 3.0;
      testHeight = height * 1.0 / rows;
      testWidth = height * (4.0 / 3.0);
      if ((nHeight > testHeight && (rows * nHeight) > height) || ((cols * nWidth > width) && (nWidth > testWidth))) {
        nHeight = testHeight;
        nWidth = testWidth;
      }
      if (eWidth !== 0 && nWidth <= eWidth) {
        rows -= 1;
        cols = Math.ceil(videoCount * 1.0 / rows);
        console.log("rows: " + rows + ", cols: " + cols + " eWidth: " + eWidth + ", nWidth: " + nWidth);
        break;
      }
      eWidth = nWidth;
      eHeight = nHeight;
      rows += 1;
    }
    if (eHeight * rows > height) {
      console.log("Height is limiting factor");
      eWidth = Math.floor((1.0 * height / rows) * (4.0 / 3));
    } else {
      eWidth = Math.floor((eHeight * 4.0) / 3.0);
      console.log("resized is: " + eWidth);
    }
    cols = Math.floor(width * 1.0 / eWidth);
    rows = Math.ceil(videoCount * 1.0 / cols);
    spacing = Math.floor((height - (eWidth * 3 / 4.0 * rows)) / 2);
    console.log("rows: " + rows + ", cols: " + cols + " spacing: " + spacing);
    parent$.css({
      'padding-top': spacing
    });
    return parent$.find(element).each(function(k, e) {
      $($(e).parent()).width(eWidth);
      return $($(e).parent()).height(eWidth * 3 / 4);
    });
  };

}).call(this);
