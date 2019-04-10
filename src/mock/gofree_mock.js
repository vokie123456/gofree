import MockAdapter from 'axios-mock-adapter';
import axios from '../util/axios.js';

const gofree_mock = new MockAdapter(axios);

gofree_mock.onGet('/persona/getCandidatePlaces/3301/').reply(200, {
  code: 200,
  msg: '成功',
  result: [
    {
      city_id: 3301,
      main_pic: 'http://n2-q.mafengwo.net/s4/M00/0B/70/wKgBwU_GEQWnYEmEAAkfeHDilKw82.jpeg?imageMogr2%2Fthumbnail%2F%21192x130r%2Fgravity%2FCenter%2Fcrop%2F%21192x130%2Fquality%2F100',
      id: 1,
      cmt_num: 9799,
      name: '杭州西湖',
    },
    {
      city_id: 3301,
      main_pic: 'http://n2-q.mafengwo.net/s4/M00/0B/70/wKgBwU_GEQWnYEmEAAkfeHDilKw82.jpeg?imageMogr2%2Fthumbnail%2F%21192x130r%2Fgravity%2FCenter%2Fcrop%2F%21192x130%2Fquality%2F100',
      id: 1,
      cmt_num: 9799,
      name: '杭州西湖',
    },
    {
      city_id: 3301,
      main_pic: 'http://n2-q.mafengwo.net/s4/M00/0B/70/wKgBwU_GEQWnYEmEAAkfeHDilKw82.jpeg?imageMogr2%2Fthumbnail%2F%21192x130r%2Fgravity%2FCenter%2Fcrop%2F%21192x130%2Fquality%2F100',
      id: 1,
      cmt_num: 9799,
      name: '杭州西湖',
    },
    {
      city_id: 3301,
      main_pic: 'http://n2-q.mafengwo.net/s4/M00/0B/70/wKgBwU_GEQWnYEmEAAkfeHDilKw82.jpeg?imageMogr2%2Fthumbnail%2F%21192x130r%2Fgravity%2FCenter%2Fcrop%2F%21192x130%2Fquality%2F100',
      id: 1,
      cmt_num: 9799,
      name: '杭州西湖',
    },
    {
      city_id: 3301,
      main_pic: 'http://n2-q.mafengwo.net/s4/M00/0B/70/wKgBwU_GEQWnYEmEAAkfeHDilKw82.jpeg?imageMogr2%2Fthumbnail%2F%21192x130r%2Fgravity%2FCenter%2Fcrop%2F%21192x130%2Fquality%2F100',
      id: 1,
      cmt_num: 9799,
      name: '杭州西湖',
    },
    {
      city_id: 3301,
      main_pic: 'http://n2-q.mafengwo.net/s4/M00/0B/70/wKgBwU_GEQWnYEmEAAkfeHDilKw82.jpeg?imageMogr2%2Fthumbnail%2F%21192x130r%2Fgravity%2FCenter%2Fcrop%2F%21192x130%2Fquality%2F100',
      id: 1,
      cmt_num: 9799,
      name: '杭州西湖',
    },
    {
      city_id: 3301,
      main_pic: 'http://n2-q.mafengwo.net/s4/M00/0B/70/wKgBwU_GEQWnYEmEAAkfeHDilKw82.jpeg?imageMogr2%2Fthumbnail%2F%21192x130r%2Fgravity%2FCenter%2Fcrop%2F%21192x130%2Fquality%2F100',
      id: 1,
      cmt_num: 9799,
      name: '杭州西湖',
    },
    {
      city_id: 3301,
      main_pic: 'http://n2-q.mafengwo.net/s4/M00/0B/70/wKgBwU_GEQWnYEmEAAkfeHDilKw82.jpeg?imageMogr2%2Fthumbnail%2F%21192x130r%2Fgravity%2FCenter%2Fcrop%2F%21192x130%2Fquality%2F100',
      id: 1,
      cmt_num: 9799,
      name: '杭州西湖',
    },
    {
      city_id: 3301,
      main_pic: 'http://n2-q.mafengwo.net/s4/M00/0B/70/wKgBwU_GEQWnYEmEAAkfeHDilKw82.jpeg?imageMogr2%2Fthumbnail%2F%21192x130r%2Fgravity%2FCenter%2Fcrop%2F%21192x130%2Fquality%2F100',
      id: 1,
      cmt_num: 9799,
      name: '杭州西湖',
    },
  ],
});

gofree_mock.onPost('/persona/getFirstPreference').reply(200, {
  code: 200,
  msg: '提交成功',
});

gofree_mock.onGet('/get-trip').reply(config => new Promise(((resolve, reject) => {
  setTimeout(() => {
    resolve([200, {
      code: 200,
      msg: '',
      trips: [
        {
          day: '1',
          trip: ['断桥残雪(10分钟)', '白堤(20分钟)', '杭州酒家曲院风荷(1小时)', '苏堤春晓(30分钟)', '天伦里餐厅汉庭酒店'],
        },
        {
          day: '2',
          trip: ['柳浪闻莺(1小时)', '雷峰塔(2小时)', '龙井村(2小时)', '九溪烟树(1.5小时)', '钱塘江大桥(20分钟)'],
        },
        {
          day: '3',
          trip: ['灵隐飞来峰(0.5小时)', '灵隐寺(1.5小时)', '三潭印月(1.5小时)', '吴山广场(2小时)', '河坊街(1小时)'],
        },
        {
          day: '4',
          trip: ['湿地公园(3-4小时)', '浙江大学玉泉校区(1小时)', '青芝坞(1小时)'],
        },
      ],
    },
    ]);
  }, 2000);
})));

// 延迟2秒
gofree_mock.onGet('/get-line').reply(config => new Promise(((resolve, reject) => {
  setTimeout(() => {
    resolve([200, {
      code: 200,
      msg: '',
      /** 地图数据* */
      map: {
        /**
         * @param x 纬度
         * @param y 经度
         */
        centerP: [
              'x': 120.117768,
              'y': 30.2274,
        ],
        points: [
          [
            {
              x: 120.117768,
              y: 30.2274,
              placeId: 1,
              type: 0,
              name: '西湖风景区',
            },
            {
              x: 120.158169,
              y: 30.264563,
              placeId: 2,
              type: 1,
              name: '断桥残雪',
            },
            {
              x: 120.157069,
              y: 30.263205,
              placeId: 3,
              type: 2,
              name: '白堤',
            },
            {
              x: 120.146286,
              y: 30.257394,
              placeId: 4,
              type: 0,
              name: '孤山公园',
            },
          ],
          [
            {
              x: 120.147227,
              y: 30.256825,
              placeId: 5,
              type: 0,
              name: '楼外楼(孤山路店)',
            },
            {
              x: 120.139927,
              y: 30.255807,
              placeId: 6,
              type: 0,
              name: '曲院风荷',
            },
            {
              x: 120.14437,
              y: 30.250088,
              placeId: 7,
              type: 0,
              name: '苏堤春晓',
            },
            {
              x: 120.146626,
              y: 30.236862,
              placeId: 8,
              type: 0,
              name: '花港观鱼',
            },
          ],
          [
            {
              x: 120.117768,
              y: 30.2274,
              placeId: 1,
              type: 0,
              name: '西湖风景区',
            },
            {
              x: 120.158169,
              y: 30.264563,
              placeId: 2,
              type: 1,
              name: '断桥残雪',
            },
            {
              x: 120.157069,
              y: 30.263205,
              placeId: 3,
              type: 2,
              name: '白堤',
            },
            {
              x: 120.146286,
              y: 30.257394,
              placeId: 4,
              type: 0,
              name: '孤山公园',
            },
          ],
          [
            {
              x: 120.147227,
              y: 30.256825,
              placeId: 5,
              type: 0,
              name: '楼外楼(孤山路店)',
            },
            {
              x: 120.139927,
              y: 30.255807,
              placeId: 6,
              type: 0,
              name: '曲院风荷',
            },
            {
              x: 120.14437,
              y: 30.250088,
              placeId: 7,
              type: 0,
              name: '苏堤春晓',
            },
            {
              x: 120.146626,
              y: 30.236862,
              placeId: 8,
              type: 0,
              name: '花港观鱼',
            },
          ],
        ],
      },
      /** 总览信息* */
      id: 1,
      typeName: '民俗特色',
      destination: '杭州',
      start: '2017/12/05',
      end: '2017/12/15',
      price: 2000,
      /** 地点信息* */
      places: [
        [
          {
            placeId: 1,
            name: '西湖',
            score: 4.9,
            zanNum: 1321,
            tags: [
              '情侣出行',
              '风景名胜',
              '必去',
            ],
            description: '旅行方式目的地出发时间返程时间民俗特色杭州2018-04-142018-04-18西湖西湖无疑是杭州之美的代表，著名的“西湖十景”环绕湖边，自然与人文相互映衬，组成了杭州旅行的核心地带。你不必执着于走遍每个景点，倒可以花上半天或一天在湖边徜徉一番，无论怎么玩，都让人心情舒畅。旅行方式目的地出发时间返程时间民俗特色杭州2018-04-142018-04-18西湖西湖无疑是杭州之美的代表，著名的“西湖十景”环绕湖边，自然与人文相互映衬，组成了杭州旅行的核心地带。你不必执着于走遍每个景点，倒可以花上半天或一天在湖边徜徉一番，无论怎么玩，都让人心情舒畅。',
            price: 320,
            imgs: [
              'https://i0.hippopx.com/photos/640/861/188/the-summer-palace-kunming-lake-beijing-preview.jpg',
              'https://i0.hippopx.com/photos/579/914/396/hangzhou-west-lake-ching-ming-ship-preview.jpg',
              'https://i0.hippopx.com/photos/66/390/567/west-lake-the-scenery-character-sunset-preview.jpg',
              'https://i0.hippopx.com/photos/246/97/299/peaceful-lake-tree-lake-side-preview.jpg',
              'https://i0.hippopx.com/photos/246/97/299/peaceful-lake-tree-lake-side-preview.jpg',
            ],
            type: 0, // (0 景点  1 酒店 2 饭店)
          },
          {
            placeId: 2,
            name: '断桥残雪',
            score: 5.0,
            zanNum: 123,
            tags: [
              '家庭出游',
              '冬天很美',
            ],
            description: '是《白蛇传》中许仙、白娘子的相会之地，也给这座长桥平添许多浪漫色彩。冬雪初下，桥的阳面冰雪消融，但阴面仍被残雪覆盖，从高处看桥似断非断，形成著名的“断桥残雪”。可以作为游玩西湖的起点。从断桥上白堤去孤山，依次游玩西湖周边的各个景点。',
            price: 120,
            imgs: [
              'https://i0.hippopx.com/photos/222/216/35/sunset-west-lake-hanoi-vietnam-preview.jpg',
              'https://i0.hippopx.com/photos/359/587/580/china-hangzhou-west-lake-sunset-preview.jpg',
              'https://i0.hippopx.com/photos/496/893/91/west-lake-sunset-bridges-silhouette-preview.jpg',
              'https://i0.hippopx.com/photos/246/97/299/peaceful-lake-tree-lake-side-preview.jpg',
              'https://i0.hippopx.com/photos/767/79/618/northern-california-lake-mendocino-ducks-in-a-row-lake-preview.jpg',
            ],
            type: 0, // (0 景点  1 酒店 2 饭店)
          },
          {
            placeId: 3,
            name: '曲院风荷',
            score: 4.5,
            zanNum: 121,
            tags: [
              '荷花超美',
              '放松身心',
            ],
            description: '西湖十景之一，其所在的风荷公园内栽培了上百个品种的荷花，夏季显出分外迷人的吸引力。南宋时，此地有一座官家酿酒作坊，取金沙涧的溪水造曲酒。附近种有菱荷，每当夏日风起，酒香荷香沁人心脾，故称“曲院风荷”。 莲叶田田，菡萏妖娆。水面上架设了造型各异的小桥，人从桥上过，如在荷中行。',
            price: 80,
            imgs: [
              'https://i0.hippopx.com/photos/918/177/197/china-hangzhou-west-lake-preview.jpg',
              'https://i0.hippopx.com/photos/307/98/487/lake-hangzhou-the-scenery-preview.jpg',
              'https://i0.hippopx.com/photos/914/640/967/hangzhou-the-scenery-humanities-preview.jpg',
              'https://i0.hippopx.com/photos/581/364/879/hangzhou-the-landscape-between-scenery-botanical-garden-preview.jpg',
            ],
            type: 0, // (0 景点  1 酒店 2 饭店)
          },
          {
            placeId: 4,
            name: '楼外楼(孤山路店)',
            score: 4.7,
            zanNum: 116,
            tags: [
              '西湖醋鱼',
              '老字号',
              '农井虾仁',
            ],
            description: '杭帮菜老字号，古诗有云：“西湖醋鱼何处美，独数杭州楼外楼”',
            price: 180,
            imgs: [
              'https://i0.hippopx.com/photos/313/831/719/shrimp-seafood-mexican-food-preview.jpg',
              'https://i0.hippopx.com/photos/544/231/706/take-food-bowl-vegetables-preview.jpg',
              'https://i0.hippopx.com/photos/120/420/848/food-lip-delicious-food-preview.jpg',
            ],
            type: 2, // (0 景点  1 酒店 2 饭店)
          },
          {
            placeId: 5,
            name: '汉庭酒店',
            score: 4.9,
            zanNum: 239,
            tags: [
              '店员热情',
              '大床很舒服',
            ],
            description: '汉庭酒店是华住酒店集团的创始品牌。华住创始人季琦先生，在连续成功创办了“携程旅行网”(NASDAQ:CTRP)、“如家快捷酒店”(NASDAQ:HMIN) 两家纳斯达克上市公司之后，于2005年第三次创业，推出汉庭酒店，并曾一度以“汉庭”命名集团，后于2012年正式启用“华住”作为集团名称。',
            price: 250,
            imgs: [
              'https://i0.hippopx.com/photos/690/622/456/hotel-hallway-hotel-hallway-lights-preview.jpg',
              'https://i0.hippopx.com/photos/967/606/545/bed-double-bed-hotel-room-preview.jpg',
              'https://i0.hippopx.com/photos/337/289/143/hotel-podjavorn%C3%ADk-suite-preview.jpg',
              'https://i0.hippopx.com/photos/290/85/260/hotel-guest-room-new-preview.jpg',
            ],
            type: 1, // (0 景点  1 酒店 2 饭店)
          },
        ], [
          {
            placeId: 1,
            name: '西湖',
            score: 4.9,
            zanNum: 1321,
            tags: [
              '情侣出行',
              '风景名胜',
              '必去',
            ],
            description: '旅行方式目的地出发时间返程时间民俗特色杭州2018-04-142018-04-18西湖西湖无疑是杭州之美的代表，著名的“西湖十景”环绕湖边，自然与人文相互映衬，组成了杭州旅行的核心地带。你不必执着于走遍每个景点，倒可以花上半天或一天在湖边徜徉一番，无论怎么玩，都让人心情舒畅。旅行方式目的地出发时间返程时间民俗特色杭州2018-04-142018-04-18西湖西湖无疑是杭州之美的代表，著名的“西湖十景”环绕湖边，自然与人文相互映衬，组成了杭州旅行的核心地带。你不必执着于走遍每个景点，倒可以花上半天或一天在湖边徜徉一番，无论怎么玩，都让人心情舒畅。',
            price: 320,
            imgs: [
              'https://i0.hippopx.com/photos/640/861/188/the-summer-palace-kunming-lake-beijing-preview.jpg',
              'https://i0.hippopx.com/photos/579/914/396/hangzhou-west-lake-ching-ming-ship-preview.jpg',
              'https://i0.hippopx.com/photos/66/390/567/west-lake-the-scenery-character-sunset-preview.jpg',
              'https://i0.hippopx.com/photos/246/97/299/peaceful-lake-tree-lake-side-preview.jpg',
              'https://i0.hippopx.com/photos/246/97/299/peaceful-lake-tree-lake-side-preview.jpg',
            ],
            type: 0, // (0 景点  1 酒店 2 饭店)
          },
          {
            placeId: 2,
            name: '断桥残雪',
            score: 5.0,
            zanNum: 123,
            tags: [
              '家庭出游',
              '冬天很美',
            ],
            description: '是《白蛇传》中许仙、白娘子的相会之地，也给这座长桥平添许多浪漫色彩。冬雪初下，桥的阳面冰雪消融，但阴面仍被残雪覆盖，从高处看桥似断非断，形成著名的“断桥残雪”。可以作为游玩西湖的起点。从断桥上白堤去孤山，依次游玩西湖周边的各个景点。',
            price: 120,
            imgs: [
              'https://i0.hippopx.com/photos/222/216/35/sunset-west-lake-hanoi-vietnam-preview.jpg',
              'https://i0.hippopx.com/photos/359/587/580/china-hangzhou-west-lake-sunset-preview.jpg',
              'https://i0.hippopx.com/photos/496/893/91/west-lake-sunset-bridges-silhouette-preview.jpg',
              'https://i0.hippopx.com/photos/246/97/299/peaceful-lake-tree-lake-side-preview.jpg',
              'https://i0.hippopx.com/photos/767/79/618/northern-california-lake-mendocino-ducks-in-a-row-lake-preview.jpg',
            ],
            type: 0, // (0 景点  1 酒店 2 饭店)
          },
          {
            placeId: 3,
            name: '曲院风荷',
            score: 4.5,
            zanNum: 121,
            tags: [
              '荷花超美',
              '放松身心',
            ],
            description: '西湖十景之一，其所在的风荷公园内栽培了上百个品种的荷花，夏季显出分外迷人的吸引力。南宋时，此地有一座官家酿酒作坊，取金沙涧的溪水造曲酒。附近种有菱荷，每当夏日风起，酒香荷香沁人心脾，故称“曲院风荷”。 莲叶田田，菡萏妖娆。水面上架设了造型各异的小桥，人从桥上过，如在荷中行。',
            price: 80,
            imgs: [
              'https://i0.hippopx.com/photos/918/177/197/china-hangzhou-west-lake-preview.jpg',
              'https://i0.hippopx.com/photos/307/98/487/lake-hangzhou-the-scenery-preview.jpg',
              'https://i0.hippopx.com/photos/914/640/967/hangzhou-the-scenery-humanities-preview.jpg',
              'https://i0.hippopx.com/photos/581/364/879/hangzhou-the-landscape-between-scenery-botanical-garden-preview.jpg',
            ],
            type: 0, // (0 景点  1 酒店 2 饭店)
          },
          {
            placeId: 4,
            name: '楼外楼(孤山路店)',
            score: 4.7,
            zanNum: 116,
            tags: [
              '西湖醋鱼',
              '老字号',
              '农井虾仁',
            ],
            description: '杭帮菜老字号，古诗有云：“西湖醋鱼何处美，独数杭州楼外楼”',
            price: 180,
            imgs: [
              'https://i0.hippopx.com/photos/313/831/719/shrimp-seafood-mexican-food-preview.jpg',
              'https://i0.hippopx.com/photos/544/231/706/take-food-bowl-vegetables-preview.jpg',
              'https://i0.hippopx.com/photos/120/420/848/food-lip-delicious-food-preview.jpg',
            ],
            type: 2, // (0 景点  1 酒店 2 饭店)
          },
          {
            placeId: 5,
            name: '汉庭酒店',
            score: 4.9,
            zanNum: 239,
            tags: [
              '店员热情',
              '大床很舒服',
            ],
            description: '汉庭酒店是华住酒店集团的创始品牌。华住创始人季琦先生，在连续成功创办了“携程旅行网”(NASDAQ:CTRP)、“如家快捷酒店”(NASDAQ:HMIN) 两家纳斯达克上市公司之后，于2005年第三次创业，推出汉庭酒店，并曾一度以“汉庭”命名集团，后于2012年正式启用“华住”作为集团名称。',
            price: 250,
            imgs: [
              'https://i0.hippopx.com/photos/690/622/456/hotel-hallway-hotel-hallway-lights-preview.jpg',
              'https://i0.hippopx.com/photos/967/606/545/bed-double-bed-hotel-room-preview.jpg',
              'https://i0.hippopx.com/photos/337/289/143/hotel-podjavorn%C3%ADk-suite-preview.jpg',
              'https://i0.hippopx.com/photos/290/85/260/hotel-guest-room-new-preview.jpg',
            ],
            type: 1, // (0 景点  1 酒店 2 饭店)
          },
        ], [
          {
            placeId: 1,
            name: '西湖',
            score: 4.9,
            zanNum: 1321,
            tags: [
              '情侣出行',
              '风景名胜',
              '必去',
            ],
            description: '旅行方式目的地出发时间返程时间民俗特色杭州2018-04-142018-04-18西湖西湖无疑是杭州之美的代表，著名的“西湖十景”环绕湖边，自然与人文相互映衬，组成了杭州旅行的核心地带。你不必执着于走遍每个景点，倒可以花上半天或一天在湖边徜徉一番，无论怎么玩，都让人心情舒畅。旅行方式目的地出发时间返程时间民俗特色杭州2018-04-142018-04-18西湖西湖无疑是杭州之美的代表，著名的“西湖十景”环绕湖边，自然与人文相互映衬，组成了杭州旅行的核心地带。你不必执着于走遍每个景点，倒可以花上半天或一天在湖边徜徉一番，无论怎么玩，都让人心情舒畅。',
            price: 320,
            imgs: [
              'https://i0.hippopx.com/photos/640/861/188/the-summer-palace-kunming-lake-beijing-preview.jpg',
              'https://i0.hippopx.com/photos/579/914/396/hangzhou-west-lake-ching-ming-ship-preview.jpg',
              'https://i0.hippopx.com/photos/66/390/567/west-lake-the-scenery-character-sunset-preview.jpg',
              'https://i0.hippopx.com/photos/246/97/299/peaceful-lake-tree-lake-side-preview.jpg',
              'https://i0.hippopx.com/photos/246/97/299/peaceful-lake-tree-lake-side-preview.jpg',
            ],
            type: 0, // (0 景点  1 酒店 2 饭店)
          },
          {
            placeId: 2,
            name: '断桥残雪',
            score: 5.0,
            zanNum: 123,
            tags: [
              '家庭出游',
              '冬天很美',
            ],
            description: '是《白蛇传》中许仙、白娘子的相会之地，也给这座长桥平添许多浪漫色彩。冬雪初下，桥的阳面冰雪消融，但阴面仍被残雪覆盖，从高处看桥似断非断，形成著名的“断桥残雪”。可以作为游玩西湖的起点。从断桥上白堤去孤山，依次游玩西湖周边的各个景点。',
            price: 120,
            imgs: [
              'https://i0.hippopx.com/photos/222/216/35/sunset-west-lake-hanoi-vietnam-preview.jpg',
              'https://i0.hippopx.com/photos/359/587/580/china-hangzhou-west-lake-sunset-preview.jpg',
              'https://i0.hippopx.com/photos/496/893/91/west-lake-sunset-bridges-silhouette-preview.jpg',
              'https://i0.hippopx.com/photos/246/97/299/peaceful-lake-tree-lake-side-preview.jpg',
              'https://i0.hippopx.com/photos/767/79/618/northern-california-lake-mendocino-ducks-in-a-row-lake-preview.jpg',
            ],
            type: 0, // (0 景点  1 酒店 2 饭店)
          },
          {
            placeId: 3,
            name: '曲院风荷',
            score: 4.5,
            zanNum: 121,
            tags: [
              '荷花超美',
              '放松身心',
            ],
            description: '西湖十景之一，其所在的风荷公园内栽培了上百个品种的荷花，夏季显出分外迷人的吸引力。南宋时，此地有一座官家酿酒作坊，取金沙涧的溪水造曲酒。附近种有菱荷，每当夏日风起，酒香荷香沁人心脾，故称“曲院风荷”。 莲叶田田，菡萏妖娆。水面上架设了造型各异的小桥，人从桥上过，如在荷中行。',
            price: 80,
            imgs: [
              'https://i0.hippopx.com/photos/918/177/197/china-hangzhou-west-lake-preview.jpg',
              'https://i0.hippopx.com/photos/307/98/487/lake-hangzhou-the-scenery-preview.jpg',
              'https://i0.hippopx.com/photos/914/640/967/hangzhou-the-scenery-humanities-preview.jpg',
              'https://i0.hippopx.com/photos/581/364/879/hangzhou-the-landscape-between-scenery-botanical-garden-preview.jpg',
            ],
            type: 0, // (0 景点  1 酒店 2 饭店)
          },
          {
            placeId: 4,
            name: '楼外楼(孤山路店)',
            score: 4.7,
            zanNum: 116,
            tags: [
              '西湖醋鱼',
              '老字号',
              '农井虾仁',
            ],
            description: '杭帮菜老字号，古诗有云：“西湖醋鱼何处美，独数杭州楼外楼”',
            price: 180,
            imgs: [
              'https://i0.hippopx.com/photos/313/831/719/shrimp-seafood-mexican-food-preview.jpg',
              'https://i0.hippopx.com/photos/544/231/706/take-food-bowl-vegetables-preview.jpg',
              'https://i0.hippopx.com/photos/120/420/848/food-lip-delicious-food-preview.jpg',
            ],
            type: 2, // (0 景点  1 酒店 2 饭店)
          },
          {
            placeId: 5,
            name: '汉庭酒店',
            score: 4.9,
            zanNum: 239,
            tags: [
              '店员热情',
              '大床很舒服',
            ],
            description: '汉庭酒店是华住酒店集团的创始品牌。华住创始人季琦先生，在连续成功创办了“携程旅行网”(NASDAQ:CTRP)、“如家快捷酒店”(NASDAQ:HMIN) 两家纳斯达克上市公司之后，于2005年第三次创业，推出汉庭酒店，并曾一度以“汉庭”命名集团，后于2012年正式启用“华住”作为集团名称。',
            price: 250,
            imgs: [
              'https://i0.hippopx.com/photos/690/622/456/hotel-hallway-hotel-hallway-lights-preview.jpg',
              'https://i0.hippopx.com/photos/967/606/545/bed-double-bed-hotel-room-preview.jpg',
              'https://i0.hippopx.com/photos/337/289/143/hotel-podjavorn%C3%ADk-suite-preview.jpg',
              'https://i0.hippopx.com/photos/290/85/260/hotel-guest-room-new-preview.jpg',
            ],
            type: 1, // (0 景点  1 酒店 2 饭店)
          },
        ], [
          {
            placeId: 1,
            name: '西湖',
            score: 4.9,
            zanNum: 1321,
            tags: [
              '情侣出行',
              '风景名胜',
              '必去',
            ],
            description: '旅行方式目的地出发时间返程时间民俗特色杭州2018-04-142018-04-18西湖西湖无疑是杭州之美的代表，著名的“西湖十景”环绕湖边，自然与人文相互映衬，组成了杭州旅行的核心地带。你不必执着于走遍每个景点，倒可以花上半天或一天在湖边徜徉一番，无论怎么玩，都让人心情舒畅。旅行方式目的地出发时间返程时间民俗特色杭州2018-04-142018-04-18西湖西湖无疑是杭州之美的代表，著名的“西湖十景”环绕湖边，自然与人文相互映衬，组成了杭州旅行的核心地带。你不必执着于走遍每个景点，倒可以花上半天或一天在湖边徜徉一番，无论怎么玩，都让人心情舒畅。',
            price: 320,
            imgs: [
              'https://i0.hippopx.com/photos/640/861/188/the-summer-palace-kunming-lake-beijing-preview.jpg',
              'https://i0.hippopx.com/photos/579/914/396/hangzhou-west-lake-ching-ming-ship-preview.jpg',
              'https://i0.hippopx.com/photos/66/390/567/west-lake-the-scenery-character-sunset-preview.jpg',
              'https://i0.hippopx.com/photos/246/97/299/peaceful-lake-tree-lake-side-preview.jpg',
              'https://i0.hippopx.com/photos/246/97/299/peaceful-lake-tree-lake-side-preview.jpg',
            ],
            type: 0, // (0 景点  1 酒店 2 饭店)
          },
          {
            placeId: 2,
            name: '断桥残雪',
            score: 5.0,
            zanNum: 123,
            tags: [
              '家庭出游',
              '冬天很美',
            ],
            description: '是《白蛇传》中许仙、白娘子的相会之地，也给这座长桥平添许多浪漫色彩。冬雪初下，桥的阳面冰雪消融，但阴面仍被残雪覆盖，从高处看桥似断非断，形成著名的“断桥残雪”。可以作为游玩西湖的起点。从断桥上白堤去孤山，依次游玩西湖周边的各个景点。',
            price: 120,
            imgs: [
              'https://i0.hippopx.com/photos/222/216/35/sunset-west-lake-hanoi-vietnam-preview.jpg',
              'https://i0.hippopx.com/photos/359/587/580/china-hangzhou-west-lake-sunset-preview.jpg',
              'https://i0.hippopx.com/photos/496/893/91/west-lake-sunset-bridges-silhouette-preview.jpg',
              'https://i0.hippopx.com/photos/246/97/299/peaceful-lake-tree-lake-side-preview.jpg',
              'https://i0.hippopx.com/photos/767/79/618/northern-california-lake-mendocino-ducks-in-a-row-lake-preview.jpg',
            ],
            type: 0, // (0 景点  1 酒店 2 饭店)
          },
          {
            placeId: 3,
            name: '曲院风荷',
            score: 4.5,
            zanNum: 121,
            tags: [
              '荷花超美',
              '放松身心',
            ],
            description: '西湖十景之一，其所在的风荷公园内栽培了上百个品种的荷花，夏季显出分外迷人的吸引力。南宋时，此地有一座官家酿酒作坊，取金沙涧的溪水造曲酒。附近种有菱荷，每当夏日风起，酒香荷香沁人心脾，故称“曲院风荷”。 莲叶田田，菡萏妖娆。水面上架设了造型各异的小桥，人从桥上过，如在荷中行。',
            price: 80,
            imgs: [
              'https://i0.hippopx.com/photos/918/177/197/china-hangzhou-west-lake-preview.jpg',
              'https://i0.hippopx.com/photos/307/98/487/lake-hangzhou-the-scenery-preview.jpg',
              'https://i0.hippopx.com/photos/914/640/967/hangzhou-the-scenery-humanities-preview.jpg',
              'https://i0.hippopx.com/photos/581/364/879/hangzhou-the-landscape-between-scenery-botanical-garden-preview.jpg',
            ],
            type: 0, // (0 景点  1 酒店 2 饭店)
          },
          {
            placeId: 4,
            name: '楼外楼(孤山路店)',
            score: 4.7,
            zanNum: 116,
            tags: [
              '西湖醋鱼',
              '老字号',
              '农井虾仁',
            ],
            description: '杭帮菜老字号，古诗有云：“西湖醋鱼何处美，独数杭州楼外楼”',
            price: 180,
            imgs: [
              'https://i0.hippopx.com/photos/313/831/719/shrimp-seafood-mexican-food-preview.jpg',
              'https://i0.hippopx.com/photos/544/231/706/take-food-bowl-vegetables-preview.jpg',
              'https://i0.hippopx.com/photos/120/420/848/food-lip-delicious-food-preview.jpg',
            ],
            type: 2, // (0 景点  1 酒店 2 饭店)
          },
          {
            placeId: 5,
            name: '汉庭酒店',
            score: 4.9,
            zanNum: 239,
            tags: [
              '店员热情',
              '大床很舒服',
            ],
            description: '汉庭酒店是华住酒店集团的创始品牌。华住创始人季琦先生，在连续成功创办了“携程旅行网”(NASDAQ:CTRP)、“如家快捷酒店”(NASDAQ:HMIN) 两家纳斯达克上市公司之后，于2005年第三次创业，推出汉庭酒店，并曾一度以“汉庭”命名集团，后于2012年正式启用“华住”作为集团名称。',
            price: 250,
            imgs: [
              'https://i0.hippopx.com/photos/690/622/456/hotel-hallway-hotel-hallway-lights-preview.jpg',
              'https://i0.hippopx.com/photos/967/606/545/bed-double-bed-hotel-room-preview.jpg',
              'https://i0.hippopx.com/photos/337/289/143/hotel-podjavorn%C3%ADk-suite-preview.jpg',
              'https://i0.hippopx.com/photos/290/85/260/hotel-guest-room-new-preview.jpg',
            ],
            type: 1, // (0 景点  1 酒店 2 饭店)
          },
        ],
      ],
      /** 路线信息 地点数量-1* */
      lines: [
        [
          {
            fromToName: '西湖 - 断桥残雪',
            description: '驾车约30分钟，相距3.1公里',
            price: 27,
            type: 0, // (0 驾车  1 公交 2 步行)
          },
          {
            fromToName: '断桥残雪 - 曲院风荷',
            description: '驾车约50分钟，相距4.7公里',
            price: 45,
            type: 0, // (0 驾车  1 公交 2 步行)
          },
          {
            fromToName: '曲院风荷 - 楼外楼(孤山路店)',
            description: '步行约10分钟，相距1公里',
            price: 0,
            type: 2, // (0 驾车  1 公交 2 步行)
          },
          {
            fromToName: '楼外楼(孤山路店) - 汉庭酒店',
            description: '公交约15分钟，相距3公里',
            price: 2,
            type: 1, // (0 驾车  1 公交 2 步行)
          },
        ], [
          {
            fromToName: '西湖 - 断桥残雪',
            description: '驾车约30分钟，相距3.1公里',
            price: 27,
            type: 0, // (0 驾车  1 公交 2 步行)
          },
          {
            fromToName: '断桥残雪 - 曲院风荷',
            description: '驾车约50分钟，相距4.7公里',
            price: 45,
            type: 0, // (0 驾车  1 公交 2 步行)
          },
          {
            fromToName: '曲院风荷 - 楼外楼(孤山路店)',
            description: '步行约10分钟，相距1公里',
            price: 2,
            type: 2, // (0 驾车  1 公交 2 步行)
          },
          {
            fromToName: '楼外楼(孤山路店) - 汉庭酒店',
            description: '公交约15分钟，相距3公里',
            price: 2,
            type: 1, // (0 驾车  1 公交 2 步行)
          },
        ], [
          {
            fromToName: '西湖 - 断桥残雪',
            description: '驾车约30分钟，相距3.1公里',
            price: 27,
            type: 0, // (0 驾车  1 公交 2 步行)
          },
          {
            fromToName: '断桥残雪 - 曲院风荷',
            description: '驾车约50分钟，相距4.7公里',
            price: 45,
            type: 0, // (0 驾车  1 公交 2 步行)
          },
          {
            fromToName: '曲院风荷 - 楼外楼(孤山路店)',
            description: '步行约10分钟，相距1公里',
            price: 0,
            type: 2, // (0 驾车  1 公交 2 步行)
          },
          {
            fromToName: '楼外楼(孤山路店) - 汉庭酒店',
            description: '公交约15分钟，相距3公里',
            price: 2,
            type: 1, // (0 驾车  1 公交 2 步行)
          },
        ], [
          {
            fromToName: '西湖 - 断桥残雪',
            description: '驾车约30分钟，相距3.1公里',
            price: 27,
            type: 0, // (0 驾车  1 公交 2 步行)
          },
          {
            fromToName: '断桥残雪 - 曲院风荷',
            description: '驾车约50分钟，相距4.7公里',
            price: 45,
            type: 0, // (0 驾车  1 公交 2 步行)
          },
          {
            fromToName: '曲院风荷 - 楼外楼(孤山路店)',
            description: '步行约10分钟，相距1公里',
            price: 2,
            type: 2, // (0 驾车  1 公交 2 步行)
          },
          {
            fromToName: '楼外楼(孤山路店) - 汉庭酒店',
            description: '公交约15分钟，相距3公里',
            price: 2,
            type: 1, // (0 驾车  1 公交 2 步行)
          },
        ]],
    }]);
  }, 2000);
})));

gofree_mock.onGet('/get-more').reply(200, {
  code: 200,
  msg: '',
  places: [
    {
      placeId: 1,
      name: '云栖竹径',
      score: 4.5,
      zanNum: 1231,
      tags: [
        '适合拍照',
        '值得去',
      ],
      description: '云栖竹径是一座山坞里的公园，拥有西湖周遭最美的竹海。公园内仍可寻迹到古时云栖古寺的留存，还有回雁峰、宝刀陇、壁观峰等景点，以及千年枫香古树。竹径中央的青石板与两旁的卵石之间用黑砖相隔，相传清代康熙、乾隆二帝都来过云栖，当时以中央为御道，专供皇帝行走。小径旁有洗心、三聚等凉亭。竹径尽头古树成行，有亭可憩，有茶室可小坐品茗。',
      price: 324,
      imgs: [
        'https://i0.hippopx.com/photos/740/494/464/bamboo-bamboo-grove-bamboos-preview.jpg',
        'https://i0.hippopx.com/photos/366/730/554/forest-forest-way-tour-preview.jpg',
        'https://i0.hippopx.com/photos/40/533/317/autumn-forest-autumn-forest-preview.jpg',
        'https://i0.hippopx.com/photos/913/601/78/mangroves-forest-colombia-trees-preview.jpg',
      ],
      type: 0,
    },
    {
      placeId: 1,
      name: '岳墓栖霞',
      score: 4.6,
      zanNum: 245,
      tags: [
        '交通方便',
        '游客较多',
        '金牌景点',
      ],
      description: '岳王庙位于西湖西北角，是为纪念民族英雄岳飞而建。岳王庙始建于南宋嘉定十四年(1221年)，明景泰年间改称“忠烈庙”，经历了元、明、清、民国时兴时废，代代相传一直留存到现在。每年入秋，庙背后的栖霞岭上红枫似火，望之如霞。每当夕阳西下时，岳墓上便有了一道道霞光，非常绚美。',
      price: 230,
      imgs: [
        'https://p1-q.mafengwo.net/s7/M00/DB/BE/wKgB6lPoHZuAKpD2ABIJRwyEl1E25.jpeg?imageMogr2%2Fthumbnail%2F%21690x370r%2Fgravity%2FCenter%2Fcrop%2F%21690x370%2Fquality%2F100',
        'https://i0.hippopx.com/photos/916/811/752/attic-ancient-architecture-trees-flowers-preview.jpg',
        'https://i0.hippopx.com/photos/668/694/512/leipzig-southern-cemetery-mausoleum-columnar-preview.jpg',
        'https://i0.hippopx.com/photos/894/718/499/delhi-humayung-tomb-pollution-monument-preview.jpg',
      ],
      type: 0,
    },
    {
      placeId: 1,
      name: '杭州植物园',
      score: 4.7,
      zanNum: 248,
      tags: [
        '适合孩子',
        '西湖边',
      ],
      description: '杭州植物园位于西湖西北，设有经济植物、观赏植物、树木、山水园林等九个展览区和四个实验区。植物园四季都有景色可看，最值得一看的要数灵峰探梅，每年早春时节将在此举办大型花展。百草园里种植了包括“浙八味”在内的一千多种药用植物，科普性极强。玉泉的泉池里游满了肥硕的青鱼和红黄鲤鱼，是小憩的好地方，深得小朋友的欢心。',
      price: 390,
      imgs: [
        'https://i0.hippopx.com/photos/208/658/369/plants-succulent-botanical-preview.jpg',
        'https://i0.hippopx.com/photos/332/17/266/arboretum-winter-garden-nature-preview.jpg',
        'https://i0.hippopx.com/photos/379/352/892/cape-town-south-africa-botanical-preview.jpg',
        'https://i0.hippopx.com/photos/302/796/962/botanical-garden-raindrops-flowers-preview.jpg',
      ],
      type: 0,
    },
    {
      placeId: 1,
      name: '龙井问茶',
      score: 4.8,
      zanNum: 450,
      tags: [
        '步行圣地',
        '值得餐馆',
      ],
      description: '龙井问茶是新西湖十景之一，有名列西湖三大名泉的龙井泉，龙井泉水冲泡的龙井茶绝对是一绝。龙井分为老龙井和下龙井，下龙井经改造后，已成为统一农居点，有许多农家乐，是度假休闲圣地。老龙井有龙井泉和已经废弃的龙井寺，还有乾隆下江南时采过的“十八棵御茶”。每年清明前后，都会有游客慕名而来，访茶、饮茶、问茶，是一个非常“杭州”的体验。',
      price: 100,
      imgs: [
        'https://i0.hippopx.com/photos/123/135/597/spring-alpine-tea-garden-preview.jpg',
        'https://i0.hippopx.com/photos/865/1/260/tea-plantation-tea-garden-mountain-garden-preview.jpg',
        'https://i0.hippopx.com/photos/800/80/853/tour-tea-gardens-nature-preview.jpg',
        'https://i0.hippopx.com/photos/445/861/85/jeju-green-tea-plantation-nature-tea-plantation-preview.jpg',
      ],
      type: 0,
    },
  ],
  /* 与places索引对应 */
  map_data: [
    {
      x: 116.376979,
      y: 39.921198,
      placeId: 1,
      type: 2,
    },
    {
      x: 116.376979,
      y: 39.921198,
      placeId: 1,
      type: 2,
    },
    {
      x: 116.376979,
      y: 39.921198,
      placeId: 1,
      type: 2,
    },
    {
      x: 116.376979,
      y: 39.921198,
      placeId: 1,
      type: 2,
    },
  ],
});


gofree_mock.onPost('/select-replace').reply(200, {
  code: 200,
  msg: '',
  relate_lines: [
    {
      fromToName: '西湖 - 杭州酒家(延安路店)ss',
      description: '公交约20分钟，相距3.1公里',
      price: 2,
    },
    {
      fromToName: '西湖 - 杭州酒家(延安路店)sss',
      description: '公交约20分钟，相距3.1公里',
      price: 2,
    },
  ],
});

gofree_mock.onPost('/refresh-all').reply(200, {
  code: 200,
  msg: '',
  /** 地图数据* */
  map: {
    centerP: [
      'x': 116.404,
      'y': 39.915,
    ],
    points: [
      {
        x: 116.301934,
        y: 39.977552,
        placeId: 1,
        type: 1,
      },
      {
        x: 116.353407,
        y: 39.978723,
        placeId: 2,
        type: 1,
      },
      {
        x: 116.451143,
        y: 39.970761,
        placeId: 3,
        type: 1,
      },
      {
        x: 116.50832,
        y: 39.919141,
        placeId: 4,
        type: 1,
      },
    ],
  },
  /** 总览信息* */
  id: 2,
  typeName: '民俗特色',
  destination: '杭州',
  start: '2017/12/05',
  end: '2017/12/15',
  price: 2002,
  /** 地点信息* */
  places: [
    {
      placeId: 1,
      name: '西湖',
      score: 4.9,
      zanNum: 2233,
      tags: [
        '情侣出行',
        '风景名胜',
        '必去',
      ],
      description: '好地方啊好地方！！！！',
      price: 10,
      imgs: [
        'http://cdn.algbb.fun/emoji/32.png',
        'http://cdn.algbb.fun/emoji/32.png',
        'http://cdn.algbb.fun/emoji/32.png',
        'http://cdn.algbb.fun/emoji/32.png',
      ],
      type: 0, // (0 景点  1 酒店 2 饭店)
    },
    {
      placeId: 2,
      name: '西湖',
      score: 4.9,
      zanNum: 2233,
      tags: [
        '情侣出行',
        '风景名胜',
        '必去',
      ],
      description: '好地方啊好地方！！！！',
      price: 10,
      imgs: [
        'http://cdn.algbb.fun/emoji/32.png',
        'http://cdn.algbb.fun/emoji/32.png',
        'http://cdn.algbb.fun/emoji/32.png',
        'http://cdn.algbb.fun/emoji/32.png',
      ],
      type: 1, // (0 景点  1 酒店 2 饭店)
    },
    {
      placeId: 3,
      name: '西湖',
      score: 4.9,
      zanNum: 2233,
      tags: [
        '情侣出行',
        '风景名胜',
        '必去',
      ],
      description: '好地方啊好地方！！！！',
      price: 10,
      imgs: [
        'http://cdn.algbb.fun/emoji/32.png',
        'http://cdn.algbb.fun/emoji/32.png',
        'http://cdn.algbb.fun/emoji/32.png',
        'http://cdn.algbb.fun/emoji/32.png',
      ],
      type: 2, // (0 景点  1 酒店 2 饭店)
    },
    {
      placeId: 4,
      name: '西湖',
      score: 4.9,
      zanNum: 2233,
      tags: [
        '情侣出行',
        '风景名胜',
        '必去',
      ],
      description: '好地方啊好地方！！！！',
      price: 10,
      imgs: [
        'http://cdn.algbb.fun/emoji/32.png',
        'http://cdn.algbb.fun/emoji/32.png',
        'http://cdn.algbb.fun/emoji/32.png',
        'http://cdn.algbb.fun/emoji/32.png',
      ],
      type: 0, // (0 景点  1 酒店 2 饭店)
    },
  ],
  /** 路线信息 地点数量-1* */
  lines: [
    {
      fromToName: '西湖 - 杭州酒家(延安路店)',
      description: '公交约20分钟，相距3.1公里',
      price: 2,
    },
    {
      fromToName: '西湖 - 杭州酒家(延安路店)',
      description: '公交约20分钟，相距3.1公里',
      price: 2,
    },
    {
      fromToName: '西湖 - 杭州酒家(延安路店)',
      description: '公交约20分钟，相距3.1公里',
      price: 2,
    },
  ],
});

// 获取短信验证码
gofree_mock.onGet('/account/veri_sms/api').reply(200, {
  code: 200,
  msg: '发送成功',
  result: [],
});

// 注册
gofree_mock.onPost('/account/register/api').reply(200, {
  code: 200,
  msg: '注册成功',
  result: { id: 1 },
});

// 登录
gofree_mock.onPost('/account/login/api').reply(200, {
  code: 200,
  msg: '登录成功',
  result: [],
});


// 注销
gofree_mock.onGet('/account/logout/api').reply(200, {
  code: 200,
  msg: '账号已注销',
  result: [],
});


export default gofree_mock;
