function Parent() {
  function handleParentClick() {
    alert("부모 요소 클릭!");
  }
  function handleChildClick(event) {
    event.stopPropagation(); //이게 있어서 부모 요소까지 안 올라가고 실행된다다
    alert("자식 요소 클릭!");
  }
  return (
    <div
      onClick={handleParentClick}
      style={{ padding: "20px", background: "#ddd" }}
    >
      <button onClick={handleChildClick}>클릭</button>
    </div>
  );
}
export default Parent;