# Shiro.gg
Unofficial API wrapper for [https://shiro.gg/api](shiro.gg)  
  
## Installation
**Install with npm:**  

```bash
npm i shiro.gg
```
  
## Importing
**Import with CommonJS `require()`:**  

```js
const shiro = require("shiro.gg");
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

**A basic example using `.then()`  

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
  
Avatar  
Avatars  
Blush  
Cry  
Hug  
Kiss  
Lick  
Neko  
Nom  
Pat  
Poke  
Pout  
Punch  
Slap  
Sleep  
Smug  
Tickle  
Trap  
Wallpaper  
Wallpapers  
  
### NSFW
  
BDSM  
Bondage  
Hentai  
Thigh  
Thighs  
  
  
  
### Other info
  
[https://github.com/moyshik7/shiro.gg](GitHub repo)  
