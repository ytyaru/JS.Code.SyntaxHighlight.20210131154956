class CodeViewer {
    static create(codeTag, index, CLASS_COPY_BUTTON) {
        fetch(codeTag.getAttribute('src'))
            .then((response) => {
                if (response.status !== 200) { return ''; }
                return response.text();
            })
            .then(text => codeTag.innerHTML = hljs.highlightAuto(text).value);
        const id_code = `source-code-${index}`;
        const id_path = `source-code-file-path-${index}`;
        codeTag.setAttribute('id', id_code);
        codeTag.setAttribute('class', CLASS_COPY_BUTTON);
        codeTag.setAttribute('data-clipboard-target', `#${id_code}`);
//        codeTag.parentNode.append(CodeViewer.#createCopyButton(id_code, CLASS_COPY_BUTTON), codeTag);
//        codeTag.parentNode.append(CodeViewer.#createCopyThePathButton(id_path, CLASS_COPY_BUTTON, codeTag.getAttribute('src')), codeTag);
        
        codeTag.parentNode.append(CodeViewer.#createButtonGroup(codeTag, CLASS_COPY_BUTTON, id_code, id_path), codeTag);
        CodeViewer.#addEventListener(id_code, codeTag);
    }
    static #createButtonGroup(codeTag, CLASS_COPY_BUTTON, id_code, id_path) {
        const div = document.createElement('div');
        div.style.display = 'none'; // none
        div.style.position = 'fixed';
        div.style.right = 0;
        div.style.opacity = 0.3;
        div.append(CodeViewer.#createCopyButton(id_code, CLASS_COPY_BUTTON));
        div.append(CodeViewer.#createCopyThePathButton(id_path, CLASS_COPY_BUTTON, codeTag.getAttribute('src')));
        return div;
    }
    static #createCopyButton(id, CLASS_COPY_BUTTON) {
        const button = document.createElement('button');
        button.setAttribute('class', CLASS_COPY_BUTTON);
        button.setAttribute('data-clipboard-target', `#${id}`);
//        button.style.display = 'none'; // inline
//        button.style.position = 'fixed';
//        button.style.right = 0;
//        button.style.opacity = 0.3;
        button.textContent = '📋';
        button.title = 'Copy';
        return button;
    }
    static #addEventListener(id, codeTag) {
        const target = document.querySelector(`#${id}`).parentNode;
        target.addEventListener('mouseover', (event)=>{
            const div = event.target.querySelector(`div`);
            if (!div) { return; }
            div.style.display = 'inline';
            /*
            for (let btn of event.target.querySelectorAll(`button`)) {
                if (!btn) { return; }
                btn.style.display = 'inline';
            }
            */
//            const btn = event.target.querySelector(`button`);
//            if (!btn) { return; }
//            btn.style.display = 'inline';
        });
        target.addEventListener('mouseleave', (event)=>{
            const div = event.target.querySelector(`div`);
            if (!div) { return; }
            div.style.display = 'none';
            /*
//            const btn = event.target.querySelector(`button`);
//            if (!btn) { return; }
//            btn.style.display = 'none';
            for (let btn of event.target.querySelectorAll(`button`)) {
                if (!btn) { return; }
                btn.style.display = 'none';
            }
            */
        });
    }
    static #createCopyThePathButton(id, CLASS_COPY_BUTTON, path) {
        const button = document.createElement('button');
        button.setAttribute('id', id);
        button.setAttribute('class', CLASS_COPY_BUTTON);
        button.setAttribute('data-clipboard-target', `#${id}`);
//        button.style.display = 'none'; // inline
//        button.style.display = 'inline'; // inline
//        button.style.position = 'fixed';
//        button.style.right = 0;
//        button.style.opacity = 0.3;
        button.textContent = '📋';
        button.title = 'Copy the path';
        button.textContent = path;
        return button;
    }

}

