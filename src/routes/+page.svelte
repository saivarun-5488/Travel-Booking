<script lang="ts">
</script>

<div class="hero">
  <div class="overlay"></div>  <!-- Dark overlay for readability -->
  
  <div class="content">
      <h1>Welcome to Your Travel Booking Site</h1>
      <p>Explore amazing destinations with our curated packages</p>
      <a href="/packages" class="btn">View Packages</a>
  </div>
</div>

<style>
.hero {
  position: relative;
  width: 100%;
  height: 100vh; 
  background: url('/images/homepage.jpg') no-repeat center center/cover;
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
}

.content {
  position: relative;
  z-index: 1;
  text-align: center;
  color: white;
  top: 50%;
  transform: translateY(-50%);
}

.btn {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background: #4CAF50;
  color: white;
  border-radius: 5px;
  text-decoration: none;
}

.btn:hover {
  background: #45a049;
}
</style>
