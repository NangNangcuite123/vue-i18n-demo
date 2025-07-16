<template>
  <main>
    <section class="mt-5">
        <div class="container">
            <div class="row">
                <div class="col-3">
                    <div class="card">
                        <img src="https://www.skyweaver.net/images/media/wallpapers/wallpaper1.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Wall Paper</h5>
                            <p class="card-text">Paper that is pasted in vertical strips over the walls of a room to provide a decorative surface.</p>
                            <a href="#" class="btn">See More</a>
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="card">
                        <img src="https://www.skyweaver.net/images/media/wallpapers/wallpaper1.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Wall Paper</h5>
                            <p class="card-text">Paper that is pasted in vertical strips over the walls of a room to provide a decorative surface.</p>
                            <a href="#" class="btn">See More</a>
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="card">
                        <img src="https://www.skyweaver.net/images/media/wallpapers/wallpaper1.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Wall Paper</h5>
                            <p class="card-text">Paper that is pasted in vertical strips over the walls of a room to provide a decorative surface.</p>
                            <a href="#" class="btn">See More</a>
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="card">
                        <img src="https://www.skyweaver.net/images/media/wallpapers/wallpaper1.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Wall Paper</h5>
                            <p class="card-text">Paper that is pasted in vertical strips over the walls of a room to provide a decorative surface.</p>
                            <a href="#" class="btn">See More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <section class="mt-5">
        <div class="container">
            <form  @submit.prevent="addPeople">
                <label for="fname">First Name</label>
                <br>
                <input type="text" v-model="fname" placeholder="Fist Name">
                <label for="" class="text-danger mt-1" v-if="fnameerr">{{ fnameerr }}</label>
                <br>
                <label for="">Last Name</label>
                <br>
                <input type="text" v-model="lname" placeholder="Last Name">
                <label for="" class="text-danger mt-1" v-if="lnameerr">{{ lnameerr }}</label>
                <br>
                <label for="gmail">Gmail</label>
                <br>
                <input type="Gmail" v-model="gmail" placeholder="Gmail">
                <label for="" class="text-danger mt-1" v-if="gmailerr">{{ gmailerr }}</label>
                <br>
                <label for="number">Phone Number</label>
                <br>
                <input type="cell" v-model="phone"  placeholder="Number">
                <label for="" class="text-danger mt-1" v-if="phoneerr">{{ phoneerr }}</label>
                <br><br>
                <button class="btn btn-danger py-2 px-3" type="submit">
                    Add to table
                </button>
            </form>
            <table class="table table-bordered border-dark mt-5">
            <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Gmail</th>
                    <th>Ph Number</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(person,index) in people" :key="index">
                    <th>{{ index + 1 }}</th>
                    <td>{{ person.firstname }}</td>
                    <td>{{ person.lastname }}</td>
                    <td>{{ person.Gmail }}</td>
                    <td>{{ person.phonenumber }}</td>
                </tr>
            </tbody>
        </table>
        </div>
    </section>
  </main>
</template>

<script setup>
    import { ref } from 'vue';

    const fname = ref ('');
    const lname = ref ('');
    const gmail = ref ('');
    const phone = ref ('');
    const fnameerr = ref ('');
    const lnameerr = ref ('');
    const gmailerr = ref ('');
    const phoneerr = ref ('');


    const people = ref([]);

    function addPeople(){
         if(fname.value && lname.value && gmail.value && phone.value){
            people.value.push({
                firstname: fname.value,
                lastname: lname.value,
                Gmail: gmail.value,
                phonenumber: phone.value
            })
                fname.value = ''
                lname.value = ''
                gmail.value = ''
                phone.value = ''
    }

    // fnameerr.value = ''
    // lnameerr.value = ''
    // gmailerr.value = ''
    // phoneerr.value = ''
    //     if(!fname.value && !lname.value && !gmail.value){
    //         fnameerr.value = "Please Input First Name."
    //         lnameerr.value = "Please Input Last Name."
    //         gmailerr.value = "Please Input Gmail."
    //     }
    //     if(phone.value.length < 12 ){
    //         phoneerr.value = "Number must be least 11 number"
    //     }
}
    
</script>

<style scoped>
    .card-img-top{
        height: 200px;
    }
    h1{
        color: red;
    }
    .btn{
        background-color: brown !important;
        color: white !important;
    }
</style>