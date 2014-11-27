---
layout: post
title:  "Photo stacks using CSS transforms and box-shadow"
date:   2012-03-30 14:00:00
categories: css
---

This has probably been solved a few different ways elsewhere on the Internet, but thought I’d share a simple photo stack effect I put together using CSS3 `transform: rotate();` to rotate each element and `box-shadow` to create the effect of them being sat on top of one another.

Here’s a working [demo][demo]. The CSS is pretty self-explanatory really.

Browser support
---------------

A quick list of browser support:

* Firefox 3.6+
* IE9+
* Chrome 4+
* Safari 4+
* Opera 10+

Older browsers will simply default to the image with a 6px white border. However, if you really want support for older versions of IE then you might consider taking a look at [Microsoft’s BasicImage Filter][microsoft-bi-filter]:

{% highlight scss %}
filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);
{% endhighlight %}

[demo]: http://jsfiddle.net/matthall/bkRdM/1/
[microsoft-bi-filter]: http://msdn.microsoft.com/en-us/library/ms532972%28VS.85%29.aspx
