"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var HomeScreen = function (_a) {
    var navigation = _a.navigation;
    return (<>
            <react_native_1.StatusBar backgroundColor="orange"/>
            <react_native_1.SafeAreaView>
                <react_native_1.ScrollView contentInsetAdjustmentBehavior="automatic">
                    <react_native_1.View>
                        <react_native_1.Text>Hello world</react_native_1.Text>
                    </react_native_1.View>
                </react_native_1.ScrollView>
            </react_native_1.SafeAreaView>
        </>);
};
exports.default = HomeScreen;
