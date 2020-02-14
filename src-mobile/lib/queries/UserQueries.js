var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import gql from "graphql-tag";
export default {
    getUser: gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    query {\n      allFilms {\n        id\n        director\n        title\n      }\n    }\n  "], ["\n    query {\n      allFilms {\n        id\n        director\n        title\n      }\n    }\n  "])))
};
var templateObject_1;
//# sourceMappingURL=UserQueries.js.map