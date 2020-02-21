"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var HomeScreen_1 = __importDefault(require("./screens/HomeScreen"));
var native_1 = require("@react-navigation/native");
var bottom_tabs_1 = require("@react-navigation/bottom-tabs");
var native_2 = require("styled-components/native");
// import {Theme} from 'fitworld-common'
var Tab = bottom_tabs_1.createBottomTabNavigator();
var App = function () {
    // const { theme } = Theme;
    //
    // const [appTheme, setTheme] = useState(theme.light);
    // const toggleTheme = () => {
    //   if (appTheme === theme.light) {
    //     setTheme(theme.dark)
    //   } else {
    //     setTheme(theme.light)
    //   }
    // };
    return (<>
      <native_1.NavigationContainer>
        <native_2.ThemeProvider theme={{}}>
          <Tab.Navigator initialRouteName="Home">
            <Tab.Screen name="Home" component={HomeScreen_1.default} options={{
        title: 'FitWorld Intro Page',
        tabBarLabel: 'Home',
    }}/>
          </Tab.Navigator>
        </native_2.ThemeProvider>
      </native_1.NavigationContainer>
    </>);
};
exports.default = App;
