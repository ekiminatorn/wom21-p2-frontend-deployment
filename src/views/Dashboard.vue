<template>
    <div class="dashboard">
        <!-- Spinner -->
        <Spinner v-if="loading"></Spinner>
        <Spinner v-if="allDataLoaded < 3"></Spinner>

        <div class="dashboard-container">
            <img class="logo-image" src="../assets/rainmaker-black.png">

            <div class="dashboard-services-container">

            <b-modal v-model="modalShow" id="edit-modal" title="Edit order" @ok="handleEdit">

                <h5>Cabin</h5>
                {{selectedOrderCabin}}
                <h5>Choose service</h5>
                <b-form-select v-model="selectedOrderService" :options="serviceOptions" class="select-form"></b-form-select>
                <h5>Date</h5>
                <b-form-datepicker id="datepicker-modal" v-model="modalDate" class="mb-2"></b-form-datepicker>

            </b-modal>

                <div class="dashboard-cabins">
                    <h3>Order service</h3>
                    <h5>Select cabin</h5>

                    <b-form-select v-model="cabinSelected" :options="cabinOptions" class="select-form"></b-form-select>

                    <h5>Choose service</h5>
                    <b-form-select v-model="serviceSelected" :options="serviceOptions" class="select-form"></b-form-select>

                    <h5>Date</h5>
                    <b-form-datepicker id="datepicker" v-model="date" class="mb-2"></b-form-datepicker>

                    <b-button v-on:click="orderService()" variant="primary">Order service</b-button>
                </div>

                <div class="dashboard-services">
                    <h3>Ordered services</h3>

                    <b-table
                    :items="orderedServices"
                    :fields="orderedServicesfields"
                    select-mode="single"
                    responsive="sm"
                    ref="selectableTable"
                    selectable
                    @row-selected="onRowSelected"> </b-table>

                    <b-button v-on:click="editService()" variant="secondary" style="margin-right: 10px;">Edit</b-button>
                    <b-button v-on:click="deleteService()" variant="danger">Delete</b-button>
                </div>

            </div>


        </div>
    </div>
</template>

<script>
import axios from "axios";
import Spinner from "@/components/Spinner.vue";

export default {
  name: "Dashboard",
  components: {
    Spinner,
  },

  data: function () {
    return {
      loading: false,
      allDataLoaded: 0,
      modalShow: false,
      accessToken: null,

      cabinSelected: null,
      cabinOptions: [{ value: null, text: "Please select an cabin" }],

      serviceSelected: null,
      serviceOptions: [{ value: null, text: "Please select service" }],
      date: null,
      modalDate: null,

      orderedServicesfields: ["date", "service", "cabin"],
      orderedServices: [],
      orderedServiceSelected: [],

      selectedOrderCabin: null,
      selectedOrderId: null,
      selectedOrderService: null,
    };
  },

  mounted: function () {
    this.accessToken = localStorage.getItem("jwt");

    // GET owned cabins
    axios
      .get("https://makeitrain-p2.herokuapp.com/cabins", {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
        },
      })
      .then((res) => {
        this.allDataLoaded++;
        res.data.forEach((cabin) => {
          this.cabinOptions.push({
            value: cabin.address,
            text:
              cabin.address +
              " - Sauna: " +
              cabin.sauna +
              " - Beach: " +
              cabin.beach,
          });
        });
      })
      .catch((error) => {
        console.log(error);
      });

    // GET services

    axios.get("https://makeitrain-p2.herokuapp.com/services").then((res) => {
      this.allDataLoaded++;
      res.data.forEach((service) => {
        this.serviceOptions.push({
          value: service.service_type,
          text: service.service_type + " - " + service.price + "$",
        });
      });
    });

    // GET Orders
    this.refreshOrders();
  },

  methods: {
    onRowSelected: function (item, event) {
      this.orderedServiceSelected = item;
      this.selectedOrderCabin = item[0].cabin;
      this.selectedOrderId = item[0].orderId;
      this.selectedOrderService = item[0].service;
      this.modalDate = item[0].date;
      console.log(event);
    },

    refreshOrders: function () {
      axios.get("https://makeitrain-p2.herokuapp.com/orders").then((res) => {
        this.allDataLoaded++;
        this.loading = false;
        this.orderedServices = [];
        res.data.forEach((order) => {
          this.orderedServices.push({
            orderId: order.id,
            date: order.date,
            service: order.service,
            cabin: order.cabin,
          });
        });
      });
    },

    orderService: function () {
      this.loading = true;

      axios
        .post("https://makeitrain-p2.herokuapp.com/orders", {
          cabin: this.cabinSelected,
          service: this.serviceSelected,
          date: this.date,
        })
        .then((res) => {
          this.refreshOrders();
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
          this.loading = false;
        });
    },

    editService: function () {
      this.modalShow = true;
    },

    handleEdit: function () {
        this.loading = true;

        axios
        .put("https://makeitrain-p2.herokuapp.com/orders/" + this.selectedOrderId, {
            service: this.selectedOrderService,
            date: this.modalDate
        })
        .then((res) => {
            console.log(res.data);
            this.refreshOrders();
        })
        .catch((error) => {
            this.loading = false;
            console.log(error);
        })
    },

    deleteService: function () {
      this.loading = true;
      axios
        .delete(
          "https://makeitrain-p2.herokuapp.com/orders/" +
            this.orderedServiceSelected[0].orderId
        )
        .then((res) => {
          console.log(res.data);
          this.refreshOrders();
        })
        .catch((error) => {
          console.log(error);
          this.loading = false;
        });
    },
  },
};
</script>


<style scoped>
.dashboard {
  height: 100vh;
  width: 100%;
}

.logo-image {
  width: 300px;
}

.dashboard-container {
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.dashboard-services-container {
  min-height: 100%;
  min-width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.dashboard-cabins {
  width: 30%;
  background-color: #fff6d2;
  padding: 20px;
  border-radius: 15px;
  margin: 10px;
}

.dashboard-services {
  width: 30%;
  background-color: #fff6d2;
  padding: 20px;
  border-radius: 15px;
  margin: 10px;
}

.select-form {
  width: 100%;
}
</style>