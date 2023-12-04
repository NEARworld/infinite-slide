# Infinite Slide

## 개발 동기
협업 포트폴리오 개발 중에 이미지 슬라이드 구현을 맡게되었습니다.  
그때 자료구조를 공부하고 있었고 학습한 자료구조를 실제 프로젝트에 적용해보고 싶단 생각이 들었습니다.  
포트폴리오 프로젝트에서 이미지 슬라이드에 대한 요구사항은 인피니트 슬라이딩이었습니다.  
그렇기에 원형 연결 리스트를 적용해 볼 수 있겠단 생각이 들었고 그 계기로 이 프로젝트를 개발하게 되었습니다.

## 구현 내용
### 이미지 슬라이드 마크업
기능 구현 내용 소개에 앞서 이미지 슬라이드가 어떻게 화면상 구성되어 있는지 소개하겠습니다.  

<img src='https://github.com/NEARworld/infinite-slide/assets/102969108/cc58aef3-a540-46aa-82d7-e5943c882048' width='600' height='300' />

`Visible Area`는 말 그대로 이미지가 보이는 영역을 의미합니다. 
이 보이는 영역은 `VisibleArea` 컴포넌트로 만들어 구현했습니다. 
`overflow: hidden` css 속성을 적용하여 보이는 영역에 있지 않은 이미지들은 웹 페이지 상에서 보이지 않게 했습니다.  

<img src='https://github.com/NEARworld/infinite-slide/assets/102969108/ab20b68c-f0b0-4a07-ade8-0bf4759915b0' width='600' height='300' />  

`빨간색 영역`은 `VisibleArea` 컴포넌트 영역입니다.  
`파란색 영역`은 `Slide` 컴포넌트 영역입니다.  
`Slide` 컴포넌트의 width는 1200 * 4 = 4800px 입니다.  
`VisibleArea` 컴포넌트의 width는 1200px입니다.  
`VisibleArea` 컴포넌트에는 `overflow: hidden` 이 적용되어 있습니다.  
따라서, `VisibleArea` 영역을 벗어난 `Slide` 컴포넌트 영역은 화면 상에 보이지 않게 됩니다.

코드 구현 내용은 아래와 같습니다.  
`App.tsx`
```tsx
<VisibleArea>
  <Slide />
</VisibleArea>
```
`VisibleArea`
```tsx
export const VisibleArea: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div style={{ width: 1200, height: 400, overflow: 'hidden' }}>
      {children}
    </div>
  );
};
```
`Slide`
```tsx
export const Slide = () => {
  return (
    <div style={{
      height: '100%',
      display: grid;
      gridTemplateColumns: 'repeat(4, 1200)'
    }}>
      slide
    </div>
  )
}
```
`Slide` 컴포넌트에는 `display: grid` 가 적용되어 가로 길이가 `1200px`인 열 4개가 마련되어 있습니다.  
각 열은 이미지를 담는 상자 역할을 시키기 위해 생성했습니다.

