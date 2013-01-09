# _oaSwitches Bookmarklet_

_Description: A bookmarklet for converting internal switch page into an HTML table (internal staff use only)_

[Visit homepage](http://ryancmorrissey.com/projects/oaswitches.html)

## How To

_Instructions for Use_

* Drag the following JavaScript code onto your bookmarks bar to create a bookmarklet.

```javascript
javascript:(function(){document.body.appendChild(document.createElement("script")).src="https://raw.github.com/23maverick23/oaswitches/master/oaswitches.js";})();
```

* Navigate to the internal switches page of an account on any server.

* Click the newly created bookmarklet to get an output of switches.

* Check for pop-up blockers or unsecure content warnings - you can ignore them.

_Quick Reminder_

Only available in modern browsers (umm...that means no IE)

## Helpful Tips

_HTML Output Guide_

![text](https://raw.github.com/23maverick23/oaswitches/master/img/text.png) : manually typed text will be purple (HTML is encoded)

![OFF / ON](https://raw.github.com/23maverick23/oaswitches/master/img/off_on.png) : checkboxes will have red OFF for unchecked and green ON for checked

![dropdown option](https://raw.github.com/23maverick23/oaswitches/master/img/dropdown_option.png) : selected dropdown option or multi-select options will be inline blocks

## Credits

Base Table CSS - [Twitter Bootstrap](https://github.com/twitter/bootstrap)

## Change Log

_v1.1_

* Fixed logic in `oaswitches.js` for determining selected option(s)
* Added additional styling to HTML output
* Added README and LICENSE files
* Added image files for README

_v1.0_

* Initial commit
