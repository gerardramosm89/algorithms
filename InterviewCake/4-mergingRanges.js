var times = [
    {startTime: 0,  endTime: 1},
    {startTime: 3,  endTime: 5},
    {startTime: 4,  endTime: 8},
    {startTime: 10, endTime: 12},
    {startTime: 9,  endTime: 10},
];

// Sort the array, this will be the easiest way to approach it
times.sort(function(a,b) {
  return a.startTime - b.startTime;
});

var mergedMeetings = [times[0]];

for (var i = 0; i < times.length; i++) {
  var currentMeeting = times[i];
  var lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];
  if (currentMeeting.startTime <= lastMergedMeeting.endTime) {
    lastMergedMeeting.endTime = Math.max(lastMergedMeeting.endTime, currentMeeting.endTime);
  } else {
    mergedMeetings.push(currentMeeting);
  }
}
console.log('final mergedMeetings is: ', mergedMeetings);