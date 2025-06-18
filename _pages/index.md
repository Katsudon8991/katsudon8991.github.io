---
layout: defaults/page
permalink: index.html
narrow: true
title: Welcome to KaTsuDon's Blog
---

## 인사

{% include components/intro.md %}

저에 대한 개발자 정보는[여기]({{ site.baseurl}}{% link _pages/about.md %})를 클릭해주세요.

테마 출처 : [sfreytag](https://github.com/sfreytag)'s [friday-theme](https://sfreytag.github.io/friday-theme/)

<hr />

### Recent Posts

{% for post in site.posts limit:3 %}
{% include components/post-card.html %}
{% endfor %}


