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
    // el.style.marginBottom = '.2rem'

    newEl.querySelectorAll('path').forEach(p => {
        el.appendChild(p)
    })
}

document.addEventListener('DOMContentLoaded', () => {
    document
        .querySelectorAll('svg[data-group="kgicons"]')
            .forEach(kgIcon => {
                
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
})