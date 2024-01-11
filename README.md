## 나만의 여행 유튜브 사이트 만들기
유튜브 API를 이용하여 여행하는 사이트를 만들겠습니다.
평소에 여행을 좋아하기 때문에 여행정보만을 편리하게 보기위해 만들게 되었습니다.


### 완성작보기
<img src="https://hee031812.github.io/youtube-project/src/assets/img/img33.png">
## 리액트 사용하여 슬라이드 autoplay만들기
react 코드를 보고 소스를 가져와서 넣어준다.

# 리액트 유튜브 여행 사이트 만들기   
   
여행을 좋아해서 여행 정보를 모으기 위해 여행 유튜버들을 모아봤습니다.   
이번 연습을 통하여 리액트 구조에 대해 배울수 있는 시간이길 바랍니다.


### 주요 기능
YouTube API 연동: 이 프로젝트는 YouTube API를 사용하여 여행 관련 유튜브 콘텐츠의 데이터를 추출하고 사용자에게 제공합니다.
콘텐츠 분류 및 탐색: 각 유튜버별로 콘텐츠를 분류하여 사용자가 원하는 유튜버의 비디오를 쉽게 찾을 수 있도록 구성합니다.
동적 웹 인터페이스: React의 컴포넌트 기반 구조를 사용하여 사용자 인터페이스를 구축합니다. 이를 통해 애플리케이션이 동적이고 상호작용이 가능하게 됩니다.
검색 기능: 사용자가 특정 키워드를 이용해 비디오를 검색할 수 있는 기능을 구현합니다.
더보기 기능: 사용자가 더 많은 콘텐츠를 탐색할 수 있도록 더보기 기능을 제공합니다.

### 라이브러리 설치
sasss를 설치 : `npm install sass`   
react-router-dom 설치 : `npm install react-router-dom`   
react-icons 설치 : `npm install react-icons`   
axios 설치 : `npm i axios`   
react-player 설치 : `npm i react-player`   
   
### 터미널 깃 업로드 커밋하기   
git add.   
git status   
git commit -m "커밋할이름"   
git push -u origin main    
YOUTUBE API 가져와서 설정   
   
`api키 받아오기`   
`환경변수 만들어서 키 넣어주기`   
`REACT_QPP_YOUTUBE_API_KEY=(받아온 키값 넣어주기)`   
`gitignore 페이지에 .env 넣어주기`   
`postman 사용하기`   
      
## postmen이란   
"`Postman`은 API 개발 및 테스트를 위한 강력한 협업 도구로, 다양한 HTTP 요청을 테스트하고 관리하며, 테스트 스크립트 작성과 문서 생성을 지원한다."   
   
`youtube API클릭`   
`Search` -> `list` -> part: snippet / maxResults: 50 / -> `Excute` -> `showcode`      
안에있는 key 값을 가져와 퍼스트맨의 Get에 넣어주고 기존에 받은 APIKEY값을 넣어준다.   
      
## 더보기 기능 추가
[유튜브](https://rapidapi.com/Glavier/api/youtube-v311/)키 값을 가져온다.   
.env에 키 값을 안보이게 넣어주고  button을 만들어 안에 함수를 적용해준다.   
키 값안에 있는 nextPageToken 코드를 가져와서 더보기 기능을 수행한다.   
      
## Suspense
`React Suspense`는 React 라이브러리의 일부로,   
데이터를 불러오거나 계산하는 동안 화면을 일시적으로 정지시키고 대기하는 기능을 제공하는 기술이다.   
다운 받는동안 layz 소스를 작업하기 위해서 사용.  
      
## 검색기능
`onChange`  onChange은 주로 사용자가 입력한 내용이나 어떤 값이 변경될 때 발생하는   
이벤트를 다루기 위해 사용된다.   
`onKeyDown`  onKeyDown 이벤트 핸들러는 주로 키보드 이벤트를 감지하고 처리하기 위해 사용된다.    
사용자가 어떤 키를 눌렀을 때 특정 동작을 수행하고 싶을 때 이 이벤트를 활용할 수 있다.   
<br>
   
## 작은 동영상 Home에 출력하기
`async , await`  async, await를 사용하면 비동기 코드를 작성할 때 콜백 함수나 Promise 체이닝을 사용하는 것보다 코드를 더 읽기 쉽게 만들 수 있다.   
`try, catch`  try, catch는 에러를 처리하기 위한 구문이다. 예외 처리를 통해 프로그램의 안정성을 높이고 예외 상황에 대한 대응을 할 수 있도록 도와준다.   
try, catch, finally 함께 쓰인다.    
   

## 댓글 추가작업 진행
`slice`를 사용하여 댓글수를 원하는 갯수만큼만 추출했다.
`handleViewCommentsClick `함수를 사용하여 더보기 메뉴를 토글화 했다.
이 코드를 통해 사용자가 처음에는 일부 5개의 댓글만 보고,   
"댓글보기" 버튼을 클릭하여 나머지 댓글을 볼 수 있도록 하는 동작을 구현하였다.
