function Inputcomponent() {
  function handleChange(event) {
    console.log("입력값:", event.target.value);
  }
  return <input type="text" onChange={handleChange} />;
}
export default Inputcomponent;