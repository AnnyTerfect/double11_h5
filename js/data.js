let weight = 0, mark = 0, avgmark = 0, comment = '', prob = 0

let questions = [
	[{
		weight: 5,
		title: '突然有一片叶子掉到了你的书上，你会',
		options: [
		{
			content: '叶子挡住我早读了，于是把它抖到地上',
			mark: 60,
		},
		{
			content: '受到牛顿苹果启发，盯着叶子开始冥想',
			mark: 80,
		},
		{
			content: '直接无视，继续读书',
			mark: 40,
		},
		{
			content: '拿起叶子，准备当作书签或者用来素描',
			mark: 100,
		}]
	},
	{
		weight: 8,
		title: '如果突然有一个人拍了你一下，你觉得会是',
		options: [
		{
			content: '一个极度好看而陌生的男孩子/女孩子',
			mark: 95,
		},
		{
			content: '一位保洁阿姨',
			mark: 45,
		},
		{
			content: '一位晨练的老人家',
			mark: 45,
		},
		{
			content: '一个认识的同学',
			mark: 80,
		}]
	},
	{
		weight: 8,
		title: '你觉得这幅场景处于哪个季节最好看',
		options: [
		{
			content: '春天',
			mark: 85,
		},
		{
			content: '夏天',
			mark: 75,
		},
		{
			content: '秋天',
			mark: 55,
		},
		{
			content: '冬天',
			mark: 65,
		}]
	},
	{
		weight: 3,
		title: '如果有一个声音打断了你的早读 你觉得是什么声音',
		options: [
		{
			content: '小孩子的哭闹声',
			mark: 50,
		},
		{
			content: '猫狗的叫声',
			mark: 30,
		},
		{
			content: '高谈阔论的人声',
			mark: 45,
		},
		{
			content: '车子的喇叭声',
			mark: 15
		}]
	}],

	[{
		weight: 20,
		title: '抬头看到一个很好看的异性，你会',
		options: [
		{
			content: '一边低头假装学习一边偷瞄',
			mark: 80,
		},
		{
			content: '正大光明地看对方，期望对方注意到自己',
			mark: 100,
		},
		{
			content: '什么都不做，暗暗祈祷对方能主动过来搭讪',
			mark: 60,
		},
		{
			content: '万般皆下品唯有读书高，心无旁骛继续学习',
			mark: 85,
		}]
	},
	{
		weight: 10,
		title: '在图书馆被一个说着听不懂语言的外国人搭讪，你会',
		options: [
		{
			content: '用肢体语言比划，努力和对方交流',
			mark: 80,
		},
		{
			content: '用英文或者中文道歉，然后离开',
			mark: 80,
		},
		{
			content: '示意对方在原地不要走动，去搬救兵',
			mark: 75,
		},
		{
			content: '不接话，赶紧溜',
			mark: 45,
		}]
	},
	{
		weight: 15,
		title: '刚出图书馆，发现下雨了，这时你有一把伞，一个同性来找你拼伞，这时你看到旁边有个异性看着你露出期待的眼神，你会',
		options: [
		{
			content: '鉴于先来后到，和同性拼伞',
			mark: 90,
		},
		{
			content: '由于异性相吸，主动找异性拼伞',
			mark: 90,
		},
		{
			content: '把伞给他们两，成全一段姻缘',
			mark: 100,
		},
		{
			content: '理都不理自己走了',
			mark: 60,
		}]
	},
	{
		weight: 20,
		title: '你坐在一对情侣的对面，他们做出了一些亲密的举动，这时你',
		options: [
		{
			content: '假装学习，暗中观察，学习经验',
			mark: 95,
		},
		{
			content: '眼不见为净，低头学习或换座位',
			mark: 60,
		},
		{
			content: '用期待的眼神正面直视',
			mark: 100,
		},
		{
			content: '出声/出手制止他们',
			mark: 40,
		}]
	}],

	[{
		weight: 10,
		title: '如果你非常想去XX食堂吃饭，但在路上遇到几个朋友，他们邀你去另一个食堂吃饭，你会',
		options: [
		{
			content: '虽然不太情愿去那个食堂，但跟朋友一起吃饭挺开心的于是跟他们一起去',
			mark: 80,
		},
		{
			content: '婉拒，仍然独自去自己想去的食堂',
			mark: 75,
		},
		{
			content: '不存在让自己非去不可的食堂，于是跟朋友去另一个食堂',
			mark: 85,
		},
		{
			content: '劝说朋友跟自己去自己想去的食堂',
			mark: 65
		}]
	},
	{
		weight: 8,
		title: '在食堂选了最安静的一个位置坐下准备吃饭，但碰到看上去会边吃边交谈的人想坐你旁边，你会',
		options: [
		{
			content: '允许他们坐旁边，自己戴上耳机保持清净',
			mark: 75,
		},
		{
			content: '直接以自己想安静一点 拒绝他们要坐的请求',
			mark: 60,
		},
		{
			content: '假装身边已有人占了座而婉拒他们坐旁边的请求',
			mark: 75,
		},
		{
			content: '允许他们坐，甚至吃饭时加入他们的聊天话题',
			mark: 80,
		}]
	},
	{
		weight: 15,
		title: '在食堂，你遇到了一个陌生异性卡里没钱了，你帮ta付了钱，之后，ta主动提出转钱，这时你',
		options: [
		{
			content: '提出直接扫码转账',
			mark: 60,
		},
		{
			content: '提出加微信转账',
			mark: 85,
		},
		{
			content: '婉拒，不用了，小钱不值一提',
			mark: 75,
		},
		{
			content: '不用了，加个微信好了',
			mark: 90,
		}]
	},
	{
		weight: 15,
		title: '在食堂，你遇到了一个陌生异性卡里没钱了，你帮ta付了钱，之后，ta主动提出转钱，这时你',
		options: [
		{
			content: '提出直接扫码转账',
			mark: 60,
		},
		{
			content: '提出加微信转账',
			mark: 85,
		},
		{
			content: '婉拒，不用了，小钱不值一提',
			mark: 75,
		},
		{
			content: '不用了，加个微信好了',
			mark: 90,
		}]
	}],

	[{
		weight: 5,
		title: '你最喜欢在操场做的事是',
		options: [
		{
			content: '和朋友一起打球',
			mark: 75,
		},
		{
			content: '独自跑步或者一个人锻炼肢体机',
			mark: 70,
		},
		{
			content: '不管球场上是谁，想玩什么就跑过去加入他们',
			mark: 60,
		},
		{
			content: '安静地坐在草地上或者静静散步听歌',
			mark: 60,
		}]
	},
	{
		weight: 5,
		title: '你最喜欢在操场做的事是',
		options: [
		{
			content: '和朋友一起打球',
			mark: 75,
		},
		{
			content: '独自跑步或者一个人锻炼肢体机',
			mark: 70,
		},
		{
			content: '不管球场上是谁，想玩什么就跑过去加入他们',
			mark: 60,
		},
		{
			content: '安静地坐在草地上或者静静散步听歌',
			mark: 60,
		}]
	},
	{
		weight: 5,
		title: '如果你在几十米开外看到一个关系很好无话不说的朋友，你会',
		options: [
		{
			content: '快速跑过去跟他打招呼',
			mark: 75,
		},
		{
			content: '超级大声叫对方名字让他看到自己',
			mark: 60,
		},
		{
			content: '在某个地方堵截他并吓他一跳',
			mark: 20,
		},
		{
			content: '傲娇等他发现自己并来给自己打招呼',
			mark: 15,
		}]
	},
	{
		weight: 5,
		title: '如果你在几十米开外看到一个关系很好无话不说的朋友，你会',
		options: [
		{
			content: '快速跑过去跟他打招呼',
			mark: 75,
		},
		{
			content: '超级大声叫对方名字让他看到自己',
			mark: 60,
		},
		{
			content: '在某个地方堵截他并吓他一跳',
			mark: 20,
		},
		{
			content: '傲娇等他发现自己并来给自己打招呼',
			mark: 15,
		}]
	}],

	[{
		weight: 10,
		title: '在吃饭的时候，碰到有人来找你扫二维码，你认为对方想',
		options: [
		{
			content: '觉得你好看，来找你要联系方式',
			mark: 80,
		},
		{
			content: '对方是创业者需要拉人扫码',
			mark: 60,
		},
		{
			content: '对方是个骗子',
			mark: 30,
		},
		{
			content: '对方遇到了什么困难，需要帮助',
			mark: 60,
		}]
	},
	{
		weight: 8,
		title: '当你在商圈吃完饭后 你会',
		options: [
		{
			content: '把吃饭时拍的美食分享到朋友圈',
			mark: 80,
		},
		{
			content: '准备去看一场电影或者到处逛一逛',
			mark: 65,
		},
		{
			content: '直接返程，不愿耽误太多时间',
			mark: 45,
		},
		{
			content: '再吃一顿',
			mark: 15,
		}]
	},
	{
		weight: 5,
		title: '以下几种情形，你会选择在哪一家餐馆吃饭',
		options: [
		{
			content: '非常想去的餐馆，排队需要2小时',
			mark: 55,
		},
		{
			content: '比较想去的餐馆，排队需要40min',
			mark: 65,
		},
		{
			content: '一般般想去的餐馆，不需要排队，但坐不到好位置',
			mark: 60,
		},
		{
			content: '不太想去的餐馆，不需要排队，但可以坐到全店最好的位置',
			mark: 35,
		}]
	},
	{
		weight: 5,
		title: '以下几种情形，你会选择在哪一家餐馆吃饭',
		options: [
		{
			content: '非常想去的餐馆，排队需要2小时',
			mark: 55,
		},
		{
			content: '比较想去的餐馆，排队需要40min',
			mark: 65,
		},
		{
			content: '一般般想去的餐馆，不需要排队，但坐不到好位置',
			mark: 60,
		},
		{
			content: '不太想去的餐馆，不需要排队，但可以坐到全店最好的位置',
			mark: 35,
		}]
	}]
]

let result = [
	{
		comment: ['大家都说我因为爱着杨过大侠 才在峨嵋山上出了家',
				  '其实我只是爱上了峨嵋山上的云和霞',
				  '像极了十六岁那年的烟花'],
		lmark: 0,
		umark: 65,
		prob: 0,
	},
	{
		comment: ['易求无价宝', '难得有心郎'],
		lmark: 65,
		umark: 70,
		prob: 20,
	},
	{
		comment: ['人间自是有情痴', '此恨不关风与月'],
		lmark: 70,
		umark: 72,
		prob: 50,
	},
	{
		comment: ['云想衣裳花想容', '春风拂槛露华浓'],
		lmark: 72,
		umark: 74,
		prob: 70,
	},
	{
		comment: ['若似月轮终皎洁', '不辞冰雪为卿热'],
		lmark: 74,
		umark: 76,
		prob: 80,
	},
	{
		comment: ['金风玉露一相逢', '便胜却 人间无数'],
		lmark: 76,
		umark: 79,
		prob: 90,
	},
	{
		comment: ['星沉海底当窗见', '雨过河源隔座看'],
		lmark: 79,
		umark: 83,
		prob: 98,
	},
	{
		comment: ['问世间情为何物', '直教人生死相许'],
		lmark: 83,
		umark: 100,
		prob: 100,
	}
]
