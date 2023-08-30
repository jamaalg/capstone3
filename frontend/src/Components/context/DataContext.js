import { createContext, useRef } from 'react';

export const DataContext = createContext({
  events: [{}],
  categories: [String],
  monthNames: [String],
});
