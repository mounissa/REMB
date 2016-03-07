 $(document).ready(function() {
			
			$('#calendar').fullCalendar({
				lang:'fr',
				header: {
					left: 'title',
					center:'',
					right: ' prev,today,next'
				},
				
				defaultDate: '2016-01-12',
				editable: true,
				eventLimit: true, // allow "more" link when too many events
				events: [
					{
						title: 'All Day Event',
						start: '2016-01-01'
					},
					{
						title: 'Long Event',
						start: '2016-01-07',
						end: '2016-01-10'
					},
					{
						title: 'Click for Google',
						url: 'http://google.com/',
						start: '2016-01-28'
					}
				]
			});
			
});