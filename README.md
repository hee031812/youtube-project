## 나만의 여행 유튜브 사이트 만들기
유튜브 API를 이용하여 여행하는 사이트를 만들겠습니다.
평소에 여행을 좋아하기 때문에 여행정보만을 편리하게 보기위해 만들게 되었습니다.

## 리액트 사용하여 슬라이드 autoplay만들기
[autoplay만들기](https://swiperjs.com/demos#autoplay)
react 코드를 보고 소스를 가져와서 넣어준다.


YOUTUBE API 가져와서 설정

`api키 받아오기`
`환경변수 만들어서 키 넣어주기`
`REACT_QPP_YOUTUBE_API_KEY=(받아온 키값 넣어주기)`
`gitignore 페이지에 .env 넣어주기`
`postman 사용하기`

### postmen이란
"Postman은 API 개발 및 테스트를 위한 강력한 협업 도구로, 다양한 HTTP 요청을 테스트하고 관리하며, 테스트 스크립트 작성과 문서 생성을 지원합니다."

`youtube API클릭`
`Search` -> `list` -> part: snippet / maxResults: 50 / -> `Excute` -> `showcode` 
- 안에있는 key값을 가져와 퍼스트맨의 Get에 넣어주고 기존에 받은 APIKEY값을 넣어준다.

### 더보기 기능 추가

[유튜브](https://rapidapi.com/Glavier/api/youtube-v311/)키값을 가져온다.
.env에 키값을 안보이게 넣어주고  button을 만들어 안에 함수를 적용해준다.
키값안에 있는 nextPageToken 코드를 가져와서 더보기 기능을 수행한다.


### Suspense
React Suspense는 React 라이브러리의 일부로,   
데이터를 불러오거나 계산하는 동안 화면을 일시적으로 정지시키고 대기하는 기능을 제공하는 기술이다.   
다운받는동안 layz 소스를 작업하기 위해서 사용.   
