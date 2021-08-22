# About the package

This package might be useful to create a user icon with their initials. Light weight and simple to use.


# Installation

Using NPM


`npm install adi-userinitials --save`

Using CDN

`<script src="https://unpkg.com/adi-userinitials@1.0.3"></script>`


# Usage

Using npm

```
import {userinitial} from 'adi-userinitials'

const res = userinitial({
            name: "Aditya Kadam",
            height: "60px",
            width: "60px",
            root: "#root",
            returnHTML: false
        })


```

Using CDN

```
<!-- Paste CDN script tag in your head section of HTML-->

<script>
const res = userinitial({
            name: "Aditya Kadam",
            height: "60px",
            width: "60px",
            root: "#root",
            returnHTML: false
        })
</script>

```


# Output
![alt text](https://github.com/adityar15/userinitials/blob/master/example.PNG "Output")



# Options

| Options        | Default Value           | Description  |
| ------------- |:-------------:| -----:|
| name    (required)  | '' | Name/username of the user |
| root    (required)  | '' | Parent HTML Element of the icon |
| backGround      |   '#888888'    |   Background colour of the icon |
| fontColor | '#ffffff'      |   Font colour of the icon |
| fontSize | '16px'      |   Font size of the initials |
| fontWeight | '600' | Font thickness
| height | '50px'      |  Height of the icon |
| width | '50px'      |   Width of the icon |
| rounded | true      |   Gives circular icon |
| returnHTML | false     |   Returns icon in the form of HTML element |

