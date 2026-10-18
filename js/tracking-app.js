// Vue.js App untuk halaman Tracking Delivery Order

var trackingApp = new Vue({
  el: '#app',

  data: function () {
    return {
      // Data dari dataBahanAjar.js
      upbjjList: [],
      pengirimanList: [],
      paket: [],

      // Tracking data
      tracking: {},
      nextDoNumber: 1,

      // Form state
      showAddForm: false,
      newDoForm: {
        nim: '',
        nama: '',
        ekspedisi: '',
        paketKode: '',
        tanggalKirim: '',
      },
    };
  },

  computed: {
    // Auto-generate nomor DO
    nextDoNumberFormatted: function () {
      var year = new Date().getFullYear();
      var sequence = String(this.nextDoNumber).padStart(3, '0');
      return 'DO' + year + '-' + sequence;
    },

    // Get selected paket details
    selectedPaketDetails: function () {
      if (!this.newDoForm.paketKode) return null;
      return this.paket.find(
        function (p) {
          return p.kode === this.newDoForm.paketKode;
        }.bind(this),
      );
    },

    // Convert tracking object to array
    processedTrackingOrders: function () {
      var result = [];
      for (var noDo in this.tracking) {
        if (this.tracking.hasOwnProperty(noDo)) {
          result.push(Object.assign({ nomoDo: noDo }, this.tracking[noDo]));
        }
      }
      return result;
    },
  },

  // SATU BLOK METHODS YANG MENGGABUNGKAN SEMUA FUNGSI
  methods: {
    // Initialize DO tracking number
    initDoTracking: function () {
      this.nextDoNumber = Object.keys(this.tracking).length + 1;
    },

    // Open add form
    openAddForm: function () {
      this.showAddForm = true;
      this.newDoForm = {
        nim: '',
        nama: '',
        ekspedisi: '',
        paketKode: '',
        tanggalKirim: this.getTodayDate(),
      };
    },

    // Get today's date
    getTodayDate: function () {
      var today = new Date();
      var yyyy = today.getFullYear();
      var mm = String(today.getMonth() + 1).padStart(2, '0');
      var dd = String(today.getDate()).padStart(2, '0');
      return yyyy + '-' + mm + '-' + dd;
    },

    // Add new DO
    addNewDo: function () {
      // Validasi
      if (
        !this.newDoForm.nim ||
        !this.newDoForm.nama ||
        !this.newDoForm.ekspedisi ||
        !this.newDoForm.paketKode
      ) {
        alert('Silakan isi semua field yang diperlukan!');
        return;
      }

      var paket = this.selectedPaketDetails;
      var noDoNew = this.nextDoNumberFormatted;

      // Create new DO
      var newDo = {};
      newDo[noDoNew] = {
        nim: this.newDoForm.nim,
        nama: this.newDoForm.nama,
        status: 'Pending',
        ekspedisi: this.newDoForm.ekspedisi,
        tanggalKirim: this.newDoForm.tanggalKirim,
        paket: this.newDoForm.paketKode,
        total: paket.harga,
        perjalanan: [],
      };

      // Add to tracking
      this.tracking = Object.assign({}, this.tracking, newDo);

      // Increment next number
      this.nextDoNumber++;

      // Reset form
      this.showAddForm = false;
      this.newDoForm = {};
      alert('DO ' + noDoNew + ' berhasil dibuat!');
    },

    // Format currency
    formatCurrency: function (value) {
      return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
      }).format(value);
    },
  },

  watch: {
    // Reset paket ketika ekspedisi berubah
    'newDoForm.ekspedisi': function (newVal) {
      if (!newVal) {
        this.newDoForm.paketKode = '';
      }
    },
  },

  mounted: function () {
    // Initialize data
    if (typeof app !== 'undefined') {
      this.upbjjList = app.upbjjList.slice();
      this.pengirimanList = app.pengirimanList.slice();
      this.paket = app.paket.slice();
      this.tracking = JSON.parse(JSON.stringify(app.tracking));
      this.initDoTracking();
    }
  },
});
