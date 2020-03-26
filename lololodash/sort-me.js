var _ = require("lodash");

var worker = function(item) {
  item.forEach(element => {
    const pop = element.population;

    let size;

    switch (pop) {
      case pop > 1:
        size = "big";
        break;
      case pop > 0.5:
        size = "medium";
				break;
			default:
				size = 'small';
    }

    return { ...element, size };
  });
};

module.exports = worker;
