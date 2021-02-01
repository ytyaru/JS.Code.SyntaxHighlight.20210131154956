class CodeViewer {
    static REGEX_FILE = /(.*)(?:\.([^.]+$))/;
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
        codeTag.parentNode.setAttribute('class', CLASS_COPY_BUTTON);
        codeTag.parentNode.setAttribute('data-clipboard-target', `#${id_code}`);
        codeTag.parentNode.append(CodeViewerButtons.create(codeTag, CLASS_COPY_BUTTON, id_code, id_path), codeTag);
    }
}

