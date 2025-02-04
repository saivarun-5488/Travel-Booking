<script>
    let message = "Welcome to the Contact Page";
    let message2 = "Address:11-14-494, Lb nagar Hyderabad";
    let message3 = "Contact: +91 9876543210";
</script>

<div class="contact-container">
    <div class="overlay"></div> 
    <div class="content">
        <h1>{message}</h1>
        <h3>{message2}</h3>
        <h3>{message3}</h3>
    </div>
</div>

<style>
.contact-container {
    width: 100%;
    height: 100vh;
    background: url('/images/homepage3.jpg') no-repeat center center/cover;
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
