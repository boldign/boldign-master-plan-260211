import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
```

4. **Commit changes** 클릭

---

#### B. index.js도 올바른 위치로 이동

**index.js**도 `/styles/pages/` 안에 있을 가능성이 높습니다.

1. GitHub 메인 페이지
2. **pages 폴더** 클릭 (루트에 있어야 함)
3. **index.js** 있는지 확인
4. **없으면** → 위에서 제공한 긴 코드로 다시 생성

---

## 올바른 최종 구조
```
boldign-master-plan-260211/
├── pages/              ← 루트 바로 아래!
│   ├── _app.js
│   └── index.js
├── styles/             ← 별도 폴더
│   └── globals.css
├── package.json
├── tailwind.config.js
└── postcss.config.js
