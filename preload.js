console.log('dziaala!!!');
setInterval(function () {
    $('body>*>*:not(#exchange-chart)').each(function (i, e) {
        $(e).css('display', 'none')
    });
},1000);
