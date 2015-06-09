// data
function Pivot(github_handle){
  return {github_handle};
}

function Track(name, tracker_id, labels){
  return {name, tracker_id, labels}
}

function Assignment(track, pivots){
  return {track, pivots}
}

function Daily(date, assignments){
  return {date, assignments}
}

function Timeline(dailies){
  return {dailies}
}
