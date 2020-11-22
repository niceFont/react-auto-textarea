var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import * as React from 'react';
var AutoTextArea = function (_a) {
    var children = _a.children, value = _a.value, onChange = _a.onChange, props = __rest(_a, ["children", "value", "onChange"]);
    var getRows = function (text) { return (text ? text.split('\n').length : 1); };
    var areaRef = React.useRef(null);
    var _b = React.useState(getRows(value)), rows = _b[0], setRows = _b[1];
    var handleChange = React.useCallback(function (e) {
        setRows(getRows(e.target.value));
        onChange === null || onChange === void 0 ? void 0 : onChange.call(null, e);
    }, []);
    return (React.createElement("textarea", __assign({ onChange: handleChange, rows: rows, ref: areaRef, value: value }, props), children));
};
export default AutoTextArea;
//# sourceMappingURL=AutoTextarea.js.map