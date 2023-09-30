<template>
  <div>
    <div class="hidden lg:block fixed lg:max-w-[295px] w-full overflow-y-auto h-full bg-white z-[999]" id="sidebarHRIS">
        <div class="px-6 py-[50px] gap-y-[50px] flex flex-col">
            <div class="flex items-center justify-between">
                <a href="#" class="flex justify-center">
                    <img src="/assets/svgs/logo-type.svg" alt="">
                </a>
                <a href="#" id="toggleCloseSidebar" class="lg:hidden">
                    <svg class="w-6 h-6 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
                        </path>
                    </svg>
                </a>
            </div>
            <div class="flex flex-col gap-4">
                <div class="text-sm text-grey">Daily Use</div>
                <a href="index.html" class="nav-link active">
                    <img src="/assets/svgs/ic-grid.svg" alt="">
                    Overview
                </a>
                <a href="employees.html" class="nav-link">
                    <img src="/assets/svgs/ic-users.svg" alt="">
                    Employees
                </a>
                <a href="my_teams.html" class="nav-link">
                    <img src="/assets/svgs/ic-briefcase.svg" alt="">
                    My Teams
                </a>
                <a href="roles.html" class="nav-link">
                    <img src="/assets/svgs/ic-flag.svg" alt="">
                    Roles
                </a>
            </div>
            <div class="flex flex-col gap-4">
                <div class="text-sm text-grey">Others</div>
                <a href="#" class="nav-link">
                    <img src="/assets/svgs/ic-box.svg" alt="">
                    Insurances
                </a>
                <a href="#" class="nav-link">
                    <img src="/assets/svgs/ic-home.svg" alt="">
                    Company
                </a>
                <a href="#" class="nav-link">
                    <img src="/assets/svgs/ic-gift.svg" alt="">
                    Rewards
                </a>
                <a href="#" class="nav-link">
                    <img src="/assets/svgs/ic-settings.svg" alt="">
                    Settings
                </a>
                <a href="#" class="nav-link">
                    <img src="/assets/svgs/ic-signout.svg" alt="">
                    Logout
                </a>
            </div>
        </div>
    </div>
    <!-- Main Content -->
    <div class="lg:pr-[70px] py-[50px] lg:ml-[320px] xl:ml-[365px] px-4 lg:pl-0">

        <!-- Top Section -->
        <section class="flex flex-col flex-wrap justify-between gap-6 md:items-center md:flex-row">
            <div class="flex items-center justify-between gap-4">
                <a href="#" id="toggleOpenSidebar" class="lg:hidden">
                    <svg class="w-6 h-6 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h7">
                        </path>
                    </svg>
                </a>
                <div class="text-[32px] font-semibold text-dark">
                    Overview
                </div>
            </div>
            <div class="flex items-center gap-4">
                <form class="shrink md:w-[516px] w-full">
                    <input type="text" name="" id="" class="input-field !outline-none !border-none italic form-icon-search ring-indigo-200
                        focus:ring-2 transition-all duration-300 w-full" placeholder="Search people, team, project">
                </form>
                <a href="#"
                    class="flex-none w-[46px] h-[46px] bg-white rounded-full p-[11px] relative notification-dot">
                    <img src="/assets/svgs/ic-bell.svg" alt="">
                </a>
            </div>
        </section>

        <section class="pt-[50px]">
            <!-- Section Header -->
            <div class="mb-[30px]">
                <div class="flex items-center justify-between gap-6">
                    <div>
                        <div class="text-xl font-medium text-dark">
                            Statistics
                        </div>
                        <p class="text-grey">Your business growth</p>
                    </div>
                </div>
            </div>

            <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-11">
                <div class="card !gap-y-10 min-h-[200px]">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-grey">Employees</p>
                            <div class="text-[32px] font-bold text-dark mt-[6px]">
                                0
                            </div>
                        </div>
                        <a href="employee_create.html">
                            <img src="/assets/svgs/ric-plus.svg" alt="">
                        </a>
                    </div>
                </div>
                <div class="card !gap-y-10 min-h-[200px]">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-grey">Teams</p>
                            <div class="text-[32px] font-bold text-dark mt-[6px]">
                                0
                            </div>
                        </div>
                        <a href="#">
                            <img src="/assets/svgs/ric-plus.svg" alt="">
                        </a>
                    </div>
                </div>
                <div class="card !gap-y-10 min-h-[200px]">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-grey">Projects</p>
                            <div class="text-[32px] font-bold text-dark mt-[6px]">
                                0
                            </div>
                        </div>
                        <a href="#">
                            <img src="/assets/svgs/ric-plus.svg" alt="">
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <section class="pt-[50px]">
            <div class="grid md:grid-cols-2 gap-11">
                <!-- Documents -->
                <div>
                    <!-- Section Header -->
                    <div class="mb-[30px]">
                        <div class="flex items-center justify-between gap-6">
                            <div>
                                <div class="text-xl font-medium text-dark">
                                    Documents
                                </div>
                                <p class="text-grey">Standard procedure</p>
                            </div>
                        </div>
                    </div>
                    <div class="card md:min-h-[468px]">
                        <div class="m-auto text-center">
                            <div class="text-xl font-bold text-dark">
                                No Documents
                            </div>
                            <p class="text-grey mt-5 mb-[30px]">
                                Add guidance or design style for <br>
                                your employees in company
                            </p>
                            <button type="button" class="btn btn-primary">
                                Upload File
                            </button>
                        </div>
                    </div>
                </div>

                <!-- History -->
                <div>
                    <!-- Section Header -->
                    <div class="mb-[30px]">
                        <div class="flex items-center justify-between gap-6">
                            <div>
                                <div class="text-xl font-medium text-dark">
                                    History
                                </div>
                                <p class="text-grey">Track the flow</p>
                            </div>
                        </div>
                    </div>
                    <div class="card min-h-[468px]">
                        <div class="m-auto text-center">
                            <div class="text-xl font-bold text-dark">
                                No History
                            </div>
                            <p class="text-grey mt-5 mb-[30px]">
                                Information of employees added <br>
                                and promoting shown here
                            </p>
                            <button type="button" class="btn btn-primary">
                                Upload File
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
}
</script>
