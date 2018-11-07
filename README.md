# hello-vue

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 프로젝트 구성

- vue-cli로 프로젝트 생성
- less css 전처리기 사용 
- bootstrap 사용 
- vue-router 사용 

## 컴포넌트 구성 
```
└─ src
  └─ components
    ├─ List.vue
    ├─ Item.vue
    ├─ Ad.vue
    ├─ Modal.vue
    ├─ Post.vue
    ├─ JoinPopup.vue
    ├─ JoinPopupBottom.vue
  └─ router
    ├─ index.js
  └─ service 
    ├─ postService.js 
  
```
- List Compoennt 
  - 메인 페이지에서 하위 컴포넌트인 Post 컴포넌트와 Ad컴포넌트를 렌더
  - Modal 컴포넌트를 동적으로 렌더하여 글 리스트를 필터링

- Item Component 
  - 글 제목, 이메일, 내용, 카테고리, 글 번호를 렌더링 

- Ad Component 
  - 광고 이미지, 제목, 내용 렌더링 

- Modal Component 
  - 카테고리 리스트를 선택 후 저장하면 리스트를 필터링함 

- Post Component 
  - Item 컴포넌트를 클릭 시 해당 글로 이동 (router pararms로 id 전달)
  - 가입 유도 팝업과 하위 팝업을 렌더 
  - 글 제목, 이메일 작성일, 내용을 렌더 
  - Comment 컴포넌트의 replies가 있으면 replies값을 전달하여 댓글을 렌더링 

- JoinPopup Component 
  - 가입 유도 팝업으로 글 목록 클릭 시 팝업을 띄움 

- JoinPopupBottom Component 
  - 글 상세 페이지 하단에 렌더 
  - 가입 유도 팝업이 사라지면, 화면에 렌더 


## 개발 시 중점을 둔 부분

- 컴포넌트 분리 
  - 재사용할 수 있고 관리하기 쉽도록 컴포넌트를 분리 
  - Item Component / Ad Component / Comment Component 

- 메인 화면에서 리스트 마운트 시 axios.all을 사용하여 동시에 요청을 보내 조금 더 빠르게 초기 렌더를 할 수 있도록 구현함 

```js 
init: function(order) {
      axios.all([getPosts(1, order), getAds(1, 10), getCategory()]).then(
        axios.spread((postsRt, adsRt, categoryRt) => {
          this.ads = adsRt.data.list
          this.posts = postsRt.data.list
          this.categories = categoryRt.data.list
        })
      )
    }
```
- 포스트 리스트와 광고 리스트를 비교하여 필요할 시에만 광고 리스트를 더 불러와 불필요한 통신을 줄임 

```js
getMoreAds: async function() {
  const moreAds = await getAds(++this.adPage, 10)
  this.ads = [...this.ads, ...moreAds.data.list]
},
isNeedMoreAds: function() {
  const currentAdsCount = this.ads.length
  const currentPostsCount = this.posts.length
  return currentPostsCount / 3 > currentAdsCount
}
```
- 카테고리 리스트가 변경될 경우를 대비하여 banana, apple, coconut으로 정해진 리스트가 아닌 불러온 카테고리 이름으로 렌더하여 유지보수할 수 있도록 함 

```html
<item-component :post='post' v-bind:categoryName="categories[post.category_no -1].name"></item-component>
```
- 필터링이 선택되어 있는 경우 리스트를 더 불러오거나 정렬 방식을 바꿨을 시 필터링된 리스트를 불러옴 

```js 
getMorePosts: async function() {
    const morePosts =
    this.category === null
      ? await getPosts(++this.postPage, this.order)
      : await getFilteredPosts(++this.postPag, this.category,this.order)
  this.posts = [...this.posts, ...morePosts.data.list]
  this.isNeedMoreAds() && this.getMoreAds()
},

```



## 회고 

처음부터 개발을 하기에는 어려울 것 같아 vue-cli로 프로젝트를 구성하였다. 그리고 컴포넌트를 어떻게 나눠서 작업할 지 생각하였다. 
vue를 처음 사용하여 개발하다보니 리액트를 참고하여 기능을 검색하고 문서를 찾아보았다. 

vue를 잘 알지 못하고 작업을 하려다 보니 체계적으로 개발하지 못한 점이 아쉽다

각각 컴포넌트에서 style 태그를 사용하여 스타일링을 하였더니 scope 옵션을 추가하지 않으면 같은 이름의 클래스에서 영향을 받아 scoped를 추가하였다. 처음에는 영향을 받지 않았는데 영향을 주는 컴포넌트가 마운트 된 후에는 영향을 받았다. 아직 vue가 어떻게 동작하는 지에 대한 이해가 부족한 것 같다.  css style을 컴포넌트마다 작성하는 것도 해당 컴포넌트에만 영향을 줄 수 있어서 좋은 점도 있지만 관리하기 불편하고 중복되는 코드가 많다는 점에서 다음에는 css를 하나의 파일에 작성하여 적용하면 좋을 것 같다. 

컴포넌트가 마운트 되었을 때 포스트와 광고를 불러오는 작업을 동기식으로 하였더니 에러가 발생하여 비동기식으로 수정하였다. 로더를 추가하여 통신이 완료되기 전에는 컴포넌트를 로딩하지 않는 로직을 추가하여 개선할 수 있을 것 같다. 

반응형 웹을 최소한 대응을 하였지만 아직 부족한 점이 많은 것 같다. 더 공부를 해야할 것 같다. 디자인도 다시 수정해야 할 것 같다. 



## 참고자료

[vue.js 공식문서](https://kr.vuejs.org/v2/guide/)

[bootstrap 공식문서](http://bootstrapk.com/css/)

[Vue Router Tutorial - Flavio Copes](https://flaviocopes.com/vue-router/)
