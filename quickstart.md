# K-JAPAN Dashboard - 빠른 시작 가이드

## 📋 목차
1. [설치 및 실행](#설치-및-실행)
2. [GitHub 푸시](#github-푸시)
3. [나중에 다시 시작하기](#나중에-다시-시작하기)

---

## 설치 및 실행

### 1. 패키지 설치
```bash
npm install
```

### 2. 환경 변수 설정

프로젝트 루트에 `.env` 파일 생성:

```env
GOOGLE_MAPS_API_KEY=여기에_구글맵_API_키_입력
PORT=3000
```

**Google Maps API 키 발급:**
1. [Google Cloud Console](https://console.cloud.google.com/) 접속
2. 프로젝트 생성 → "API 및 서비스" → "사용자 인증 정보"
3. "+ 사용자 인증 정보 만들기" → "API 키" 선택
4. **Maps JavaScript API**, **Places API** 활성화

### 3. 서버 실행

```bash
npm start
```

### 4. 접속

- **메인 대시보드**: http://localhost:3000
- **여행 문서**: http://localhost:3000/docs.html

---

## GitHub 푸시

### 처음 GitHub에 올리기

#### 1. GitHub에서 새 저장소 생성
- [GitHub](https://github.com) 접속 → "New repository" 클릭
- Repository name 입력 (예: `kjapan-dashboard`)
- Public 또는 Private 선택
- **"Create repository"** 클릭

#### 2. Git 초기화 및 푸시

```bash
# Git 초기화 (처음 한 번만)
git init

# 모든 파일 추가
git add .

# 커밋
git commit -m "Initial commit: K-JAPAN Dashboard"

# GitHub 저장소 연결 (YOUR_USERNAME을 본인 계정으로 변경)
git remote add origin https://github.com/YOUR_USERNAME/kjapan-dashboard.git

# 푸시
git push -u origin main
```

> **주의**: `.env` 파일은 `.gitignore`에 포함되어 있어 GitHub에 업로드되지 않습니다. (API 키 보안)

#### 3. 변경사항이 있을 때

```bash
# 변경된 파일 확인
git status

# 모든 변경사항 추가
git add .

# 커밋 (메시지는 변경 내용에 맞게 작성)
git commit -m "변경 내용 설명"

# 푸시
git push
```

---

## 나중에 다시 시작하기

### GitHub에서 프로젝트 복제

```bash
# 원하는 폴더로 이동
cd 원하는폴더경로

# GitHub에서 복제
git clone https://github.com/YOUR_USERNAME/kjapan-dashboard.git

# 프로젝트 폴더로 이동
cd kjapan-dashboard

# 패키지 설치
npm install

# .env 파일 생성 (위의 "환경 변수 설정" 참고)
# .env 파일에 Google Maps API 키 입력

# 서버 실행
npm start
```

### 기존 프로젝트에서 계속 작업

```bash
# 프로젝트 폴더로 이동
cd c:\dev\kjapan

# 최신 변경사항 가져오기
git pull

# 서버 실행
npm start
```

---

## 📁 프로젝트 구조

```
kjapan/
├── public/
│   ├── index.html      # 메인 대시보드
│   └── docs.html       # 여행 문서
├── server.js           # Express 서버
├── package.json        # 프로젝트 설정
├── .env               # 환경 변수 (Git 제외)
├── .gitignore         # Git 제외 파일 목록
└── quickstart.md      # 이 파일
```

---

## 🎯 주요 기능

- 🗺️ **Google Maps**: 방문 장소 관리 및 경로 찾기
- 📅 **여행 일정**: Google Calendar 연동
- ✅ **체크리스트**: 할 일 관리
- 💰 **정산 현황**: 실시간 비용 계산
- 📄 **여행 문서**: 항공권, 티켓 통합 관리

---

## ⚠️ 문제 해결

### "Cannot find module 'express'" 오류
```bash
npm install
```

### 포트 3000 사용 중 오류
`.env` 파일에서 포트 변경:
```env
PORT=3001
```

### 지도가 표시되지 않음
1. `.env` 파일에 API 키가 올바른지 확인
2. Google Cloud Console에서 **Maps JavaScript API**, **Places API** 활성화 확인
3. 서버 재시작: `Ctrl + C` → `npm start`

---

**즐거운 일본 여행 되세요! 🇯🇵✨**
