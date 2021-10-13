<template>
    <div class="login">

        <!-- Spinner -->
        <Spinner v-if="loading"></Spinner>

        <div class="login-container">
            <img class="logo-image" src="../assets/rainmaker-black.png">
            <b-form class="login-box">
                <b-form-group label="Email">
                <b-form-input v-model=email placeholder="Email"></b-form-input>
                </b-form-group>

                <b-form-group label="Password">
                <b-form-input v-model="password" type="password" placeholder="Password"></b-form-input>
                </b-form-group>

                <b-form-group label="Firstname">
                <b-form-input v-model=firstname placeholder="First name"></b-form-input>
                </b-form-group>

                <b-form-group label="Lastname">
                <b-form-input v-model="lastname" placeholder="Last name"></b-form-input>
                </b-form-group>

                <b-button v-on:click="register" variant="primary">Register</b-button>
            </b-form> 

        </div>
    </div>
</template>

<script>
import axios from "axios";
import Spinner from "@/components/Spinner.vue";


export default {
    name: "Login",
    components: {
        Spinner,
    },
    
    data: function () {
        return {
        email: null,
        password: null,
        firstname: null,
        lastname: null,
        loading: false
        }
    },

    methods: {
        login: function () {

            this.loading = true; // Turn on loading spinner

            axios
            .post('https://rm-api-1.azurewebsites.net/users/login/', {
                email: this.email,
                password: this.password,
            })
            .then((response) => {

                if(response.data.accessToken) {
                    localStorage.setItem('jwt', response.data.accessToken)
                    this.loading = false;
                }

                this.loading = false;

            })
            .catch((error) => {
                console.log(error);
                this.loading = false;
                alert(error);
            })
            
        },
        register: function () {

            this.loading = true;

            axios
            .post('https://rm-api-1.azurewebsites.net/users/', {
                email: this.email,
                password: this.password,
                firstname: this.firstname,
                lastname: this.lastname
            })
            .then((response) => {
                console.log(response);
                this.$router.push("/");
            })
            .catch((error) => {
                console.log(error);
            });

        }
    }
    
}
</script>


<style scoped>

.logo-image {
    width: 300px;
}

.login-box {
    width: 30%;
    background-color: #FFF6D2;
    padding: 20px;
    border-radius: 15px;
}

.login-container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.login {
    height: 100vh;
    width: 100%;

}

</style>