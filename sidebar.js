// Inject sidebar HTML into #sidebar element
const sidebarHTML = `
  <div class="Left">
    <nav class="navigation">
      <ul class="navlist">
        <li class="navbody"><div class="navtitle">Me</div>
          <ul>
            <li><a class="navbutton" href="/">Home</a></li>
            <li><a class="navbutton" href="/about.html">About Me</a></li>
            <li><a class="navbutton" href="/creative.html">Creative Endavors</a></li>
            <li><a class="navbutton" href="/minecraft.html">Minecraft</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
`;

window.addEventListener('DOMContentLoaded', function() {
  const sidebarContainer = document.getElementById('sidebar');
  if (sidebarContainer) {
    sidebarContainer.innerHTML = sidebarHTML;
  }
});
