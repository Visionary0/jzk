

$(function(){
	//加载
	$('body').append('<div class="laoding"></div>');
	window.onload = function(){
			$('.laoding').remove();
		}
});
function menuFun(){
$('.menuhandle').click(function(e) {
  $('.menulist').slideDown();
});
$(document).bind("click",function(e){   
var target = $(e.target);   
if(target.closest(".menulist").length == 0){   
$(".menulist").hide();   
}   
 })
$(".menulist a").click(function(e) {
    $(".menulist").hide();
});
}  
/*jquery函数封装*/ 
$(function(){
	/*点击切换类*/
		$('[data-Class]').click(function(e){
			var v = $(this).attr('data-Class');
			if($(this).hasClass(v)){
				$(this).removeClass(v)
			}else{
				$(this).addClass(v)
			}
		});
	/*tab1*/	
	$('[data-widget="tab-ground"]').each(function(index, element) {
		var $this = $(this);
        $this.find('[data-widget="tab-item"]').click(function(e){
			$this.toggleClass('active');
			$this.find('[data-widget="tab-content"]').toggle();
		});
    });
	/*列表搜索*/	
	$('[data-widget="search-ground"]').each(function(index, element) {
		var $this = $(this);
        $this.find('[data-widget="search-input"]').focus(function(e){
			if($(this).val()!=''){
			$this.find('[data-widget="search-del"]').show();	
				}
		});
        $this.find('[data-widget="search-del"]').click(function(e){
			$this.find('[data-widget="search-input"]').val('');
			$(this).hide();
		});
		$(document).bind("click",function(e){   
		var target = $(e.target);   
		if(target.closest("[data-widget='search-input']").length == 0){   
		$this.find('[data-widget="search-del"]').hide();
		}   
		})

    });
	/*鼠标聚焦切换类*/
		$('[data-focus]').focus(function(e){
			var v = $(this).attr('data-focus');
			$(this).addClass(v);
		})
		$('[data-focus]').blur(function(e){
			var v = $(this).attr('data-focus');
			$(this).removeClass(v);
		})
})//jqueryend
var orderFun = function(){
   var SequenceNav = $('#tabs'),magicLine = $('#magicLine');
   var _left = SequenceNav.find('li.cur').position().left;
   var _width = SequenceNav.find('li.cur').width();
   magicLine.css({'left':_left,'width':_width});
   $(window).resize(function(e) {
   var _left = SequenceNav.find('li.cur').position().left;
   var _width = SequenceNav.find('li.cur').width();
   magicLine.css({'left':_left,'width':_width});
	});
	  SequenceNav.find('li').click(function() {
        var $el = $(this);
        var $i = $el.index();
        var leftPos = $el.position().left;
		$el.addClass('cur').siblings().removeClass('cur');
		$('#content section').eq($i).fadeIn().siblings().fadeOut();
        magicLine.stop().animate({left: leftPos});
    });
	
	}


