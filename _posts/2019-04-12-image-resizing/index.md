---
layout: blog/post
title:  "Image Resizing"
date:   2019-04-10 08:05:00 -0800
categories: features
permalink: /posts/image-resizing
description: >
  Have you ever been on a webpage that asks you to upload an image?
  You meticulously comb through all your pictures to find the best one for your new profile image
  and you finally go to upload it. "Image must be smaller than..." frustrated, yo
author: tyler
demo:
  height: 400px
  key: demo
  tabs:
    - url: /examples/image-resizer/
      title: Demo
      id: demo
    - url: /examples/image-resizer/image-resizer.js
      title: image-resizer.js
      id: js-source
    - url: /examples/image-resizer/demo.js
      title: demo.js
      id: demo-source
---

## User Woes of Image Uploading

You've signed up on a new website and you are just crusing through filling out all your information. Then it comes time to upload a portrait of yourself.

You meticulously comb through all your pictures to find the best one and you finally try to upload it.
"Image must be smaller than..." frustrated, you either give up or if you really care you figure out some way to shrink the image.

What if the website could resize the image for you and you never had to see an error that causes more work?

## Features

Let's break down exactly what our perfect button is going to need to do.

* Allow vertically centered copy
* Potentially wrap multiple lines with normal line-height
* Variant with a border
* Variant as a link
* Consistent height between variations
* Animated hover/focus states

### Example

{% 
  include components/browser.html
  tabs=page.demo.tabs
  height=page.demo.height
%}

### Explanation

### Going Beyond


### Wrap Up
