# _oaSwitches Bookmarklet_

_Description: A bookmarklet for converting internal switch page into an HTML table (internal staff use only)_

## How To

### Instructions for Use
* Drag the below JavaScript code onto your bookmarks bar to create a bookmarklet (feel free to rename it).
* Navigate to the internal switches page of an account on any server.
* Click the newly created bookmarklet to get an output of switches.
* Check for pop-up blockers or unsecure content warnings - you can ignore them.

```javascript
javascript:(function(){document.body.appendChild(document.createElement("script")).src="https://rawgit.com/23maverick23/oaswitches/master/oaswitches.js";})();
```

## Helpful Tips

### Quick Reminder
Only available in modern browsers (umm...that means no IE)

### HTML Output Guide

![text](https://raw.github.com/23maverick23/oaswitches/master/img/text.png) : manually typed text will be purple (HTML is encoded)

![OFF / ON](https://raw.github.com/23maverick23/oaswitches/master/img/off_on.png) : checkboxes will have red OFF for unchecked and green ON for checked

![dropdown option](https://raw.github.com/23maverick23/oaswitches/master/img/dropdown_option.png) : selected dropdown option or multi-select options will be inline blocks

## Credits
Base CSS - [Twitter Bootstrap](https://github.com/twitter/bootstrap)

## Change Log

### v1.4
* Fixed switch name bug for multi-select fields
* Disabled text selection for error output (easier Excel/CSV copy & paste experience)

### v1.3
* Minor bug fixes
* Added error output in case of HTML/CSS changes by dev

### v1.2
* Added support for internal switch ID in HTML output

### v1.1
* Fixed logic in `oaswitches.js` for determining selected option(s)
* Added additional styling to HTML output
* Added README and LICENSE files
* Added image files for README

### v1.0
* Initial commit
