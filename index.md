---
layout: homepage
title: Home
permalink: /
---

<section class="layout-homepage">
  <div class="area-promoted">
    {% for post in site.posts limit:1 %}
      <div>
        <a href='{{ post.url }}'>{{ post.title }}</a>
      </div>
    {% endfor %}
  </div>
  <div class="area-recent">
    <h3>Recent Posts</h3>
    {% for post in site.posts offset:1 limit:z %}
      <div>
        <a href='{{ post.url }}'>{{ post.title }}</a>
      </div>
    {% endfor %}
  </div>
  <div class="area-featured">
    <h3>Featured</h3>
    {% assign featured_posts = site.posts | where:"featured","true" %}
    {% for post in featured_posts %}
      <div>
        <a href='{{ post.url }}'>{{ post.title }}</a>
      </div>
    {% endfor %}
  </div>
  <div class="area-basics">
    <h3>Basics</h3>
    {% for post in site.categories.basics %}
      <div>
        <a href='{{ post.url }}'>{{ post.title }}</a>
      </div>
    {% endfor %}
  </div>
  <div class="area-categories">
    <h3>Categories</h3>
    {% include blog/categories.html %}
  </div>
</section>