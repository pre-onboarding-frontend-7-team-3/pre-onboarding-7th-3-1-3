# 원티드 프리온보딩 프론트엔드 3팀 - Assignment #5

> [한국임상정보](https://clinicaltrialskorea.com/) 홈페이지 검색창 및 검색어 추천 구축
>
> 프로젝트 기간 : 2022년 11월 8일 ~ 2022년 11월 11일
>
> #### [배포링크](https://disease-search-3.herokuapp.com/)

</br>

## 📖 목차

- [실행 방법](#%EF%B8%8F-실행-방법)
- [협업 과정](#-협업-과정)
- [Best Practice 및 채택 근거](#%EF%B8%8F-best-practice-및-채택-근거)
- [팀 코드 컨벤션](#-팀-코드-컨벤션)
- [사용 기술](#-사용-기술)
- [폴더 구조](#폴더-구조)
- [팀원](#-팀원)

</br>

## ⌨️ 실행 방법

```zsh
$ git clone https://github.com/pre-onboarding-frontend-7-team-3/pre-onboarding-7th-3-1-3.git
$ npm install
$ chmod ug+x .husky/*
$ npm start
```

</br>

## 📃 협업 과정

1. 비동기적 소통을 위해 노션 워크스페이스에서 프로젝트를 페이지와 컴포넌트로 나누고 미팅 로그와 주요 코드를 공유하여 개발 효율을 높이고자 노력했습니다.

   > [노션 링크](https://www.notion.so/2-1-498c225b2d814eb8b77bf1d6d312037d)

2. 본 프로젝트는 동료학습에 최적화된 과정을 찾아가며 진행했습니다. [VSC Live Code extension](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack)을 활용해서 라이브 코드 리뷰를 진행하고 각자 구현한 코드에 대한 피드백 및 리팩토링 후 `페어 프로그래밍` 방식으로 Best Practice를 채택했습니다.

3. 소통 플랫폼으로 게더타운과 디스코드를 활용해서 협업을 진행했습니다.

</br>

## ☑️ Best Practice 및 채택 근거

### 1. TypeScript

- [ ] TypeScript는 정적 타입을 지원하므로 컴파일 단계에서 오류를 포착할 수 있는 장점이 있습니다. 코드의 `가독성`을 높이고 예측할 수 있게 하며 `디버깅`이 쉽다는 장점에 모두 공감해서 채택했습니다. 명시적인 정적 `타입 지정`은 팀 단위로 협업 시에 의도를 명확하게 코드로 기술할 수 있다는 점에서도 의견을 모았습니다.

<br/>

### 2. API 호출 최적화

- 서버에 대한 API 호출 최적화를 위해 응답으로 받은 데이터는 `캐싱` 처리하고 비동기 호출 횟수의 단축을 위해 `디바운싱` 처리했습니다.
- [ ] API 호출별로 로컬 캐싱

  - [ ] 클라이언트에서 매번 API 호출을 하기 전, 서버로 보낼 `쿼리 스트링`과 캐시 스토리지에 저장된 `캐시 object key`를 비교하여 일치할 경우 일치하는 캐시 key의 캐시 데이터를 사용해 검색 결과를 출력하였고 일치하지 않을 경우(캐시 처리된 데이터가 없는 경우) 서버에 GET 요청을 보내 응답으로 받은 데이터를 `key(요청 URL)`, `value(응답)` 형태로 캐시 스토리지에 저장했습니다.

  ![ezgif com-gif-maker (2)](https://user-images.githubusercontent.com/78708082/201212899-eddd696f-0d69-4566-b4a4-ceed37a8050f.gif)

  https://github.com/pre-onboarding-frontend-7-team-3/pre-onboarding-7th-3-1-3/blob/845e8d7d4424fdddabc1f67207840e7993020bbf/src/hooks/useSearch.ts#L23-L43

- [ ] API 호출 횟수 최적화

  - [ ] 팀원 간 live share 중 사용자가 검색창에 검색어를 입력했 때 onChange 이벤트가 발생할 때마다 서버에 GET 요청을 보내는 것은 비효율적인 프로세스라고 공통된 의견을 나누었습니다. 따라서 첫 onChange 이벤트의 발생 시점으로부터 의도적인 `지연시간`을 두어 API 호출 횟수를 줄였습니다. 검색창의 onChange 이벤트가 비동기적으로 input의 상태 값을 업데이트하되, 사용자가 입력한 검색 결과에 대한 비동기 요청은 `디바운싱 함수`에서 설정한 시간(600ms)이 지난 뒤에 최종적으로 업데이트된 상태 값을 쿼리 스트링으로 보내 호출되게 구현했습니다.

  ![3-1 디바운싱 후](https://user-images.githubusercontent.com/78708082/201217822-64ce8a7a-596e-4a65-9001-6bb85ce7e553.gif)

  ![3-1 디바운싱 전](https://user-images.githubusercontent.com/78708082/201217815-904a2ec5-822f-4ea1-9b48-677428121ed0.gif)

### 3. 키보드만으로 추천 검색어들로 이동 가능한 UX 구축

- [ ] 사용자가 추천 검색어 간 `키 이벤트`(ArrowUp, ArrowDown)로 자유롭게 이동할 수 있게 구현했습니다. 검색창 이동 간 선택된 검색어는 하이라이트 처리로 UI를 구성했고 검색 목록 하단에 도달했을 때 ArrowDown, ArrowUp 이벤트에는 자동으로 목록 내 검색어 위치로 따라가도록 구현했습니다. 일반적인 사용자 검색 유형을 고려하여 페이지를 다시 돌아오거나 새로고침 했을 시에도 최근 검색어가 유지되도록 구현하였습니다. onKeyDown 이벤트가 발생했을 때 호출되는 함수는 커스텀 훅으로 분리하여 뷰 단에서의 로직을 최소화하고자 노력했습니다.
  ![3-1 스크롤](https://user-images.githubusercontent.com/78708082/201228395-ac315854-cc85-4a11-82d2-1cb974e662c0.gif)

### 4. 객체지향형 프로그래밍

- [ ] live share로 코드 리뷰 중 재사용성이 높고 독립적으로 반복하는 코드에 대한 리팩토링이 필요하다는 의견을 공유했습니다. 컴포넌트(모듈, 유틸리티 함수, React 컴포넌트 등) 간 직접적인 의존성을 낮추고, 둘 다 공통된 추상화에 의존해야 한다는 `의존성 역전 원칙`을 적용하고자 API 통신 함수에 적용을 했습니다. 다만 이러한 원칙을 코드 전체적으로 적용하는 것은 악영향을 주거나 오버 엔지니어링된 코드로 이어질 수 있다는 공통된 의견을 모았습니다.

  https://github.com/pre-onboarding-frontend-7-team-3/pre-onboarding-7th-3-1-3/blob/6fbb9995ca3609b16f01eb9434dd0367426224ef/src/apis/SearchDiseaseService.ts#L1-L30

<br/>

## 🔒 팀 코드 컨벤션

- [ ] git commit message

| 커밋명   | 내용                                        |
| -------- | ------------------------------------------- |
| feat     | 파일, 폴더, 새로운 기능 추가                |
| fix      | 버그 수정                                   |
| docs     | 제품 코드 수정 없음                         |
| style    | 코드 형식, 정렬, 주석 등의 변경             |
| refactor | 코드 리팩토링                               |
| test     | 테스트 코드 추가                            |
| chore    | 환경설정, 빌드 업무, 패키지 매니저 설정등.. |
| hotfix   | 치명적이거나 급한 버그 수정                 |
| remove   | 사용하지 않는 변수, 파일 etc 삭제           |
| working  | 이미 만들어진 기능, 함수 작업중             |
| merge    | branch merge                                |

- [ ] branch

| 브랜치명 | 내용                         |
| -------- | ---------------------------- |
| develop  | 파일, 폴더, 새로운 기능 추가 |
| fix      | 버그 수정                    |
| docs     | 제품 코드 수정 없음          |
| refactor | 코드 리팩토링                |
| hotfix   | 치명적이거나 급한 버그 수정  |
| feat     | 새로운 기능 추가             |

</br>

## 🔨 사용 기술

<img alt="HTML5" src ="https://img.shields.io/badge/HTML5-E34F26?&style=flat&logo=HTML5&logoColor=white"/> <img alt="CSS3" src ="https://img.shields.io/badge/CSS3-1572B6?&style=flat&logo=CSS3&logoColor=white"/> <img alt="JavaScript" src ="https://img.shields.io/badge/JavaScript-F7DF1E?&style=flat&logo=JavaScript&logoColor=white"/> <img alt="React" src ="https://img.shields.io/badge/React-61DAFB?&style=flat&logo=React&logoColor=white"/> <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-blue?style=flat&logo=TypeScript&logoColor=white"/>

<img alt="styled-components" src ="https://img.shields.io/badge/styled components-DB7093?&style=flat&logo=styled-components&logoColor=white"/> <img alt="recoil" src ="https://img.shields.io/badge/recoil-4082bc?&style=flat&logo=Recoils&logoColor=white"/>

<img alt="Git" src ="https://img.shields.io/badge/Git-F05032?&style=flat&logo=Git&logoColor=white"/> <img alt="GitHub" src ="https://img.shields.io/badge/GitHub-181717?&style=flat&logo=GitHub&logoColor=white"/> <img alt="Notion" src ="https://img.shields.io/badge/Notion-green?&style=flat&logo=Notion&logoColor=white"/>

</br>

## 📦 폴더 구조

```
📂 src
│  ├─ App.tsx
│  ├─ apis
│  │  ├─ SearchDiseaseService.ts
│  │  ├─ getDataAndRegisterCache.ts
│  │  ├─ index.ts
│  │  └─ request.ts
│  ├─ components
│  │  ├─ Header.tsx
│  │  ├─ Layout
│  │  │  ├─ Layout.tsx
│  │  │  └─ index.ts
│  │  ├─ Main
│  │  │  ├─ HighlightedText.tsx
│  │  │  ├─ RecentSearchWord.tsx
│  │  │  ├─ RecommendWord.tsx
│  │  │  ├─ SearchForm.tsx
│  │  │  ├─ SearchItem.tsx
│  │  │  └─ SearchItemList.tsx
│  │  └─ Navbar.tsx
│  ├─ constants
│  │  └─ NavData.ts
│  ├─ hooks
│  │  ├─ useDebounce.ts
│  │  ├─ useKeyDown.ts
│  │  ├─ useScroll.ts
│  │  └─ useSearch.ts
│  ├─ index.css
│  ├─ index.jsx
│  ├─ pages
│  │  └─ Main
│  │     ├─ Main.tsx
│  │     └─ index.ts
│  ├─ react-app-env.d.ts
│  ├─ store
│  │  ├─ searchResult.ts
│  │  ├─ searchValue.ts
│  │  ├─ searchWord.ts
│  │  └─ selectedSearchResultIndex.ts
│  ├─ style
│  │  ├─ GlobalStyle.ts
│  │  └─ Theme.ts
│  ├─ styled.d.ts
│  └─ utils
│     ├─ checkValidationOfInput.ts
│     ├─ filterCachedData.ts
│     ├─ getCachedData.ts
│     ├─ makeTrieBySearchWord.ts
│     └─ recentSearch.ts
└─ tsconfig.json

```

</br>

## 👨‍👩‍👧‍👦 팀원

| 조은지<br/>(팀장)                                                                                                | 고영훈<br/>(서기)                                                                                               | 김창희<br/>(팀원)                                                                                               | 박정민<br/>(팀원)                                                                                           |
| ---------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| <img src="https://avatars.githubusercontent.com/u/95282989?s=96&v=4" alt="Joeunji0119" width="100" height="100"> | <img src="https://avatars.githubusercontent.com/u/65995664?s=96&v=4" alt="YeonghunKO" width="100" height="100"> | <img src="https://avatars.githubusercontent.com/u/45018724?s=96&v=4" alt="PiperChang" width="100" height="100"> | <img src="https://avatars.githubusercontent.com/u/55550034?s=96&v=4" alt="ono212" width="100" height="100"> |
| [Joeunji0119](https://github.com/Joeunji0119)                                                                    | [YeonghunKO](https://github.com/YeonghunKO)                                                                     | [PiperChang](https://github.com/PiperChang)                                                                     | [ono212](https://github.com/ono212)                                                                         |

| 문지원<br/>(팀원)                                                                                                | 이상민<br/>(공지)                                                                                               | 이지원<br/>(팀원)                                                                                               | 조수진<br/>(팀원)                                                                                        |
| ---------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| <img src="https://avatars.githubusercontent.com/u/78708082?s=96&v=4" alt="moonkorea00" width="100" height="100"> | <img src="https://avatars.githubusercontent.com/u/28257740?s=96&v=4" alt="dltkdals224" with="100" height="100"> | <img src="https://avatars.githubusercontent.com/u/86206374?s=96&v=4" alt="365supprot" width="100" height="100"> | <img src="https://avatars.githubusercontent.com/u/110365677?v=4" alt="suzz-in" width="100" height="100"> |
| [moonkorea00](https://github.com/moonkorea00)                                                                    | [dltkdals224](https://github.com/dltkdals224)                                                                   | [365support](https://github.com/365support)                                                                     | [suzz-in](https://github.com/suzz-in)                                                                    |
