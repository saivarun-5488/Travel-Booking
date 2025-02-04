<script lang="ts">
    import '../app.css';
  </script>
  
  <div class="min-h-screen bg-gray-50">
    <header class="bg-white shadow-sm">
      <nav class="max-w-7xl mx-auto px-4 py-4">
        <div class="flex justify-between items-center">
          <a href="/" class="text-2xl font-bold text-primary">TravelBook</a>
        </div>
        <div class="flex gap-4">
          <a href="/home" class="text-gray-600 hover:text-primary">Home</a>
          <a href="/about" class="text-gray-600 hover:text-primary">About</a>
          <a href="/contact" class="text-gray-600 hover:text-primary">Contact</a>
        </div>
      </nav>
    </header>
  
    <main class="max-w-7xl mx-auto px-4 py-8">
      <slot />
    </main>
  
    <footer class="bg-gray-800 text-white">
      <div class="max-w-7xl mx-auto px-4 py-8">
        <p class="text-center">© 2025 TravelBook. All rights reserved.</p>
      </div>
    </footer>
  </div>