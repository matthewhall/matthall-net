---
layout: post
title:  "Matt Tabs 2.0 released"
date:   2012-06-09 14:00:00
categories: jquery
---

It’s about time I showed Matt Tabs a bit of attention, so with this release comes a complete rewrite. Hopefully, you should find it a lot more customisable.

[Viewed or download from GitHub][view-download].

Changes
-------

* Complete rewrite of the plugin code to utilise more of a constructor, prototyped JS pattern.
* Added ability to customise tabs menu item markup by way of setting HTML templates. Closes [#1][issue-1]
* Added ability to change tabs menu container element.
* Added ability to change all class names on wrapping elements.
* Added ability to change “active-tab” class name.
* Unless specified in the “tab_text_el” options, the plugin will find the first h1-6 element within each tab for the tab text.
* Click events are now delegated to tabs menu items rather than bound directly.

Removed
-------

* Ability to split tabs into sets has been removed as it never really worked correctly and as such was never used.
* First and last class names on tabs menu items have been removed; use :first-child and :last-child, instead. IE7+8 only supports :first-child so if support is required then add any margin to the left and remove with :first-child. Alternatively, use the individual, numbered class names.

Notes
-----

* Now requires jQuery 1.7+


[view-download]: https://github.com/matthewhall/matt-tabs
[issue-1]: https://github.com/matthewhall/matt-tabs/issues/1
