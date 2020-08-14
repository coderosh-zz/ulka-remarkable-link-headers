const slugify = require("slugify");

const defaultOptions = {
  hLevels: [1, 2, 3, 4, 5, 6],
  setAnchor: false,
  classNamePrefix: "ulka-header",
  anchorValue: "#",
};

module.exports = {
  remarkablePlugin: (options = {}) => {
    options = {
      ...defaultOptions,
      ...options,
    };

    return {
      plugin: (remarkable) => {
        remarkable.renderer.rules.heading_open = function (tokens, idx) {
          const hLevel = tokens[idx].hLevel;
          const className = options.classNamePrefix + hLevel;
          const id = slugify(tokens[idx + 1].content);
          const anchor = options.setAnchor
            ? `<a id="${id}-anchor" href="#${id}">${options.anchorValue}</a>`
            : "";

          return `<h${hLevel} class="${className}" id="${id}">${options.prefixHeader}>${anchor}`;
        };
      },
    };
  },
};
