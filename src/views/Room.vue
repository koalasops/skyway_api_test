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
});
</script>

<template>
  <div>
    <h1 class="text-red-500 font-bold text-lg">Room</h1>
    <!-- <div class="room-content">
      <video id="their-video" width="200" autoplay playsinline></video>
      <video id="my-video" muted="true" width="500" autoplay playsinline></video>
      <p>
        Your Peer ID: <span id="my-id">{{ peerId }}</span>
      </p>
      <input v-model="calltoid" placeholder="call id" />
      <button @click="makeCall" class="button--green">Call</button>
      <br />

      マイク:
      <select v-model="selectedAudio" @change="onChange">
        <option disabled value="">Please select one</option>
        <option
          v-for="(audio, key, index) in audios"
          v-bind:key="index"
          :value="audio.value"
        >
          {{ audio.text }}
        </option>
      </select>

      カメラ:
      <select v-model="selectedVideo" @change="onChange">
        <option disabled value="">Please select one</option>
        <option
          v-for="(video, key, index) in videos"
          v-bind:key="index"
          :value="video.value"
        >
          {{ video.text }}
        </option>
      </select>
    </div> -->
  </div>
</template>
