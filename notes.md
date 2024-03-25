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
}
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
- for of iterates over an iterable's property **values**
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

### Strings

- `` ` `` (backticks)
  - declare string literals
    - can contain javascript evaluated in place and concatenated into the string
    - replacement specifier: `${javascript}`
    - ex.
      ```
      const l = 'literal';
      console.l og(`string ${l + (1 + 1)} text`);
      ```
    - use ${some stuff} for kinda like fstrings from python
  - for multi-line strings w/o escaping the newline
- let s = "some stuff";
  - string literal declaration
- s = new String("Some stuff");
  - string object declaration
  - only difference is really where it is stored in memory
- can slice strings as well
  - s.slice(3,7)
    - 3 inclusive, 7 exclusive
    - s is immutable, so slicing does not modify s
- s.char(2)
  - index into the 3rd spot
  - cannot change the string, must create a new string to store the character
#### regex
  - regExExp = /cat.?/i
    - groupings: (dog)
  - s.match(regExExp);
  - s.replace(regExEsp, 'something');
    - replaces all matches of regExExp with 'something'
  - regExExp.test(s)
    - returns true or false if the regExExp matches something in string s
  - delimited by `/<stuff>/`
  - flags
    - `i` case insensitive search
    - `n` Specifies that the only captures are explicitly named groups of the form (?<name>…). This allows unnamed (…) parentheses to act as noncapturing groups without the syntactic clumsiness of the expression (?:…)
    - `m` allows `^` and `$` to match next to newline characters
    - `s` allows `.` to match newline characters
    - `d` generates indices for substring matches
    - `g` global search

    
  #### String Functions

  | Function      | Meaning                                                      |
  | ------------- | ------------------------------------------------------------ |
  | length        | The number of characters in the string                       |
  | indexOf()     | The starting index of a given substring                      |
  | split()       | Split the string into an array on the given delimiter string |
  | startsWith()  | True if the string has a given prefix                        |
  | endsWith()    | True if the string has a given suffix                        |
  | toLowerCase() | Converts all characters to lowercase                         |

### Arrays

- let numbers = []
- numbers.push(2)
  - numbers = [2]
- numbers.pop()
  - numbers = []
#### Destructuring
- a = [1, 2]
- [x] = a;
  - takes the first value of x and puts it into x
- [x, y, z] = a
  - x = 1, y = 2, z = undefined
  - can put z =100 to make a default value for z if there is not a third value in a
- [x, y, ...z] = a
  - if a is [1, 2, 3, 4, 5, 6, 7]
  - then x = 1, y = 2, and z = [3, 4, 5, 6, 7]
  - 
  

#### Array Object Functions

| Function | Meaning                                                   | Example                       |
| -------- | --------------------------------------------------------- | ----------------------------- |
| push     | Add an item to the **end** of the array                   | `a.push(4)`                   |
| pop      | Remove an item from the **end** of the array              | `x = a.pop()`                 |
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

- numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
- numbers.reduce((a, c) => a + c)
  - a is accumulation value
  -  can specify a to combine multiple lists (return from the first one is the a for the second one) default is 0
- numbers.forEach((n) => console.log(n % 2))
  - prints out each value mod 2
- numbers. filter((n) => n % 2)
  - filters out the even numbers
  - numbers = [1, 3, 5, 7, 9]
- return a new array 

### Exceptions

```
try {
  (() => {
    throw 'trouble in river city';
  })();
}  catch (error)
   console.log('error: ' + error);
} finally {
  console.log('finally1');
}
```
- when there is an exception, throws
- since there is a catch block, that runs
- finally always runs whether there is an exception or not
- `() =>` is just an example lambda function
- `()` is calling that lambda function

### Special Operators

- let x = null || 5
  - null is falsy and 5 is truthy, so x = 5
- x = x || 10
  - x is 5, and truthy (doesn't evaluate 10 becase 5 is truthy), so x = 5
- nullish coalescing operator `??`
- z ?? (z = x);
  - z is undefined, so it is nullish, so z = x = 5
- y ??= 30
  - if y is nullish, y = 30
- y ?? 40
  - y = 30, so it is not nullish, so y = 30
 
### Objects

```
let obj = {
  animal: 'fish';
};
```
- obj.count = 3
  - obj = {animal: 'fish', count: 3}
- can also obj.anotherobj to nest them
- object function
  - obj.print()
  -   this.animal()
- x.method = () => what happens
#### Destructuring
- function of({ a = 3, b = {animal: 'rat'}} = {}) {
-   console.log('a' ${a} b: ${b.animal}')
- when function is called
  - a and b have defaults that can be overridden by the input
  - can be overwritten individually

### Rest and Spread

- spread (...<array>) puts whichever values are in the array into the container
- rest ...<vars> accepts however many variables are provided (used as a parameter for a function)
  - can only be the last parameter

### json

- a textual representation of data
  - not functions
- stringify
  - `const json = JSON.stringify(obj)`
  - convert javascript to JSON
- parse
  - convert JSON to javascript
  - `const objFromJson = JSON.parse(json);`
- `console.log('json: ', JSON.stringify(obj));`
- `console.log('rehydrate: ', JSON.parse(JSON.stringify(obj))`
- keys are **strings**
- values are JSON data types
  - cannot represent undefined objects
  
  | Type    | Example                 |
  | ------- | ----------------------- |
  | string  | "crockford"             |
  | number  | 42                      |
  | boolean | true                    |
  | array   | [null,42,"crockford"]   |
  | object  | {"a":1,"b":"crockford"} |
  | null    | null                    |
  
- (line 620)

### Document Object Model (DOM)

- takes html and css and builds a ??
- an object representation of the html elements that the browser uses to render the display
- global variable `document` accesses the DOM
  - points to the root element of the DOM
```
function displayElement(el) {
  console.log(el.tagName);
  for (const child of el.children) {
    displayElement(child);
} }
displayElement(document)
```
  - finds all of the elements in the document
- `const el = document.querySelectorAll('tag')`
- el.innterHTML returns '<div class="injected"><b>Hello</b>!</div>'
  - not good for text others input because if they put javascript in there, it will execute
  - returns a textual representation of the inner HTML
- el.textContent returns all of an element's text
  - including child elements
- append new child element
  ```
  function insertChild(parentSelector, text) {
    const newChild = document.createElement('div');
    newChild.textContent = text;
  
    const parentElement = document.querySelector(parentSelector);
    parentElement.appendChild(newChild);
  }

  insertChild('#courses', 'new course');
  ```
- remove child
  ```
  function deleteElement(elementSelector) {
    const el = document.querySelector(elementSelector);
    el.parentElement.removeChild(el);
  }

  deleteElement('#courses div');
  ```
  - use for delete message?


### Event Handlers

- `<button onclick='alerkt("clicked")'>Click me</button>`
- get from gitHub

### Local Storage


| Function             | Meaning                                      |
| -------------------- | -------------------------------------------- |
| setItem(name, value) | Sets a named item's value into local storage |
| getItem(name)        | Gets a named item's value from local storage |
| removeItem(name)     | Removes a named item from local storage      |
| clear()              | Clears all items in local storage            |

- must be `string`, `number`, or `boolean`
- to pass in array or object, first convert to JSON string with `JSON.stringify()` on insertion and parse it back to javascript with `JSON.parse()` on retrieval
- store in local storage at first
  - then upload to database
- localStorage.setItem('user', user)
- find in inspect under application

### Modules

- must both export from one file and import from another
```
export function f() {
  does stuff;
}
```
```
import { f } from './f_file';

f();
```
- Javascript modules: ES Modules
- node.js modules: CommonJS Modules
  - created first
- can do `window.btnclick = f;` and call with `<button onclick=btnclick(function arguments)>Press Me</button>`
  - creates a method for the elements

### Promises

- JavaScript is single-threaded
  - only one line of code running at once
  - everything must be asynchronous
- browser rendering is single-threaded (call stack)
- browser itself has a second thread (Web API) that monitors promises(?)
  - handles "blocking IO," things that are waiting for other things to happen
  - external network calls go here until the call returns
```
setTimeout(()=> {
  functionToCall();
}, ms);
```
- 3 stages
  - pending - currently running asynchronously
  - fulfilled - completed successfully
  - rejected - failed to complete
- a promise is its own object
`new Promise((resolve, reject) => resolve(true))`
```
p.then(
  (resolve_result) => console.log(resolve_result),
  (reject_result) => console.log(reject_result));
```
  - the order matters for resolve_result and reject_result (not the names)
  - if the Promise resolves, it will run the first one
  - if the Promise rejects, it will run the second one
- prevents browser from locking up

#### Async/Await

- simplified syntax for promises
```
try {
  const result = await funcName;
  console.log('do stuff ${result}');
} catch (err) {
  console.error('Error ${err}');
} finally {
  console.log("Done");
}
```
- will block until resolves or rejects
- wrapped with a promise
- need `await`
- to call something with await, must declare the function as `async`
- entire call stack must be await

### Debugging

- console.log debugging
  - checking outputs
  - kinda weak
- source debugging
  - using the debugger
  - set breakpoints
 
## Web Services

- need IP addresses to find web servers
- so we buy domain names to connect IP addresses to memorable names
- computers connect to DNS before that tranlates to an IP address that we can connect to
- Layers (bottom to top)
  - Link
    - fiber, hardware
    - physical connections
  - Internet
    - ex. IP
    - establishing connections
  - Transport
    - Ex. TCP/UDP
      - TCP - send this, expect a sequence of packets
        - allows confirmation for reception
      - UDP - not sequential, just sends a bunch of packets
        - more efficient
    - moving connection informaiton packets
  - Application
    - Ex. HTTPS, HTTP, SSH, FTP, SMTP (emails)
    - funcitonality like web browsing
- Web Server: a computing device that connects to other web servers
  - usses HTTP as its protocol to talk to other computers with HTTP
  - can call other web servers to get the data it needs (proxy)
- Services
  - Web services - take HTTP requests and...
  - on our servers: have 3 services: startup, simon, and welcome to web programming
- Ports
  - ports connect to services via protocols
  - HTTPS port is 443
  - HTTP port is 80
  - don't want to expose ports publicly
    - expose one port (443) and point to a gateway service
    - gateway service points to other services possibly through urls?
    
### Domains

- Top level domains
  - originals: com, org, edu, gov, mil, int, net
  - country: uk, cn, tv (Tuvalu), ...
  - generic: click, gold, ceo, fishing, ...
- localhost (127.0.0.1)
  - special domain name, automatically connects to that IP
  - connects back to itself

### DNS Records

- A/AAAA - Addresss. Specific IP addresses. IPV4 and IPV6. Map domain names to IP addresses
- SOA - start of authority. Propagotion information
  - records about the domain name owner
- CNAME
  - canonical nae
  - alias (5 domain names go to one website)
- NS
  - name server. Authority for queries and proof of ownership
- TEXT
  - metadata. Used for policies and verification
  - google analytics

### Leasing a domain name

- 1-10 yeaers, renew required. $3 to $100,000+
- IANA - internet assigned numbers authority, define domain names
  - registrar - orders for renting domain
    - registry - authoritative DNS records, licensed by registrar to lease domain names, give a portion of the lease money to the registrar
      - registrant - Lessee (you)

### Fetch

- returns a promise. Syntax:
```
fetch(url)
  .then(r => r.text())
  .then(text => console.log(text))
```
- to convert to json
```
fetch(url)
  .then(r => r.json())
  .then(j => console.log(j.value))
```

or

```
const r = await fetch(url)
const j = await r.json()
console.log(j.content)
```
- r is the response object
- r.json also returns a promise
- uses fetch command to access the css?
- fetching some resource from the internet
- endpoints
  - [POST] and [GET]
- `curl -v <url>`
  - see the details of one request
  - `-v` means verbose
    
### URL

- https://byu.edu:443/api/city?q=pro#3
  - scheme
    - https://
  - domain
    - byu.edu
  - port
    - :443
  - path
    - /api/city
  - parameters
    - ?q=pro
    - specific to the path
  - anchor
    - #3
    - navigational aid
  - Ports and protocols
| Port | Protocol                                                                                           |
| ---- | -------------------------------------------------------------------------------------------------- |
| 20   | File Transfer Protocol (FTP) for data transfer                                                     |
| 22   | Secure Shell (SSH) for connecting to remote devices                                                |
| 25   | Simple Mail Transfer Protocol (SMTP) for sending email                                             |
| 53   | Domain Name System (DNS) for looking up IP addresses                                               |
| 80   | Hypertext Transfer Protocol (HTTP) for web requests                                                |
| 110  | Post Office Protocol (POP3) for retrieving email                                                   |
| 123  | Network Time Protocol (NTP) for managing time                                                      |
| 161  | Simple Network Management Protocol (SNMP) for managing network devices such as routers or printers |
| 194  | Internet Relay Chat (IRC) for chatting                                                             |
| 443  | HTTP Secure (HTTPS) for secure web requests                                                        |

### HTTP

- request
  - `POST /api/city?q=provo HTTP/1.1`
  - method
    - POST
  - path
    - /api/city?q=provo
  - version
    - HTTP/1.1
  - Headers (key-value pairs)
    - Host: cs260.click
    - User-Agent: curl/7.77.0 <-- Headers
    - Content-Length: 14
    - Accept: application/json, text/plain, image/jpeg, */*
    - accept=encoding: gzip, deflate
    
| Header                      | Example                              | Meaning                                                                                                                                                                        |
| --------------------------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Authorization               | Bearer bGciOiJIUzI1NiIsI             | A token that authorized the user making the request.                                                                                                                           |
| Accept                      | image/\*                             | The format the client accepts. This may include wildcards.                                                                                                            |
| Content-Type                | text/html; charset=utf-8             | The format of the content being sent. These are described using standard [MIME](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types) types. |
| Cookie                      | SessionID=39s8cgj34; csrftoken=9dck2 | Key value pairs that are generated by the server and stored on the client.                                                                                                     |
| Host                        | info.cern.ch                         | The domain name of the server. This is required in all requests.                                                                                                               |
| Origin                      | cs260.click                          | Identifies the origin that caused the request. A host may only allow requests from specific origins.                                                                           |
| Access-Control-Allow-Origin | https://cs260.click                  | Server response of what origins can make a request. This may include a wildcard.                                                                                               |
| Content-Length              | 368                                  | The number of bytes contained in the response.                                                                                                                                 |
| Cache-Control               | public, max-age=604800               | Tells the client how it can cache the response.                                                                                                                                |
| User-Agent                  | Mozilla/5.0 (Macintosh)              | The client application making the request.                                                                                                                                     |
  
  -  Body
    - {"user":"tim"}
- Methods
  - GET: get an existing resource (not sending a body)
  - POST: create a new resource
  - PUT: update an existing resource
  - DELETE: delete a resource
  - OPTIONS: get information about a resource
- Response
  - HTTP/1.1 200 OK
  - Version
    - HTTP/1.1
  - Status Code
    - 200
  - Status message
    - OK

- Status Codes
  - 2xx: 200 Success, 204 No Content
  - 3xx: 301/302 Redirect, 304 not modified
  - 4xx: 400 bad request, 404 not found, 403 forbidden, 429 too many requests
  - 5xx: 500 server error, 503 not available
  
| Code | Text                                                                                 | Meaning                                                                                                                           |
| ---- | ------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| 100  | Continue                                                                             | The service is working on the request                                                                                             |
| 200  | Success                                                                              | The requested resource was found and returned as appropriate.                                                                     |
| 201  | Created                                                                              | The request was successful and a new resource was created.                                                                        |
| 204  | No Content                                                                           | The request was successful but no resource is returned.                                                                           |
| 304  | Not Modified                                                                         | The cached version of the resource is still valid.                                                                                |
| 307  | Permanent redirect                                                                   | The resource is no longer at the requested location. The new location is specified in the response location header.               |
| 308  | Temporary redirect                                                                   | The resource is temporarily located at a different location. The temporary location is specified in the response location header. |
| 400  | Bad request                                                                          | The request was malformed or invalid.                                                                                             |
| 401  | Unauthorized                                                                         | The request did not provide a valid authentication token.                                                                         |
| 403  | Forbidden                                                                            | The provided authentication token is not authorized for the resource.                                                             |
| 404  | Not found                                                                            | An unknown resource was requested.                                                                                                |
| 408  | Request timeout                                                                      | The request takes too long.                                                                                                       |
| 409  | Conflict                                                                             | The provided resource represents an out of date version of the resource.                                                          |
| 418  | [I'm a teapot](https://en.wikipedia.org/wiki/Hyper_Text_Coffee_Pot_Control_Protocol) | The service refuses to brew coffee in a teapot.                                                                                   |
| 429  | Too many requests                                                                    | The client is making too many requests in too short of a time period.                                                             |
| 500  | Internal server error                                                                | The server failed to properly process the request.                                                                                |
| 503  | Service unavailable                                                                  | The server is temporarily down. The client should try again with an exponential back off.                                         |

- Cookies
  - generated by server, passed to client
    ```
    HTTP/2 200
    Set-Cookie: myAppCookie=tasty; SameSite=Strict; Secure; HttpOnly
    ```
  - client caches the cookie
  - returned to server as an HTTP header
  ```
  HTTP/2 200
  Cookie: myAppCookie=tasty
  ```
  - used to remember user data
    - language preference
    - authentication
    - track and share user activity

## Node.js

- `node -e <js code>`
```
> node
> <line of code>
output
> <line of code>
output
```
- `node <filename.js>`

### Packages

- install package using **n**ode **p**ackage **m**anager
- include `require <pkg name>` in code
- for each project using npm (using packages)
  - initialize code to use npm
  ```
  ➜  mkdir npmtest
  ➜  cd npmtest
  ➜  npm init -y
  ```
    - make the directory that contains the javascript
    - go into that directory
    - initialize npm and step through the questionairre
      - use `-y` to skip questionairre
  - creates files in the directory
    - also creates node_modules directory
    - **include node_modules in .gitignore file**
      - don't want to put it in the source control since it is very large
      - because of this, when you clone from git to another location, you must run `npm install` (with no parameter). This will install the referenced pagages in the project directory's new node_modules directory
  - in directory you made, install packages with
  - `➜  npm install <pkg name>`
  - to remove the reference to the package
  - `npm uninstall <package name here>`

#### Using a Package

```
const giveMeAJoke = require('give-me-a-joke');
giveMeAJoke.getRandomDadJoke((joke) => {
  console.log(joke);
});
```
- `give-me-a-joke` is the package
- `.getRandomDadJoke` is a function in the package

#### Summary

1. Create your project directory
1. Initialize it for use with NPM by running npm init -y
1. Make sure .gitignore file contains node_modules
1. Install any desired packages with npm install <package name here>
1. Add require('<package name here>') to your application's JavaScript
1. Use the code the package provides in your JavaScript
1. Run your code with node index.js

### Creating a Web Service

1. create a project
```
➜ mkdir webservicetest
➜ cd webservicetest
➜ npm init -y
```
2. Open VS Code and create a file named index.js
3. paste the following code
```
const http = require('http');
const server = http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(`<h1>Hello Node.js! [${req.method}] ${req.url}</h1>`);
  res.end();
});

server.listen(8080, () => {
  console.log(`Web service listening on port 8080`);
});
```
4. `node index.js` in cmd line
5. `localhost:8080` in browser
- or, you can run in VS Code with `f5` -> `node.js` to run with debugger

## Service Design

### Leverage Standards

- **Transfer Protocols:** HTTP, HTTPS, UDP
- **HTTP Verbs:** GET, PUT, POST, DELETE
- **MIME types:** application/json, image/png
- **HTTP headers:** cache, accept, cors
- **Data Format:** JSON, YAML
- Use these to make code understandable and accessible

### Endpoint Design

- **Grammatical:** Noun/resource based
- **Readable:** `/store/provo/order/28502`
  - make paths readable
- **Simple:** single responsibility principle
  - endpoints should do single, specific things
- **Documented:** Open API
  - openapi is used to document api

### Remote Procedure Call (RPC)

- functional use of HTTP
- Ex. POST verb

### Representational State Transfer (REST)

- use HTTP as much as you can (opposite of RPC)
- verb - noun - what to do
  - ex. `PUT /order/2197 {"date": 102929}`

### GraphQL

- use one query to handle most requests(?)
- make frontend smart, make server easier to manipulate

## Cross Site Request Forgery (CORS)

- single origin principle
  - sites must allow their data to be accessed

## Deployment

- more complex (but still simple) deployment includes
- development -> (push) GitHub Repository -> Continuous Integration ->
  - (testing auto-deploy) -> Staging (stage.com)
  - or (manual-deploy) -> Production (prod.com)
- environments for deployment might be subdomains
- `./deploy.sh -k ~/prod.pem -h funky.com -s startup`
  - credentials (prod.pem)
  - deploy.sh
    - 2. Delete previous files
      3. copies over new package
      4. deploy the service on the target
      
### Interruptive Deployment

- deploy.sh
- stops, replaces, and starts again while people may be using the service
- problematic professionally

### Rolling drain and replace

- multiple servers with load balancer
  - if one server is down, uses another
  - deploy to one server and roll out to the others so the server is never completely down
  - versions must be at least V n-1 compatible or else it won't work while rolling out
  - throw away (but handle) extraneous data, and in next version, you won't have to handle it because no one will be able to request it 
- drain, stop, start ... repeat
  - drain is draining the connections to the server before stopping that server and deploying

### Canary

- gradual rolling out with only deploying one
- monitor errors, make sure everything is working
- roll out to others
- "canary in a coal mine"

### Blue/Green

- blue is old, green is new
- release green all at once, but keep blue up in case something goes wrong
- after making sure things are working, can use blue as a staging environment, swap between them

### A/B

- for marketing purposes, make sure the features are useful
- have two or more versions out at once
- some percent of the traffic goes to the B server to test the new features
- testing features on the users

## Storage

### Uploading Files to Server

- frontend: file input (html element and functionality)
  ```
  <input
    type="file"
    id="fileInput"
    name="file"
    accept=".png, .jpeg, .jpg"
    onchange="uploadFile(this)"
  />
  ```
  ```
  async function uploadFile(fileInput) {
  const file = fileInput.files[0];
  if (file) {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('/upload', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    if (response.ok) {
      document.querySelector('#upload').src = `/file/${data.file}`;
    } else {
      alert(data.message);
    }
  }
  ```
  
}
- backend: multer package
  - built on top of express, makes it easier to interact with the http you need
  - `npm install multer`
  ```
  const express = require('express');
  const multer = require('multer');
  
  const app = express();
  
  app.use(express.static('public'));
  
  const upload = multer({
    storage: multer.diskStorage({
      destination: 'uploads/',
      filename: (req, file, cb) => {
        const filetype = file.originalname.split('.').pop();
        const id = Math.round(Math.random() * 1e9);
        const filename = `${id}.${filetype}`;
        cb(null, filename);
      },
    }),
    limits: { fileSize: 64000 },
  });
  
  app.post('/upload', upload.single('file'), (req, res) => {
    if (req.file) {
      res.send({
        message: 'Uploaded succeeded',
        file: req.file.filename,
      });
    } else {
      res.status(400).send({ message: 'Upload failed' });
    }
  });
  
  app.get('/file/:filename', (req, res) => {
    res.sendFile(__dirname + `/uploads/${req.params.filename}`);
  });
  
  app.use((err, req, res, next) => {
    if (err instanceof multer.MulterError) {
      res.status(413).send({ message: err.message });
    } else {
      res.status(500).send({ message: err.message });
    }
  });
  
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
  ```
  - storing files on the server isn't a good long-term or large-server solution
    1. Limited Space
    2. No backup
    3. Servers themselves are transient
    4. Multiple servers hosting data - don't know which one the user is calling
  - Should be using a dedicated storage service instead

## Databases

- MySQL - relational database

### NoSQL (Everything but SQL)

- Redis - Memory cached objects
- ElasticSearch - ranked free text
- MongoDB - JSON objects
- DynamoDB - Key value pairs
- Neo4J - graph based data
- InflucDB - Time series data

### MongoDB

- what we're using in this class
- an array of JSON objects
- Use the Atlas cloud service
- make IP address in Atlas `0.0.0.0/0`
- `npm install mongodb`
```
const {mongoClient} = require('mongodb') //destructuring
const userName = '<mongodb username for database>'
const password = '<mongodb password for database>'
const hostname = '<hostname from assignment (like cs260.xiu1cqz.mongodb.net)>'
const url = `mongodb+srv://${userName}:${password}@{hostname}` // I think
const client = new MongoClient(url)
const db = client.db('startup') //creates or accesses a database
```
- testing connection
```
client
  .connect()
  .then(() => db.command({ping:1})
  .then(() => console.log('Connected'))
  .catch((ex) => {
    console.log(`error with ${url} because ${ex.message}`);
    process.exit(1);
});
```
- inserting data
```
const collection1 = db.collection1('1');
collection1.insertOne({<obj>});
collction1.insertMany([<obj>,<obj>]); //to insert many into the collection
```
- if you run the code multiple times, it will insert multiple times
  - want to put insert after an if statement to check if it is in the data first
    
#### Object-Based Queries

- `db.collection1.find()`
  - db is from `const db = client.db('startup')`
    - your database
  - collection1 is from `const collection1 = db.collction1('1')`
    - collection within the database
  - returns an iterator (?) to the whole document
```
// find all houses
db.house.find();

// find houses with two or more bedrooms
db.house.find({ beds: { $gte: 2 } });

// find houses that are available with less than three beds
db.house.find({ status: 'available', beds: { $lt: 3 } });

// find houses with either less than three beds or less than $1000 a night
db.house.find({ $or: [(beds: { $lt: 3 }), (price: { $lt: 1000 })] });

// find houses with the text 'modern' or 'beach' in the summary
db.house.find({ summary: /(modern|beach)/i });
```
```
const query 
const cursor = collection1.find(query, options)
const result = await cursor.toArray();
result.forEach((i) => console.log(i)); //prints it out
```
- uses await, so best if put within an async function

### Storing Credentials

- create file called `dbconfig.json` with
```
{
  "hostname": hostname
  "username": username
  "password": password
}

```
- include in .gitignore `dbconfig.json`
- `cfg = require('./dbconfig.json')`
- change url in file to say cfg.hostname etc

## Authorization

- want multi-layered protection
  - use "hashes" to encrypt passwords
  - then would need access to the hashes and the algorithm used to generate the hashes
    - hash table attack
- storing passwords salted
  - generate a random hash and tag it onto the hash
    - then would need access to three things
      - would have to create a hash table for every possible salt
        
### Bcrypt

-`npm install bcrypt`
  - should use a hash of length 10 (i thinl)
  - `hashedpassword = await bcrypt.hash("password", 10); `
 ```
if (await bcrypt.compare("password", hashedPassword)) (
  console.log("passwords match")
)
```

### Authorization Tokens

- make sure they don't have to provide and decrypt a password at every endpoint
- `npm install uuid`
- `const uuid = require('uuid')`
- `const token = uuid.v4();`

### Cookies

- backend is leaving something on the frontend that can be passed back to the backend to see what happened in the past
- Response
  - `Set-Cookie: session=x83yzi; Secure; HttpOnly; SameSite=Strict`
    - session=x83yzi <- only means something to the application running it, usually longer
    - Secure <- HTTPS only
    - HttpOnly <- !JavaScript (JavaScript can't see it, only transferred as a header in a fetch request)
    - SameSite <- only given back to origin (website backend that generated the cookie)
  - Next Request
    - `Cookie: sessoin=x83yzi`
- need to install middleware `cookie-parser` as well
- can delete cookie when they log out

## Security

- cybercrime costs will reach annual 10.5 trillion by 2025

### OWASP 10

- Open(source) Worldwide Application Security Project

1. Broken Access Control
  - URL bypass. Can access resources without authentication
  - Resource path allows access
  - Put security in backend code not frontend
  - Require authentication before serving up resources
2. Cryptographic Failures
  - Transmitting data as cear text
  - Not encrypting at rest or transit
    - rest: stored on disk, persisted storage. Encrypt database
    - transit: when you send it (use https and right version of TLS (1.3, not 1.1)
  - Weak cryptography (SHA1, MD5)
  - Misused cryptography (no salt, wrong params (1 length vs 10 length)
3. Injection
  - User supplied data is not sanitized
    - can add javascript to chats, database with SQL injection
  - user supplied data programmatically executed
4. Insecure Design
  - Whole team
  - Not aware of best practices
  - Unlimited trial accounts
  - Customer data not segmented
    - should only see one person's data, not everyones if an attack is successful
  - Single layer defense
5. Security Misconfiguration
  - Development info exposed
    - give hacker info about the system
  - Using default configurations
    - add security
  - Unnecessary features installed
    - may have security holes
  - System not hardened
6. Vulnerable Components
  - unnecessary/unused packages imported
    - 5 was system, this is packages
  - Untrusted/verified sources
  - Out of date software
  - Not tracking vulnerability bulletins
  - Package versions not locked
7. ID and Auth Failures
  - Credential stuffing
    - compromised list of userNames, passwords
    - must validate
  - Brute force attacks
    - guess a password
  - Permitting weak passwords
  - Weak credential recovery
  - Credentials in URL
  - Not expiring auth tokens
8. Software Integrity Failures
  - Unverified CDN usage
    - content distribution networks
  - Unverified packages (npm install)
    - Google has their own packages, they do not just download things
  - Unverified updates
  - Insecure CD/CI platforms
9. jLogging Failure
  - Not logging critical requests
  - Not monitoring system performance
  - Logs not audited, automatic or manual
  - Logs not stored centrally
  - No real-time response
  - Make sure logging is immutable
10. Server Side Request Forgery
  - specific
  - give URL to server. Server requests bytes and returns them to image, etc.
- Put on your white hat
  - think like a hacker to figure out how to protect
- Security Minded
