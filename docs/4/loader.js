class Loader {
    static load(url) {
        $('code[src]').each((index,element)=>{
            $.get($(element).attr('src')).done((data)=>{
                console.log(this, $(element));
//                $(element).html(hljs.highlightAuto(data, ['javascript']).value);
                $(element).html(hljs.highlightAuto(data).value);
                const id = `code${index}`;
                $(element).attr('id', id);
                $(element).css('z-index', 0);
//                $(element).parent().attr('data-clipboard-target', `#${id}`);
                const btn = `<button class="btn" data-clipboard-target="#${id}" style="z-index:3; display:inline; position: fixed; right:0;">Copy</button>`;
                $(element).parent().prepend(btn);
//                $(element).parent().append(btn);
                $(element).parent().hover(()=>{$(`button[data-clipboard-target="#${$(element).attr('id')}"]`).css('display', 'inline');},()=>{$(`button[data-clipboard-target="#${$(element).attr('id')}"]`).css('display', 'none');});
            });
        });
        const clipboard = new ClipboardJS('.btn');
        // クリップ成功
        clipboard.on('success', (e) => {
            alert(e.text + 'をコピーしたよ');
//            console.log(e);
//            e.trigger.selected = false;
            // 選択状態を解除する
            document.getSelection().empty();
        });
    }
}
