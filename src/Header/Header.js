import "./header.css"
function Header() {
    return ( 
      <div class="container">
  <div class="row">
    <div class="mainHeader">
      First in DOM, ordered last
      <div className="mainHeader1">
      <h3>fsjsdj</h3>
     <h3>First</h3>
      </div>
    </div>
    <div class="col">
      Second in DOM, unordered
    </div>
   <div class="col">
      Second in DOM, unordered
    </div>
  </div>
</div>
     );
}

export default Header;