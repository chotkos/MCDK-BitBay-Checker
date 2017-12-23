console.log('dziaala!!!');


setTimeout(function () {
    /*console.log(window.location);
    debugger;
    var url = new URL(window.location.href);
    var crypto = url.searchParams.get("b");
    var country = url.searchParams.get("a");
*/
    /*
        $('#currencyButton > span.content').click()
        setTimeout(function () {
            $('#selectMainCurrency > div.modal-body > div > div.flex-child.flex-child-1.shift-container > ul > li.flex-child.flex-child-1.currency-column.crypto-list > ul > li > a[data-currency="' + crypto + '"]').click();

            setTimeout(function () {
                $('#currencyTableContainer > tbody > tr.currency-parent.' + country + ' > td > div > span.currency-pair').click();
    */
    setTimeout(function () {

        $('body>*>*:not(#exchange-chart)').each(function (i, e) {
            $(e).css('display', 'none')
        });
    }, 2000);
    /*
            }, 2000);
        }, 1000);*/



}, 1000);
