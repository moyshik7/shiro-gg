# Shiro.gg
![GitHub top language](https://img.shields.io/github/languages/top/moyshik7/shiro.gg)  
![npm bundle size](https://img.shields.io/bundlephobia/min/shiro.gg)  
![Maintenance](https://img.shields.io/maintenance/yes/2023)  
![GitHub last commit (branch)](https://img.shields.io/github/last-commit/moyshik7/shiro.gg/main)  

  
  
Unofficial API wrapper for [api.dbot.dev/](https://api.dbot.dev) ~~Formerly shiro.gg~~  
  
## A Quick Example

```js
const shiro = require('shiro.gg')

// Using promise .then()
shiro.hug().then(hug => {
    console.log(hug.url)
})

// Using async function
const hug = async () => {
    let hugData = await shiro.hug()
    console.log(hug.url)
}
hug()
```

## Installation
**Install with npm:**  

```bash
npm i shiro.gg
```
  
## Importing
**Import with CommonJS `require()`:**  

```js
// Import the whole module
const shiro = require("shiro.gg");
// Or, Just some functions
const { Hug } = require("shiro.gg");
```

**Import with EcmaScript / TypeScript `import`:**  

```js
// Whole Module
import * as shiro from 'shiro.gg'

//Or, Just some functions
import { Hug } from 'shiro.gg'
```

  
## Namings
  
Since version `0.1.2` both PascalCase (eg. `Hug()`) and camelCase (eg. `hug()`) are available.  
  
## Example
  
**A basic example using await**  
**Note: `await` is only usable in `async` functions**

```js
const res = await Hug()
console.log(res)
```

**A basic example using `.then()`:**  

```js
Hug().then( (res) => {
    console.log(res)
})
//Optional
.catch(console.log)
```

### Return type
```ts
ImageResult {
    // The url of the image
    url: string;
    // The type of the image (png | jpg | gif)
    type: string;
}
```

  
  
## Functions
  
### SFW
  
| Name       | Description                          |
| :--------- | :----------------------------------- |
| Avatar     | Get a random avatar                  | 
| Avatars    | Same as Avatar                       |
| Blush      | Get a random image / gif of blushing |
| Cry        | Get a random image / gif of crying   | 
| Hug        | Get a random image / gif of hugging  |
| Kiss       | Get a random image / gif of kissing  |
| Lick       | Get a random image / gif of licking  |
| Neko       | Get a random image of a catgirl      |
| Nom        | Get a random image / gif of eating   |
| Pat        | Get a random image / gif of patting  |
| Poke       | Get a random image / gif of poking   |
| Pout       | Get a random image / gif of pouting  |
| Punch      | Get a random image / gif of punching |
| Slap       | Get a random image / gif of slapping |
| Sleep      | Get a random image / gif of sleeping |
| Smug       | Get a random image / gif of smugging |
| Tickle     | Get a random image / gif of tickling |
| Trap       | Get a random image of a Trap         |
| Wallpaper  | Get a random wallpaper               |
| Wallpapers | Same as wallpaper                    |

  
### NSFW
  
| Name       | Description                                 |
| :--------- | :------------------------------------------ |
| BDSM       | Get image of BDSM                           |
| Bondage    | Get a random Bondage (subset of BDSM) image |
| Hentai     | Get a random Hentai image                   |
| Thigh      | Get a random thigh image                    |
| Thighs     | Same as thigh                               |

  
  
  
### Other info
  
[GitHub repo](https://github.com/moyshik7/shiro.gg)  
[NPM module](https://www.npmjs.com/package/shiro.gg)  
[Shiro Api](https://api.dbot.dev)  
