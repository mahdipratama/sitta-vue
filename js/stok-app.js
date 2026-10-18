// Vue.js App untuk halaman Stok Bahan Ajar
// Mengikuti struktur standar Vue instance

var stokApp = new Vue({
  // 1. ELEMENT MOUNTING
  el: '#app',

  // 2. REACTIVE STATE (DATA PROPERTIES)
  data: function () {
    return {
      // Data dari dataBahanAjar.js
      upbjjList: [],
      kategoriList: [],
      paket: [],
      stok: [],

      // Filter State
      filters: {
        selectedUpbjj: null,
        selectedKategori: null,
        showLowStock: false,
      },

      // Sort State
      sortBy: 'judul',
      sortOrder: 'asc',

      // Form State
      showAddForm: false,
      showEditForm: false,
      editingId: null,
      newItemForm: {
        kode: '',
        judul: '',
        kategori: '',
        upbjj: '',
        lokasiRak: '',
        harga: 0,
        qty: 0,
        safety: 0,
        catatanHTML: '',
      },
      editForm: {},
    };
  },

  // 3. COMPUTED PROPERTIES (Efficient derived state)
  computed: {
    // Get kategori yang sesuai dengan upbjj terpilih
    filteredKategori: function () {
      if (!this.filters.selectedUpbjj) return [];

      var uniqueKategori = {};
      this.stok.forEach(
        function (item) {
          if (item.upbjj === this.filters.selectedUpbjj) {
            uniqueKategori[item.kategori] = true;
          }
        }.bind(this),
      );

      return Object.keys(uniqueKategori);
    },

    // Main filtered & sorted data
    processedStok: function () {
      var result = this.stok.slice(); // Copy array

      // Filter by UT-Daerah
      if (this.filters.selectedUpbjj) {
        result = result.filter(
          function (item) {
            return item.upbjj === this.filters.selectedUpbjj;
          }.bind(this),
        );
      }

      // Filter by Kategori (only if upbjj selected)
      if (this.filters.selectedKategori) {
        result = result.filter(
          function (item) {
            return item.kategori === this.filters.selectedKategori;
          }.bind(this),
        );
      }

      // Filter low stock (qty < safety OR qty = 0)
      if (this.filters.showLowStock) {
        result = result.filter(function (item) {
          return item.qty < item.safety || item.qty === 0;
        });
      }

      // Sorting
      result.sort(
        function (a, b) {
          var aValue, bValue;

          if (this.sortBy === 'judul') {
            aValue = a.judul.toLowerCase();
            bValue = b.judul.toLowerCase();
          } else if (this.sortBy === 'qty') {
            aValue = a.qty;
            bValue = b.qty;
          } else if (this.sortBy === 'harga') {
            aValue = a.harga;
            bValue = b.harga;
          }

          if (aValue < bValue) {
            return this.sortOrder === 'asc' ? -1 : 1;
          }
          if (aValue > bValue) {
            return this.sortOrder === 'asc' ? 1 : -1;
          }
          return 0;
        }.bind(this),
      );

      return result;
    },
  },

  // 4. METHODS (Event handlers & functions)
  methods: {
    // Reset all filters
    resetFilters: function () {
      this.filters.selectedUpbjj = null;
      this.filters.selectedKategori = null;
      this.filters.showLowStock = false;
      this.sortBy = 'judul';
      this.sortOrder = 'asc';
    },

    // Open add form
    openAddForm: function () {
      this.showAddForm = true;
      this.newItemForm = {
        kode: '',
        judul: '',
        kategori: '',
        upbjj: '',
        lokasiRak: '',
        harga: 0,
        qty: 0,
        safety: 0,
        catatanHTML: '',
      };
    },

    // Add new item
    addNewItem: function () {
      // Validasi simple
      if (
        !this.newItemForm.kode ||
        !this.newItemForm.judul ||
        !this.newItemForm.upbjj
      ) {
        alert('Silakan isi Kode, Judul, dan UT-Daerah!');
        return;
      }

      // Add to array
      this.stok.push(Object.assign({}, this.newItemForm));

      // Reset form
      this.showAddForm = false;
      this.newItemForm = {};
      alert('Data bahan ajar berhasil ditambahkan!');
    },

    // Open edit form
    openEditForm: function (item) {
      this.editingId = item.kode;
      this.editForm = Object.assign({}, item);
      this.showEditForm = true;
    },

    // Save edited item
    saveEditItem: function () {
      var index = this.stok.findIndex(
        function (item) {
          return item.kode === this.editingId;
        }.bind(this),
      );

      if (index !== -1) {
        this.stok.splice(index, 1, Object.assign({}, this.editForm));
      }

      this.showEditForm = false;
      this.editForm = {};
      alert('Data berhasil diperbarui!');
    },

    // Close edit form
    closeEditForm: function () {
      this.showEditForm = false;
      this.editForm = {};
    },

    // Get stock status
    getStockStatus: function (item) {
      if (item.qty === 0) {
        return { status: 'Kosong', class: 'status-danger', icon: '🔴' };
      } else if (item.qty < item.safety) {
        return { status: 'Menipis', class: 'status-warning', icon: '⚠️' };
      } else {
        return { status: 'Aman', class: 'status-safe', icon: '✅' };
      }
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

  // 5. WATCHERS (Observe data changes)
  watch: {
    // Reset kategori ketika upbjj berubah
    'filters.selectedUpbjj': function (newVal) {
      this.filters.selectedKategori = null;
    },
  },

  // 6. LIFECYCLE HOOKS
  mounted: function () {
    // Initialize data dari dataBahanAjar.js (global dummyData variable)
    if (typeof app !== 'undefined') {
      this.upbjjList = app.upbjjList.slice();
      this.kategoriList = app.kategoriList.slice();
      this.paket = app.paket.slice();
      // Deep copy stok array untuk avoid mutation
      this.stok = JSON.parse(JSON.stringify(app.stok));
    }
  },
});
