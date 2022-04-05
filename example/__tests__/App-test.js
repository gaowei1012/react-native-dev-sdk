"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
/**
 * @format
 */
require("react-native");
var App_1 = __importDefault(require("../App"));
// Note: test renderer must be required after react-native.
var react_test_renderer_1 = __importDefault(require("react-test-renderer"));
it('renders correctly', function () {
    react_test_renderer_1.default.create((0, jsx_runtime_1.jsx)(App_1.default, {}, void 0));
});
