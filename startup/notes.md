# Notes

## GitHub

- create repositories for verion control
- steps for normal use
  1. pull from GitHub using `git pull` or 'Sync Changes' in VSCode
  1. create/edit a file on VSCode
  1. stage changes using `git add` or '+'
  1. commit to Git using `git commit` or 'Commit' in VSCode
  1. push to GitHub using `git push` or 'Sync Changes' in VSCode

## Markdown

- file type to quickly edit text
- has many features, reference in [this article](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
- for test notes:
  - links are `[LINK TEXT](LINK)`
  - unordered lists use '-', '*' or '+'
  - paragraphs need a newline between them
  - use '\#' to reference issues and pull requests (haven't figured out yet)
  - emojis are `:EMOJICODE:`
  - quotes are `>`
  - quote or code blocks are enclosed by
  
  \```

  TEXT
  
  \```
  
  - in-line code is \`CODE\`

## Questions

- Levels of questioning
  - Yourself
  - The Oracle (Stack overflow, AI, etc.)
  - Peers (builds collaboration)
  - TAs
  - Instructors
- Think critically about the answers (an answer may not be a good answer)

## Overview for Specification

- HTML
  - Structure
  - what is what
- CSS
  - Style
  - Make it look pretty
- Javascript
  - Functionality
  - Interaction
  - What I used in AP CS
- Service
  - Web service endpoints
- Database/Login
  - Authentication: returns a token that allows the user to use the program without logging in constantly
  - Database: stores these credentials
    - Mongo
- WebSocket
  - Data pushed from server, chat
  - "Initiate send from server to client" (notifications)
  - also peer-to-peer (chat)
    - both send to server, server sends back
- React
  - web framework
  - rework everything to work with React

## History

- Internet started as war communication technology
- WWW started as a communication for research papers with hyperlinks
  - Tim Berners-Lee
- CSS was created by Hakon Wium Lie to make sure the internet would allow for creativity in presentation
- JavaScript made to make the web interactive by Brendan Eich
  - called "Java"Script purely for marketing - Java was really big
- web browsers --> web servers --> cloud services

## EC2 Notes

-**E**lastic **C**ompute

The server on AWS is up and running. Named darbidixon-260startup-base. 

**IP Address (Elastic):** 3.234.33.64

**Command to Access SSH:**  `ssh -i ~/Desktop/Classes/Winter-24-Classes/CS-260/production.pem ubuntu@3.234.33.64`

**Command to Access Caaddyfile (from SSH):** `vi Caddyfile`

**Command to update Caddyfile after changes:** `sudo service caddy restart`

**Subdomains:** startup.inspireus.click, simon.inspireus.click

- Technology Stack
  - Pieces that work together to make the code
  - Us:
    - REACT: frontend, HTML
    - Caddy 2: route requests
    - node JS: JavaScript interpreter in the server (uses Google's open source interpreter that they use in their browsers
    - mongo DB: database
  - Services deliver functionality
    - Startup.name and simon.name are both services
  - Servers are the computer that runs it
- DNS
  - **D**omain **N**ame **S**ystem
  - connect IP addresses with domain names
    
## Console

- AKA: command line, shell, terminal
  
### Commands

- **pwd**: present working directory
- **echo** - Output the parameters of the command
- **cd** - Change directory
- **mkdir** - Make directory
- **rmdir** - Remove directory
- **rm** - Remove file(s)
- **mv** - Move file(s)
- **cp** - Copy files
- **ls** - List files
- **curl** - Command line client URL browser
- **grep** - Regular expression search
- **find** - Find files
- **top** - View running processes with CPU and memory usage
- **df** - View disk statistics
- **cat** - Output the contents of a file
- **less** - Interactively output the contents of a file
- **wc** - Count the words in a file
- **ps** - View the currently running processes
- **kill** - Kill a currently running process
- **sudo** - Execute a command as a super user (admin)
- **ssh** - Create a secure shell on a remote computer
- **scp** - Securely copy files to a remote computer
- **history** - Show the history of commands
- **ping** - Check if a website is up
- **tracert** - Trace the connections to a website
- **dig** - Show the DNS information for a domain
- **man** - Look up a command in the manual

You can also chain the input and output of commands using special characters

- `|` - Take the output from the command on the left and _pipe_, or pass, it to the command on the right
- `>` - Redirect output to a file. Overwrites the file if it exists
- `>>` - Redirect output to a file. Appends if the file exists

There are also keystrokes that have special meaning in the console.

- `CTRL-R` - Use type ahead to find previous commands
- `CTRL-C` - Kill the currently running command

## HTML

- **Comments:** `<!-- Comment text -->`
- The "base" HTML file for most websites is named `index.html`. Thus, google.com will bring you to google.com/index.html
- @ top of document:
```
<meta
  name="viewport"
content="width=device-width, initial-scale=1"
/>
```

### Common Elements

| element   | meaning                                                                |
| --------- | ---------------------------------------------------------------------- |
| `html`    | The page container                                                     |
| `head`    | Header information                                                     |
| `title`   | Title of the page                                                      |
| `meta`    | Metadata for the page such as character set or viewport settings       |
| `script`  | JavaScript reference. Either a external reference, or inline           |
| `include` | External content reference                                             |
| `body`    | The entire content body of the page                                    |
| `header`  | Header of the main content                                             |
| `footer`  | Footer of the main content                                             |
| `nav`     | Navigational inputs                                                    |
| `main`    | Main content of the page                                               |
| `section` | A section of the main content                                          |
| `aside`   | Aside content from the main content                                    |
| `div`     | A block division of content                                            |
| `span`    | An inline span of content                                              |
| `h<1-9>`  | Text heading. From h1, the highest level, down to h9, the lowest level |
| `p`       | A paragraph of text                                                    |
| `b`       | Bring attention                                                        |
| `table`   | Table                                                                  |
| `tr`      | Table row                                                              |
| `th`      | Table header                                                           |
| `td`      | Table data                                                             |
| `ol,ul`   | Ordered or unordered list                                              |
| `li`      | List item                                                              |
| `a`       | Anchor the text to a hyperlink                                         |
| `img`     | Graphical image reference                                              |
| `dialog`  | Interactive component such as a confirmation                           |
| `form`    | A collection of user input                                             |
| `input`   | User input field                                                       |
| `audio`   | Audio content                                                          |
| `video`   | Video content                                                          |
| `svg`     | Scalable vector graphic content                                        |
| `iframe`  | Inline frame of another HTML page                                      |

### Special Characters

| Character | Entity      |
| --------- | ----------- |
| &amp;     | `&amp;`     |
| <         | `&lt;`      |
| >         | `&gt;`      |
| "         | `&quot;`    |
| '         | `&apos;`    |
| &#128512; | `&#128512;` |

### Input Elements

| Element    | Meaning                          | Example                                        |
| ---------- | -------------------------------- | ---------------------------------------------- |
| `form`     | Input container and submission   | `<form action="form.html" method="post">`      |
| `fieldset` | Labeled input grouping           | `<fieldset> ... </fieldset>`                   |
| `input`    | Multiple types of user input     | `<input type="" />`                            |
| `select`   | Selection dropdown               | `<select><option>1</option></select>`          |
| `optgroup` | Grouped selection dropdown       | `<optgroup><option>1</option></optgroup>`      |
| `option`   | Selection option                 | `<option selected>option2</option>`            |
| `textarea` | Multiline text input             | `<textarea></textarea>`                        |
| `label`    | Individual input label           | `<label for="range">Range: </label>`           |
| `output`   | Output of input                  | `<output for="range">0</output>`               |
| `meter`    | Display value with a known range | `<meter min="0" max="100" value="50"></meter>` |

### Input `Type` Attribute

| Type           | Meaning                           |
| -------------- | --------------------------------- |
| text           | Single line textual value         |
| password       | Obscured password                 |
| email          | Email address                     |
| tel            | Telephone number                  |
| url            | URL address                       |
| number         | Numerical value                   |
| checkbox       | Inclusive selection               |
| radio          | Exclusive selection               |
| range          | Range limited number              |
| date           | Year, month, day                  |
| datetime-local | Date and time                     |
| month          | Year, month                       |
| week           | Week of year                      |
| color          | Color                             |
| file           | Local file                        |
| submit         | button to trigger form submission |

### Common Input Attributes


| Attribute | Meaning                                                                             |
| --------- | ----------------------------------------------------------------------------------- |
| name      | The name of the input. This is submitted as the name of the input if used in a form |
| disabled  | Disables the ability for the user to interact with the input                        |
| value     | The initial value of the input                                                      |
| required  | Signifies that a value is required in order to be valid                             |

### Deploy Files

`./deployFiles.sh -k <yourpemkey> -h <yourdomain> -s simon`

## CSS

- Style (Cascading Style Sheet)
- in html
  - block `<style>` `</style>` tags
    - can have styles in it
  - inline with `style=color:red`
    - or link to a css file
      - `<link rel="stylesheet" href="<filename>.css"/>`
- ex.
    ```
    p {
      color: violet;
    }
    ````
- Selectors
  - Elements (a, p, body, etc.)
  - id attribute (`id=""` in html)
  - class (`class=""` in html)
  - element calss
    - any elements with the specific class (`element.class`)
  - list
    - any of the given selectors
  - descendant
    - a list of descendents
    - body section
      - any section that is a descendant of a body
  - child
  - pseudo
    - `.class:state`
      - ex. `.toys:hover`

### Declarations

| Property           | Value                              | Example             | Discussion                                                                     |
| ------------------ | ---------------------------------- | ------------------- | ------------------------------------------------------------------------------ |
| background-color   | color                              | `red`               | Fill the background color                                                      |
| border             | color width style                  | `#fad solid medium` | Sets the border using shorthand where any or all of the values may be provided |
| border-radius      | unit                               | `50%`               | The size of the border radius                                                  |
| box-shadow         | x-offset y-offset blu-radius color | `2px 2px 2px gray`  | Creates a shadow                                                               |
| columns            | number                             | `3`                 | Number of textual columns                                                      |
| column-rule        | color width style                  | `solid thin black`  | Sets the border used between columns using border shorthand                    |
| color              | color                              | `rgb(128, 0, 0)`    | Sets the text color                                                            |
| cursor             | type                               | `grab`              | Sets the cursor to display when hovering over the element                      |
| display            | type                               | `none`              | Defines how to display the element and its children                            |
| filter             | filter-function                    | `grayscale(30%)`    | Applies a visual filter                                                        |
| float              | direction                          | `right`             | Places the element to the left or right in the flow                            |
| flex               |                                    |                     | Flex layout. Used for responsive design                                        |
| font               | family size style                  | `Arial 1.2em bold`  | Defines the text font using shorthand                                          |
| grid               |                                    |                     | Grid layout. Used for responsive design                                        |
| height             | unit                               | `.25em`             | Sets the height of the box                                                     |
| margin             | unit                               | `5px 5px 0 0`       | Sets the margin spacing                                                        |
| max-[width/height] | unit                               | `20%`               | Restricts the width or height to no more than the unit                         |
| min-[width/height] | unit                               | `10vh`              | Restricts the width or height to no less than the unit                         |
| opacity            | number                             | `.9`                | Sets how opaque the element is                                                 |
| overflow           | [visible/hidden/scroll/auto]       | `scroll`            | Defines what happens when the content does not fix in its box                  |
| position           | [static/relative/absolute/sticky]  | `absolute`          | Defines how the element is positioned in the document                          |
| padding            | unit                               | `1em 2em`           | Sets the padding spacing                                                       |
| left               | unit                               | `10rem`             | The horizontal value of a positioned element                                   |
| text-align         | [start/end/center/justify]         | `end`               | Defines how the text is aligned in the element                                 |
| top                | unit                               | `50px`              | The vertical value of a positioned element                                     |
| transform          | transform-function                 | `rotate(0.5turn)`   | Applies a transformation to the element                                        |
| width              | unit                               | `25vmin`            | Sets the width of the box                                                      |
| z-index            | number                             | `100`               | Controls the positioning of the element on the z axis  

### Units

| Unit | Description                                                      |
| ---- | ---------------------------------------------------------------- |
| px   | The number of pixels                                             |
| pt   | The number of points (1/72 of an inch)                           |
| in   | The number of inches                                             |
| cm   | The number of centimeters                                        |
| %    | A percentage of the parent element                               |
| em   | A multiplier of the width of the letter `m` in the parent's font |
| rem  | A multiplier of the width of the letter `m` in the root's font   |
| ex   | A multiplier of the height of the element's font                 |
| vw   | A percentage of the viewport's width                             |
| vh   | A percentage of the viewport's height                            |
| vmin | A percentage of the viewport's smaller dimension                 |
| vmax | A percentage of the viewport's larger dimension                  |

### Color

| Method       | Example                   | Description                                                                                                                                                                                                       |
| ------------ | ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| keyword      | `red`                     | A set of predefined colors (e.g. white, cornflowerblue, darkslateblue)                                                                                                                                            |
| RGB hex      | `#00FFAA22` or `#0FA2`    | Red, green, and blue as a hexadecimal number, with an optional alpha opacity                                                                                                                                      |
| RGB function | `rgb(128, 255, 128, 0.5)` | Red, green, and blue as a percentage or number between 0 and 255, with an optional alpha opacity percentage                                                                                                       |
| HSL          | `hsl(180, 30%, 90%, 0.5)` | Hue, saturation, and light, with an optional opacity percentage. Hue is the position on the 365 degree color wheel (red is 0 and 255). Saturation is how gray the color is, and light is how bright the color is. |

### Fonts

```
@font-face{
font-family: "<name>";
src: url('<url>');
}
p{
font-family: <name>;
font-size: 20vh
```
```
@import
url('<url>');
```
- @import's url is a link to a css declaration

#### Unicode and UTF-8
- unicode represents a ton of characters
- UTF-8 manages all of these characters so it only renders what is needed

### Animation

```
@keyframes demo {
from {
  font-size: 0vh;
}
95% {
  font-size: 21vh;
}
to (
  fonrt-size: 20vh;
}
}

p {
animation-name: demo;
animation-duration: 3s;
}
```
- must declare the animation and then call its variable name

### Responsive Design

- float declaration
- display declaration
  - none: allocates no space, JS can still mess with it
  - block: occupy the width of the display by default
  - inline: only occupy the width needed for the content
  - flex: display using rules for the child elements
  - grid: responsive tables
```
.<container> {
  display: grid;
  grid-template-columns:
    repeat(auto-fill, minmax(300px, 1fr(fractional units)));
  grid-auto-rows: 300px;
  grid-gap: 1em;
}
```
- flex
  - "holy grail of layout"
```
body {
  display: flex;
  flex-direction: column;
  margin: 0;
}
```
#### Media Queries

```
@media (<choice rendering>) {
div {
  <stuff>;
}
```
- media just refers to the rendering of the entire page

### CSS Frameworks

- Bootstrap
  - most popular
  - reference bootsrap classes in html elements
  - reference in code to include
  - for now: <link rel="stylesheet" href="https://cdn.jsdelivr.nep/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" />
  ```
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
        crossorigin="anonymous"
      />
    </head>
    <body>
      ...
    </body>
  </html>
  ```
  - to work with javascript:
    ```
    <body>
    ...
      <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
      crossorigin="anonymous"
      ></script>
    </body>
    ``` 
- Tailwind
  - in-line html
  - rising in popularity

## Javascript

- Javascript official name: ECMAScript
- Inspired by Scheme
- Interpreted
  - never compiled
- Dynamically typed
- F12 -> Console is a javascript interpreter
- Node.js
  - executable, allows JS to run without a browser (wrapped around V8 open source Chrome interpreter)
  - Also has libraries and other things
- Playgrounds
  - Browser debugging console
  - CodePen
  - VSCode (LiveServer)
  - Node.js
- Printing
  - console.log(str);
  - can use css as a parameter
    - ex. `console.log('%cstr', 'font-size:2em; color:red;');`
    - %c says to apply the next parameter as css styling
  - can format strings with %s
    - ex. `console.log('Hello, %s!', 'world')`
    - %s is a placeholder for the next parameter
- initialize array
  - `const words = ['hello', 'world'];`
- define function
  - `function f() {}`
- embedding in html
  - `<script src='jsfile.js"></script>`
  - `<script>jscode</script>`
  - script attribute
    - ex. `<div onclick="function"></div>`
- variables
  - do not need to declare types "dynamically typed language"
  - var (DO NOT USE)
  - `let y = 1`
  - `const x = 3`
    - cannot change x
- types
  - dynamically typed
  - undefined diff from null
    - undefined is not "none" it is just not defined yet
    
  ### Primitive Types

  | Type        | Meaning                                                    |
  | ----------- | ---------------------------------------------------------- |
  | `Null`      | The type of a variable that has not been assigned a value. |
  | `Undefined` | The type of a variable that has not been defined.          |
  | `Boolean`   | true or false.                                             |
  | `Number`    | A 64-bit signed number.                                    |
  | `BigInt`    | A number of arbitrary magnitude.                           |
  | `String`    | A textual sequence of characters.                          |
  | `Symbol`    | A unique value.                                            |

  ### Object Types

| Type       | Use                                                                                    | Example            |
| ---------- | -------------------------------------------------------------------------------------- | ------------------------ |
| `Object`   | A collection of properties represented by name-value pairs. Values can be of any type. | `{a:3, b:'fish'}`        |
| `Function` | An object that has the ability to be called.                                           | `function a() {}`        |
| `Date`     | Calendar dates and times.                                                              | `new Date('1995-12-17')` |
| `Array`    | An ordered sequence of any type.                                                       | `[3, 'fish']`            |
| `Map`      | A collection of key-value pairs that support efficient lookups.                        | `new Map()`              |
| `JSON`     | A lightweight data-interchange format used to share information across programs.       | `{"a":3, "b":"fish"}`    |

  - objects are key-value pairs
    - not all things are objects (strings are not objects)
    - objects `{}` and arrays `[]`
      - in arrays: index is key and the value is value
  - `var instanceof type` returns boolean
  - dynamic conversions
    - can add a string and the first element of an array (i think)
    - can add numbers and strings
    - CANNOT multiply numbers and strings
    - adding arrays of numbers converts them to strings first
      - `[2] + [3] = 23`
  ### Operators
  - `+`, `-`, `*`, `/`, `===` (equality), `!==` (inequality)
    - `===` is for strict equality; it does not use type conversions
  - for strings: `+` (concatenation), `===` (equality)
- equality
  - use `===` triple equals for equality
  - map
- debugging
  - timers to measure the time a section of code takes
    - wrap with
    ```
    console.time('demo time');
    //code
    console.timeEnd('demo time');
    ```
  - count to count how many times a block of code is called
  ```
  console.count('a');
  // OUTPUT: a: 1
  console.count('a');
  // OUTPUT: a: 2
  console.count('b');
  // OUTPUT: b: 1
  ```

### Conditionals

- `if`, `else if`, `else`
  - ex.
    ```
    if (a === 1) {
    //...
    } else if (b === 2) {
      //...
    } else {
      //...
    }
    ```
- can use ternary operator
  `condition ? expression1 : expression2`
  - evaluates condition. If true, returns expression1. If false, returns expression2.
- boolean operators
  - `&&`, `||`, `!`
  
### Loops

- `for`, `for in`, `for of`, `while`, `do while`, and `switch`
- do while
  ```
  let i = 0;
  do {
    console.log(i);
    i++;
  } while (i < 2);
  // OUTPUT: 0 1
  ```
- for in iterates over an object's property **names**
  ```
  const obj = { a: 1, b: 'fish' };
  for (const name in obj) {
    console.log(name);
  }
  ```
- for of iteratres over an iterable's property **values**
  ```
  const arr = ['a', 'b'];
  for (const val of arr) {
    console.log(val);
  }
  ```
- allow for `break` or `continue`
  ```
  let i = 0;
  while (true) {
    console.log(i);
    if (i === 0) {
      i++;
      continue;
    } else {
      break;
    }
  }
  ```

### String

- `` ` `` (backticks)
  - declare string literals
    - can contain javascript evaluated in place and concatenated into the string
    - replacement specifier: `${javascript}`
    - ex.
      ```
      const l = 'literal';
      console.l og(`string ${l + (1 + 1)} text`);
      ```
  - for multi-line strings w/o escaping the newline
    
  #### String Functions

  | Function      | Meaning                                                      |
  | ------------- | ------------------------------------------------------------ |
  | length        | The number of characters in the string                       |
  | indexOf()     | The starting index of a given substring                      |
  | split()       | Split the string into an array on the given delimiter string |
  | startsWith()  | True if the string has a given prefix                        |
  | endsWith()    | True if the string has a given suffix                        |
  | toLowerCase() | Converts all characters to lowercase                         |

### Array Object Functions

| Function | Meaning                                                   | Example                       |
| -------- | --------------------------------------------------------- | ----------------------------- |
| push     | Add an item to the end of the array                       | `a.push(4)`                   |
| pop      | Remove an item from the end of the array                  | `x = a.pop()`                 |
| slice    | Return a sub-array                                        | `a.slice(1,-1)`               |
| sort     | Run a function to sort an array in place                  | `a.sort((a,b) => b-a)`        |
| values   | Creates an iterator for use with a `for of` loop          | `for (i of a.values()) {...}` |
| find     | Find the first item satisfied by a test function          | `a.find(i => i < 2)`          |
| forEach  | Run a function on each array item                         | `a.forEach(console.log)`      |
| reduce   | Run a function to reduce each array item to a single item | `a.reduce((a, c) => a + c)`   |
| map      | Run a function to map an array to a new array             | `a.map(i => i+i)`             |
| filter   | Run a function to remove items                            | `a.filter(i => i%2)`          |
| every    | Run a function to test if all items match                 | `a.every(i => i < 3)`         |
| some     | Run a function to test if any items match                 | `a.some(i => 1 < 1)`          |
