# Essay Cartoon

<br />

![image](https://user-images.githubusercontent.com/109197023/218140169-0939e20d-5c08-4842-87a0-0f946e038fd7.png)

<br />

## 소개

**BBC COVID19 의 스타일을 참고하여 만든 1분코딩의 일상 만화 웹**
[구경하러 바로 가기]()

<br />
<br />

## CSS & JS Point

<br />

1. margin병합 현상

<br />

- 인접해있는 block요소 margin할 때
- 상하단만 해당
- 보통css에서 마진 겹친 현상 일어나도 안정적이지만 상 위와 하단아래가 블럭 끝에 붙어, 생각했던 디자인이 안나올 수 있다.

<br />

- 방지를 위해 부모에 `padding: 1px`을 넣는다.
- 아니면 부모에 `border: 1px solid transparent`를 넣는다
- 제일 좋은건 `overflow: hidden`

<br />

2. content-box vs border-box

- content-box는 기본 CSS 박스 크기 결정법을 사용 (기본 값)
  요소의 너비를 100 픽셀로 설정하면 콘텐츠 영역이 100 픽셀 너비를 가지고, 테두리와 안쪽 여백은 이에 더해짐

<br />

- border-box는 테두리와 안쪽 여백의 크기도 요소의 크기로 고려 (크기 조절 쉬움)
- 너비를 100 픽셀로 설정하고 테두리와 안쪽 여백을 추가하면, 콘텐츠 영역이 줄어들어 총 너비 100 픽셀을 유지

<br />

3. IntersectionObserver

언제 사용?

- 페이지 스크롤 시 이미지를 Lazy-loading(지연 로딩)할 때
- Infinite scrolling(무한 스크롤)을 통해 스크롤할 때 새로운 콘텐츠를 불러올 때
- 광고의 수익을 계산하기 위해 광고의 가시성을 참고할 때
- 사용자가 결과를 볼 것인지에 따라 애니메이션 동작 여부를 결정할 때

```js
const io = new IntersectionObserver(callback[, options])
```

```plaintext
callback: 타겟 엘리먼트가 교차되었을 때 실행할 함수
- entries: IntersectionObserverEntry 객체의 리스트. 배열 형식으로 반환하기 때문에 forEach를 사용해서 처리를 하거나, 단일 타겟의 경우 배열인 점을 고려해서 코드를 작성
- observer: 콜백함수가 호출되는 IntersectionObserver
```

<br />

Methods

```plaintext
IntersectionObserver.observe(targetElement)
- 타겟 엘리먼트에 대한 IntersectionObserver를 등록할 때(관찰을 시작할 때) 사용

IntersectionObserver.unobserve(targetElement)
-타겟 엘리먼트에 대한 관찰을 멈추고 싶을 때 사용

IntersectionObserver.disconnect()
- 다수의 엘리먼트를 관찰하고 있을 때, 이에 대한 모든 관찰을 멈추고 싶을 때 사용

IntersectionObserver.takerecords()
- IntersectionObserverEntry 객체의 배열을 리턴
```

<br />
<br />

## 참고

> [mdn](https://developer.mozilla.org/ko/docs/Web/API/Intersection_Observer_API)

> [1분코딩](https://www.inflearn.com/course/bbc-%EC%9D%B8%ED%84%B0%EB%9E%99%ED%8B%B0%EB%B8%8C%EC%9B%B9-%ED%81%B4%EB%A1%A0)
