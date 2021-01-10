/**함수 설정 */
var htmlEl = document.documentElement, /**html 전체 불러오기 */
    accordianEl = document.querySelector("#accordion"),/**#accordion 반환 */
    viewItemEls = accordianEl.querySelectorAll(".view-item"),/**그룹내 리스트 반환 */
    btnCloseEls = accordianEl.querySelectorAll(".view-item > .btn-close"),/**그룹내 리스트 반환 */
    _cuId = null, /**빈 함수 설정 */
    _exId = null,
    _timer;

viewItemEls = Array.prototype.slice.call(viewItemEls); // 요소 노드 목록을 배여로 치환.
// 이벤트 핸들러.
function onResize() {
    clearInterval(_timer);/**이벤트 중지 시키기위한 코드 */
    htmlEl.classList.add("on-resize");
    _timer = setTimeout(function() { /**한번만 실행하고 종료 */
        htmlEl.classList.remove("on-resize");
    }, 1);
}
function onClickViewItem(e) {
    /*반복X 하도록 preventDefault() 추가 */
    e.preventDefault();
    var el = e.currentTarget, index = viewItemEls.indexOf(el);
    if(!el.classList.contains("selected")) {
        // selected 클래스를 가지고 있지 않다면 활성화가 가능한 요소들.
        _cuId = index;
        //처음부터 열려있는 아코디언 메뉴가 없기 때문에 _exId 의 값은 처음에 null 이다.
        //따라서 null 이 아닌 경우 부터 이전 항목에 대한 체크가 가능하다.
        if(_exId !== null) viewItemEls[_exId].classList.remove("selected");
        el.classList.add("selected");
        _exId = _cuId;
    }
}
function onClickClose(e) {
    e.preventDefault();
    //이벤트 버블링이 일어나면 아코디언 메뉴가 비활성화 되었다가(close), 부모요소인 view-item 의 이벤트가
    //한번 더 발생괴기 때문에 해당 메뉴가 다시 활성화된다.(viewItem - event)
    //<---- 버블링이 일어나기 때문에 이를 방지하기 위해 stopPropagation() 메서드를 사용해야 함
    e.stopPropagation();
    var el = e.currentTarget, itemEl = el.parentElement;
    // <div class="view-item">
    // <div class="btn-close"></div>
    // </div>
    if(itemEl.classList.contains("selected")) {
        if(_exId !== null) viewItemEls[_exId].classList.remove("selected");
        _cuId = null;
        _exId = _cuId;
    }
}
// 요소 노드에 이벤트를 추가하는 기능 집합.
function addEvent() {
    window.addEventListener("resize", onResize); /**이벤트 발생시 크기 변경 */
    for(var i = 0; i < viewItemEls.length; i++) {
        viewItemEls[i].addEventListener("click", onClickViewItem);
    }
    for(var j = 0; j < btnCloseEls.length; j++) {/**.view-item 실행시 버튼클릭할 수 있도록 하는 코드  */
        btnCloseEls[j].addEventListener("click", onClickClose);
    }
}
//기능들을 실행하는 초기화
function init() {
    htmlEl.classList.remove("preload");
    addEvent();
}
init();