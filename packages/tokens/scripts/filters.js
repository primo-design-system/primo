import StyleDictionary from 'style-dictionary';
import { properties, colorGroups } from './constants.js';

StyleDictionary.registerFilter({
  name: 'primo',
  matcher: ({ attributes }) =>
    attributes.category === properties.COLOR ? attributes.type === colorGroups.PRIMO : true,
});

StyleDictionary.registerFilter({
  name: 'prima',
  matcher: ({ attributes }) =>
    attributes.category === properties.COLOR ? attributes.type === colorGroups.PRIMA : true,
});

StyleDictionary.registerFilter({
  name: 'premier',
  matcher: ({ attributes }) =>
    attributes.category === properties.COLOR ? attributes.type === colorGroups.PREMIER : true,
});
