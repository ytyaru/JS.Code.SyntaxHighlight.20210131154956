class Code {
    static parse() {
        for (let code of document.querySelectorAll('code')) {
            code.getAttribute('src');
            code.setAttribute('class', 'javascript');
            hljs.initHighlightingOnLoad();
        }
    }
}

