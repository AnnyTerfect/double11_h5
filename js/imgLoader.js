let imgs = [
	{
		class: 'ufo',
		src: 'img/loadpage/ufo.png',
		width: 484,
		height: 635
	},

	{
		class: 'platform',
		src: 'img/loadpage/platform.png',
		width: 247,
		height: 112
	},
	
	{
		class: 'float',
		src: 'img/loadpage/float.png',
		width: 110,
		height: 116
	},

	{
		class: 'guide',
		src: 'img/background/guide.jpg',
		size: 'cover',
	},

	{
		class: 'ball',
		src: 'img/loadpage/ball.png',
		width: 264,
		height: 259
	},

	{
		class: 'street',
		src: 'img/background/street.jpg',
		size: 'auto 120%',
	},

	{
		class: 'restaurant',
		src: 'img/background/restaurant.jpg',
		size: 'auto 120%',
	},

	{
		class: 'library',
		src: 'img/background/library.jpg',
		size: 'auto 120%',
	},

	{
		class: 'garden',
		src: 'img/background/garden.jpg',
		size: 'auto 120%',
	},

	{
		class: 'playground',
		src: 'img/background/playground.jpg',
		size: 'auto 120%',
	},

	{
		class: 'lockbody',
		src: 'img/questions/lockbody.png',
		width: 326,
		height: 464,
	},

	{
		class: 'lockhead',
		src: 'img/questions/lockhead.png',
		width: 191,
		height: 178,
	},

	{
		class: 'question-container',
		src: 'img/questions/bg.jpg',
		size: 'cover',
	},

	{
		class: 'result',
		src: 'img/background/result.jpg',
		size: 'cover',
	},

	{
		class: 'qrcode',
		src: 'img/others/qrcode.png',
		width: 260,
		height: 260,
	}
]
//图片路径尺寸等数据

let loadNum = 0
let ufoFlag = false, floatFlag = false, platformFlag = false
//加载页元素加载标志

for (let i = 0; i < imgs.length; i++) {
	let timg = new Image()
	let thisimg = imgs[i]

	$(timg).on('load', function () {
		loadNum++
		//加载计数

		switch(thisimg.class) {
			case 'ufo': {
				ufoFlag = true
				break
			};
			case 'float': {
				floatFlag = true
				break
			};
			case 'platform': {
				platformFlag = true
				break
			};
		}
		//加载页元素标志

		let w = $('.' + thisimg.class).width(), h = '', s = ''
		if (thisimg.width != undefined && thisimg.height != undefined) {
			h = 1.0 * w * thisimg.height / thisimg.width + 'px'
			s = '100% 100%'
		}

		if (thisimg.size != undefined) {
			s = thisimg.size
		}
		//检查是否需要设置高度
		$('.' + thisimg.class).css({background: 'url(' + thisimg.src + ')',
									backgroundPosition: 'center',
									backgroundRepeat: 'no-repeat',
									backgroundSize: s,
									backgroundAttachment: thisimg.attachment,
									height: h})
		//背景绑定和尺寸调整							  

		$(window).on('resize', function () {
			let w = $('.' + thisimg.class).width()
			console.log(1.0 * w * thisimg.height / thisimg.width + 'px')
			$('.' + thisimg.class).css({height: 1.0 * w * thisimg.height / thisimg.width + 'px'})
		})
		//窗口大小改变保持尺寸不变

		let loadTimer = setInterval(function () {
			$('.slide').css('transform', 'scaleX(' + 1.0 * loadNum / imgs.length + ')')
		}, 1)
		//进度条滚动

		if (loadNum == imgs.length) {
			clearInterval(loadTimer)
			setTimeout(function () {
				$('.slide-mask').fadeOut(1500)
				$('.start').fadeIn(1000)
							.addClass('pulse animated')
							.on('animationend', function () {
								let _this = this
								$(this).removeClass('pulse animated')
								setTimeout(function () {
									$(_this).removeClass('pulse animated')
											.addClass('pulse animated')
								}, 3000)
							})
			}, 1000)
			//开始按钮显示
		}
	})
	timg.src = thisimg.src
}
//图片预加载

loadItemTimer = setInterval(function () {
	if (ufoFlag && floatFlag && platformFlag) {
		clearInterval(loadItemTimer)
		$('.ufo').addClass('ufo-fade-in')
				.on('animationend', function () {
				 	$(this).addClass('ufo-fade-in-end')
				 			.removeClass('ufo-fade-in')
				})
		$('.float, .platform').addClass('float-fade-in')
								.on('animationend', function () {
									$(this).addClass('float-fade-in-end')
											.removeClass('float-fade-in')
									$('.ufo, .float').addClass('float-bounce')
							  	})
		$('.progress').fadeIn()
	}
})
//加载页元素进入
