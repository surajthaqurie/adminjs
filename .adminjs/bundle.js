(function (React$1, designSystem, adminjs) {
  'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React$1);

  // just some regular React component
  var MyInputComponent = function MyInputComponent() {
    return /*#__PURE__*/React__default["default"].createElement("input", null);
  };

  var MyButtonComponent = function MyButtonComponent() {
    return /*#__PURE__*/React__default["default"].createElement(designSystem.Button, {
      bg: "primary60"
    });
  };

  var MyNewAction = function MyNewAction(props) {
    var resource = props.resource,
      action = props.action,
      data = props.data;
    console.log(resource);
    console.log(action);
    console.log(data);
    return /*#__PURE__*/React.createElement(adminjs.Box, null, "Some Action Content");
  };

  // import { ActionProps } from "adminjs";

  var MyCustomAction = function MyCustomAction(props) {
    var record = props.record;
    return /*#__PURE__*/React__default["default"].createElement(designSystem.Box, {
      flex: true
    }, /*#__PURE__*/React__default["default"].createElement(designSystem.Box, {
      variant: "white",
      width: 1 / 2,
      boxShadow: "card",
      mr: "xxl",
      flexShrink: 0
    }, /*#__PURE__*/React__default["default"].createElement(designSystem.H3, null, "Example of a simple page"), /*#__PURE__*/React__default["default"].createElement("p", null, "Where you can put almost everything"), /*#__PURE__*/React__default["default"].createElement("p", null, "like this:"), /*#__PURE__*/React__default["default"].createElement("p", null, /*#__PURE__*/React__default["default"].createElement("img", {
      src: "https://i.redd.it/rd39yuiy9ns21.jpg",
      alt: "stupid cat",
      width: 300
    }))), /*#__PURE__*/React__default["default"].createElement(designSystem.Box, null, /*#__PURE__*/React__default["default"].createElement("p", null, "Or (more likely), operate on a returned record:"), /*#__PURE__*/React__default["default"].createElement(designSystem.Box, {
      overflowX: "auto"
    }, JSON.stringify(record))));
  };

  var RandomPictures = function RandomPictures(props) {
    var url = "https://picsum.photos/200";
    return /*#__PURE__*/React__default["default"].createElement("img", {
      src: url
    });
  };

  var FileUploadComponent = function FileUploadComponent() {
    return /*#__PURE__*/React__default["default"].createElement(designSystem.Box, {
      width: 1
    }, /*#__PURE__*/React__default["default"].createElement(designSystem.Input, {
      type: "file"
    }));
  };

  function _iterableToArrayLimit(arr, i) {
    var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
    if (null != _i) {
      var _s,
        _e,
        _x,
        _r,
        _arr = [],
        _n = !0,
        _d = !1;
      try {
        if (_x = (_i = _i.call(arr)).next, 0 === i) {
          if (Object(_i) !== _i) return;
          _n = !1;
        } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
      } catch (err) {
        _d = !0, _e = err;
      } finally {
        try {
          if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
        } finally {
          if (_d) throw _e;
        }
      }
      return _arr;
    }
  }
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var DashBoardComponent = function DashBoardComponent() {
    var _useState = React$1.useState(false),
      _useState2 = _slicedToArray(_useState, 2);
      _useState2[0];
      _useState2[1];
    return /*#__PURE__*/React__default["default"].createElement(designSystem.Box, {
      variant: "grey",
      width: 1
    }, /*#__PURE__*/React__default["default"].createElement(designSystem.Label, null, "Im new dashboard "), /*#__PURE__*/React__default["default"].createElement(designSystem.Label, null, "Drop splash screen"), /*#__PURE__*/React__default["default"].createElement(designSystem.DropZone, null));
  };

  AdminJS.UserComponents = {};
  AdminJS.UserComponents.MyInput = MyInputComponent;
  AdminJS.UserComponents.MyButton = MyButtonComponent;
  AdminJS.UserComponents.MyNewAction = MyNewAction;
  AdminJS.UserComponents.MyCustomAction = MyCustomAction;
  AdminJS.UserComponents.MyRandomPicture = RandomPictures;
  AdminJS.UserComponents.FileUploadInput = FileUploadComponent;
  AdminJS.UserComponents.Dashboard = DashBoardComponent;

})(React, AdminJSDesignSystem, AdminJS);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyIuLi9jb21wb25lbnRzL215LWlucHV0LmpzeCIsIi4uL2NvbXBvbmVudHMvbXktYnV0dG9uLmpzeCIsIi4uL2NvbXBvbmVudHMvbXktbmV3LWFjdGlvbi5qc3giLCIuLi9jb21wb25lbnRzL215LWN1c3RvbS1hY3Rpb24uanN4IiwiLi4vY29tcG9uZW50cy9teS1yYW5kb20tcGljdHVyZS5qc3giLCIuLi9jb21wb25lbnRzL2ZpbGUtdXBsb2FkLWlucHV0LmpzeCIsIi4uL2NvbXBvbmVudHMvZGFzaGJvYXJkLmpzeCIsIi5lbnRyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbi8vIGp1c3Qgc29tZSByZWd1bGFyIFJlYWN0IGNvbXBvbmVudFxuY29uc3QgTXlJbnB1dENvbXBvbmVudCA9ICgpID0+IDxpbnB1dCAvPjtcblxuZXhwb3J0IGRlZmF1bHQgTXlJbnB1dENvbXBvbmVudDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkBhZG1pbmpzL2Rlc2lnbi1zeXN0ZW1cIjtcclxuXHJcbmNvbnN0IE15QnV0dG9uQ29tcG9uZW50ID0gKCkgPT4gPEJ1dHRvbiBiZz1cInByaW1hcnk2MFwiPjwvQnV0dG9uPjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QnV0dG9uQ29tcG9uZW50O1xyXG4iLCJpbXBvcnQgeyBCb3ggfSBmcm9tIFwiYWRtaW5qc1wiO1xyXG5cclxuY29uc3QgTXlOZXdBY3Rpb24gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IHJlc291cmNlLCBhY3Rpb24sIGRhdGEgfSA9IHByb3BzO1xyXG5cclxuICBjb25zb2xlLmxvZyhyZXNvdXJjZSk7XHJcbiAgY29uc29sZS5sb2coYWN0aW9uKTtcclxuICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgcmV0dXJuIDxCb3g+U29tZSBBY3Rpb24gQ29udGVudDwvQm94PjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15TmV3QWN0aW9uO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJveCwgSDMgfSBmcm9tIFwiQGFkbWluanMvZGVzaWduLXN5c3RlbVwiO1xyXG4vLyBpbXBvcnQgeyBBY3Rpb25Qcm9wcyB9IGZyb20gXCJhZG1pbmpzXCI7XHJcblxyXG5jb25zdCBNeUN1c3RvbUFjdGlvbiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgcmVjb3JkIH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBmbGV4PlxyXG4gICAgICA8Qm94XHJcbiAgICAgICAgdmFyaWFudD1cIndoaXRlXCJcclxuICAgICAgICB3aWR0aD17MSAvIDJ9XHJcbiAgICAgICAgYm94U2hhZG93PVwiY2FyZFwiXHJcbiAgICAgICAgbXI9XCJ4eGxcIlxyXG4gICAgICAgIGZsZXhTaHJpbms9ezB9XHJcbiAgICAgID5cclxuICAgICAgICA8SDM+RXhhbXBsZSBvZiBhIHNpbXBsZSBwYWdlPC9IMz5cclxuICAgICAgICA8cD5XaGVyZSB5b3UgY2FuIHB1dCBhbG1vc3QgZXZlcnl0aGluZzwvcD5cclxuICAgICAgICA8cD5saWtlIHRoaXM6PC9wPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL2kucmVkZC5pdC9yZDM5eXVpeTluczIxLmpwZ1wiXHJcbiAgICAgICAgICAgIGFsdD1cInN0dXBpZCBjYXRcIlxyXG4gICAgICAgICAgICB3aWR0aD17MzAwfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgICA8Qm94PlxyXG4gICAgICAgIDxwPk9yIChtb3JlIGxpa2VseSksIG9wZXJhdGUgb24gYSByZXR1cm5lZCByZWNvcmQ6PC9wPlxyXG4gICAgICAgIDxCb3ggb3ZlcmZsb3dYPVwiYXV0b1wiPntKU09OLnN0cmluZ2lmeShyZWNvcmQpfTwvQm94PlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUN1c3RvbUFjdGlvbjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBpbXBvcnQgeyBTaG93UHJvcGVydHlQcm9wcyB9IGZyb20gXCJhZG1pbmpzXCI7XHJcbmltcG9ydCB7IEJveCB9IGZyb20gXCJAYWRtaW5qcy9kZXNpZ24tc3lzdGVtXCI7XHJcblxyXG5jb25zdCBSYW5kb21QaWN0dXJlcyA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHVybCA9IFwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zLzIwMFwiO1xyXG5cclxuICByZXR1cm4gPGltZyBzcmM9e3VybH0gLz47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSYW5kb21QaWN0dXJlcztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCb3gsIElucHV0IH0gZnJvbSBcIkBhZG1pbmpzL2Rlc2lnbi1zeXN0ZW1cIjtcclxuXHJcbmNvbnN0IEZpbGVVcGxvYWRDb21wb25lbnQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggd2lkdGg9ezF9PlxyXG4gICAgICA8SW5wdXQgdHlwZT1cImZpbGVcIiAvPlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpbGVVcGxvYWRDb21wb25lbnQ7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIEJveCxcclxuICBSaWNoVGV4dEVkaXRvcixcclxuICBJY29uLFxyXG4gIEJ1dHRvbixcclxuICBJbnB1dCxcclxuICBEcmF3ZXIsXHJcbiAgSGVhZGVyLFxyXG4gIERyYXdlckNvbnRlbnQsXHJcbiAgTGFiZWwsXHJcbiAgRHJvcFpvbmUsXHJcbn0gZnJvbSBcIkBhZG1pbmpzL2Rlc2lnbi1zeXN0ZW1cIjtcclxuXHJcbmV4cG9ydCBjb25zdCBEYXNoQm9hcmRDb21wb25lbnQgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2lzRHJhd2VyVmlzaWJsZSwgc2V0SXNEcmF3ZXJWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveCB2YXJpYW50PVwiZ3JleVwiIHdpZHRoPXsxfT5cclxuICAgICAgPExhYmVsPkltIG5ldyBkYXNoYm9hcmQgPC9MYWJlbD5cclxuICAgICAgPExhYmVsPkRyb3Agc3BsYXNoIHNjcmVlbjwvTGFiZWw+XHJcbiAgICAgIDxEcm9wWm9uZSAvPlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhc2hCb2FyZENvbXBvbmVudDtcclxuIiwiQWRtaW5KUy5Vc2VyQ29tcG9uZW50cyA9IHt9XG5pbXBvcnQgTXlJbnB1dCBmcm9tICcuLi9jb21wb25lbnRzL215LWlucHV0J1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5NeUlucHV0ID0gTXlJbnB1dFxuaW1wb3J0IE15QnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvbXktYnV0dG9uJ1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5NeUJ1dHRvbiA9IE15QnV0dG9uXG5pbXBvcnQgTXlOZXdBY3Rpb24gZnJvbSAnLi4vY29tcG9uZW50cy9teS1uZXctYWN0aW9uJ1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5NeU5ld0FjdGlvbiA9IE15TmV3QWN0aW9uXG5pbXBvcnQgTXlDdXN0b21BY3Rpb24gZnJvbSAnLi4vY29tcG9uZW50cy9teS1jdXN0b20tYWN0aW9uJ1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5NeUN1c3RvbUFjdGlvbiA9IE15Q3VzdG9tQWN0aW9uXG5pbXBvcnQgTXlSYW5kb21QaWN0dXJlIGZyb20gJy4uL2NvbXBvbmVudHMvbXktcmFuZG9tLXBpY3R1cmUnXG5BZG1pbkpTLlVzZXJDb21wb25lbnRzLk15UmFuZG9tUGljdHVyZSA9IE15UmFuZG9tUGljdHVyZVxuaW1wb3J0IEZpbGVVcGxvYWRJbnB1dCBmcm9tICcuLi9jb21wb25lbnRzL2ZpbGUtdXBsb2FkLWlucHV0J1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5GaWxlVXBsb2FkSW5wdXQgPSBGaWxlVXBsb2FkSW5wdXRcbmltcG9ydCBEYXNoYm9hcmQgZnJvbSAnLi4vY29tcG9uZW50cy9kYXNoYm9hcmQnXG5BZG1pbkpTLlVzZXJDb21wb25lbnRzLkRhc2hib2FyZCA9IERhc2hib2FyZCJdLCJuYW1lcyI6WyJNeUlucHV0Q29tcG9uZW50IiwiUmVhY3QiLCJNeUJ1dHRvbkNvbXBvbmVudCIsIkJ1dHRvbiIsIk15TmV3QWN0aW9uIiwicHJvcHMiLCJyZXNvdXJjZSIsImFjdGlvbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiQm94IiwiTXlDdXN0b21BY3Rpb24iLCJyZWNvcmQiLCJIMyIsIkpTT04iLCJzdHJpbmdpZnkiLCJSYW5kb21QaWN0dXJlcyIsInVybCIsIkZpbGVVcGxvYWRDb21wb25lbnQiLCJJbnB1dCIsIkRhc2hCb2FyZENvbXBvbmVudCIsInVzZVN0YXRlIiwiTGFiZWwiLCJEcm9wWm9uZSIsIkFkbWluSlMiLCJVc2VyQ29tcG9uZW50cyIsIk15SW5wdXQiLCJNeUJ1dHRvbiIsIk15UmFuZG9tUGljdHVyZSIsIkZpbGVVcGxvYWRJbnB1dCIsIkRhc2hib2FyZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztFQUVBO0VBQ0EsSUFBTUEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFnQixHQUFBO0VBQUEsRUFBQSxvQkFBU0MseUJBQVMsQ0FBQSxhQUFBLENBQUEsT0FBQSxFQUFBLElBQUEsQ0FBQSxDQUFBO0VBQUEsQ0FBQTs7RUNBeEMsSUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFpQixHQUFBO0VBQUEsRUFBQSxvQkFBU0Qsd0NBQUNFLG1CQUFNLEVBQUE7RUFBQyxJQUFBLEVBQUUsRUFBQyxXQUFBO0tBQXFC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
