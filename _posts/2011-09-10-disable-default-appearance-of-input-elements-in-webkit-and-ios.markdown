---
layout: post
title:  "Disable default appearance of input elements in WebKit and iOS"
date:   2011-09-10 14:00:00
categories: css
---

If you’ve tried out any of HTML5′s new input types you’ll probably have noticed that WebKit adds its own default styling to `type='search'` input fields. This can be a bit of a pain if you’re trying to achieve a particular layout, so you can remove them using the following CSS:

{% highlight css %}
input[type="search"] {
   -webkit-appearance: textfield;
}

input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
   display: none;
}
{% endhighlight %}

Similarly, if you’re browsing the web on an iOS device you’ll notice that it also applies its own appearance to `input` and `textarea` elements: rounded corners, grey gradient in the background, etc. This is an even simpler fix, however:

{% highlight css %}
input, textarea {
   -webkit-appearance: none;
   border-radius: 0;
}
{% endhighlight %}

More on `appearance` can be found at the [W3C editor’s draft][w3c-editors-draft].

**Update:** Using `-webkit-appearance: none;` no longer removes rounded corners from input or textarea fields. You’ll also need to include `border-radius: 0;`.

[w3c-editors-draft]: http://dev.w3.org/csswg/css3-ui/#appearance
