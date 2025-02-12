# 날씨 API를 사용한 todo app

- 제가 개발한 Todo App은 OpenWeather API를 활용하여 사용자의 현재 위치에 맞는 실시간 날씨 정보를 기반으로, 그 날의 하늘 상태와 에너지 레벨을 조합하여 랜덤한 추천 할 일을 제공합니다. 사용자는 자신의 에너지 레벨을 자유롭게 선택할 수 있으며, 이를 통해 날씨와 에너지 상태에 맞춘 새로운 할 일이 제시됩니다. 추천된 할 일은 "추가하기" 버튼을 클릭하면 즉시 Todo List에 추가되어 사용자에게 편리한 기능을 제공합니다.

- 앱의 디자인은 Ant Design을 사용하여 깔끔하고 직관적인 UI를 구현하였으며, 날씨와 에너지 레벨을 조합하여 다양한 부분에서 사용자에게 맞춤형 텍스트를 동적으로 표시하도록 구현되었습니다. 예를 들어, 날씨와 에너지 레벨에 따라 표시되는 메시지나 추천되는 할 일들이 달라지며, 사용자가 선택한 옵션에 맞춰 앱의 전반적인 텍스트들이 실시간으로 변화합니다.

- 또한, 앱의 상단에는 실시간 시계를 구현하여 1초마다 업데이트되는 시각을 확인할 수 있습니다. Todo 항목은 완료, 수정, 삭제가 가능하며, 사용자가 할 일을 완료하면, 진행 상황에 맞춰 Progress Bar의 퍼센테이지가 자동으로 상승하는 기능까지 구현되었습니다. 이 Todo App은 직관적이고 효율적인 작업 관리 경험을 제공하며, 유저 중심의 인터페이스를 자랑합니다.

## 추가 기능 ++
- progress bar를 fixed를 이용하여 항상 같은 자리에 위치하도록 수정.
- footer 수정
- todolist 완료, 수정, 삭제 버튼 기능 추가 : 사용자가 완료 버튼 클릭 시 수정 버튼 사라지게 추가

## 주력으로 사용한 컴포넌트 및 사용 이유
1. Main 컴포넌트
- 설명 : Main 컴포넌트는 애플리케이션의 핵심 부분으로, 전체 레이아웃을 담당합니다. 이 컴포넌트 안에서 MainTop, MainTodo, Progress 등의 다른 주요 컴포넌트들을 렌더링하며, 사용자의 할 일 추가 및 완료 상태 변경, 추천 할 일 추가 등의 기능을 처리합니다.
- 사용 이유 : 이 컴포넌트는 애플리케이션에서 중요한 역할을 하며, 각 컴포넌트를 합쳐서 사용자가 Todo List 와 추천 시스템을 직관적으로 사용할 수 있게 도와줍니다. 여러 기능을 하나의 컴포넌트에서 처리하여 관리하기 쉽고, 다른 컴포넌트와의 연결을 효율적으로 할 수 있습니다.

2. MainTop 컴포넌트
- 설명 : MainTop 컴포넌트는 화면 상단에 위치하여 현재의 날씨 상태, 사용자의 에너지 레벨 선택 기능을 제공합니다. 사용자가 에너지 레벨을 선택하면 현재 날씨 상태와 조합하여 해당 상태에 맞는 추천 할 일이 동적으로 업데이트됩니다.
- 사용 이유 : 사용자에게 필요한 정보를 한 눈에 제공하며, 날씨와 에너지 레벨에 따라 추천되는 할 일을 바로 보여주는 중요한 역할을 합니다.

3. MainTodo 컴포넌트
- 설명 : MainTodo 컴포넌트는 사용자가 추가한 Todo 목록을 관리하며, 각 할 일 항목에 대해 수정, 삭제, 완료 처리 등의 기능을 제공합니다. Todo 항목들이 목록으로 표시되고, 각 항목의 상태에 맞는 버튼들을 동적으로 렌더링합니다.
- 사용 이유 : Todo List를 구성하는 핵심 컴포넌트로, 사용자가 추가한 할 일을 관리하고, 진행 상황을 실시간으로 반영하여 사용자와의 상호작용을 원활하게 합니다. 또한, 완료된 할 일에 대한 퍼센테이지를 Progress Bar 에 반영하여 시각적인 피드백을 제공합니다.

4. RecommendContext 컴포넌트
- 설명 :  RecommendContext는 앱 전역에서 사용되는 추천 관련 데이터를 관리하는 컨텍스트 컴포넌트입니다. 날씨와 에너지 레벨에 따라 추천할 일 항목을 랜덤으로 제공하며, 이 값을 다른 컴포넌트들에서 쉽게 사용할 수 있도록 제공합니다.
- 사용 이유 : 추천 데이터를 여러 컴포넌트에서 공유해야 하므로 전역 상태를 관리할 수 있는 컨텍스트 컴포넌트를 사용하여 코드의 재사용성과 관리 용이성을 높였습니다. 이를 통해 여러 컴포넌트에서 동일한 데이터를 손쉽게 참조할 수 있게 되었습니다.

## 소스 빌드 및 실행 방법 메뉴얼

### 필수 요구 사항
- npm : 10.8.2v
- antd : ^4.16.13v
- react-icons : 5.4.0v
- react-vite : 6.1.0v
- git : 2.46.0v

### 프로젝트 클론 git
- git clone https://github.com/jiho114/todayTodo.git
- cd todayTodo / cd todo

### 의존성 설치
- npm install / npm i
- yarn install / yarn i

### 환경 변수 설정
- VITE_OPENWEATHER_API_KEY=your-api-key-here
- OpenWeather Api 사이트 접속 -> Sign up -> Api Key 발급
- .env 생성 후 VITE_OPENWEATHER_API_KEY=발급 Api key 입력

### 개발 서버 실행
- npm run dev
- yarn dev
