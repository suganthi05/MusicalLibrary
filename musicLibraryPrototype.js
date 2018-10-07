const Library = function(name,creator,playlist){
	this.libraryName = libraryName
	this.creator = creator
	this.playlists = playlists[];
}

const Playlist = function(name,tracks){
	this.playlistName = playlistName;
	this.tracks = tracks[];
}

const Track = function (title,rating,length){
	this.trackTitle = trackTitle;
	this.trackRating = trackRating;
	this.trackLength = trackLength;
}

Library.prototype.addPlaylist = function(playlistNames){
  this.playlists.push(playlistNames);
  console.log(`Music Library ${this.libraryName} : Playlists: ${this.playlists}`);

};

Playlist.prototype.addTrack = function(trackNames){
	this.tracks.push(trackNames);
	console.log(`Track ${this.playlistName} : Tracks: ${this.tracks}`);
};
playlist.prototype.overallRating = function() {
  let ratings = this.tracks.map((track) => {
    return track.rating;
  });
  let sumRatings = ratings.reduce((prev, curr) => {
    return prev + curr;
  }, 0);
  let avgRating = sumRatings/ratings.length;
  avgRating = Math.round(avgRating * 100) / 100;
  return avgRating;
}

playlist.prototype.totalDuration = function() {
  let durations = this.tracks.map((track) => {
    return track.length;
  });
  let totalDuration = durations.reduce((prev, curr) => {
    return prev + curr;
  }, 0);
  return totalDuration;
}

/*Playlist.prototype.overallRating = function(trackRatings){
	this.trackRating.push(trackRating);
	console.log(`Overall rating)
}*/