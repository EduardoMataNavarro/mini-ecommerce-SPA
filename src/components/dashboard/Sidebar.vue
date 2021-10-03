<template>
  <div class="min-h-screen h-full bg-white xs:w-1/3 lg:w-80 shadow-md">
    <div class="flex items-center justify-center mt-10">
        <h4 class="text-center font-thin">{{ this.$store.user?.name ?? 'Placeholder name' }}</h4>
    </div>
    <nav class="mt-10">
        <router-link to="/admin/product">
            <div class="flex items-center py-2 px-8 text-gray-700 border-white border-r-2 hover:text-gray-600 hover:bg-gray-100 hover:border-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                </svg>
                <span class="mx-4 text-medium">
                    Products
                </span>
            </div>
        </router-link>
        <router-link to="/admin/productcategory" >
            <div class="flex items-center py-2 px-8 text-gray-700 border-white border-r-2 hover:text-gray-600 hover:bg-gray-100 hover:border-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                    <path fill-rule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clip-rule="evenodd" />
                </svg>
                <span class="mx-4 text-medium">
                    Product categories
                </span>
            </div>
        </router-link>
        <router-link to="/admin/shipmentmethod">
            <div class="flex items-center py-2 px-8 text-gray-700 border-white border-r-2 hover:text-gray-600 hover:bg-gray-100 hover:border-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                </svg>
                <span class="mx-4 text-medium">
                    Shipment methods
                </span>
            </div>
        </router-link>
        <router-link to="/admin/paymentmethod">
            <div class="flex items-center py-2 px-8 text-gray-700 border-white border-r-2 hover:text-gray-600 hover:bg-gray-100 hover:border-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                <span class="mx-4 text-medium">
                    Payment methods
                </span>
            </div>
        </router-link>
    </nav>
  </div>
</template>

<script>
export default {
    data: () => ({
        isMinimized: false
    }),
    methods: {
        toggle() {
            this.isMinimized = !this.isMinimized;
        }
    }
}
</script>

<style>

</style>