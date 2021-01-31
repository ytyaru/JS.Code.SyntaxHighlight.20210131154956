class Loader {
    static load(url) {
        $('code[src]').each((index,element)=>{
            $.get($(element).attr('src')).done((data)=>{
                console.log(this, $(element));
                $(element).html(hljs.highlightAuto(data, ['javascript']).value);
                const id = `code${index}`;
                $(element).attr('id', id);
                const btn = `<button class="btn" data-clipboard-target="#${id}">Copy</button>`;
                $(element).parent().append(btn);

                /*
                $(element).click((event)=>{
                    $(element).select();
                    document.execCommand('copy');
                    alert('copy!!');
                });
                */
            });
        });
        const clipboard = new ClipboardJS('.btn');
        // クリップ成功
        clipboard.on('success', (e) => {
            alert(e.text + 'をコピーしたよ');
        });
    }
}
