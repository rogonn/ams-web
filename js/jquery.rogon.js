/* 17/5/2011:7am kopeks
 * standard js
 */

$(function(){

    $('a.load').click(function(){
        var url = $(this).attr('href');
        $('#ajaxbody').html('<div class="loading">loading..</div>');
        $('#ajaxbody').load(url);
        $(this).parent().parent().find('li').removeClass('selected');
        $(this).parent().addClass('selected');
        return false;
    });

    $('a.delete').click(function(){
        if(!confirm('are you sure to delete this?'))
            return false;
    });

    $('a.modal').click(function(){
        $('#body').append('<div id="modal"></div>'); 
        var url = $(this).attr('href');
        $('#modal').load($url);
    });

});
