function userinitial(options)
{
    const defaultOptions = {
        upperCase: true,
        backGround: '#888888',
        fontColor: '#ffffff',
        fontSize: '16px',
        fontWeight: '600',
        height: '50px',
        width: '50px',
        rounded: true,
        returnHTML: false,
        avatarImage: ''
    }
    
    const mergedOptions = Object.assign(defaultOptions, options)

    if( !options.hasOwnProperty('name') && !options.hasOwnProperty('root'))
      return false
     
    let nameArray = mergedOptions.name.toUpperCase().split(' ')
    let initials = (nameArray.length > 1) ? nameArray[0][0]+nameArray[1][0] : nameArray[0][0]

    const div = createDiv(mergedOptions)

    if(mergedOptions.avatarImage == '') 
        div.innerHTML = mergedOptions.avata`<span>${initials}</span>`
    
    if(mergedOptions.returnHTML)
    {
        return div
    }
    else{
    console.log(div.innerHTML)
        document.querySelector(mergedOptions.root).appendChild(div)
        return true
    }
}

function createDiv(options)
{
    let d = document.createElement('div')
    d.style.height = options.height
    d.style.width  = options.width
    d.style.backgroundColor = options.backGround
    d.style.color = options.fontColor
    d.style.fontSize = options.fontSize
    d.style.borderRadius = options.rounded ? '50%' : '0%';
    d.style.display = 'grid'
    d.style.placeItems = "center"
    d.style.fontWeight = options.fontWeight
   
    if(options.avatarImage != '')
    {
        d.style.backgroundImage = `url(${options.avatarImage})`
        d.style.backgroundPosition = 'center center'
        d.style.backgroundSize = 'cover'
        d.style.backgroundClip = 'padding-box'
        d.style.mozBackgroundClip = "padding"
    }

    return d
}


module.exports.userinitial = userinitial