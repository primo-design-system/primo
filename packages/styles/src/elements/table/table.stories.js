import tableDefault from './table.html';
import tableCaptionHtml from './table-caption.html';
import tableColgroupHtml from './table-colgroup.html';

export default {
  title: 'Elements/Table',
  parameters: { layout: 'centered' },
};

export const table = () => tableDefault;
export const Caption = () => tableCaptionHtml;
export const Colgroup = () => tableColgroupHtml;
