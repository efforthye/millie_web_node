# Millie-Web-Project
![sdfsdfsdfdsfdf](https://github.com/efforthye/Millie-Web/assets/111038259/fcdce2e6-23ee-44d4-bc71-382d640dc502)

- array팀(김성진, 박혜림, 신상목, 최원겸)
- 밀리의 서재 클론코딩
- 기간 : 2022. 11. 3. ~ 2022. 11. 16. (2주간)

# 개발환경
- FrontEnd : html5, css3, javascript (+bootstrap, codepen)
- BackEnd : Node.js(express), MySQL
- 형상관리 : git  

# 주요 구현 사항
- node.js express를 통한 서버구축
- node.js에서 mysql database 연결
- cookie와 jwt를 활용한 로그인
- multer를 활용한 이미지 업로드/출력
- node.js에서 mysql database 접근 front출력
  - 입력, 수정, 삭제, 출력, 정렬 구현
- decodeURI를 활용한 한글 사이트주소(url) 가져오기
- database 연결관계(associate) 설정   
  (user, book, comment)
- git을 이용한 형상관리(merge,rebase,commit,push,pull등)

# 있으면 좋았을 것
- socket.io를 활용한 대화기능 구현

# 프로젝트 실행 방법
1. 폴더경로(millie-web-project) 접근 후 npm install -> node_modules 생성됨
2. config/config.json에서 database 이름과 비밀번호 확인 및 변경
- database : millie_web_project
- password : 자신의 mysql workbench 비밀번호로 설정한다.
3. mysql workbench에 해당 이름의 스키마 생성(millie_web_project, utf8mb4, utf8mb4_general)
4. database의 table 생성을 위해 npm start를 통해 서버를 실행시킨다.
5. index.js의 sequelize force 부분을 true로 한 번 바꿔 저장한 뒤, 다시 false로 바꿔 저장한다.
6. npm start를 통해 프로젝트를 재실행한다.
- localhost:8080
