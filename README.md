# 원티드 프리온보딩 프론트엔드 3팀 - Assignment #3

> 목적 : 
>
> 프로젝트 기간 : 
>
> #### [배포링크]()

</br>

### ✨주요기능! (gif,사진 첨부)

### 1. blahblah



</br>

### 2. blahblah


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

```jsx
$ git clone https://github.com/pre-onboarding-frontend-7-team-3/pre-onboarding-7th-2-1-3.git
$ npm install
$ npm run dev
```

</br>

## 📃 협업 과정

1. 우선 노션에서 프로젝트를 페이지 별로 나누고 또 다시 페이지 별로 필요한 컴포넌트를 나열하여 작업을 최대한 세분화 하려고 했습니다.

    - https://www.notion.so/2-1-498c225b2d814eb8b77bf1d6d312037d

2. 본 프로젝트는 동료학습에 최적화된 과정을 찾아가며 진행했습니다. [VSC Live Code extension](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack)을 활용해서 라이브 코드 리뷰를 진행하고 각자 구현한 코드에 대한 피드백 및 리팩토링 후 `페어 프로그래밍` 방식으로 Best Practice를 채택했습니다.


3. 게더타운에 모여 화면공유를 하며 실시간으로 피드백을 주고 받았습니다.

</br>

# 예시

## ☑️ Best Practice 및 채택 근거

### 1. barrel 방식의 폴더구조
각 컴포넌트에 해당되는 폴더를 만들고 그 안에 index.js를 만듭니다.

예를 들어 index.js안에 `export { default } from './Header'` 라고 해두면 VS CODE상에서 해당 파일을 링크하여 열었을때(ctrl를 누른상태로 클릭) vs code 에디터 상단에 `Header.jsx` 라고 뜹니다. 

이는 여러개의 파일을 link로 열었을때 `index.jsx` 라는 이름이 여러개가 떠서 헷갈리는 상황을 막아줍니다. 

![header barrel](https://user-images.githubusercontent.com/65995664/199855960-df2b2f70-3668-4777-8c57-4bedece6d857.gif)


<br/>

## 🔒 팀 코드 컨벤션

- [ ] git commit message 컨벤션

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
| merge  | branch merge                                 |

- [ ] branch 컨벤션

| 브랜치명 | 내용                         |
| -------- | ---------------------------- |
| develop  | 파일, 폴더, 새로운 기능 추가 |
| fix      | 버그 수정                    |
| docs     | 제품 코드 수정 없음          |
| refactor | 코드 리팩토링                |
| hotfix   | 치명적이거나 급한 버그 수정  |
| feat     | 새로운 기능 추가            |

- issue 컨벤션과 pr컨벤션도 branch 컨벤션과 동일
    - 단 `[ Fix ]` 이런식으로 포맷이 달라짐

</br>

## 🔨 사용 기술

<img alt="HTML5" src ="https://img.shields.io/badge/HTML5-E34F26?&style=flat&logo=HTML5&logoColor=white"/> <img alt="CSS3" src ="https://img.shields.io/badge/CSS3-1572B6?&style=flat&logo=CSS3&logoColor=white"/> <img alt="JavaScript" src ="https://img.shields.io/badge/JavaScript-F7DF1E?&style=flat&logo=JavaScript&logoColor=white"/> <img alt="React" src ="https://img.shields.io/badge/React-61DAFB?&style=flat&logo=React&logoColor=white"/> <img alt="NextJS" src ="https://img.shields.io/badge/Next.js-000000?&style=flat&logo=Next.js&logoColor=white"/>

<img alt="Axios" src ="https://img.shields.io/badge/Axios-5A29E4?&style=flat&logo=Axios&logoColor=white"/> <img alt="styled-components" src ="https://img.shields.io/badge/styled components-DB7093?&style=flat&logo=styled-components&logoColor=white"/> <img alt="react-responsive" src ="https://img.shields.io/badge/react responsive-000000?&style=flat&logoColor=white"/>

<img alt="Git" src ="https://img.shields.io/badge/Git-F05032?&style=flat&logo=Git&logoColor=white"/> <img alt="GitHub" src ="https://img.shields.io/badge/GitHub-181717?&style=flat&logo=GitHub&logoColor=white"/> <img alt="Notion" src ="https://img.shields.io/badge/Notion-000000?&style=flat&logo=Notion&logoColor=white"/>

</br>

## 📦 폴더 구조

```
📂 src
├── 
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

