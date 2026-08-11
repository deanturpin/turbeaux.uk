// Only one clip plays at a time, so starting a second one does not talk over
// the first. Pages without video simply do nothing here.

const youtubeEmbeds = 'iframe[src*="youtube.com/embed/"]';

// YouTube ignores playback commands unless the embed opts into its API, so
// mark the embeds up front while nothing is playing and a reload costs nothing.
for (const frame of document.querySelectorAll(youtubeEmbeds)) {
  const src = new URL(frame.src);
  if (src.searchParams.get("enablejsapi") !== "1") {
    src.searchParams.set("enablejsapi", "1");
    frame.src = src.toString();
  }
}

// Pause everything on the page apart from whatever just started playing.
function pauseOthers(active) {
  for (const video of document.querySelectorAll("video"))
    if (video !== active) video.pause();

  for (const frame of document.querySelectorAll(youtubeEmbeds))
    if (frame !== active)
      frame.contentWindow?.postMessage(
        '{"event":"command","func":"pauseVideo","args":""}',
        "https://www.youtube.com",
      );
}

// Capture phase because play events do not bubble.
document.addEventListener("play", (event) => pauseOthers(event.target), true);

// A YouTube embed reports nothing back without loading Google's API script, but
// clicking into the iframe hands it focus and blurs the page, which is a good
// enough signal that something started playing over there.
window.addEventListener("blur", () => {
  const focused = document.activeElement;
  if (focused?.tagName === "IFRAME") pauseOthers(focused);
});
