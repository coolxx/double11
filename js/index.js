$(function(){
	if($(window).width()<720){
			(function (win,doc){
				function change(){
					doc.documentElement.style.fontSize=20*doc.documentElement.clientWidth/360+'px';
				}
				change();
				win.addEventListener('resize',change,false);
			})(window,document);
		}
	$(window).resize(function(){
		if($(window).width()<720){
			(function (win,doc){
				function change(){
					doc.documentElement.style.fontSize=20*doc.documentElement.clientWidth/360+'px';
				}
				change();
				win.addEventListener('resize',change,false);
			})(window,document);
		}
	})
	$('.btn-box li').click(function () {
		$('.btn-box li').removeClass('act1').eq($(this).index()).addClass('act1');
		$('.show-box').hide().eq($(this).index()).show()
    })
    $('.QR-r').click(function () {
        $('.qr1').show()
    })
    $('.qr1').click(function () {
        $(this).hide()
    })
    $('.ban-a3').click(function () {
        $('.qr2').show()
    })
    $('.qr2').click(function () {
        $('.qr2').hide()
    })
    $('.add-wx').click(function () {
        $('.qr3').show()
    })
    $('.qr3').click(function () {
        $('.qr3').hide()
    })
})