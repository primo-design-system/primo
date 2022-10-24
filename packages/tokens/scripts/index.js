import StyleDictionary from 'style-dictionary';
import configs from './configs.js';
import './filters.js';
import './formats.js';
import './transforms.js';

configs.forEach((config) => StyleDictionary.extend(config).buildAllPlatforms());
