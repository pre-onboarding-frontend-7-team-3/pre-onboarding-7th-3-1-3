# 원티드 프리온보딩 프론트엔드 - Week 2 - 2

원티드 프리온보딩 **프론트엔드 8팀**의 `팔팔한 형제들`입니다.<br>

## 📅 프로젝트 기간

기간 : 2022년 11월 5일 ~ 2022년 11월 7일 (총 3일)

## 팔팔한 형제들 팀 소개

### FE

<table>
  <tr>
    <td>
        <a href="https://github.com/CodyMan0">            
	    <img src="https://avatars.githubusercontent.com/u/93697790?v=4" width="100px" />
        </a>
    </td>
    <td>
        <a href="https://github.com/shimeeuisuk">
            <img src="https://avatars.githubusercontent.com/u/104304569?v=4" width="100px" />
        </a>
    </td>
    <td>
        <a href="https://github.com/jangth0655"> 
            <img src="https://avatars.githubusercontent.com/u/83333409?v=4" width="100px" />
        </a>
    </td>
    <td>
        <a href="https://github.com/choi2021">
	    <img src="https://avatars.githubusercontent.com/u/80830981?v=4" width="100px" />
        </a>
    </td>
    <td>
        <a href="https://github.com/strongsongky">
	    <img src="https://avatars.githubusercontent.com/u/102295416?v=4" width="100px" />
        </a>
    </td>
    <td>
        <a href="https://github.com/gywn9708">
	    <img src="https://avatars.githubusercontent.com/u/107469939?v=4" width="100px" />
        </a>
    </td>
    <td>
        <a href="https://github.com/YongHyunKwon">
	    <img src="https://avatars.githubusercontent.com/u/13326980?v=4" width="100px" />
        </a>
    </td>
  </tr>
  <tr>
    <td><b>이주영(팀장)</b></td>
    <td><b>심의석(부팀장)</b></td>
    <td><b>장태희</b></td>
    <td><b>최영준</b></td>
    <td><b>송경용(공지)</b></td>
    <td><b>강효주</b></td>
    <td><b>권용현</b></td>
  </tr>
  <tr>
    <td><b>Front-End</b></td>
    <td><b>Front-End</b></td>
    <td><b>Front-End</b></td>
    <td><b>Front-End</b></td>
    <td><b>Front-End</b></td>
    <td><b>Front-End</b></td>
    <td><b>Front-End</b></td>
  </tr>
</table>

## 🛠 기술 스택

<div align=left> 
  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> 
  <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> 
  <img src="https://img.shields.io/badge/typescript-1572B6?style=for-the-badge&logo=typescript&logoColor=white">
  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> 
  <img src="https://img.shields.io/badge/styled_components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"> 
  <br>
  
  <img src="https://img.shields.io/badge/vs_code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white">
  <img src="https://img.shields.io/badge/react_router_dom-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white">
  <br>
  
  <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
  <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
  <img src="https://img.shields.io/badge/slack-4A154B?style=for-the-badge&logo=slack&logoColor=white">
  <br>
</div>

## 🏁 프로젝트 실행 방법

1. 의존성 패키지를 설치합니다.

```zsh
$ npm install
```

2. 리눅스와 윈도우 husky 충돌 방지 후 사용을 위해 설치합니다.

```zsh
$ chmod ug+x .husky/*
```

3. 프로젝트를 실행합니다.

```zsh
$ npm start
```

## 🔗 배포 링크

[베포 링크 보러가기](http://88-2-2-assignment.s3-website.ap-northeast-2.amazonaws.com/)

- 해당 프로젝트는 를 AWS S3통해 배포하였습니다.


## 👍 Best Practice 선정 이유

- **의존성 주입**하여 **코드의 유지보수성**을 용이하게 만들었습니다.
```jsx
const BASE_URL = process.env.REACT_APP_BASE_URL || '';
const axiosInstance = createAxiosClient(BASE_URL);
const adService = new AdService(axiosInstance);
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <AdServiceProvider adService={adService}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={Theme}>
	  <GlobalStyle />
	  <Router />
        </ThemeProvider>
      </QueryClientProvider>
    </AdServiceProvider>
  </React.StrictMode>
);
```

- React 라이브러리인 Date Picker을 이용하여 **UI/UX를 향상**시켜서 선정하였습니다.

## ✏️ 개선 부분

하루동안 함께 시행착오를 한 기록을 담았습니다!

1. 리액트 쿼리를 사용하여 **코드 리팩토링**

**전)**
```jsx
const getAdList = useCallback(async () => {  
    listDispatch({ type: DataActionEnum.SET_IS_LOADING, isLoading: true });  
     try {  
      const response = _await_ adService?.getAdList();  
      listDispatch({  
        type: DataActionEnum.SET_DATA,  
        data: response?.ads || [],  
      });  
    } catch (e) {  
      console.error(e);  
    } finally {  
      listDispatch({ type: DataActionEnum.SET_IS_LOADING, isLoading: false });  
    }  
  }, [adService, listDispatch]);  const getAdTrend = useCallback(async () => {  
    trendDispatch({ type: DataActionEnum.SET_IS_LOADING, isLoading: true });  
    try {  
      const response = _await_ adService?.getTrend();  
      trendDispatch({  
        type: DataActionEnum.SET_DATA,  
        data: response?.report.daily || [],  
      });  
    } catch (e) {  
      console.error(e);  
    } finally {  
      trendDispatch({ type: DataActionEnum.SET_IS_LOADING, isLoading: false });  
    }  
  }, [adService, trendDispatch]);
```

**후)**
```Jsx
const { isLoading, data: trendData } = useQuery(  
    ['trend'],  
    () => adService?.getTrend(),  
    {  
      staleTime: 1000 * 60 * 60,  
      cacheTime: 1000 * 60 * 60,  
    }  
  );  const { data: listData } = useQuery(  
    ['adList'],  
    () => adService?.getAdList(),  
    {  
      staleTime: 1000 * 60 * 60,  
      cacheTime: 1000 * 60 * 60,  
    }  
  );

useEffect(() => {  
    trendDispatch({  
      type: DataActionEnum.SET_DATA,  
      data: trendData?.report.daily || [],  
    });  
    trendDispatch({ type: DataActionEnum.SET_IS_LOADING, isLoading });  
  }, [trendData, isLoading]);  useEffect(() => {  
    listDispatch({  
      type: DataActionEnum.SET_DATA,  
      data: listData?.ads || [],  
    });  
  }, [listData]);
```


