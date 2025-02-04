<script lang="ts">
  console.log("Home Page Loaded");
</script>

<div class="hero">
  <div class="overlay"></div>  <!-- Optional dark overlay -->
  
  <div class="content">
      <h1>Welcome to Online Booking</h1>
      <p>Book your dream vacation today!</p>
  </div>
</div>

<style>
.hero {
  width: 100%;
  height: 100vh;
  background: url('/images/home.jpg') no-repeat center center/cover;
  position: relative;
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5); /* Dark overlay */
}

.content {
  position: relative;
  z-index: 1;
  color: white;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
}
</style>
