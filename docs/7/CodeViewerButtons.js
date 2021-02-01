class CodeViewerButtons {
    static REGEX_FILE = /(.*)(?:\.([^.]+$))/;
    static create(codeTag, CLASS_COPY_BUTTON, id_code, id_path) {
        const div = CodeViewerButtons.#createDiv(codeTag, CLASS_COPY_BUTTON, id_code, id_path);
        CodeViewerButtons.#addEventListener(codeTag, id_code);
        return div;
    }
    static #addEventListener(codeTag, id_code) {
        const target = document.querySelector(`#${id_code}`).parentNode;
        target.addEventListener('mouseover', (event)=>{
            const div = event.target.querySelector(`div`);
            if (!div) { return; }
            div.style.display = 'inline';
        });
        target.addEventListener('mouseleave', (event)=>{
            const div = event.target.querySelector(`div`);
            if (!div) { return; }
            div.style.display = 'none';
        });
    }
    static #createDiv(codeTag, CLASS_COPY_BUTTON, id_code, id_path) {
        const div = document.createElement('div');
        div.style.display = 'none'; // none
        div.style.position = 'fixed';
        div.style.right = 0;
        div.style.opacity = 0.3;
        div.append(CodeViewerButtons.#createCopyButton(id_code, CLASS_COPY_BUTTON));
        div.append(CodeViewerButtons.#createCopyThePathButton(id_path, CLASS_COPY_BUTTON, codeTag.getAttribute('src'), codeTag.getAttribute('path')));
        return div;
    }
    static #createCopyButton(id, CLASS_COPY_BUTTON) {
        const button = document.createElement('button');
        button.setAttribute('class', CLASS_COPY_BUTTON);
        button.setAttribute('data-clipboard-target', `#${id}`);
        button.textContent = '📋';
        button.title = 'Copy';
        return button;
    }
    static #createCopyThePathButton(id, CLASS_COPY_BUTTON, src, path) {
        const button = document.createElement('button');
        button.setAttribute('id', id);
        button.setAttribute('class', CLASS_COPY_BUTTON);
        button.setAttribute('data-clipboard-target', `#${id}`);
        button.textContent = '📋';
        button.title = 'Copy the path';
        button.textContent = CodeViewerButtons.#createPath(src, path);
        return button;
    }
    static #createPath(src, path) { // ${file} = ${name} + '.' + ${ext}
        console.log(src, path);
        if (!path) { return src; }
        const paths = src.split('/');
        const file = paths.slice(-1)[0];
        const fileNames = file.split('.');
        const ext = fileNames.pop(); 
        const name = fileNames.join('.');
        let result = path;
        result = result.replace('${file}', file);
        result = result.replace('${name}', name);
        result = result.replace('${ext}', ext);
        return result;
    }
}

