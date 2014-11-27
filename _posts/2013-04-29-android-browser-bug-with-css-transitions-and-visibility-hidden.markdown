---
layout: post
title:  "Android browser bug with CSS transitions and visibility: hidden"
date:   2013-04-29 14:00:00
categories: css
---

Recently I came across a weird bug with Android browser that had me pulling my hair out, so thought I’d document it here in case anybody else comes across the same issue.

I was using CSS transitions to slide a list of navigation items in from the side of the page. Here’s a basic example of the SCSS:

{% highlight scss %}
.nav {
   position: absolute;
   top: 0;
   left: 0;
   visibility: hidden;
   width: 200px;
   transform: translate3d(-200px, 0, 0);
   transition: all 300ms ease;
   box-shadow: 0 0 20px rgba(0, 0, 0, 0.6);

   &.active {
      visibility: visible;
      transform: translate3d(0, 0, 0);
  }
}
{% endhighlight %}

I then just had some simple jQuery which toggled the active class when a button was clicked so the nav slid in smoothly from the right.

This all worked fine in Chrome, Firefox mobile, Safari iOS, but it just didn’t seem to work at all on some older Android devices using the native Android browser.

After a lot of debugging I discovered that the issue was being caused by the `visibility: hidden` declaration, which I’d added in to hide the box-shadow when the navigation wasn’t in view. I’ve no idea why this was causing problems with Android, but removing it fixed the problem.

Here’s what I adjusted my SCSS to:

{% highlight scss %}
.nav {
   position: absolute;
   top: 0;
   left: 0;
   width: 200px;
   transform: translate3d(-200px, 0, 0);
   transition: all 300ms ease;

   &.active {
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.6);
      transform: translate3d(0, 0, 0);
  }
}
{% endhighlight %}

Here’s a [demo][demo]. Hope this helped.

[demo]: http://jsfiddle.net/matthall/nCedW/
