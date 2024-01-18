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

The server on AWS is up and running. Named darbidixon-260startup-base. 

**IP Address (Elastic):** 3.234.33.64

**Command to Access SSH:**  ssh -i /Users/darbi/Desktop/Classes/Winter-24-Classes/CS-260/production.pem ubuntu@3.234.33.64

**Command to Access Caaddyfile (from SSH):** vi Caddyfile

**Command to update Caddyfile after changes:** sudo service caddy restart

**Subdomains:** startup.inspireus.click, simon.inspireus.click

