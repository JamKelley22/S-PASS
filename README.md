# SPASS_Web
---
Common Acronyms Used:
1. S-PASS : Sustainable Product Architecture and Supplier Selection
2. CooL:SLiCE : Constructionism in Learning: Sustainable Life Cycle Engineering
3. SPIRE-EIT : Summer Program for Interdisciplinary Research and Education Emerging Interface Technologies
4. REU : Research Experiences for Undergraduates
---
## What this is...?
Over this summer (2017) the three of us were accepted into the Iowa State SPIRE HCI REU Program. We were then assigned to the CooL:SLiCE project as our main research focus. Our main goal of this research is to improve the usability of the S-PASS tool and integrate it into the web.

## How do we plan to improve S-PASS usability...?
To increase the usability of the S-PASS tool we plan to...
1. Preform an initial usability study on the current S-PASS tool
2. Gather and analyze the data so we can address and incorporate critical features into the new, web portal.
3. Perform the same usability study, but with the new tool
4. Write a paper about it

## Ok but why is this important...?
Why do you ask? Because! We are creating a tool that seems to be the first of its kind! Rare does education focus on the sustainability aspect of design. It is vitally important that students today are conscientious of the world they live in and its needs. Thus we must begin learning the skills of how to design sustainably. We hope the S-PASS Web tool can be our contribution to that effort.

## Who is working on this project...?
* REU TEAM
  1. Jameel Kelley | [Website][1] | [GitHub][2] |
  2. Masashi Schafer | [Github][3] |
  3. Natalie Blodgett | [Github][4] |

### TODO:
- [ ] Finish 10 Requests
- [ ] Document/Comment Code
- [ ] Compile all work



[1]: https://jamkelley22.github.io/
[2]: https://github.com/JamKelley22
[3]: https://github.com/Masashi-VirtualSpaces
[4]: https://github.com/natalieblodgett

Requirement Function Matrix
FDunction alt module data
madule product archatecture

Setup
---
npm install

--------------------------------------------------------------------------------

Compile
---
npm run compile

--------------------------------------------------------------------------------

Start
---
npm start

Listens on localhost:3000

--------------------------------------------------------------------------------
This section describes the initial folder structures of the project. A short
description of each file is given.

Project structure:

src

|--actions: Folder that holds redux actions.

  |--functionTableAction.js     //Actions for function object in store.
  
  |--moduleTableAction.js       //Actions for module object in store.
  
  |--requirementTableAction.js  //Actions for requirement object in store.
  
  |
  
|--components: Folder that holds react components.

  |--Layout.js                  //React component acts as main layout of app.
  
  |
  
|--reducers: Folder that holds redux reducers.

  |--functionTableReducer.js    //Redux reducer for function object in store.
  
  |--Index.js                   //Combines all Redux reducers into one.
  
  |--moduleTableReducer.js      //Redux reducer for module object in store.
  
  |--requirementTableReducer.js //Redux reducer for requirement object in store.
  
  |
  
|client.js                      //Access point for Webpack.

|store.js                       //Declares information on Redux store.

www

|--index.html                   //Main html page for application.

package.json                    //Package configuration for application.

server.js                       //server configuration for application.

webpack.config.js               //Webpack configuration for application.

