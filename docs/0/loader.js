class Loader {
    static load(url) {
        $('code[src]').each((index,element)=>{
            $.get($(element).attr('src')).done((data)=>{
                console.log(this, $(element));
                $(element).html(hljs.highlightAuto(data, ['javascript']).value);    
            });
        });
    }
}
