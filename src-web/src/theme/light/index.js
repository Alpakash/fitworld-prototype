// Niet rechtstreeks importeren; maar via een tussen theme doen; zodat theme's kunnen worden geswitched.

import {
  Queries,
  Mutations,
  GridSystem,
  SharedStyling,
  Theme,
  Font,
  Mixins  } from '../../lib/index';


const h1 = Theme.typography.h1.fontFamily = 2;
const Arial = Font.regular = "Arial";