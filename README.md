# AlgoHub 프론트엔드

### 기술 스택
1.  React.js
    

2.  Redux
    여러 상태 값들을 중아에서 관리히가 위해 사용하였습니다.
    

3. redux-thunk    
    미들웨어로서 비동기 작업을 처리하기 위해 사용하였습니다.


### 페이지별 설명
* 메인페이지 & 언어 필터 & 검색
    * 메인 페이지      
      <img src="/ImgForMd/main.png" width="800px"></img>       
      메인페이지에서는 게시물 목록을 확인할 수 있으며 언어 필터와 검색 기능을 사용할 수 있습니다.
      
    * 언어 필터    
      <img src="/ImgForMd/langFilter.gif" width="800px"></img>      
      특정 언어로 작성된 게시물을 확인할 수 있습니다. 복수 선택이 가능합니다.
      
    * 검색    
      <img src="/ImgForMd/search.gif" width="800px"></img>   
      검색을 통하여 원하는 게시물을 찾을 수 있습니다. 제목과 메모 부분에 대해 검색을 진행합니다.

* 로그인 & 비밀번호 찾기 & 회원가입    
    * 로그인  
      <img src="/ImgForMd/login.png" width="800px"></img>     
      이메일과 비밀번호를 입력하여 로그인을 진행합니다.

    * 비밀번호 찾기   
      <img src="/ImgForMd/FindPwd.png" width="800px"></img>     
      등록된 이메일을 이용하여 임심비밀번호를 발급받을 수 있습니다.
             
    * 회원가입    
      <img src="/ImgForMd/join.png" width="800px"></img>        
      이메일, 닉네임, 비밀번호를 입력하여 회원 가입을 진행합니다.


* 글 상세보기
    * 글 상세보기(로그인 전)        
      <img src="/ImgForMd/detail(bf login).png" width="800px"></img>   
      글 상세 내용을 확인할 수 있습니다. 작성자 닉네임을 클릭하면 해당 작성자의 마이페이지로 이동할 수 있습니다. 좋아요를 누르기 위해서는 로그인을 해야 합니다.
      
    * 글 상세보기(로그인 후, 나의 글)     
      <img src="/ImgForMd/detail(af login, mine).png" width="800px"></img>      
      자신이 작성한 글의 공개 여부를 확인 할 수 있으며 관리(수정 & 삭제)를 할 수 있습니다. 자신의 글에도 좋아요를 넣을 수 있습니다.
      
    * 글 상세보기(로그인 후, 남의 글)    
      <img src="/ImgForMd/detail(af login, others).png" width="800px"></img>    
      좋아요를 누를 수 있습니다.

* 유저페이지(마이페이지)
    * 유저페이지(로그인 전)     
      <img src="/ImgForMd/userpage.gif" width="800px"></img>     
      특정 사용자가 얼마나 열심히 기록했는지를 보여주고, 전체 글(비공개 글 제외)과, 좋아요 누른 글, 팔로잉 목록을 확인할 수 있습니다. 팔로우를 하기 위해서는 로그인해야 합니다.
      
    * 유저페이지(로그인 후, 자기 자신것 & 남의 것)    
      <img src="/ImgForMd/userpage(aft login).gif" width="800px"></img>     
      로그인을 하고 자신의 마이페이지에서는 비공개 글도 확인할 수 있습니다. 다른 사용자의 마이페이지에서는 팔로우를 진행할 수 있습니다.
      
* 글 작성 & 수정 & 삭제      
  <img src="/ImgForMd/WriteEditDelete.gif" width="800px"></img>     
  위에서 확인 확인할 수 있듯이 글을 작성(제목, 사용 언어, 공개 여부, 코드, 메모), 수정(제목, 사용 언어, 공개 여부, 코드, 메모), 삭제 할 수 있다.    


* 설정 페이지    
아래와 같이 사용자의 닉네임, 이메일, 비밀번호를 변경 가능하고, 회원 탈퇴를 진행할 수 있습니다.
  * 닉네임 변경    
  <img src="/ImgForMd/nickChange.png" width="800px"></img>
      
  * 이메일 변경    
  <img src="/ImgForMd/emailChange.png" width="800px"></img>

  * 비밀번호 변경    
  <img src="/ImgForMd/pwdChange.png" width="800px"></img>
    
  * 회원 탈퇴      
  <img src="/ImgForMd/bye.png" width="800px"></img>   
    
    
### 백엔드 레파지토리     
아래 링크에서 백엔드와 관련된 설명을 확인하실 수 있습니다.       
https://github.com/yshjft/capstone_backend

### 배포 주소
http://mjualgohub.tk
