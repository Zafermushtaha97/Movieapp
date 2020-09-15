<template>
  <div class="home" style="background:#081b27">
          <particles></particles>
           <Navbar></Navbar>
    <FeaturesMovie/>
  

  </div>
</template>

<script>
// @ is an alias to /src
import FeaturesMovie from '@/components/FeaturesMovie'

export default {
  name: 'Home',
  components: {
    FeaturesMovie,
    
  }
}
</script>
