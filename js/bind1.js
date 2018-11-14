function slideOut(e) {
	return e.addClass('slide-out')
			.on('animationend', function () {
				let _this = this
				setTimeout(function () {
					$(_this).remove()
				}, 1000)
			})
}

function slideIn (e) {
	return e.show()
			.addClass('slide-in')
			.on('animationend', function () {
				$(this).addClass('slide-in-end')
				$(this).removeClass('slide-in')
			})
}

function nextPage() {
	slideOut($('.page').eq(0))
	return slideIn($('.page').eq(1))
}

$('.start').on('touchstart', function () {
	nextPage().on('animationend', function () {
		for(let i = 0; i < $('.guide-text').length; i++) {
			setTimeout(function () {
				$('.guide-text').eq(i).addClass('fade-in-bottom')
								.on('animationend', function () {
									$(this).css('opacity', '1')
											.removeClass('fade-in-bottom')
								})
			}, i * 800)
			$('.guide-text').eq($('.guide-text').length - 1)
							.on('animationend', function () {
								setTimeout(function () {
									//nextPage()
								}, 2000)
							})
		}
		$(this).unbind()
	})
})

$('.guide-tips').one('touchstart', function () {
	nextPage()
})

for (let i = 0; i < $('.main-page').length; i++) {
	/*$('.main-page .bg').eq(i).on('touchstart', function () {
		let parent = $(this).parent('div')
		console.log(parent)
		let bg = parent.children('.bg')
		let t = $(this).parent('div').children('.lockbody')
		t.children('.lockhead').addClass('lock-open')
								.on('animationend', function () {
									t.fadeOut()
									bg.addClass('bg-zoom-in')
										.on('animationend', function () {
											parent.children('.bg')
													.children('.point')
													.addClass('breath')
													.fadeIn()
										})
								})
		parent.children('.lockbody, .bg').unbind()
	})*/

	$('.main-page .lockbody').eq(i).on('touchstart', function () {
		let parent = $(this).parent('div')
		console.log(parent)
		let bg = parent.children('.bg')
		let t = $(this).parent('div').children('.lockbody')
		t.children('.lockhead').addClass('lock-open')
								.on('animationend', function () {
									t.fadeOut()
									bg.addClass('bg-zoom-in')
										.on('animationend', function () {
											$(this).addClass('bg-zoom-in-end')
													.removeClass('bg-zoom-in')
											parent.children('.bg')
													.children('.point')
													.fadeIn()
													.addClass('breath')	
											if (i == 0) {
												$('.hint').fadeIn(1000)
												setTimeout(function () {
													$('.hint').fadeOut(1000)
												}, 2000)
											}
										})
								})
		parent.children('.lockbody, .bg').unbind()
	})
}

let pageNum = $('.main-page').length
for (let i = 0; i < $('.main-page').length; i++) {
	let t = $('.main-page').eq(i).children('.bg').children('.point')
	for (let j = 0; j < t.length; j++) {
		t.eq(j).on('touchstart', function () {
			t.unbind()
			$('.question-container').addClass('question-enter question-enter-end')
							.one('animationend', function () {
								$(this).removeClass('question-enter')
							})

			$('.question').text(questions[i][j].title)
			for (let k = 0; k < 4; k++) {
				$('.options').eq(k).text(questions[i][j].options[k].content)
									.one('touchstart', function () {
										tweight = questions[i][j].weight
										weight += tweight
										mark += tweight * questions[i][j].options[k].mark

										$('.question-container').addClass('question-leave question-leave-end')
																.one('animationend', function () {
																	$(this).removeClass('question-leave question-enter-end')
																	if(i != pageNum - 1) {
																		nextPage()
																	}
																	else {
																		nextPage().on('animationend', function () {
																			$('.save-button').fadeIn()	
																		})
																	}
																})

										if (i == pageNum - 1) {
											avgmark = mark / weight
											avgmark += Math.floor(Math.random() * 5)
											for (l = 0; l < result.length; l++) {
												if (avgmark >= result[l].lmark && avgmark < result[l].umark) {
													comment = result[l].comment
													prob = result[l].prob
												}
											}

											prob += Math.floor(Math.random() * 10)
											if (prob > 100)
												prob = 100
											if (prob < 0)
												prob = 0
											$('.prob').text(prob + '%')
											if (comment.length == 3) {
												for (l = 0; l < 3; l++) {
													$('.comment').eq(l).text(comment[l])
												}
											}
											else {
												$('.comment').eq(0).text(comment[0])
												$('.comment').eq(2).text(comment[1])
											}
										}
									})
			}
		})
	}
}


$('.save-button').one('touchstart', function () {
	html2canvas(document.getElementsByClassName('result')[0]).then(function(canvas) {
		img = new Image()
		document.body.append(canvas)
		let _canvas = document.getElementsByTagName('canvas')[0]
		img.onload = function () {
			img.src = _canvas.toDataURL('image/png')
			$('.save-button').fadeOut()
		}
		img.src = 'img/background/blank.png'
		document.body.append(img)
		$('canvas, .result').hide()
		$(img).css({position: 'absolute',
					left: '0',
					top: '0',
					width: '100%',
					height: '100%'})
				.addClass('img-zoom-out')
		$('.tips').fadeIn()
	});

})