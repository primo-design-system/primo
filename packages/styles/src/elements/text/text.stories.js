export default {
  title: 'Elements/Text',
  parameters: { layout: "centered" },
};

export const Abbreviation = () => `<p>You can use <abbr title="Cascading Style Sheets">CSS</abbr> to style your <abbr title="HyperText Markup Language">HTML</abbr>.</p>`;

export const BringAttention = () => `<p>The two most popular science courses offered by the school are <b class="term">chemistry</b> (the study of chemicals and the composition of substances) and <b class="term">physics</b> (the study of the nature and properties of matter and energy).</p>`;

export const BidirectionalIsolate = () => {
  return `
  <h1>World wrestling championships</h1>
  <ul>
     <li><bdi class="name">Evil Steven</bdi>: 1st place</li>
     <li><bdi class="name">François fatale</bdi>: 2nd place</li>
     <li><span class="name">تیز سمی</span>: 3rd place</li>
     <li><bdi class="name">الرجل القوي إيان</bdi>: 4th place</li>
     <li><span class="name" dir="auto">تیز سمی</span>: 5th place</li>
  </ul>  `;
};

export const BidirectionalTextOverride = () => {
  return `
  <h1>Famous seaside songs</h1>
  <p>The English song "Oh I do like to be beside the seaside"</p>
  <p>Looks like this in Hebrew: <span dir="rtl">אה, אני אוהב להיות ליד חוף הים</span></p>
  <p>In the computer's memory, this is stored as <bdo dir="ltr">אה, אני אוהב להיות ליד חוף הים</bdo></p>`;
};

export const Cite = () => {
  return `
  <figure>
    <blockquote>
        <p>It was a bright cold day in April, and the clocks were striking thirteen.</p>
    </blockquote>
    <figcaption>First sentence in <cite><a href="http://www.george-orwell.org/1984/0.html">Nineteen Eighty-Four</a></cite> by George Orwell (Part 1, Chapter 1).</figcaption>
  </figure>`;
};

export const Code = () => `<p>The <code>push()</code> method adds one or more elements to the end of an array and returns the new length of the array.</p>`;

export const Data = () => `<p>The <code>push()</code> method adds one or more elements to the end of an array and returns the new length of the array.</p>`;

export const Definition = () => `<p>A <dfn id="def-validator">validator</dfn> is a program that checks for syntax errors in code or documents.</p>`;

export const Emphasis = () => `<p>Get out of bed <em>now</em>!</p>`;

export const Idiomatic = () => `<p>I looked at it and thought <i>This can't be real!</i></p>`;

export const Keyboard = () => `<p>Please press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd> to re-render an MDN page.</p>`;

export const Mark = () => `<p>Several species of <mark>salamander</mark> inhabit the temperate rainforest of the Pacific Northwest.</p>`;

export const Paragraph = () => {
  return `
  <p>Geckos are a group of usually small, usually nocturnal lizards. They are found on every continent except Australia.</p>
 
  <p>Some species live in houses where they hunt insects attracted by artificial light.</p>
`;
};

export const Preformatted = () => {
  return `
  <pre>
  L          TE
    A       A
      C    V
       R A
       DOU
       LOU
      REUSE
      QUE TU
      PORTES
    ET QUI T'
    ORNE O CI
     VILISÉ
    OTE-  TU VEUX
     LA    BIEN
    SI      RESPI
            RER       - Apollinaire
</pre>
  `;
};

export const Quote = () => `<p>When Dave asks HAL to open the pod bay door, HAL answers: <q cite="https://www.imdb.com/title/tt0062622/quotes/qt0396921">I'm sorry, Dave. I'm afraid I can't do that.</q></p>`;

export const Strikethrough = () => {
  return `
    <p><s>There will be a few tickets available at the box office tonight.</s></p>
    <p>SOLD OUT!</p>
  `;
}

export const SampleOutput = () => {
  return `
    <p>I was trying to boot my computer, but I got this hilarious message:</p>
    <p><samp>Keyboard not found <br>Press F1 to continue</samp></p>
  `;
}

export const Small = () => {
  return `
    <p>MDN Web Docs is a learning platform for Web technologies and the software that powers the Web.</p>
    <hr>
    <p><small>The content is licensed under a Creative Commons Attribution-ShareAlike 2.5 Generic License.</small></p>  
  `;
}

export const Strong = () => `<p>... the most important rule, the rule you can never forget, no matter how much he cries, no matter how much he begs: <strong>never feed him after midnight</strong>.</p>`;

export const Subscript = () => `<p>Almost every developer's favorite molecule is C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>, also known as "caffeine."</p>`;

export const Superscript = () => `<p>The <b>Pythagorean theorem</b> is often expressed as the following equation:</p><p><var>a<sup>2</sup></var> + <var>b<sup>2</sup></var> = <var>c<sup>2</sup></var></p>`;

export const Time = () => {
  return `
    <p>The Cure will be celebrating their 40th anniversary on <time datetime="2018-07-07">July 7</time> in London's Hyde Park.</p>

    <p>The concert starts at <time datetime="20:00">20:00</time> and you'll be able to enjoy the band for at least <time datetime="PT2H30M">2h 30m</time>.</p>
  `;
}

export const Underline = () => `<p>You could use this element to highlight <u>speling</u> mistakes, so the writer can <u>corect</u> them.</p>`;

export const Variable = () => `<p>The volume of a box is <var>l</var> × <var>w</var> × <var>h</var>, where <var>l</var> represents the length, <var>w</var> the width and <var>h</var> the height of the box.</p>`;