/**
 * Fetch and replacing the icons during the event
 * DOMContentLoaded with window.fetch.
 */

 const request = (url) => {
    return new Request(url, {
        method: 'GET',
        redirect: 'follow',
        headers: {
            'Accept': 'image/svg+xml'
        },
    })
}

/**
 * Insert the <path> section of the fetched svg text file
 * into the designated Element.
 * 
 * @param {string} svg 
 * @param {Element} el 
 */
const insertPath = (svgText, el) => {
    
    let newEl = document.createElement('div')
    newEl.innerHTML = svgText
    
    // Standard style
    el.style.display = 'inline'

    newEl.querySelector('svg').childNodes.forEach(c => {
        el.appendChild(c)
    })
}

const getKgIconsStyle = () => {
    // Get HTML head element
    let head = document.getElementsByTagName('head')[0]
    // Create new link Element
    let link = document.createElement('link') // set the attributes for link element 
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href = '/kgicons/kgicons.css';
    // Append link element to HTML head
    head.appendChild(link); 
}

document.addEventListener('DOMContentLoaded', () => {
    
    let kgIcons = document.querySelectorAll('svg[data-group="kgicons"]')
    
    if (kgIcons.length > 0) {
        // Load additional css into the html file
        getKgIconsStyle()
        // Insert path to all svg elements marked with `data-group`
        kgIcons.forEach(kgIcon => {       
            let iconPropName = kgIcon.dataset.name // hero:o:user 
            let iconPropMerged = iconPropName.split(":").join("/") // => /kgicons/ic/hero/o/user.svg
            let iconPath = `/kgicons/ic/${iconPropMerged}.svg`
            
                window.fetch(request(iconPath))
                    .then(res => {
                        if (!res.ok) {
                                throw new Error('Failed to fetch KgIcon, got response with ', res.status);
                            }
                            return res.text()
                    })
                    .then(data =>  insertPath(data, kgIcon))
                    .catch(err => console.error(err.message))
            })
    }
            
})