### 지원 Node 버전(한번 읽어봐바)
- 8, 10, 12, 14, 16, 18
- ⚠️ 로컬/테스트 환경과 클라우드타입에서 설정한 Node 버전이 상이한 경우 정상적으로 빌드되지 않을 수 있습니다.


### ⌨️ 명령어 : 로컬에서 실행할 때 
### js 서버는 http://localhost:3000/ 으로 세팅
### flask 서버는 port 5000으로 세팅

```bash
  npm start
```
### 다른 터미널창 열어서
~~~py
flask run
~~~

### 혹시나 실행 안되면, package.json -> dependencies -> cookie-parser 있는지 체크해보고 없으면 install해주면 된다~

```bash
  npm i cookie-parser
```


### json 데이터를 주고 받기 위한 모듈 설치
~~~bash
 yarn add axios
~~~