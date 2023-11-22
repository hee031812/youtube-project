# ✈나만의 여행 유튜브 사이트 만들기✈
유튜브 API를 이용하여 여행하는 사이트를 만들겠습니다.   
평소에 여행을 좋아하기 때문에 여행 정보만을 편리하게 보기위해 만들게 되었습니다.

## 리액트 사용하여 슬라이드 autoplay만들기
[autoplay만들기](https://swiperjs.com/demos#autoplay)
react 코드를 보고 소스를 가져와서 넣어준다.


YOUTUBE API 가져와서 설정   
   
`api키 받아오기`   
`환경변수 만들어서 키 넣어주기`   
`REACT_QPP_YOUTUBE_API_KEY=(받아온 키값 넣어주기)`   
`gitignore 페이지에 .env 넣어주기`   
`postman 사용하기`   
      
## postmen이란   
"`Postman`은 API 개발 및 테스트를 위한 강력한 협업 도구로, 다양한 HTTP 요청을 테스트하고 관리하며
테스트 스크립트 작성과 문서 생성을 지원한다."  

   
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
`onChange`  onChange은 주로 사용자가 입력한 내용이나 어떤 값이 변경될 때 발생하는 이벤트를 다루기 위해 사용된다.   
`onKeyDown`  onKeyDown 이벤트 핸들러는 주로 키보드 이벤트를 감지하고 처리하기 위해 사용된다.    
사용자가 어떤 키를 눌렀을 때 특정 동작을 수행하고 싶을 때 이 이벤트를 활용할 수 있다.   
<br>
   
## 작은 동영상 Home에 출력하기
`async , await`  async, await를 사용하면 비동기 코드를 작성할 때 콜백 함수나 Promise 체이닝을    
사용하는 것보다 코드를 더 읽기 쉽게 만들 수 있다.   

`try, catch`  try, catch는 에러를 처리하기 위한 구문이다. 예외 처리를 통해 프로그램의 안정성을 높이고    
예외 상황에 대한 대응을 할 수 있도록 도와준다.   

**try, catch, finally 함께 쓰인다.**
   
