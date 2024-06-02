# OFX Bookmarklet

A bookmarklet to screen-scrape transaction data for the Amazon Store Card on Synchrony Credit, convert and downloaded as an OFX file which can be imported into personal finance software.

## Installing Bookmarklet

Either follow the instructions on [this page](https://jamesmikesell.github.io/ofx-exporter/bookmarklet.html), or manually create a bookmark with an address of the following javascript code.

```javascript
javascript:(function(){var el=document.createElement('script');el.src='https://jamesmikesell.github.io/ofx-exporter/main-bundle.js?bust='+new Date().getTime();document.body.appendChild(el);})();
```

## Using Bookmarklet
When logged into Synchrony Credit for an Amazon Store Card, click the `View Activity` button to view transaction details.  Once the transaction details page loads, click the bookmarklet created in the [previous step](#installing-bookmarklet), and an OFX will be created and downloaded.