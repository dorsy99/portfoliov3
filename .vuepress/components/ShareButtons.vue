<template>
<div>
  <hr />
  <ul class="share-buttons">
    <li>
      <a
        href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fandrew.alburydor.com%2F&quote=Andrew%20Albury-Dor"
        title="Share on Facebook"
        target="_blank"
        onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(document.URL) + '&quote=' + encodeURIComponent(document.URL)); return false;"
      >
        <img alt="Share on Facebook" src="/assets/simple_icons/Facebook.png" />
      </a>
    </li>
    <li>
      <a
        href="https://twitter.com/intent/tweet?source=https%3A%2F%2Fandrew.alburydor.com%2F&text=Andrew%20Albury-Dor:%20https%3A%2F%2Fandrew.alburydor.com%2F"
        target="_blank"
        title="Tweet"
        onclick="window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(document.title) + ':%20'  + encodeURIComponent(document.URL)); return false;"
      >
        <img alt="Tweet" src="/assets/simple_icons/Twitter.png" />
      </a>
    </li>
    <li>
      <a
        href="http://www.reddit.com/submit?url=https%3A%2F%2Fandrew.alburydor.com%2F&title=Andrew%20Albury-Dor"
        target="_blank"
        title="Submit to Reddit"
        onclick="window.open('http://www.reddit.com/submit?url=' + encodeURIComponent(document.URL) + '&title=' +  encodeURIComponent(document.title)); return false;"
      >
        <img alt="Submit to Reddit" src="/assets/simple_icons/Reddit.png" />
      </a>
    </li>
    <li>
      <a
        href="http://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fandrew.alburydor.com%2F&title=Andrew%20Albury-Dor&summary=&source=https%3A%2F%2Fandrew.alburydor.com%2F"
        target="_blank"
        title="Share on LinkedIn"
        onclick="window.open('http://www.linkedin.com/shareArticle?mini=true&url=' + encodeURIComponent(document.URL) + '&title=' +  encodeURIComponent(document.title)); return false;"
      >
        <img alt="Share on LinkedIn" src="/assets/simple_icons/LinkedIn.png" />
      </a>
    </li>
    <li>
      <a
        href="mailto:?subject=Andrew%20Albury-Dor&body=:%20https%3A%2F%2Fandrew.alburydor.com%2F"
        target="_blank"
        title="Send email"
        onclick="window.open('mailto:?subject=' + encodeURIComponent(document.title) + '&body=' +  encodeURIComponent(document.URL)); return false;"
      >
        <img alt="Send email" src="/assets/simple_icons/Email.png" />
      </a>
    </li>
  </ul>
  <hr />
</div>
</template>

<style scoped>
div {
  text-align: center;
}
ul.share-buttons {
  list-style: none;
  padding: 0;
  text-align: center;
}

ul.share-buttons li {
  display: inline;
}

ul.share-buttons .sr-only {
  position: absolute;
  clip: rect(1px 1px 1px 1px);
  clip: rect(1px, 1px, 1px, 1px);
  padding: 0;
  border: 0;
  height: 1px;
  width: 1px;
  overflow: hidden;
}
</style>