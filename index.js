const slugify = require("slugify");

const defaultOptions = {
  hLevels: [1, 2, 3, 4, 5, 6],
  setAnchor: false,
  anchorValue: "#",
  headingClassName: (hLevel) => `ulka-heading-${hLevel}`,
  anchorClassName: (hLevel) => `ulka-heading-anchors-${hLevel}`,
  slugifyOptions = {}
};

module.exports = {
  remarkablePlugin: (options = {}) => {
    options = {
      ...defaultOptions,
      ...options,
    };

    return {
      plugin: (remarkable) => {
        const heading_open = remarkable.renderer.rules.heading_open;

        remarkable.renderer.rules.heading_open = function (tokens, idx) {
          const hLevel = tokens[idx].hLevel;

          if (!options.hLevels.includes(hLevel))
            return heading_open(tokens, idx);

          let headingClassName = "";
          let anchorClassName = "";

          if (typeof options.headingClassName === "function") {
            headingClassName = options.headingClassName(hLevel);
          } else if (typeof options.headingClassName === "string") {
            headingClassName = options.headingClassName;
          }

          if (typeof options.anchorClassName === "function") {
            anchorClassName = options.anchorClassName(hLevel);
          } else if (typeof options.anchorClassName === "string") {
            anchorClassName = options.anchorClassName;
          }

          const headerId = slugify(tokens[idx + 1].content, { lower: true, ...options.slugifyOptions });

          const anchor = options.setAnchor
            ? `<a id="${headerId}-anchor" class="${anchorClassName}" href="#${headerId}">${options.anchorValue}</a>`
            : "";

          return `<h${hLevel} class="${headingClassName}" id="${headerId}">${anchor} `;
        };
      },
    };
  },
};
