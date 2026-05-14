/**
 * 구원의 길 (The Cross Way) — 단계별 콘텐츠 데이터
 *
 * - 출처: resource/구원의길.md
 * - 한국어 본문은 원본을 100% 그대로 옮겼으며, 의역·축약하지 않음.
 * - 다국어는 동일한 schema 로 확장 가능. 영문 본문(resource/구원의길_eng.md)은
 *   현재 비어 있어 ko 데이터를 fallback 으로 표시하고 'translation pending' 배지를 노출함.
 */

/**
 * @typedef {{ reference: string, label: string, text: string }} Verse
 * @typedef {{
 *   id: number,
 *   title: string,
 *   subtitle: string,
 *   verses: Verse[],
 *   crossPos: { x: number, y: number }
 * }} Stage
 */

/** @type {Stage[]} */
const stagesKo = [
  {
    id: 0,
    title: '시작 — 하나님과 인간',
    subtitle: 'The Cross Way 3분 전도(구원의 길)의 출발점',
    crossPos: { x: 50, y: 0 },
    verses: [
      {
        reference: '창 1:1',
        label: '하나님',
        text: '태초에 하나님이 천지를 창조하시니라'
      },
      {
        reference: '창 2:7',
        label: '인간',
        text:
          '여호와 하나님이 땅의 흙으로 사람을 지으시고 생기를 그 코에 불어 넣으니 사람이 생령이 되니라'
      }
    ]
  },
  {
    id: 1,
    title: '1. 원래 인간',
    subtitle: '형상 · 복 · 예배와 찬양 · 언약',
    crossPos: { x: 50, y: 8 },
    verses: [
      {
        reference: '창 1:27',
        label: '형상',
        text:
          '하나님이 자기형상 곧 하나님의 형상대로 사람을 창조하시되 남자와 여자를 창조하시고'
      },
      {
        reference: '창 1:28',
        label: '복',
        text:
          '하나님이 그들에게 복을 주시며 하나님이 그들에게 이르시되 생육하고 번성하여 땅에 충만하라 땅을 정복하라 바다의 물고기와 하늘의 새와 땅에 움직이는 모든 생물을 다스리라 하시니라'
      },
      {
        reference: '창 2:1~2',
        label: '예배와 찬양',
        text:
          '1 천지와 만물이 다 이루어지니라 2 하나님이 그가 하시던 일을 일곱째 날에 마치시니 그가 하시던 모든 일을 그치고 일곱째 날에 안식하시니라'
      },
      {
        reference: '창 2:17',
        label: '언약',
        text:
          '선악을 알게 하는 나무의 열매는 먹지 말라 네가 먹는 날에는 반드시 죽으리라 하시니라'
      }
    ]
  },
  {
    id: 2,
    title: '2. 근본 문제',
    subtitle: '사탄 · 죄 · 떠남',
    crossPos: { x: 50, y: 20 },
    verses: [
      {
        reference: '창 3:1~5',
        label: '사탄',
        text:
          '1 그런데 뱀은 여호와 하나님이 지으신 들짐승 가운데 가장 간교하니라 뱀이 여자에게 물어 이르되 하나님이 참으로 너희에게 동산 모든 나무의 열매를 먹지 말라 하시더냐 2 여자가 뱀에게 말하되 동산 나무의 열매는 우리가 먹을 수 있으나 3 동산 중앙에 있는 나무의 열매는 하나님의 말씀에 너희는 먹지도 말고 만지지도 말라 너희가 죽을까 하노라 하셨느니라 4 뱀이 여자에게 이르되 너희가 결코 죽지 아니하리라 5 너희가 그것을 먹는 날에는 너희 눈이 밝아져 하나님과 같이 되어 선악을 알 줄 하나님이 아심이니라'
      },
      {
        reference: '창 3:6',
        label: '죄',
        text:
          '여자가 그 나무를 본즉 먹음직도 하고 보암직도 하고 지혜롭게 할 만큼 탐스럽기도 한 나무인지라 여자가 그 열매를 따 먹고 자기와 함께 있는 남편에게도 주매 그도 먹은지라'
      },
      {
        reference: '창 3:7~10',
        label: '떠남',
        text:
          '7 이에 그들의 눈이 밝아져 자기들이 벗은 줄을 알고 무화과나무 잎을 엮어 치마로 삼았더라 8 그들이 그 날 바람이 불 때 동산에 거니시는 여호와 하나님의 소리를 듣고 아담과 그의 아내가 여호와 하나님의 낯을 피하여 동산 나무 사이에 숨은지라 9 여호와 하나님이 아담을 부르시며 그에게 이르시되 네가 어디 있느냐 10 이르되 내가 동산에서 하나님의 소리를 듣고 내가 벗었으므로 두려워하여 숨었나이다'
      }
    ]
  },
  {
    id: 3,
    title: '3. 불신자의 상태',
    subtitle: '마귀자녀 · 영적·정신·육신·내세·후대 문제',
    crossPos: { x: 50, y: 30 },
    verses: [
      {
        reference: '요 8:44',
        label: '마귀자녀 (운명·사탄의 종)',
        text:
          '너희는 너희 아비 마귀에게서 났으니 너희 아비의 욕심대로 너희도 행하고자 하느니라 그는 처음부터 살인한 자요 진리가 그 속에서 없으므로 진리에 서지 못하고 거짓을 말할 때마다 제 것으로 말하나니 이는 그가 거짓말쟁이요 거짓의 아비가 되었음이라'
      },
      {
        reference: '엡 2:2~3',
        label: '영적문제 (우상·미신·점·굿)',
        text:
          '2 그 때에 너희는 그 가운데서 행하여 이 세상 풍조를 따르고 공중의 권세를 잡은 자를 따랐으니 곧 지금 불순종의 아들들 가운데서 역사하는 영이라 3 전에는 우리도 다 그 가운데서 우리 육체의 욕심을 따라 지내며 육체와 마음의 원하는 것을 하여 다른 이들과 같이 본질상 진노의 자녀이었더니'
      },
      {
        reference: '마 11:28',
        label: '정신문제 (불안·공허·우울)',
        text:
          '수고하고 무거운 짐진자들아 다 네게로 오라 내가 너희를 쉬게 하리라'
      },
      {
        reference: '행 8:4~8',
        label: '육신문제 (중풍·암·불치병)',
        text:
          '4 그 흩어진 사람들이 두루 다니며 복음의 말씀을 전할새 5 빌립이 사마리아성에 내려가 그리스도를 백성에게 전파하니 6 무리가 빌립의 말도 듣고 행하는 표적도 보고 한 마음으로 그가 하는 말을 따르더라 7 많은 사람들에게 붙었던 더러운 귀신들이 크게 소리를 지르며 나가고 또 많은 중풍 병자와 못 걷는 사람이 나으니 8 그 성에 큰 기쁨이 있더라'
      },
      {
        reference: '눅 16:19~31',
        label: '내세문제 (심판·지옥)',
        text:
          '19 한 부자가 있어 자색 옷과 고운 배 옷을 입고 날마다 호화롭게 즐기더라 20 그런데 나사로라 이름하는 한 거지가 헌데 투성이로 그의 대문 앞에 버려진 채 21 그 부자의 상에서 떨어지는 것으로 배불리려 하매 심지어 개들이 와서 그 헌데를 핥더라 22 이에 그 거지가 죽어 천사들에게 받들려 아브라함 품에 들어가고 부자도 죽어 장사 되매 23 그가 음부에서 고통 중에 눈을 들어 멀리 아브라함과 그의 품에 있는 나사로를 보고 24 불러 이르되 아버지 아브라함이여 나를 긍휼히 여기사 나사로를 보내어 그 손가락 끝에 물을 찍어 내 혀를 서늘하게 하소서 내가 이 불꽃 가운데서 괴로워하나이다 25 아브라함이 이르되 얘 너는 살았을 때에 좋은 것을 받았고 나사로는 고난을 받았으니 이것을 기억하라 이제 그는 여기 위로를 받고 너는 괴로움을 받느니라 26 그뿐 아니라 너희와 우리 사이에 큰 구렁텅이가 있어 여기서 너희에게 건너가고자 하되 갈 수 없고 거기서 우리에게 건너올 수도 없게 하였느니라 27 이르되 그러면 아버지여 구하노니 나사로를 내 아버지의 집에 보내소서 28 내 형제 다섯이 있으니 그들에게 증언하게 하여 그들로 이 고통 받는 곳에 오지 않게 하소서 29 아브라함이 이르되 그들에게 모세와 선지자들이 있으니 그들에게 들을 지니라 30 이르되 그렇지 아니하니이다 아버지 아브라함이여 만일 죽은 자에게서 그들에게 가는 자가 있으면 회개 하리이다 31 이르되 모세와 선지자들에게 듣지 아니하면 비록 죽은 자 가운데서 살아나는 자가 있을지라도 권함을 받지 아니하리라 하였다 하시니라'
      },
      {
        reference: '출 20:4~5',
        label: '후대문제 (영육 대물림)',
        text:
          '4 너를 위하여 새긴 우상을 만들지 말고 또 위로 하늘에 있는 것이나 아래로 땅에 있는 것이나 땅 아래 물 속에 있는 것의 어떤 형상이든지 만들지 말며 5 그것들에게 절하지 말며 그것들을 섬기지 말라 나 네 하나님 여호와는 질투하는 하나님인즉 나를 미워하는 자의 죄를 갚되 아버지로부터 아들에게로 삼사대까지 이르게 하거니와'
      }
    ]
  },
  {
    id: 4,
    title: '4. 인간의 방법',
    subtitle: '종교 · 선행 · 철학으로는 해결되지 않는다',
    crossPos: { x: 18, y: 40 },
    verses: [
      {
        reference: '행 4:12',
        label: '종교',
        text:
          '다른 이로써는 구원을 받을 수 없나니 천하 사람 중에 구원을 받을만한 다른 이름을 우리에게 주신 일이 없음이라 하였더라'
      },
      {
        reference: '사 64:6',
        label: '선행',
        text:
          '무릇 우리는 다 부정한 자 같아서 우리의 의는 다 더러워진 옷 같으며 우리는 다 잎사귀 같이 시들므로 우리의 죄악이 바람 같이 우리를 몰아가나이다'
      },
      {
        reference: '골 2:8',
        label: '철학',
        text:
          '누가 철학과 헛된 속임수로 너희를 사로잡을까 주의하라 이것은 사람의 전통과 세상의 초등학문을 따름이요 그리스도를 따름이 아니니라'
      }
    ]
  },
  {
    id: 5,
    title: '5. 하나님의 방법',
    subtitle: '구원자 · 예수님 · 십자가 · 부활 · 그리스도 · 승천 · 재림',
    crossPos: { x: 50, y: 40 },
    verses: [
      {
        reference: '요 3:16',
        label: '구원자',
        text:
          '하나님이 세상을 이처럼 사랑하사 독생자를 주셨으니 이는 그를 믿는 자마다 멸망하지 않고 영생을 얻게 하려 하심이라'
      },
      {
        reference: '마 1:21',
        label: '예수님',
        text:
          '아들을 낳으리니 이름을 예수라 하라 이는 그가 자기 백성을 그들의 죄에서 구원할 자이심이라 하니라'
      },
      {
        reference: '요 19:30',
        label: '십자가',
        text:
          '예수께서 신 포도주를 받으신 후에 이르시되 다 이루었다 하시며 머리를 숙이니 영혼이 떠나가시니라'
      },
      {
        reference: '고전 15:3~4',
        label: '부활',
        text:
          '3 내가 받은 것을 먼저 너희에게 전하노니 이는 성경대로 그리스도께서 우리 죄를 위하여 죽으시고 4 장사지낸 바 되셨다가 성경대로 사흘 만에 다시 살아나사'
      },
      {
        reference: '마 16:16',
        label: '그리스도',
        text:
          '시몬 베드로가 대답하여 이르시되 주는 그리스도요 살아계신 하나님의 아들이시니이다'
      },
      {
        reference: '행 1:9~10',
        label: '승천',
        text:
          '9 이 말씀을 마치시고 그들을 보는데 올려져 가시니 구름이 그를 가리어 보이지 않게 하더라 10 올라가실 때에 제자들이 자세히 하늘을 쳐다보고 있는데 흰 옷 입은 두 사람이 그들 곁에 서서'
      },
      {
        reference: '계 22:20',
        label: '재림주',
        text:
          '20 이것들을 증언하신 이가 이르시되 내가 진실로 속히 오리라 하시거늘 아멘 주 예수여 오시옵소서'
      }
    ]
  },
  {
    id: 6,
    title: '6. 그리스도 3직',
    subtitle: '참 왕 · 참 제사장 · 참 선지자',
    crossPos: { x: 82, y: 40 },
    verses: [
      {
        reference: '히 2:14~15',
        label: '참 왕',
        text:
          '14 자녀들은 혈과 육에 속하였으매 그도 또한 같은 모양으로 혈과 육을 함께 지니심은 죽음을 통하여 죽음의 세력을 잡는 자 곧 마귀를 멸하시며 15 또 죽기를 무서워하므로 한평생 매여 종노릇하는 모든자들을 놓아주려 하심이니'
      },
      {
        reference: '히 9:11~12',
        label: '참 제사장',
        text:
          '11 그리스도께서는 장래 좋은 일의 대제사장으로 오사 손으로 짓지 아니한 것 곧 이 창조에 속하지 아니한 더 크고 온전한 장막으로 말미암아 12 염소와 송아지의 피로 하지 아니하고 오직 자기의 피로 영원한 속죄를 이루사 단번에 성소에 들어가셨느니라'
      },
      {
        reference: '히 10:19~20',
        label: '참 선지자',
        text:
          '19 그러므로 형제들아 우리가 예수의 피를 힘입어 성소에 들어갈 담력을 얻었나니 20 그 길은 우리를 위하여 휘장 가운데로 열어 놓으신 새로운 살 길이요 휘장은 곧 그의 육체니라'
      }
    ]
  },
  {
    id: 7,
    title: '7. 근본 문제 해결',
    subtitle: '마귀의 일을 멸하시고 · 해방 · 길이 되심',
    crossPos: { x: 50, y: 52 },
    verses: [
      {
        reference: '요일 3:8',
        label: '마귀의 일',
        text:
          '죄를 짓는 자는 마귀에게 속하나니 마귀는 처음부터 범죄함이라'
      },
      {
        reference: '롬 8:2',
        label: '해방',
        text:
          '이는 그리스도 예수 안에 있는 생명의 성령의 법이 죄와 사망의 법에서 너를 해방하였음이라'
      },
      {
        reference: '요 14:6',
        label: '길',
        text:
          '예수께서 이르시되 내가 곧 길이요 진리요 생명이니 나로 말미암지 않고는 아버지께로 올 자가 없느니라'
      }
    ]
  },
  {
    id: 8,
    title: '8. 어떻게 구원',
    subtitle: '영접 · 마음과 입의 시인 · 마음 문 열기 · 지금',
    crossPos: { x: 50, y: 64 },
    verses: [
      {
        reference: '요 1:12',
        label: '영접',
        text:
          '영접하는 자 곧 그 이름을 믿는 자들에게는 하나님의 자녀가 되는 권세를 주셨으니'
      },
      {
        reference: '롬 10:9~10',
        label: '마음·입·시인',
        text:
          '9 네가 만일 네 입으로 예수를 주로 시인하며 또 하나님께서 그를 죽은 자 가운데서 살리신 것을 네 마음으로 믿으면 구원을 받으리라 10 사람이 마음으로 믿어 의에 이르고 입으로 시인하여 구원에 이르느니라'
      },
      {
        reference: '계 3:20',
        label: '마음 문 열고',
        text:
          '볼찌어다 네가 문밖에 서서 두드리노니 누구든지 내 음성을 듣고 문을 열면 내가 그에게로 들어가 그와 더불어 먹고 그는 나와 더불어 먹으리라'
      },
      {
        reference: '잠 27:1',
        label: '지금',
        text:
          '너는 내일 일을 자랑하지 말라 하루 동안에 무슨 일이 일어날는지 네가 알 수 없음이니라'
      }
    ]
  },
  {
    id: 9,
    title: '9. 영접 기도',
    subtitle: '예수 그리스도를 마음의 주인으로 모시는 결단의 기도',
    crossPos: { x: 50, y: 72 },
    verses: [
      {
        reference: '결단의 기도',
        label: '함께 따라 읽기',
        text: `살아계신 하나님 /  저는 죄인 입니다 / 마귀에 속아 하나님을 떠났습니다./지금까지 내 마음대로 내 뜻대로/
고통 속에 살아왔습니다.  지금 이 시간에 제 마음에 문을 활짝 열고./예수님께서 십자가에서 죽으시고/ 부활 하신 그리스도이심을 믿습니다./ 마귀의 머리를 박살 내시고 / 나의 모든 죄를 용서 하시고 / 하나님 만나는 길을 여신 예수 그리스도를 제 마음속에 주인으로 영접 합니다 / 지금 성령으로 / 제 마음속에 들어오셔서 저를 하나님 자녀로 삼아 주시고 / 참 행복을 누리며 살게 해주세요 / 진리의 성령 께서 저를 인도하시고 / 역사해 주옵소서
/예수 그리스도의 이름으로 기도합니다. 아멘`
      },
      {
        reference: '축복의 메시지',
        label: '이제 시작입니다',
        text:
          '이제 당신은 그리스도 예수님을 구주로 영접하셨기에 하나님과 함께하는 삶을 통해서 하나님이 주시는 축복된 삶을 살게 됩니다. 날마다 성경말씀을 읽고 그 말씀을 통해 세상이 줄 어떤 것보다 소중한 생명을 얻는 삶을 살도록 축복하며 기도합니다. 사랑합니다.'
      }
    ]
  },
  {
    id: 10,
    title: '10. 구원받은 자의 축복',
    subtitle: '성령내주 · 인도 · 역사 · 천사도움 · 사탄결박 · 천국시민권 · 세계복음화',
    crossPos: { x: 50, y: 80 },
    verses: [
      {
        reference: '고전 3:16',
        label: '성령내주',
        text:
          '너희는 너희가 하나님의 성전인 것과 하나님의 성령이 너희 안에 계시는 것을 알지 못하느냐'
      },
      {
        reference: '요 14:26~27',
        label: '성령인도',
        text:
          '26 보혜사 곧 아버지께서 내 이름으로 보내실 성령 그가 너희에게 모든 것을 가르치고 내가 너희에게 말한 모든 것을 생각나게 하리라 27 평안을 너희에게 끼치노니 곧 나의 평안을 너희에게 주노라 내가 너희에게 주는 것은 세상이 주는 것과 같지 아니하니라 너희는 마음에 근심하지 말고 두려워하지 말라'
      },
      {
        reference: '요 14:14',
        label: '성령역사',
        text:
          '내 이름으로 무엇이든지 내게 구하면 내가 행하리라'
      },
      {
        reference: '히 1:14',
        label: '천사도움',
        text:
          '모든 천사들은 섬기는 영으로서 구원 받을 상속자들을 위하여 섬기라고 보내심이 아니냐'
      },
      {
        reference: '눅 10:19',
        label: '사탄결박',
        text:
          '내가 너희에게 뱀과 전갈을 밟으며 원수의 모든 능력을 제어할 권세를 주셨으니 너희를 해할 자가 결단코 없으리라'
      },
      {
        reference: '빌 3:20',
        label: '천국시민권',
        text:
          '그러나 우리의 시민권은 하늘에 있는지라 거기로부터 구원하는 자 곧 주 예수 그리스도를 기다리노니'
      },
      {
        reference: '행 1:8',
        label: '세계 복음화',
        text:
          '오직 성령이 너희에게 임하시면 너희가 권능을 받고 예루살렘과 온 유대와 사마리아와 땅 끝까지 이르러 내 증인이 되리라 하시니라'
      }
    ]
  },
  {
    id: 11,
    title: '지상명령',
    subtitle: '참고 · 마 28 · 막 16 · 행 1:8',
    crossPos: { x: 50, y: 88 },
    verses: [
      {
        reference: '마 28:16~20',
        label: '',
        text:
          '16 열한 제자가 갈릴리에 가서 예수께서 지시하신 산에 이르러 17 예수를 뵈옵고 경배하나 아직도 의심하는 사람들이 있더라 18 예수께서 나아와 말씀하여 이르시되 하늘과 땅의 모든 권세를 내게 주셨으니 19 그러므로 너희는 가서 모든 민족을 제자로 삼아 아버지와 아들과 성령의 이름으로 세례를 베풀고 20 내가 너희에게 분부한 모든 것을 가르쳐 지키게 하라 볼지어다 내가 세상 끝날까지 너희와 항상 함께 있으리라 하시니라'
      },
      {
        reference: '막 16:15~20',
        label: '',
        text:
          '15 또 이르시되 너희는 온 천하에 다니며 만민에게 복음을 전파하라 16 믿고 세례를 받는 사람은 구원을 얻을 것이요 믿지 않는 사람은 정죄를 받으리라 17 믿는 자들에게는 이런 표적이 따르리니 곧 그들이 내 이름으로 귀신을 쫓아내며 새 방언을 말하며 18 뱀을 집어 올리며 무슨 독을 마실지라도 해를 받지 아니하며 병든 사람에게 손을 얹은즉 나으리라 하시더라 19 주 예수께서 말씀을 마치신 후에 하늘로 올려지사 하나님 우편에 앉으시니라 20 제자들이 나가 두루 전파할새 주께서 함께 역사하사 그 따르는 표적으로 말씀을 확실히 증언하시니라'
      },
      {
        reference: '행 1:8',
        label: '',
        text:
          '오직 성령이 너희에게 임하시면 너희가 권능을 받고 예루살렘과 온 유대와 사마리아와 땅 끝까지 이르러 내 증인이 되리라 하시니라'
      }
    ]
  },
  {
    id: 12,
    title: '성도의 확신 5가지',
    subtitle: '참고 · 구원 · 인도 · 기도응답 · 사죄 · 승리',
    crossPos: { x: 50, y: 96 },
    verses: [
      {
        reference: '요일 5:11~12',
        label: '구원의 확신',
        text:
          '11 또 증거는 이것이니 하나님이 우리에게 영생을 주신 것과 이 생명이 그의 아들 안에 있는 그것이니라 12 아들이 있는 자에게는 생명이 있고 하나님의 아들이 없는 자에게는 생명이 없느니라'
      },
      {
        reference: '요 14:26~27',
        label: '인도의 확신',
        text:
          '26 보혜사 곧 아버지께서 내 이름으로 보내실 성령 그가 너희에게 모든 것을 가르치고 내가 너희에게 말한 모든 것을 생각나게 하리라 27 평안을 너희에게 끼치노니 곧 나의 평안을 너희에게 주노라 내가 너희에게 주는 것은 세상이 주는 것과 같지 아니하니라 너희는 마음에 근심하지도 말고 두려워하지도 말라'
      },
      {
        reference: '요 14:14',
        label: '기도응답의 확신',
        text:
          '내 이름으로 무엇이든지 내게 구하면 내가 행하리라'
      },
      {
        reference: '요일 1:9',
        label: '사죄의 확신',
        text:
          '만일 우리가 우리 죄를 자백하면 그는 미쁘시고 의로우사 우리 죄를 사하시며 우리를 모든 불의에서 깨끗하게 하실 것이요'
      },
      {
        reference: '롬 8:37',
        label: '승리의 확신',
        text:
          '그러나 이 모든 일에 우리를 사랑하시는 이로 말미암아 우리가 넉넉히 이기느니라'
      }
    ]
  }
]

/**
 * English stages — Bible text from the World English Bible (WEB), public domain.
 * Stage titles/subtitles are translated from the Korean source. crossPos values
 * mirror the Korean array exactly so the cross map is language-agnostic.
 *
 * @type {Stage[]}
 */
const stagesEn = [
  {
    id: 0,
    title: 'Beginning — God and Man',
    subtitle: 'Starting point of The Cross Way · 3-Minute Gospel',
    crossPos: { x: 50, y: 0 },
    verses: [
      {
        reference: 'Gen 1:1',
        label: 'God',
        text: `In the beginning, God created the heavens and the earth.`
      },
      {
        reference: 'Gen 2:7',
        label: 'Man',
        text:
          `Yahweh God formed man from the dust of the ground, and breathed into his nostrils the breath of life; and man became a living soul.`
      }
    ]
  },
  {
    id: 1,
    title: '1. Original Humanity',
    subtitle: 'Image · Blessing · Worship & Praise · Covenant',
    crossPos: { x: 50, y: 8 },
    verses: [
      {
        reference: 'Gen 1:27',
        label: 'Image',
        text:
          `God created man in his own image. In God's image he created him; male and female he created them.`
      },
      {
        reference: 'Gen 1:28',
        label: 'Blessing',
        text:
          `God blessed them. God said to them, "Be fruitful, multiply, fill the earth, and subdue it. Have dominion over the fish of the sea, over the birds of the sky, and over every living thing that moves on the earth."`
      },
      {
        reference: 'Gen 2:1~2',
        label: 'Worship & Praise',
        text:
          `1 The heavens, the earth, and all their vast army were finished. 2 On the seventh day God finished his work which he had done; and he rested on the seventh day from all his work which he had done.`
      },
      {
        reference: 'Gen 2:17',
        label: 'Covenant',
        text:
          `but you shall not eat of the tree of the knowledge of good and evil; for in the day that you eat of it, you will surely die.`
      }
    ]
  },
  {
    id: 2,
    title: '2. The Root Problem',
    subtitle: 'Satan · Sin · Departure',
    crossPos: { x: 50, y: 20 },
    verses: [
      {
        reference: 'Gen 3:1~5',
        label: 'Satan',
        text:
          `1 Now the serpent was more subtle than any animal of the field which Yahweh God had made. He said to the woman, "Has God really said, 'You shall not eat of any tree of the garden'?" 2 The woman said to the serpent, "We may eat fruit from the trees of the garden, 3 but not the fruit of the tree which is in the middle of the garden. God has said, 'You shall not eat of it. You shall not touch it, lest you die.'" 4 The serpent said to the woman, "You won't really die, 5 for God knows that in the day you eat it, your eyes will be opened, and you will be like God, knowing good and evil."`
      },
      {
        reference: 'Gen 3:6',
        label: 'Sin',
        text:
          `When the woman saw that the tree was good for food, and that it was a delight to the eyes, and that the tree was to be desired to make one wise, she took some of its fruit, and ate; and she gave some to her husband with her, and he ate it, too.`
      },
      {
        reference: 'Gen 3:7~10',
        label: 'Departure',
        text:
          `7 Their eyes were opened, and they both knew that they were naked. They sewed fig leaves together, and made coverings for themselves. 8 They heard Yahweh God's voice walking in the garden in the cool of the day, and the man and his wife hid themselves from the presence of Yahweh God amongst the trees of the garden. 9 Yahweh God called to the man, and said to him, "Where are you?" 10 The man said, "I heard your voice in the garden, and I was afraid, because I was naked; so I hid myself."`
      }
    ]
  },
  {
    id: 3,
    title: '3. State of Unbelievers',
    subtitle: "Children of the devil · Spiritual · Mental · Physical · Eternal · Generational issues",
    crossPos: { x: 50, y: 30 },
    verses: [
      {
        reference: 'John 8:44',
        label: 'Children of the devil (Fate · Slave of Satan)',
        text:
          `You are of your father, the devil, and you want to do the desires of your father. He was a murderer from the beginning, and doesn't stand in the truth, because there is no truth in him. When he speaks a lie, he speaks on his own; for he is a liar, and the father of lies.`
      },
      {
        reference: 'Eph 2:2~3',
        label: 'Spiritual problem (Idolatry · Superstition · Divination)',
        text:
          `2 in which you once walked according to the course of this world, according to the prince of the power of the air, the spirit who now works in the children of disobedience. 3 We also all once lived among them in the lusts of our flesh, doing the desires of the flesh and of the mind, and were by nature children of wrath, even as the rest.`
      },
      {
        reference: 'Matt 11:28',
        label: 'Mental problem (Anxiety · Emptiness · Depression)',
        text:
          `Come to me, all you who labor and are heavily burdened, and I will give you rest.`
      },
      {
        reference: 'Acts 8:4~8',
        label: 'Physical problem (Paralysis · Cancer · Incurable disease)',
        text:
          `4 Therefore those who were scattered abroad went around preaching the word. 5 Philip went down to the city of Samaria, and proclaimed to them the Christ. 6 The multitudes listened with one accord to the things that were spoken by Philip, when they heard and saw the signs which he did. 7 For unclean spirits came out of many of those who had them. They came out, crying with a loud voice. Many who had been paralyzed and lame were healed. 8 There was great joy in that city.`
      },
      {
        reference: 'Luke 16:19~31',
        label: 'Eternal problem (Judgment · Hell)',
        text:
          `19 Now there was a certain rich man, and he was clothed in purple and fine linen, living in luxury every day. 20 A certain beggar, named Lazarus, was taken to his gate, full of sores, 21 and desiring to be fed with the crumbs that fell from the rich man's table. Yes, even the dogs came and licked his sores. 22 The beggar died, and he was carried away by the angels to Abraham's bosom. The rich man also died, and was buried. 23 In Hades, he lifted up his eyes, being in torment, and saw Abraham far off, and Lazarus at his bosom. 24 He cried and said, "Father Abraham, have mercy on me, and send Lazarus, that he may dip the tip of his finger in water, and cool my tongue! For I am in anguish in this flame." 25 But Abraham said, "Son, remember that you, in your lifetime, received your good things, and Lazarus, in the same way, bad things. But here he is now comforted, and you are in anguish. 26 Besides all this, between us and you there is a great gulf fixed, that those who want to pass from here to you are not able, and that no one may cross over from there to us." 27 He said, "I ask you therefore, father, that you would send him to my father's house; 28 for I have five brothers, that he may testify to them, so they won't also come into this place of torment." 29 But Abraham said to him, "They have Moses and the prophets. Let them listen to them." 30 He said, "No, father Abraham, but if one goes to them from the dead, they will repent." 31 He said to him, "If they don't listen to Moses and the prophets, neither will they be persuaded if one rises from the dead."`
      },
      {
        reference: 'Ex 20:4~5',
        label: 'Generational problem (Spiritual & physical inheritance)',
        text:
          `4 "You shall not make for yourselves an idol, nor any image of anything that is in the heavens above, or that is in the earth beneath, or that is in the water under the earth: 5 you shall not bow yourself down to them, nor serve them, for I, Yahweh your God, am a jealous God, visiting the iniquity of the fathers on the children, on the third and on the fourth generation of those who hate me,"`
      }
    ]
  },
  {
    id: 4,
    title: '4. Human Methods',
    subtitle: 'Religion · Good Works · Philosophy cannot save',
    crossPos: { x: 18, y: 40 },
    verses: [
      {
        reference: 'Acts 4:12',
        label: 'Religion',
        text:
          `There is salvation in no one else, for there is no other name under heaven that is given amongst men, by which we must be saved!`
      },
      {
        reference: 'Isa 64:6',
        label: 'Good Works',
        text:
          `For we have all become like one who is unclean, and all our righteousness is like a polluted garment. We all fade like a leaf; and our iniquities, like the wind, take us away.`
      },
      {
        reference: 'Col 2:8',
        label: 'Philosophy',
        text:
          `Be careful that you don't let anyone rob you through his philosophy and vain deceit, after the tradition of men, after the elemental spirits of the world, and not after Christ.`
      }
    ]
  },
  {
    id: 5,
    title: "5. God's Method",
    subtitle: 'Savior · Jesus · Cross · Resurrection · Christ · Ascension · Second Coming',
    crossPos: { x: 50, y: 40 },
    verses: [
      {
        reference: 'John 3:16',
        label: 'Savior',
        text:
          `For God so loved the world, that he gave his one and only Son, that whoever believes in him should not perish, but have eternal life.`
      },
      {
        reference: 'Matt 1:21',
        label: 'Jesus',
        text:
          `She shall give birth to a son. You shall call his name Jesus, for it is he who shall save his people from their sins.`
      },
      {
        reference: 'John 19:30',
        label: 'Cross',
        text:
          `When Jesus therefore had received the vinegar, he said, "It is finished." He bowed his head, and gave up his spirit.`
      },
      {
        reference: '1 Cor 15:3~4',
        label: 'Resurrection',
        text:
          `3 For I delivered to you first of all that which I also received: that Christ died for our sins according to the Scriptures, 4 that he was buried, that he was raised on the third day according to the Scriptures,`
      },
      {
        reference: 'Matt 16:16',
        label: 'Christ',
        text:
          `Simon Peter answered, "You are the Christ, the Son of the living God."`
      },
      {
        reference: 'Acts 1:9~10',
        label: 'Ascension',
        text:
          `9 When he had said these things, as they were looking, he was taken up, and a cloud received him out of their sight. 10 While they were looking steadfastly into the sky as he went, behold, two men stood by them in white clothing,`
      },
      {
        reference: 'Rev 22:20',
        label: 'Second Coming',
        text:
          `20 He who testifies these things says, "Yes, I am coming quickly." Amen! Yes, come, Lord Jesus.`
      }
    ]
  },
  {
    id: 6,
    title: '6. Christ — Three Offices',
    subtitle: 'True King · True Priest · True Prophet',
    crossPos: { x: 82, y: 40 },
    verses: [
      {
        reference: 'Heb 2:14~15',
        label: 'True King',
        text:
          `14 Since then the children have shared in flesh and blood, he also himself in the same way partook of the same, that through death he might bring to nothing him who had the power of death, that is, the devil, 15 and might deliver all of them who through fear of death were all their lifetime subject to bondage.`
      },
      {
        reference: 'Heb 9:11~12',
        label: 'True Priest',
        text:
          `11 But Christ having come as a high priest of the coming good things, through the greater and more perfect tabernacle, not made with hands, that is to say, not of this creation, 12 nor yet through the blood of goats and calves, but through his own blood, entered in once for all into the Holy Place, having obtained eternal redemption.`
      },
      {
        reference: 'Heb 10:19~20',
        label: 'True Prophet',
        text:
          `19 Having therefore, brothers, boldness to enter into the holy place by the blood of Jesus, 20 by the way which he dedicated for us, a new and living way, through the veil, that is to say, his flesh,`
      }
    ]
  },
  {
    id: 7,
    title: '7. Solving the Root Problem',
    subtitle: "Destroying the devil's work · Liberation · The Way",
    crossPos: { x: 50, y: 52 },
    verses: [
      {
        reference: '1 John 3:8',
        label: "The devil's work",
        text:
          `He who sins is of the devil, for the devil has been sinning from the beginning.`
      },
      {
        reference: 'Rom 8:2',
        label: 'Liberation',
        text:
          `For the law of the Spirit of life in Christ Jesus made me free from the law of sin and of death.`
      },
      {
        reference: 'John 14:6',
        label: 'The Way',
        text:
          `Jesus said to him, "I am the way, the truth, and the life. No one comes to the Father, except through me."`
      }
    ]
  },
  {
    id: 8,
    title: '8. How to Be Saved',
    subtitle: "Receive · Confess with heart and mouth · Open the heart's door · Now",
    crossPos: { x: 50, y: 64 },
    verses: [
      {
        reference: 'John 1:12',
        label: 'Receive',
        text:
          `But as many as received him, to them he gave the right to become God's children, to those who believe in his name:`
      },
      {
        reference: 'Rom 10:9~10',
        label: 'Heart · Mouth · Confession',
        text:
          `9 that if you will confess with your mouth that Jesus is Lord, and believe in your heart that God raised him from the dead, you will be saved. 10 For with the heart, one believes resulting in righteousness; and with the mouth confession is made resulting in salvation.`
      },
      {
        reference: 'Rev 3:20',
        label: "Open the heart's door",
        text:
          `Behold, I stand at the door and knock. If anyone hears my voice and opens the door, then I will come in to him, and will dine with him, and he with me.`
      },
      {
        reference: 'Prov 27:1',
        label: 'Now',
        text:
          `Don't boast about tomorrow; for you don't know what a day may bring.`
      }
    ]
  },
  {
    id: 9,
    title: '9. Acceptance Prayer',
    subtitle: 'A prayer to receive Jesus Christ as the Lord of your heart',
    crossPos: { x: 50, y: 72 },
    verses: [
      {
        reference: 'Prayer of Decision',
        label: 'Pray together',
        text: `Living God,
I am a sinner.
I was deceived by the devil and turned away from You.
Until now I have lived according to my own will and desires,
in the midst of suffering.

At this very moment, I open the door of my heart wide,
and I believe that Jesus died on the cross
and rose again as the Christ.

He crushed the head of the devil,
forgave all my sins,
and opened the way to meet God.
I receive Jesus Christ as the Lord of my heart.

Come into my heart now by the Holy Spirit,
make me a child of God,
and let me live in true happiness.

May the Spirit of Truth guide me
and work powerfully in me.

In the name of Jesus Christ I pray. Amen.`
      },
      {
        reference: 'A Word of Blessing',
        label: 'A new beginning',
        text:
          `Now that you have received Christ Jesus as your Savior, you will live the blessed life God gives, walking together with Him each day. May you read the Bible daily, and through His Word receive a life that finds the most precious treasure—life itself, more valuable than anything the world can offer. I bless you and pray for you. I love you.`
      }
    ]
  },
  {
    id: 10,
    title: '10. Blessings of the Saved',
    subtitle: "Spirit's indwelling · Guidance · Power · Angelic help · Satan bound · Heavenly citizenship · World evangelization",
    crossPos: { x: 50, y: 80 },
    verses: [
      {
        reference: '1 Cor 3:16',
        label: "Spirit's indwelling",
        text:
          `Don't you know that you are a temple of God, and that God's Spirit lives in you?`
      },
      {
        reference: 'John 14:26~27',
        label: "Spirit's guidance",
        text:
          `26 But the Counselor, the Holy Spirit, whom the Father will send in my name, he will teach you all things, and will remind you of all that I said to you. 27 Peace I leave with you. My peace I give to you; not as the world gives, give I to you. Don't let your heart be troubled, neither let it be fearful.`
      },
      {
        reference: 'John 14:14',
        label: "Spirit's work",
        text:
          `If you will ask anything in my name, I will do it.`
      },
      {
        reference: 'Heb 1:14',
        label: 'Angelic help',
        text:
          `Aren't they all serving spirits, sent out to do service for the sake of those who will inherit salvation?`
      },
      {
        reference: 'Luke 10:19',
        label: 'Satan bound',
        text:
          `Behold, I give you authority to tread on serpents and scorpions, and over all the power of the enemy. Nothing will in any way hurt you.`
      },
      {
        reference: 'Phil 3:20',
        label: 'Heavenly citizenship',
        text:
          `For our citizenship is in heaven, from where we also wait for a Savior, the Lord Jesus Christ;`
      },
      {
        reference: 'Acts 1:8',
        label: 'World evangelization',
        text:
          `But you will receive power when the Holy Spirit has come upon you. You will be witnesses to me in Jerusalem, in all Judea and Samaria, and to the uttermost parts of the earth.`
      }
    ]
  },
  {
    id: 11,
    title: 'The Great Commission',
    subtitle: 'Reference · Matt 28 · Mark 16 · Acts 1:8',
    crossPos: { x: 50, y: 88 },
    verses: [
      {
        reference: 'Matt 28:16~20',
        label: '',
        text:
          `16 But the eleven disciples went into Galilee, to the mountain where Jesus had sent them. 17 When they saw him, they bowed down to him, but some doubted. 18 Jesus came to them and spoke to them, saying, "All authority has been given to me in heaven and on earth. 19 Go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, 20 teaching them to observe all things that I commanded you. Behold, I am with you always, even to the end of the age." Amen.`
      },
      {
        reference: 'Mark 16:15~20',
        label: '',
        text:
          `15 He said to them, "Go into all the world, and preach the Good News to the whole creation. 16 He who believes and is baptized will be saved; but he who disbelieves will be condemned. 17 These signs will accompany those who believe: in my name they will cast out demons; they will speak with new languages; 18 they will take up serpents; and if they drink any deadly thing, it will in no way hurt them; they will lay hands on the sick, and they will recover." 19 So then the Lord, after he had spoken to them, was received up into heaven, and sat down at the right hand of God. 20 They went out, and preached everywhere, the Lord working with them, and confirming the word by the signs that followed. Amen.`
      },
      {
        reference: 'Acts 1:8',
        label: '',
        text:
          `But you will receive power when the Holy Spirit has come upon you. You will be witnesses to me in Jerusalem, in all Judea and Samaria, and to the uttermost parts of the earth.`
      }
    ]
  },
  {
    id: 12,
    title: 'Five Assurances of the Believer',
    subtitle: 'Reference · Salvation · Guidance · Answered Prayer · Forgiveness · Victory',
    crossPos: { x: 50, y: 96 },
    verses: [
      {
        reference: '1 John 5:11~12',
        label: 'Assurance of Salvation',
        text:
          `11 The testimony is this, that God gave to us eternal life, and this life is in his Son. 12 He who has the Son has the life. He who doesn't have God's Son doesn't have the life.`
      },
      {
        reference: 'John 14:26~27',
        label: 'Assurance of Guidance',
        text:
          `26 But the Counselor, the Holy Spirit, whom the Father will send in my name, he will teach you all things, and will remind you of all that I said to you. 27 Peace I leave with you. My peace I give to you; not as the world gives, give I to you. Don't let your heart be troubled, neither let it be fearful.`
      },
      {
        reference: 'John 14:14',
        label: 'Assurance of Answered Prayer',
        text:
          `If you will ask anything in my name, I will do it.`
      },
      {
        reference: '1 John 1:9',
        label: 'Assurance of Forgiveness',
        text:
          `If we confess our sins, he is faithful and righteous to forgive us the sins, and to cleanse us from all unrighteousness.`
      },
      {
        reference: 'Rom 8:37',
        label: 'Assurance of Victory',
        text:
          `No, in all these things, we are more than conquerors through him who loved us.`
      }
    ]
  }
]

/**
 * Helper — 영문(stagesEn)의 verses + crossPos 를 그대로 재사용해서
 * 다른 언어의 stages 를 빠르게 합성한다. 각 언어는 title/subtitle 만 제공한다.
 *
 * 본문(verses) 자체는 영문 fallback 이며, 카드 상단에 해당 언어의
 * `translationPending` 배지가 표시되어 사용자가 임시 영문 표시임을 인지하게 한다.
 */
const buildLocalizedStages = (titles) =>
  titles.map((t, i) => ({
    id: t.id,
    title: t.title,
    subtitle: t.subtitle,
    crossPos: stagesEn[i].crossPos,
    verses: stagesEn[i].verses
  }))

/** @type {Stage[]} — Bahasa Indonesia (titles & subtitles only; verses pending) */
const stagesId = buildLocalizedStages([
  { id: 0, title: 'Awal — Tuhan dan Manusia', subtitle: 'Titik permulaan Jalan Keselamatan · 3 Menit' },
  { id: 1, title: '1. Manusia Asli', subtitle: 'Gambar · Berkat · Penyembahan & Pujian · Perjanjian' },
  { id: 2, title: '2. Masalah Pokok', subtitle: 'Iblis · Dosa · Kepergian' },
  { id: 3, title: '3. Keadaan Orang yang Tidak Percaya', subtitle: 'Anak Iblis · Roh · Jiwa · Tubuh · Akhirat · Keturunan' },
  { id: 4, title: '4. Cara Manusia', subtitle: 'Agama · Amal · Filsafat tidak menyelamatkan' },
  { id: 5, title: '5. Cara Tuhan', subtitle: 'Penyelamat · Yesus · Salib · Kebangkitan · Kristus · Kenaikan · Kedatangan Kembali' },
  { id: 6, title: '6. Kristus — Tiga Jabatan', subtitle: 'Raja Sejati · Imam Sejati · Nabi Sejati' },
  { id: 7, title: '7. Penyelesaian Masalah Pokok', subtitle: 'Membinasakan pekerjaan Iblis · Pembebasan · Sang Jalan' },
  { id: 8, title: '8. Bagaimana Memperoleh Keselamatan', subtitle: 'Menerima · Mengaku dengan hati & mulut · Membuka pintu hati · Sekarang' },
  { id: 9, title: '9. Doa Penerimaan', subtitle: 'Doa keputusan untuk menerima Yesus Kristus sebagai Tuhan dalam hati' },
  { id: 10, title: '10. Berkat bagi yang Diselamatkan', subtitle: 'Roh Kudus diam · Pimpinan · Pekerjaan · Pertolongan malaikat · Iblis terikat · Kewargaan sorga · Penginjilan dunia' },
  { id: 11, title: 'Amanat Agung', subtitle: 'Referensi · Mat 28 · Mrk 16 · Kis 1:8' },
  { id: 12, title: 'Lima Keyakinan Orang Percaya', subtitle: 'Referensi · Keselamatan · Pimpinan · Doa terjawab · Pengampunan · Kemenangan' }
])

/** @type {Stage[]} — Tagalog (titles & subtitles only; verses pending) */
const stagesTl = buildLocalizedStages([
  { id: 0, title: 'Simula — Diyos at Tao', subtitle: 'Simula ng Daan ng Kaligtasan · 3-Minutong Ebanghelyo' },
  { id: 1, title: '1. Orihinal na Tao', subtitle: 'Larawan · Pagpapala · Pagsamba at Pagpupuri · Tipan' },
  { id: 2, title: '2. Pangunahing Suliranin', subtitle: 'Satanas · Kasalanan · Paglayo' },
  { id: 3, title: '3. Kalagayan ng Hindi Naniniwala', subtitle: 'Anak ng Diyablo · Espirituwal · Pangkaisipan · Pisikal · Walang Hanggan · Henerasyon' },
  { id: 4, title: '4. Paraan ng Tao', subtitle: 'Relihiyon · Mabubuting gawa · Pilosopiya — hindi nakapagliligtas' },
  { id: 5, title: '5. Paraan ng Diyos', subtitle: 'Tagapagligtas · Hesus · Krus · Muling Pagkabuhay · Kristo · Pag-akyat · Muling Pagdating' },
  { id: 6, title: '6. Kristo — Tatlong Tungkulin', subtitle: 'Tunay na Hari · Tunay na Saserdote · Tunay na Propeta' },
  { id: 7, title: '7. Paglutas sa Pangunahing Suliranin', subtitle: 'Pagsira sa gawa ng Diyablo · Kalayaan · Ang Daan' },
  { id: 8, title: '8. Paano Maliligtas', subtitle: 'Tanggapin · Ipahayag sa puso at bibig · Buksan ang pinto ng puso · Ngayon' },
  { id: 9, title: '9. Panalangin ng Pagtanggap', subtitle: 'Panalangin upang tanggapin si Hesukristo bilang Panginoon ng puso' },
  { id: 10, title: '10. Mga Pagpapala ng Naligtas', subtitle: 'Pananahanan ng Espiritu · Patnubay · Kapangyarihan · Tulong ng Anghel · Nakatali si Satanas · Mamamayan ng Langit · Pang-mundong Ebanghelisasyon' },
  { id: 11, title: 'Dakilang Utos', subtitle: 'Sanggunian · Mat 28 · Mar 16 · Mga Gawa 1:8' },
  { id: 12, title: 'Limang Katiyakan ng Mananampalataya', subtitle: 'Sanggunian · Kaligtasan · Patnubay · Sagot sa panalangin · Kapatawaran · Tagumpay' }
])

/** @type {Stage[]} — ខ្មែរ Khmer (titles & subtitles only; verses pending) */
const stagesKm = buildLocalizedStages([
  { id: 0, title: 'ការចាប់ផ្ដើម — ព្រះ និង មនុស្ស', subtitle: 'ចំណុចចាប់ផ្ដើមនៃផ្លូវសេចក្ដីសង្គ្រោះ · ៣ នាទី' },
  { id: 1, title: '1. មនុស្សដើម', subtitle: 'រូបអង្គ · ព្រះពរ · ការថ្វាយបង្គំ និង សរសើរតម្កើង · សម្ព័ន្ធមេត្រី' },
  { id: 2, title: '2. បញ្ហាចម្បង', subtitle: 'អារក្ស · បាប · ការវង្វេង' },
  { id: 3, title: '3. ស្ថានភាពអ្នកមិនជឿ', subtitle: 'កូនអារក្ស · វិញ្ញាណ · ចិត្ត · រាងកាយ · ជីវិតខាងមុខ · វង្ស' },
  { id: 4, title: '4. វិធីរបស់មនុស្ស', subtitle: 'សាសនា · អំពើល្អ · ទស្សនវិជ្ជា — មិនអាចសង្គ្រោះ' },
  { id: 5, title: '5. វិធីរបស់ព្រះ', subtitle: 'អ្នកសង្គ្រោះ · ព្រះយេស៊ូ · ឈើឆ្កាង · ការរស់ឡើងវិញ · ព្រះគ្រីស្ទ · ការយាងឡើង · ការយាងមកវិញ' },
  { id: 6, title: '6. ព្រះគ្រីស្ទ — តួនាទីបី', subtitle: 'ស្ដេចពិត · សង្ឃពិត · ហោរាពិត' },
  { id: 7, title: '7. ការដោះស្រាយបញ្ហាចម្បង', subtitle: 'បំផ្លាញកិច្ចការអារក្ស · ការដោះលែង · ផ្លូវ' },
  { id: 8, title: '8. របៀបទទួលការសង្គ្រោះ', subtitle: 'ទទួល · ប្រកាសដោយចិត្ត និង មាត់ · បើកទ្វារចិត្ត · ឥឡូវនេះ' },
  { id: 9, title: '9. ការអធិស្ឋានទទួលយក', subtitle: 'ការអធិស្ឋានដើម្បីទទួលព្រះយេស៊ូគ្រីស្ទជាព្រះអម្ចាស់នៃចិត្ត' },
  { id: 10, title: '10. ព្រះពរសម្រាប់អ្នកដែលបានសង្គ្រោះ', subtitle: 'ព្រះវិញ្ញាណគង់នៅ · ការដឹកនាំ · កិច្ចការ · ទេវតាជួយ · អារក្សត្រូវចង · សញ្ជាតិស្ថានសួគ៌ · ផ្សាយដំណឹងល្អដល់ពិភពលោក' },
  { id: 11, title: 'បទបញ្ជាដ៏ឧត្ដម', subtitle: 'សេចក្ដីយោង · ម៉ាថាយ ២៨ · ម៉ាកុស ១៦ · កិច្ចការ ១:៨' },
  { id: 12, title: 'ការជឿជាក់ ៥ យ៉ាងរបស់អ្នកជឿ', subtitle: 'សេចក្ដីយោង · សេចក្ដីសង្គ្រោះ · ការដឹកនាំ · ការឆ្លើយតបការអធិស្ឋាន · ការអភ័យទោស · ជ័យជម្នះ' }
])

/* ============================================================
   다국어 번들
   - 본문 번역이 들어오기 전까지는 ko 데이터를 그대로 사용하고
     UI 에서 'translation pending' 배지를 노출한다.
   ============================================================ */

export const SUPPORTED_LANGUAGES = [
  { code: 'ko', label: '한국어', native: 'KOR', ready: true },
  { code: 'en', label: 'English', native: 'ENG', ready: true },
  { code: 'id', label: 'Bahasa Indonesia', native: 'IDN', ready: true },
  { code: 'tl', label: 'Tagalog', native: 'TGL', ready: true },
  { code: 'km', label: 'ខ្មែរ (Khmer)', native: 'KHM', ready: true }
]

export const UI_TEXT = {
  ko: {
    appTitle: '구원의 길',
    appSubtitle: '3분 전도 · The Cross Way',
    next: '다음',
    prev: '이전',
    stepOf: (n, total) => `${n} / ${total}`,
    stageLabel: (n) => `${n}단계`,
    miniMapLabel: '복음의 흐름',
    miniMapCurrent: (n) => `현재 ${n}단계`,
    languageLabel: '언어',
    translationPending: '번역 준비중'
  },
  en: {
    appTitle: 'The Cross Way',
    appSubtitle: '3-Minute Gospel Presentation',
    next: 'Next',
    prev: 'Prev',
    stepOf: (n, total) => `${n} / ${total}`,
    stageLabel: (n) => `Stage ${n}`,
    miniMapLabel: 'Gospel Flow',
    miniMapCurrent: (n) => `Step ${n}`,
    languageLabel: 'Language',
    translationPending: 'Verse translation pending'
  },
  id: {
    appTitle: 'Jalan Keselamatan',
    appSubtitle: 'Penginjilan 3 Menit · The Cross Way',
    next: 'Lanjut',
    prev: 'Kembali',
    stepOf: (n, total) => `${n} / ${total}`,
    stageLabel: (n) => `Tahap ${n}`,
    miniMapLabel: 'Alur Injil',
    miniMapCurrent: (n) => `Tahap ${n}`,
    languageLabel: 'Bahasa',
    translationPending: 'Terjemahan ayat tertunda'
  },
  tl: {
    appTitle: 'Daan ng Kaligtasan',
    appSubtitle: '3-Minutong Ebanghelyo · The Cross Way',
    next: 'Susunod',
    prev: 'Nakaraan',
    stepOf: (n, total) => `${n} / ${total}`,
    stageLabel: (n) => `Yugto ${n}`,
    miniMapLabel: 'Daloy ng Ebanghelyo',
    miniMapCurrent: (n) => `Yugto ${n}`,
    languageLabel: 'Wika',
    translationPending: 'Hinihintay ang salin ng talata'
  },
  km: {
    appTitle: 'ផ្លូវនៃសេចក្ដីសង្គ្រោះ',
    appSubtitle: 'ការផ្សាយដំណឹងល្អ ៣ នាទី · The Cross Way',
    next: 'បន្ទាប់',
    prev: 'មុន',
    stepOf: (n, total) => `${n} / ${total}`,
    stageLabel: (n) => `ដំណាក់កាល ${n}`,
    miniMapLabel: 'លំហូរនៃដំណឹងល្អ',
    miniMapCurrent: (n) => `ដំណាក់កាល ${n}`,
    languageLabel: 'ភាសា',
    translationPending: 'កំពុងរង់ចាំការបកប្រែខ'
  }
}

const LANGUAGE_BUNDLES = {
  ko: { stages: stagesKo, ready: true },
  en: { stages: stagesEn, ready: true },
  // id/tl/km: 제목·부제·UI 라벨은 각 언어로 번역 완료. verses 는 영문(WEB) fallback —
  // ready=false 로 두어 카드의 'translation pending' 배지가 노출되도록 한다.
  id: { stages: stagesId, ready: false },
  tl: { stages: stagesTl, ready: false },
  km: { stages: stagesKm, ready: false }
}

export function getStages(language = 'ko') {
  const bundle = LANGUAGE_BUNDLES[language] ?? LANGUAGE_BUNDLES.ko
  return bundle.stages
}

export function isLanguageReady(language) {
  return LANGUAGE_BUNDLES[language]?.ready === true
}

export function getUIText(language = 'ko') {
  return UI_TEXT[language] ?? UI_TEXT.ko
}

export const TOTAL_STAGES = stagesKo.length
