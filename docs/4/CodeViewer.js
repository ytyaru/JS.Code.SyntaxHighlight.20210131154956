class CodeViewer {
    static create(codeTag, index, CLASS_COPY_BUTTON) {
        fetch(codeTag.getAttribute('src'))
            .then((response) => {
                if (response.status !== 200) { return ''; }
                return response.text();
            })
            .then(text => codeTag.innerHTML = hljs.highlightAuto(text).value);
        const id = `source-code-${index}`;
        codeTag.setAttribute('id', id);
        codeTag.parentNode.append(CodeViewer.#createCopyButton(id, CLASS_COPY_BUTTON), codeTag);
        CodeViewer.#addEventListener(id, codeTag);
    }
    static #createCopyButton(id, CLASS_COPY_BUTTON) {
        const button = document.createElement('button');
        button.setAttribute('class', CLASS_COPY_BUTTON);
        button.setAttribute('data-clipboard-target', `#${id}`);
        button.style.display = 'none'; // inline
        button.style.position = 'fixed';
        button.style.right = 0;
        button.style.opacity = 0.3;
        button.textContent = '📋';
        button.title = 'Copy';
        return button;
    }
    static #addEventListener(id, codeTag) {
        const target = document.querySelector(`#${id}`).parentNode;
        target.addEventListener('mouseover', (event)=>{
            const btn = event.target.querySelector(`button`);
            if (!btn) { return; }
            btn.style.display = 'inline';
        });
        target.addEventListener('mouseleave', (event)=>{
            const btn = event.target.querySelector(`button`);
            if (!btn) { return; }
            btn.style.display = 'none';
        });
    }
}

