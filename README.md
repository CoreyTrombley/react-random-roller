# React Random Roller
Random list selecting component tool thing

## Motivation
I wanted to recreate the old UrbanSpoon random food selector and the idea for this component was born.

<!--## Build status-->
<!--Build status of continus integration i.e. travis, appveyor etc. Ex. - -->

<!--[![Build Status](https://travis-ci.org/akashnimare/foco.svg?branch=master)](https://travis-ci.org/akashnimare/foco)-->
<!--[![Windows Build Status](https://ci.appveyor.com/api/projects/status/github/akashnimare/foco?branch=master&svg=true)](https://ci.appveyor.com/project/akashnimare/foco/branch/master)-->

<!--## Code style-->
<!--If you're using any code style like xo, standard etc. That will help others while contributing to your project. Ex. --->

<!--[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)-->
 
<!--## Screenshots-->
<!--Include logo/demo screenshot etc.-->

## Tech/framework used

<b>Built with</b>
- [React](https://reactjs.org/)

## Features
Randomly selects an item from a list, visually.

## Code Example

```
...

import RandomRoller from 'react-random-roller';


<RandomRoller list={ ['Hello,', 1, <p>world</p>] } />

```

## Installation

`npm i -S react-random-roller`

## API Reference

### 1. RandomRoller

Random Selection Component

E.g.:
```html
<ReactRoller fps={ 60 } duration={ 2000 } list={ [1, 2, 3, 4, 5, 6] } />
```

Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
className|string|no|&lt;See the source code&gt;|Custom css class for the component
fps|number|no|60|Frames per second the item should be animating at
duration|number|no|2000|Amount of time the animation should last in milliseconds
list|array|yes||List of items to select from
auto|boolean|no|False|Run the roller after mounting, immediately.
message|string|no|Click to Pick|Custom click message.
-----


## Tests
At this time there are no test in place, I hope to get to that in the near future

<!--## How to use?-->
<!--If people like your project they’ll want to learn how they can use it. To do so include step by step guide to use your project.-->

## Contribute
If you would like to contribute, please fork this repo and submit a pull request. Thank you!


<!--## Credits-->


## License

MIT © [Corey Trombley](https://github.com/CoreyTrombley)
