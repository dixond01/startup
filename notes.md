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

**Command to Access SSH:**  `ssh -i /Users/darbi/Desktop/Classes/Winter-24-Classes/CS-260/production.pem ubuntu@3.234.33.64`

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
