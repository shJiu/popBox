/*<div class='mask'>
		<div class="tan">
			<div class="cha"><a>&times;</a></div>
			<h3 class='h'>信息</h3>
			<div class="t"><span>你确定要删除吗？</span></div>
			<div class="bot"><a class="btn" id='btn1'>确定</a><a class="btn" id='btn2'>取消</a></div>
		</div>
	</div>*/

	$.dialog={
		confirm:function(opts){
			var _body=$('body');
				_tan=$('<div></div>').addClass('tan');
				_tan.appendTo(_body);
				_cha=$('<div><a>&times;</a></div>').addClass('cha');
				_cha.appendTo(_tan);
				_h=$('<h3>'+opts.masg+'</h3>').addClass('h')
				_h.appendTo(_tan);
				_t=$('<div><span>'+opts.title+'</span></div>').addClass('t');
				_t.appendTo(_tan);
				_bot=$('<div></div>').addClass('bot');
				_bot.appendTo(_tan);
				for(var i in opts.button){
					var _a=$('<a class="btn">'+opts.button[i]+'</a>')
					_a.appendTo(_bot)
				}
				_mask=$('<div></div>').addClass('mask')
				_tan.wrap(_mask)
				//点击确认
				$('.btn').eq(0).on('click',function(){
					opts.yes()
				})
				//点击取消
				$('.btn').eq(1).on('click',function(){
					opts.no()
				})
				//点击X关闭页面
				$('.cha').on('click',function(){
					$(this).parents('.mask').remove()
				})
				//是否可拖动
				if(opts.isDarg){
					_tan.on('mousedown',function(e){
						var movl=e.pageX-_tan.offset().left
						var movt=e.pageY-_tan.offset().top
						$(document).on('mousemove',function(e){
							var l=e.pageX-movl
							var t=e.pageY-movt
							_tan.css({'left':l,'top':t})
						})
						_tan.on('mouseup',function(){
							$(document).off('mousemove')
						})
					})
				}
		}
	}

	$.dai={
		alert:function(opts){
			var _body=$('body');
				_tan=$('<div></div>').addClass('tann');
				_tan.appendTo(_body);
				_cha=$('<div><a>&times;</a></div>').addClass('cha');
				_cha.appendTo(_tan);
				_h=$('<h3>'+opts.masg+'</h3>').addClass('h')
				_h.appendTo(_tan);
				_t=$('<div><span>'+opts.title+'</span></div>').addClass('t');
				_t.appendTo(_tan);
				_bot=$('<div><span class="aa">'+opts.btn+'</span></div>').addClass('bot');
				_bot.appendTo(_tan);
				_mask=$('<div></div>').addClass('mask');
				_tan.wrap(_mask)
				//点击X关闭页面
				_cha.on('click',function(){
					$(this).parents('.mask').remove()
				})
				//点击确定
				$('.aa').on('click',function(){
					$(this).parents('.mask').remove()
				})
				//是否可拖动
				if(opts.isDarg){
					_tan.on('mousedown',function(e){
						var movl=e.pageX-_tan.offset().left
						var movt=e.pageY-_tan.offset().top
						$(document).on('mousemove',function(e){
							var l=e.pageX-movl
							var t=e.pageY-movt
							_tan.offset({'left':l,'top':t})
						})
						_tan.on('mouseup',function(){
							$(document).off('mousemove')
						})
					})
				}
		}
	}