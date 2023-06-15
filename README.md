### typescript with react styled-components
```sh
$ npx create-react-app . --template typescript 
$ npm install styled-components@latest
```

### alias 설정방법
```sh 
$ npm install ts-node ts-alias tsconfig-paths
```
typescript를 사용하는 경우 tsconfig.json에서 아래와 같이 경로를 설정해주자.
```json
"compilerOptions:{
    "baseUrl":"./src",
        "paths": {
        "@pages/*" : ["pages/*"],
        "@button/*" : ["pages/button/*"],
        "@login/*" : ["pages/login/*"],
        "@styled/*" : ["styled/*"],
    },
}
```
폴더를 추가한 경우 잊어버릴 수 있으니, 경로 설정을 바로 추가해주자


>ToDo
- alias 설정


### LoginHeader
컴포넌트
- 메인컴포넌트: LoginHeader
    - 스타일컴포넌트
        - 버튼컴포넌트

    - 기능컴포넌트
        - 페이지에 따라서 화면이 다르게 나올 수 있게
        - 완료된 step은 `넘버 아이콘`이 `체크 아이콘`으로 바뀔 수 있게

