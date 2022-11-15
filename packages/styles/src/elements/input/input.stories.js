import inputDefault from './input.html';
import inputButtonHtml from './input-button.html';
import inputCheckboxHtml from './input-checkbox.html';
import inputColorHtml from './input-color.html';
import inputDateHtml from './input-date.html';
import inputDateLocalTimeHtml from './input-date-localtime.html';
import inputEmailHtml from './input-email.html';
import inputFileHtml from './input-file.html';
import inputMonthHtml from './input-month.html';
import inputNumberHtml from './input-number.html';
import inputPasswordHtml from './input-password.html';
import inputRadioHtml from './input-radio.html';
import inputRangeHtml from './input-range.html';
import inputResetHtml from './input-reset.html';
import inputSearchHtml from './input-search.html';
import inputSubmitHtml from './input-submit.html';
import inputTelephoneHtml from './input-telephone.html';
import inputTimeHtml from './input-time.html';
import inputURLHtml from './input-url.html';
import inputWeekHtml from './input-week.html';

export default {
  title: 'Elements/Input',
  parameters: { layout: 'centered' },
};

export const Text = () => inputDefault;
export const Button = () => inputButtonHtml;
export const Checkbox = () => inputCheckboxHtml;
export const Color = () => inputColorHtml;
export const Date = () => inputDateHtml;
export const DateLocalTime = () => inputDateLocalTimeHtml;
export const Email = () => inputEmailHtml;
export const File = () => inputFileHtml;
export const Month = () => inputMonthHtml;
export const Number = () => inputNumberHtml;
export const Password = () => inputPasswordHtml;
export const Radio = () => inputRadioHtml;
export const Range = () => inputRangeHtml;
export const Reset = () => inputResetHtml;
export const Search = () => inputSearchHtml;
export const Submit = () => inputSubmitHtml;
export const Telephone = () => inputTelephoneHtml;
export const Time = () => inputTimeHtml;
export const URL = () => inputURLHtml;
export const Week = () => inputWeekHtml;
