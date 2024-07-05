<template>
  <div
    class="home-container"
    :style="{
      backgroundImage: `url(${require('@/assets/bookingbackground.png')})`,
    }"
  >
    <div class="overlay">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 text-center text-white mb-5">
            <h1 class="text-danger booking">
              <i class="fa fa-utensils"></i> Booking
            </h1>
          </div>
          <div class="col-md-8 col-lg-6">
            <div class="card booking-reminder">
              <div class="card-body text-center">
                <h2 class="card-title">Booking Reminder</h2>
                <p class="card-text">
                  Our system will automatically send you a booking reminder 24
                  hours before your scheduled dining time to ensure you don't
                  miss your reservation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style scoped>
.home-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-size: cover;
  background-position: center;
  position: relative;
}

.overlay {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.booking {
  font-size: 2rem;
  font-weight: bold;
}

.booking-reminder {
  border-radius: 10px;
}

.booking-reminder .card-title {
  font-family: "Cursive", sans-serif;
  color: #d64a9f;
}

.reminder-info i {
  margin-right: 10px;
}

.text-white a {
  color: #d64a9f;
}
</style>
