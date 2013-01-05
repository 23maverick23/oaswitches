# _oaSwitches Bookmarklet_

_Description: A bookmarklet for converting internal switch page into an HTML table (internal staff use only)_

_Homepage: [http://ryancmorrissey.com/projects/oaswitches.html](http://ryancmorrissey.com/projects/oaswitches.html)_

## Troubleshooting & Useful Tips

_Instructions for Use_

1. Drag the button onto your bookmarks bar to create a bookmarklet.
2. Navigate to the internal switches page of an account on any server.
3. Click the newly created bookmarklet to get an output of switches.
4. Check for pop-up blockers or unsecure content warnings - you can ignore them.

_HTML Output Guide_

<span style="font-family: Monaco,Menlo,Consolas,'Courier New',monospace;font-size: 14px;color: #A400B3;">text</span> : manually typed text will show in purple (HTML encoded)

<span style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;font-size: 14px;color: #A50000;">OFF</span>/<span style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;font-size: 14px;color: green;">ON</span> : checkboxes will have OFF for unchecked, and ON for checked

<span style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;font-size: 14px;border: 1px solid gray;border-radius: 4px;margin: 1px 0;padding: 0 4px;background-color: #DDF;display: inline-block;">dropdown option</span> : selected dropdown option or multi-select options

_Quick Reminder_

Only available in modern browsers (umm...that means no IE)

## Contributing changes

_v1.1_

* Fixed logic in `oaswitches.js` for determining "selected" option in dropdown lists.
* Added additional styling to HTML output.

_v1.0_

* Initial commit

## License

The MIT License (MIT)
Copyright (c) 2012 ryancmorrissey.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
