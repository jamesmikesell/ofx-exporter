# Misc OFX Tools
This repo is an assortment of utilities created in order to generate OFX files for a handful of financial institutions which don't offer OFX export.  

Use as your own risk.

## PA529 Transaction CSV to OFX Converter
The PA529 website only offers exporting transactions as CSV.

The following page <https://jamesmikesell.github.io/ofx-exporter/> allows a PA529 transaction CSV file to be dragged and dropped onto the screen, and a converted OFX version will be generated and downloaded.  All processing occurs in the browser, and no data is transferred to a server.




## Synchrony Credit - Amazon Store Card OFX Downloader
This is a bookmarklet to screen-scrape transaction data for the Amazon Store Card on Synchrony Credit, convert and downloaded as an OFX file which can be imported into personal finance software.

Before setting up the bookmarklet, read the following:


# ¡¡¡ DO NOT TRUST BOOKMARKLETS !!!
First, a Public Service Announcement.

This is a bookmarklet (<https://en.wikipedia.org/wiki/Bookmarklet>) to export transactions from the Amazon Store Card on Synchrony Credit banking website as OFX data for use in personal finance software.

Never use bookmarklets unless you know you can trust the creator of a bookmarklet 100%!

Bookmarklets can be used to steal data and compromise accounts.

Using a bookmarklet is the equivalent to saying "hey random unknown person on the internet that created this bookmarklet, I've just logged into my [email, google, bank, etc] account, feel free to do whatever you want to my account.  Change passwords, transfer some money... I trust you."

If you are technically capable, you can fork this Github project, read the source code to ensure nothing nefarious is happening, and then host your own version of this bookmarklet for your own use.

If you're not technically capable, you shouldn't trust this, nor any other bookmarklet that you randomly found on the internet.




## Installing Bookmarklet

Either follow the instructions on [this page](https://jamesmikesell.github.io/ofx-exporter/bookmarklet.html), or manually create a bookmark with an address of the following javascript code.

```javascript
javascript:(function(){var el=document.createElement('script');el.src='https://jamesmikesell.github.io/ofx-exporter/main-bundle.js?bust='+new Date().getTime();document.body.appendChild(el);})();
```

## Using Bookmarklet
When logged into Synchrony Credit for an Amazon Store Card, click the `View Activity` button to view transaction details.  Once the transaction details page loads, click the bookmarklet created in the [previous step](#installing-bookmarklet), and an OFX will be created and downloaded. Only click the bookmarklet once, as it can take several seconds to scrape the page to find all transactions.