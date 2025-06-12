---
layout: defaults/page
permalink: index.html
narrow: true
title: Welcome to KaTsuDon's Blog
---

## 인사

{% include components/intro.md %}

[저에 대한 개발자 정보는 여기를 클릭해주세요.]({{ site.baseurl}}{% link _pages/about.md %})

## How to use it

This web site is the documentation for the theme and also provides examples of how you can use and modify it. It is built using Friday Theme directly from the [GitHub repo](https://github.com/sfreytag/friday-theme) and published to GitHub pages.

[The documentation]({{ site.baseurl }}{% link list/projects.md %}) covers the basics of installing and using it, and is an example of how you could write documentation about your own projects.

[The blog]({{ site.baseurl }}{% link list/posts.html %}) has a bunch of tips about how to use Friday Theme. These show how the blog works, including the tags. There's the three most-recent posts below included below.

<hr />

### Recent Posts

{% for post in site.posts limit:3 %}
{% include components/post-card.html %}
{% endfor %}


