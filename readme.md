## 🔎 서비스 소개
### 🌏 기획 배경
### 🙍‍♂️ 타겟 유저
### 🧪 기대 효과

## 📑 프로젝트 사용 방법
+ 배포 주소<br>
  https://modipw.netlify.app/
+ 실행 방법
  ```
  git clone https://github.com/prgrms-web-devcourse/Team_MODI_MODI_FE.git
  npm i
  npm start
  ```
## 📌 프로젝트 문서
+ [팀 MODI Notion](https://www.notion.so/backend-devcourse/11-9fc1c4557d06490c83abd11ae213b9f4)

 
## 📌 주요 기능 및 페이지 소개
|메인 페이지|
|------|
|<p align="center"><img src="https://user-images.githubusercontent.com/80025421/146865789-1e978d3a-bc5c-4fd0-82bd-6b0c97a85d59.gif" width=60%/></p> |
|<li>파티 모집 현황판</li><li>Ott별 파티 찾기 버튼</li>|


|로그인 페이지|
|------|
|<p align="center"><img src="https://user-images.githubusercontent.com/80025421/146865992-88082055-ab1e-4644-9e4e-1506e88f65dd.gif" width=60%/></p> |
|<li>네이버 소셜 로그인</li><li>카카오 소셜 로그인</li>|


|파티 생성 페이지|
|------|
|<p align="center"><img src="https://user-images.githubusercontent.com/80025421/146866212-1871474b-868b-4c6c-b416-8ba1a4369a29.gif" width=60%/></p> |
|<li>Ott 선택</li> <li>시작일 및 기간 설정</li> <li> 파티 규칙 설정</li> <li>파티 인원 설정</li> <li>공유 게정 정보 입력</li>|


|서비스 파티 목록 페이지|
|------|
|<p align="center"><img src="https://user-images.githubusercontent.com/80025421/146866554-385502d8-8432-43fa-8393-29dec29772b9.gif" width=60%/></p> |
|<li>Ott 별 모집 중인 파티 리스트</li><li>파티별 상세정보 확인</li>|


|결제 페이지|
|------|
|<p align="center"><img src="https://user-images.githubusercontent.com/80025421/146866770-453e8c8b-bfcd-4da7-a24f-310a3bc186cb.gif" width=60%/></p> |
|<li>파티 가입 및 결제</li><li>충전페이지 이동</li>|


|내 정보 페이지|
|------|
|<p align="center"><img src="https://user-images.githubusercontent.com/80025421/146867025-3edf5b25-b2b2-4294-b0bd-4826450ff382.gif" width=60%/></p> |
|<li>내 정보 확인</li> <li>닉네임 변경</li><li>내 파티 목록 확인</li>|


|내 파티 정보 페이지|
|------|
|<p align="center"><img src="https://user-images.githubusercontent.com/80025421/146867180-b0edfbc3-eaee-40d5-8c03-7fc795360551.gif" width=60%/></p> |
|<li>내 파티 상세 정보 확인</li><li>공유 계정 정보 확인</li><li>공유 계정 정보 수정(Only Leader)</li>|


|충전 페이지|
|------|
|<p align="center"><img src="https://user-images.githubusercontent.com/80025421/146867287-85f29859-55d4-4a77-b9da-4ef76a4a0ccc.gif" width=60%/></p> |
|<li>포인트 충전</li>|


|404 페이지|
|------|
|<p align="center"><img src="https://user-images.githubusercontent.com/80025421/146867358-0187dbda-e372-4e23-a94c-675c05e31f9f.gif" width=60%/></p> |
|<li>잘못된 경로 알림</li>|

## 🤵 팀원 소개
| 김현석 | 장윤지 | 정예원 | 이경미 |
| :---: | :---: | :---: | :---: |
|![dorr](https://user-images.githubusercontent.com/80025421/146864059-ea6bf67a-dca3-4081-ab4b-dcc706bf16d1.jpg)|![jen](https://user-images.githubusercontent.com/80025421/146864066-eb68c92a-e156-4872-b255-4c4a8237fb69.jpg)|![nancy](https://user-images.githubusercontent.com/80025421/146864072-73cf1790-d9f1-4695-9546-19a049347c9c.jpg)|![koby](https://user-images.githubusercontent.com/80025421/146864078-89aefc79-ec38-4247-b8cb-86dbc7ebc8a2.jpg)
| [Dorr](https://github.com/dorrdorr9311) | [Jen](https://github.com/yjnim) | [Nancy](https://github.com/Yeewon) | [Kobi](https://github.com/sshyukk) |


## 📌 폴더 구조
```
.
├── .github
├── node_modules
├── public
└── src
    ├── assets
    │   └── ...
    ├── components
    │   ├── Common 
    │   ├── Main
    │   ├── MyParty
    │   ├── Ott
    │   ├── PartyCreate
    │   ├── PartyJoin
    │   ├── PartyTitle
    │   ├── Payment
    │   └── Skeleton
    ├── contexts
    │   └── ...
    ├── hooks
    ├── constants
    ├── pages
    │   ├── CreatePartyPage 
    │   ├── LoginAlertPage
    │   ├── LoginPage
    │   ├── MainPage
    │   ├── MyPage
    │   ├── MyPartyDetailPage
    │   ├── NotFoundPage
    │   ├── OauthRedirectPage
    │   ├── PaymentPage
    │   ├── PointChargePage
    │   └── RecruitingPartyPage    
    ├── styles
    │   └── ...
    ├── utils
    │   ├── apis
    │   └── ...
    ├── App.js
    ├── Router.jsx
    └──index.js
``` 

