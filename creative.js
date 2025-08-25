function showBox(type) {
  const box = document.getElementById('creative-box');
  let content = '';
  if (type === 'DigitalArt') {
    content = `<h2>Digital Art</h2>
      <p>Some artwork I'm pretty happy with from when I dabbled in digital art. All made in ibis Paint X.</p>
      <p>Click the images to view in higher resolution and see the whole background.</p>
      <a href='assets/PenguinArt.png' target='_blank'><img src='assets/PenguinArt.png'></a>
      <a href='assets/GhostArt.png' target='_blank'><img src='assets/GhostArt.png'></a>
      <a href='assets/GBArt.png' target='_blank'><img src='assets/GBArt.png'></a>`;
  } else if (type === 'Blender') {
    content = `<h2>Blender</h2><img src='https://via.placeholder.com/200x150?text=Blender+1'><img src='https://via.placeholder.com/200x150?text=Blender+2'>`;
  } else if (type === 'VideoEdits') {
    content = `<h2>Video Edits</h2><iframe width="1042" height="586" src="https://www.youtube.com/embed/WSr5ED5jklc" title="Valo edit 6" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
    content += `<p>Feel free to checkout my other videos on my <a href="https://www.youtube.com/@bigdogawb" target="_blank">Youtube</a> but be warned they aren't very good</p>`;
  }
  box.innerHTML = content;
  box.style.display = 'block';
}
