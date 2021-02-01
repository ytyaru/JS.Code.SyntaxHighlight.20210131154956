class CodeTag {
    static parse() {
        console.log('CodeTag.parse()');
        const CLASS_COPY_BUTTON = 'code-copy-btn';
        const codes = document.querySelectorAll('code[src]');
        codes.forEach((code, index) => {
            CodeViewer.create(code, index, CLASS_COPY_BUTTON);
        });
        const clipboard = new ClipboardJS(`.${CLASS_COPY_BUTTON}`);
        clipboard.on('success', (e) => {
            document.getSelection().empty();
        });
    }
}

