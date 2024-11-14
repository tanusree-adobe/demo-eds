export default function decorate (block) {
    //decorate the quote as a block quote element
    const quoteDiv = block.querySelector(':scope > div > div > p'); //div representing the quote
    const blockquote = document.createElement('blockquote'); //extracting the content of the quote and creating new blockquote element
    blockquote.innerHTML = `"${quoteDiv.innerHTML}"`;//set the innerhtml element to the quote
    quoteDiv.parentElement.replaceWith(blockquote);//replate the current div with blockquote
    
    //decorate the author
    const authorDiv = block.querySelector(':scope > div > div > p');
    if (authorDiv) {
        const p = document.createElement('p');
        p.innerHTML = `<em> -${authorDiv.innerHTML}</em>`;
        authorDiv.parentElement.replaceWith(p);
    }
}