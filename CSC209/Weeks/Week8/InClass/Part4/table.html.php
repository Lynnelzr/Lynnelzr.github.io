<html>
<head>
	<script>
		const WEEK = "<h1>Week NRWEEK</h1>";
		const DATE = "<h2>DATE</h2>";
		const TOPIC = "<h3>TOPIC</h3>";
		const DESCRIPTION = "<h4>DESCR</h4>";
	</script>

	<script>
		const LISTDATES = [
			"Feb 1", "Feb 8", "Feb 15", "Feb 21",
			"March 1", "March 8", "March 15", "March 21",
			"April 1", "April 8", "April 15", "April 21"
		];
		const LISTTOPICS = [
			"Installation",
			"Html",
			"Css",
			"Javascript 1",
			"", "", "", "", "", "", "", ""
		];
		const LISTDESCRIPTIONS = [
			"We install software", "We make our first Html",
			"We style pages with Css",
			"Get started on Javascript",
			"", "", "", "", "", "", "", ""
		];

		const NRWEEKS = LISTDATES.length;
	</script>
</head>
<body>

<script>
	// Original weekly info display
	for (let i = 1; i <= NRWEEKS; i++) {
		var crtWeekTitle = WEEK.replace("NRWEEK", "" + i);
		var crtWeekDate = DATE.replace("DATE", LISTDATES[i - 1]);
		var crtWeekTopic = TOPIC.replace("TOPIC", LISTTOPICS[i - 1]);
		var crtWeekDescr = DESCRIPTION.replace("DESCR", LISTDESCRIPTIONS[i - 1]);
		
		var oneWeekBody = crtWeekTitle + crtWeekDate + crtWeekTopic + crtWeekDescr;
		
		document.body.innerHTML += oneWeekBody;
	}

	// === Dynamic Table Section ===
	const firstNames = ["Alice", "Bob", "Charlie", "David", "Eva", "Frank"];
	const lastNames = ["Smith", "Brown", "Johnson", "Lee", "Clark", "Davis"];
	const ages = [25, 30, 22, 27, 24, 29];

	const NROWS = firstNames.length;
	const NRCOLS = 3;

	let tableHTML = "<h2>People Info Table</h2><table border='1' cellpadding='5'><tr><th>First Name</th><th>Last Name</th><th>Age</th></tr>";

	for (let i = 0; i < NROWS; i++) {
		tableHTML += "<tr>";
		tableHTML += "<td>" + firstNames[i] + "</td>";
		tableHTML += "<td>" + lastNames[i] + "</td>";
		tableHTML += "<td>" + ages[i] + "</td>";
		tableHTML += "</tr>";
	}

	tableHTML += "</table>";

	document.body.innerHTML += tableHTML;
</script>

</body>
</html>
