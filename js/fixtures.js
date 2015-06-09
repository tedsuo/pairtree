// fixtures
function newRandomTimeline(timeline_length){
  var pivots = newExamplePivots()
  var tracks = newExampleTracks()
  var dailies = []
  var date = new Date(Date.now())

  date.setDate(-1*timeline_length)

  for (var i=0; i < timeline_length; i++) {
    dailies.push(newRandomDaily(date,pivots,tracks))
    date.setDate(date.getDate()+1)
  }

  return new Timeline(dailies)
}

function newExamplePivots(){
  return [
    new Pivot("tedsuo"),
    new Pivot("mariash"),
    new Pivot("thausler786"),
    new Pivot("pivotal-nader-ziada"),
    new Pivot("aaronshurley"),
    new Pivot("tylerschultz")
  ];
}

function newExampleTracks(){
  var bosh_core_tracker_id = 123;
  var bosh_cpi_tracker_id = 123;
  return [
    new Track("Director v3",bosh_core_tracker_id,["global-networking"]),
    new Track("Agent Clojure rewrite"),
    new Track("External CPI",bosh_cpi_tracker_id,["centos","ubuntu","vsphere"])
  ];
}

function newRandomDaily(date,pivots,tracks){
  var p = 0, t = 0, assignments = [];
  pivots.sort(randomCompare)
  while (p < pivots.length) {
    assignments.push(new Assignment(tracks[t],[pivots[p],pivots[p+1]]))
    p = p + 2
    t++
  }
  return new Daily(date,assignments)
}

function randomCompare(){
  var toss = Math.random()
  if (toss < 0.33) {
    return -1
  } else if (toss < 0.66) {
    return 0
  } else {
    return 1
  }
}
