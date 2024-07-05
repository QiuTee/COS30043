<template>
  <div>
    <base-card>
      <div class="d-flex justify-content-center mb-3">
        <base-button
          @click="setSelectTab('stored-resource')"
          :model="setStoredResourceButton"
        >
          Booking History
        </base-button>
        <base-button
          @click="setSelectTab('add-resource')"
          :model="setAddResourceButton"
        >
          Booking Form
        </base-button>
      </div>
    </base-card>
    <keep-alive>
      <component :is="selectTab"></component>
    </keep-alive>
  </div>
</template>

<script>
import StoredResource from "./StoredResource.vue";
import AddResource from "./AddResource.vue";

export default {
  components: {
    StoredResource,
    AddResource,
  },
  data() {
    return {
      selectTab: "stored-resource",
      storedResource: [
        {
          id: "name1",
          name: "QuocThang",
          email: "nqt8977@gmail.com",
          phone: "0983427576",
          date: "2024-07-31",
          time: "23:30",
          number: "2",
        },
        {
          id: "name2",
          name: "NhatNam",
          email: "nam123@gmail.com",
          phone: "0982331105",
          date: "2024-10-25",
          time: "23:30",
          number: "3",
        },
        {
          id: "name3",
          name: "TrucVy",
          email: "trucvy@gmail.com",
          phone: "09330110205",
          date: "2024-07-20",
          time: "20:30",
          number: "2",
        },
      ],
    };
  },
  provide() {
    return {
      resources: this.storedResource,
      addResource: this.addResource,
      removeResource: this.removeResource,
    };
  },
  methods: {
    setSelectTab(cmp) {
      this.selectTab = cmp;
    },
    addResource(id, name, email, phone, date, time, number) {
      const newResource = {
        id: id,
        name: name,
        email: email,
        phone: phone,
        date: date,
        time: time,
        number: number,
      };
      this.storedResource.unshift(newResource);
    },
    removeResource(resId) {
      const resIndex = this.storedResource.findIndex((res) => res.id === resId);
      this.storedResource.splice(resIndex, 1);
    },
  },

  computed: {
    setStoredResourceButton() {
      return this.selectTab === "stored-resource" ? null : "flat";
    },
    setAddResourceButton() {
      return this.selectTab === "add-resource" ? null : "flat";
    },
  },
};
</script>

<style scoped>
.d-flex.justify-content-center {
  justify-content: center;
}

.mb-3 {
  margin-bottom: 1rem;
}
</style>
