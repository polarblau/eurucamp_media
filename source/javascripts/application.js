//= require 'vendor/jquery-1.10.2.min'
//= require 'vendor/mediaelement-and-player'

$('video').mediaelementplayer({
  pluginPath: '/plugins/',
  iPadUseNativeControls: true,
  iPhoneUseNativeControls: true,
  AndroidUseNativeControls: true,
  success: function(media, node, player) {
    console.log("Video::success");
  }
});
