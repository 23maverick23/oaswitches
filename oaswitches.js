(function() {

	(window.getSwitchList = function() {

		var url = window.location.href.toString();

		if (url.indexOf('app=Int;action=paint_co_sw') > -1 ) {

			var content = "<!DOCTYPE html><html><head><title>oaSwitchList</title><style>";
			content += "body{margin:0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;line-height:20px;color:#333;background-color:#fff;}.list-item{border:1px solid gray;border-radius:4px;margin:1px 0;padding:0 4px;background-color:#DDF;display:inline-block;}code{font-family:Monaco,Menlo,Consolas,'Courier New',monospace;font-size:14px;color:#A400B3;white-space:normal}.check-on{color:#008000}.check-off{color:#A50000}table{max-width:100%;background-color:transparent;border-collapse:collapse;border-spacing:0}.table{margin:20px}.table th,.table td{padding:8px;line-height:20px;text-align:left;vertical-align:top;border-top:1px solid #ddd}.table th{font-weight:700}.table thead th{vertical-align:bottom}.table caption + thead tr:first-child th,.table caption + thead tr:first-child td,.table colgroup + thead tr:first-child th,.table colgroup + thead tr:first-child td,.table thead:first-child tr:first-child th,.table thead:first-child tr:first-child td{border-top:0}.table tbody + tbody{border-top:2px solid #ddd}.table .table{background-color:#fff}.table-condensed th,.table-condensed td{padding:4px 5px}.table-bordered{border:1px solid #ddd;border-collapse:separate;*border-collapse:collapse;border-left:0;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px}.table-bordered th,.table-bordered td{border-left:1px solid #ddd}.table-bordered caption + thead tr:first-child th,.table-bordered caption + tbody tr:first-child th,.table-bordered caption + tbody tr:first-child td,.table-bordered colgroup + thead tr:first-child th,.table-bordered colgroup + tbody tr:first-child th,.table-bordered colgroup + tbody tr:first-child td,.table-bordered thead:first-child tr:first-child th,.table-bordered tbody:first-child tr:first-child th,.table-bordered tbody:first-child tr:first-child td{border-top:0}.table-bordered thead:first-child tr:first-child > th:first-child,.table-bordered tbody:first-child tr:first-child > td:first-child{-webkit-border-top-left-radius:4px;border-top-left-radius:4px;-moz-border-radius-topleft:4px}.table-bordered thead:first-child tr:first-child > th:last-child,.table-bordered tbody:first-child tr:first-child > td:last-child{-webkit-border-top-right-radius:4px;border-top-right-radius:4px;-moz-border-radius-topright:4px}.table-bordered thead:last-child tr:last-child > th:first-child,.table-bordered tbody:last-child tr:last-child > td:first-child,.table-bordered tfoot:last-child tr:last-child > td:first-child{-webkit-border-bottom-left-radius:4px;border-bottom-left-radius:4px;-moz-border-radius-bottomleft:4px}.table-bordered thead:last-child tr:last-child > th:last-child,.table-bordered tbody:last-child tr:last-child > td:last-child,.table-bordered tfoot:last-child tr:last-child > td:last-child{-webkit-border-bottom-right-radius:4px;border-bottom-right-radius:4px;-moz-border-radius-bottomright:4px}.table-bordered tfoot + tbody:last-child tr:last-child td:first-child{-webkit-border-bottom-left-radius:0;border-bottom-left-radius:0;-moz-border-radius-bottomleft:0}.table-bordered tfoot + tbody:last-child tr:last-child td:last-child{-webkit-border-bottom-right-radius:0;border-bottom-right-radius:0;-moz-border-radius-bottomright:0}.table-bordered caption + thead tr:first-child th:first-child,.table-bordered caption + tbody tr:first-child td:first-child,.table-bordered colgroup + thead tr:first-child th:first-child,.table-bordered colgroup + tbody tr:first-child td:first-child{-webkit-border-top-left-radius:4px;border-top-left-radius:4px;-moz-border-radius-topleft:4px}.table-bordered caption + thead tr:first-child th:last-child,.table-bordered caption + tbody tr:first-child td:last-child,.table-bordered colgroup + thead tr:first-child th:last-child,.table-bordered colgroup + tbody tr:first-child td:last-child{-webkit-border-top-right-radius:4px;border-top-right-radius:4px;-moz-border-radius-topright:4px}.table-striped tbody > tr:nth-child(odd) > td,.table-striped tbody > tr:nth-child(odd) > th{background-color:#f9f9f9}.table-hover tbody tr:hover td,.table-hover tbody tr:hover th{background-color:#f5f5f5}table td[class*='span'],table th[class*='span'],.row-fluid table td[class*='span'],.row-fluid table th[class*='span']{display:table-cell;float:none;margin-left:0}.table td.span1,.table th.span1{float:none;width:44px;margin-left:0}.table td.span2,.table th.span2{float:none;width:124px;margin-left:0}.table td.span3,.table th.span3{float:none;width:204px;margin-left:0}.table td.span4,.table th.span4{float:none;width:284px;margin-left:0}.table td.span5,.table th.span5{float:none;width:364px;margin-left:0}.table td.span6,.table th.span6{float:none;width:444px;margin-left:0}.table td.span7,.table th.span7{float:none;width:524px;margin-left:0}.table td.span8,.table th.span8{float:none;width:604px;margin-left:0}.table td.span9,.table th.span9{float:none;width:684px;margin-left:0}.table td.span10,.table th.span10{float:none;width:764px;margin-left:0}.table td.span11,.table th.span11{float:none;width:844px;margin-left:0}.table td.span12,.table th.span12{float:none;width:924px;margin-left:0}td:nth-child(3){color:#AAA;font-style:italic}.table tbody tr.success td{background-color:#dff0d8}.table tbody tr.error td{background-color:#f2dede}.table tbody tr.warning td{background-color:#fcf8e3}.table tbody tr.info td{background-color:#d9edf7}.table-hover tbody tr.success:hover td{background-color:#d0e9c6}.table-hover tbody tr.error:hover td{background-color:#ebcccc}.table-hover tbody tr.warning:hover td{background-color:#faf2cc}.table-hover tbody tr.info:hover td{background-color:#c4e3f3}";
			content += "</style></head><body><table class='table table-condensed table-bordered table-hover table-striped'>";
			content += "<thead><tr><th>#</th><th>Switch Label</th><th>Switch ID</th><th>Switch Value</th></tr></thead><tbody>";

			var switchArray = document.getElementsByClassName("formBody")[0].getElementsByTagName("table"),
				counter = 1,
				error_log = "",
				error_count = 0;

			for (var i=0;i<switchArray.length;i++) {

				try {
					var label = "";

					if (switchArray[i].getElementsByTagName("label").length > 1) {
						if (switchArray[i].getElementsByTagName("label")[0].htmlFor) {
							label = switchArray[i].getElementsByTagName("label")[0].textContent;
						}
						else {
							label = switchArray[i].getElementsByTagName("label")[1].textContent;
						}
					}
					else if (switchArray[i].getElementsByTagName("label").length == 1) {
						label = switchArray[i].getElementsByTagName("label")[0].textContent;
					}
					else {
						label = "-BLANK-";
					}

					var value = "";  // value of switch
					var name = "";  // internal_id of switch

					if (switchArray[i].getElementsByTagName("input").length > 0) {
						// checkbox field
						if (switchArray[i].getElementsByTagName("input")[0].type == "checkbox") {
							value = switchArray[i].getElementsByTagName("input")[0].checked;
							name = switchArray[i].getElementsByTagName("input")[0].name;

							if (value == "1") {
								value = "<span class='check-on'>ON</span>";
							} else {
								value = "<span class='check-off'>OFF</span>";
							}
						}
						// this is a text field
						else if (switchArray[i].getElementsByTagName("input")[0].type !== "submit") {
							value = switchArray[i].getElementsByTagName("input")[0].value;
							value = value.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
							value = "<code>" + value + "</code>";
							name = switchArray[i].getElementsByTagName("input")[0].name;
						}
					}

					else if (switchArray[i].getElementsByTagName("select").length > 1) {
						// this is a multiple select field
						var optionsM;
						if (switchArray[i].getElementsByTagName("select")[0].multiple) {
							optionsM = switchArray[i].getElementsByTagName("select")[1].getElementsByTagName("option");
							value = [];
							for (var k=0;k<optionsM.length;k++) {
								// use selected value
								v = optionsM[k].textContent;
								html = "<span class='list-item'>" + v + ",</span>";
								value.push(html);
							}
							value = value.join(" ");
							name = switchArray[i].getElementsByTagName("select")[1].name;
							name = name.replace(/_selected_/, '');
						}
					}
					else if (switchArray[i].getElementsByTagName("select").length > 0) {
					// this is a select field
						var options = switchArray[i].getElementsByTagName("option");
						for (var j=0;j<options.length;j++) {
							// use selected value
							if (options[j].selected) {
								value = options[j].textContent;
							}
						}
						// assume first value is default
						if (value === "" || value === null || value < 0) {
							value = options[0].textContent;
						}

						value = "<span class='list-item'>" + value + "</span>";
						name = switchArray[i].getElementsByTagName("select")[0].name;
					}
					// this is a textarea
					else if (switchArray[i].getElementsByTagName("textarea").length > 0) {
						value = switchArray[i].getElementsByTagName("textarea")[0].value;
						value = value.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
						value = "<code>" + value + "</code>";
						name = switchArray[i].getElementsByTagName("textarea")[0].name;
					}

					if (label != "-BLANK-") {
						// console.log(counter + "|" + value + "|" + label);
						content += "<tr><td>" + counter + "</td><td>" + label + "</td><td>" + name + "</td><td>" + value + "</td></tr>";
						counter++;
					}
				}
				catch(e) {
					error_log += "[" + i + "] " + e + "\n\r";
					error_count += 1;
				}
			}

			if (error_count > 0) {
				error_log = error_count + "error(s):\n\r" + error_log;
			}
			else {
				error_log = "No errors generated.";
			}

			content += "</tbody></table>";
			content += "<table class='table table-condensed table-bordered'><thead><tr><th>Script error log</th>";
			content += "</thead><tbody><tr><td>" + error_log + "</td></tr></tbody></table></body></html>";

			var newWindow = window.open("");
			newWindow.focus();
			newWindow.document.write(content);
			newWindow.document.close();
		}
		else {

			alert("Invalid page address!");
			return;

		}

	})();

})();
