<script setup>
const appId = process.env.VUE_APP_SKYWAY_APP_ID;
const secret = process.env.VUE_APP_SKYWAY_SECRET;
import {
  nowInSec,
  SkyWayAuthToken,
  SkyWayContext,
  SkyWayRoom,
  SkyWayStreamFactory,
  uuidV4,
} from "@skyway-sdk/room";
import { ref, onMounted } from "vue";

const audios = ref([]);
const videos = ref([]);

const selectedAudio = ref();
const selectedVideo = ref();
const vidoeStream = ref();
onMounted(async () => {
  const deviceInfos = await navigator.mediaDevices.enumerateDevices();
  //   Get Audio Device Information
  deviceInfos
    .filter((f) => f.kind == "audioinput")
    .map((audio) =>
      audios.value.push({
        text: audio.label || `Microphone ${audios.value.length + 1}`,
        value: audio.deviceId,
      })
    );
  // Get Camera Device Information
  deviceInfos
    .filter((f) => f.kind === "videoinput")
    .map((video) =>
      videos.value.push({
        text: video.label || `Camera ${videos.value.length - 1}`,
        value: video.deviceId,
      })
    );
  console.log("audio Info", audios.value);
  console.log("camera Info", videos.value);
  try {
    const video = document.getElementById("#video");
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });
    video.srcObject = vidoeStream;
    console.log("detect the camera");
  } catch (e) {
    console.log("not found");
  }
});
</script>

<template>
  <div>
    <h1 class="text-red-500 font-bold text-lg">Room</h1>
    <div class="w-96 h-77">
      <video id="video"></video>
    </div>
  </div>
</template>
